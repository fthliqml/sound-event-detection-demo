import os
import argparse
import numpy as np
import cv2
from pytorch.inference import sound_event_detection
import subprocess

def main(args):
    if not os.path.exists(args.audio_path):
      print(f"[INFO] Audio file tidak ditemukan. Mengekstrak dari video: {args.video_path}")
      extract_audio_from_video(args.video_path, args.audio_path, args.sample_rate)
      
    # Sound event detection
    (framewise_output, labels) = sound_event_detection(args)
    """framewise_output: (frames_num, classes_num)"""
    
    # Add detected results text to video
    add_text_to_video(framewise_output, labels, args.video_path, args.out_video_path)
    
    # Gabungkan kembali audio asli ke video hasil anotasi
    final_output_path = args.out_video_path.replace('.mp4', '_with_audio.mp4')
    combine_video_audio(args.out_video_path, args.audio_path, final_output_path)
    print(f"[INFO] Final video with audio saved to {final_output_path}")


def extract_audio_from_video(video_path, output_audio_path, sample_rate=16000):
    """Ekstrak audio dari video ke file WAV mono 16-bit."""
    command = [
        'ffmpeg',
        '-i', video_path,
        '-vn',
        '-acodec', 'pcm_s16le',
        '-ar', str(sample_rate),
        '-ac', '1',
        output_audio_path,
        '-y'  # Overwrite output file if exists
    ]
    subprocess.run(command, check=True)
    
def combine_video_audio(video_path, audio_path, output_path):
    """Gabungkan video tanpa suara dengan audio WAV ke satu file MP4 dengan encoding audio ke AAC."""
    command = [
        'ffmpeg',
        '-i', video_path,
        '-i', audio_path,
        '-c:v', 'copy',      # Copy video tanpa encode ulang
        '-c:a', 'aac',       # Encode audio ke AAC
        '-b:a', '192k',      # Bitrate audio
        '-strict', 'experimental',
        '-map', '0:v:0',     # Ambil video dari input 0
        '-map', '1:a:0',     # Ambil audio dari input 1
        '-y',                # Overwrite output
        output_path
    ]
    subprocess.run(command, check=True)
    
def add_text_to_video(framewise_output, labels, video_path, out_video_path):
    
    topk = 5    # Number of sound classes to show
    sed_frames_per_second = 100

    # Paths
    os.makedirs(os.path.dirname(out_video_path), exist_ok=True)

    tmp_video_path = '_tmp/tmp.avi'
    os.makedirs('_tmp', exist_ok=True)

    # Load video
    cap = cv2.VideoCapture(video_path)
    frame_width = int(cap.get(3))
    frame_height = int(cap.get(4))
    fps = cap.get(cv2.CAP_PROP_FPS)
    print('frame_width: {}, frame_height: {}, fps: {}'.format(
        frame_width, frame_height, fps))

    assert fps > 20 and fps <= 30
    assert frame_width > 0
    assert frame_height > 0

    sed_frames_per_video_frame = sed_frames_per_second / float(fps)

    out = cv2.VideoWriter(tmp_video_path, cv2.VideoWriter_fourcc('M','J','P','G'), 
        fps, (frame_width, frame_height))

    # For each frame select the top classes
    sorted_indexes = np.argsort(framewise_output, axis=-1)[:, -1 : -topk - 1 : -1]
    """(frames_num, topk)"""

    n = 0
    while(True):
        # Capture frame-by-frame
        ret, frame = cap.read()

        # End of video
        if frame is None:
            break

        cv2.rectangle(frame, (0, 0), (int(frame_width*0.8), int(frame_height*0.4)), (255, 255, 255), -1)

        for k in range(0, topk):
            # Add text to frames
            font                   = cv2.FONT_HERSHEY_SIMPLEX
            fontScale = 0.6
            bottomLeftCornerOfText = (10, 30 + k * 25)
            fontColor              = (0,0,255)
            lineType               = 1
 
            m = int(n * sed_frames_per_video_frame)
            m = min(m, framewise_output.shape[0] - 1)  # Cegah index out of bounds

            text = '{}: {:.3f}'.format(
                cut_words(labels[sorted_indexes[m, k]]),
                framewise_output[m, sorted_indexes[m, k]])

            cv2.putText(frame, text, 
                bottomLeftCornerOfText, 
                font, 
                fontScale,
                fontColor,
                lineType)

        # Write frame to video
        out.write(frame)

        n += 1

    # When everything done, release the capture
    cap.release()
    out.release()
    cv2.destroyAllWindows()

    os.system('ffmpeg -loglevel panic -y -i {} "{}"'.format(tmp_video_path, out_video_path))
    print('Write silent video with text to {}'.format(out_video_path))


def cut_words(lb, max_len=20):
    """Cut label to max_len.
    """
    words = lb.split(', ')
    new_lb = ''
    for word in words:
        if len(new_lb + ', ' + word) > max_len:
            break
        new_lb += ', ' + word
    new_lb = new_lb[2 :]

    if len(new_lb) == 0:
        new_lb = words[0]
    
    return new_lb


if __name__ == '__main__':

    parser = argparse.ArgumentParser(description='Example of parser.')  
    parser.add_argument('--sample_rate', type=int, default=16000, help='Sampling rate of the audio')  
    parser.add_argument('--window_size', type=int, default=1024)
    parser.add_argument('--hop_size', type=int, default=320)
    parser.add_argument('--mel_bins', type=int, default=64)
    parser.add_argument('--fmin', type=int, default=50)
    parser.add_argument('--fmax', type=int, default=14000) 
    parser.add_argument('--model_type', type=str, required=True)
    parser.add_argument('--checkpoint_path', type=str, required=True)
    parser.add_argument('--audio_path', type=str, required=True)
    parser.add_argument('--video_path', type=str, required=True)
    parser.add_argument('--out_video_path', type=str, required=True)
    parser.add_argument('--cuda', action='store_true', default=False)
    
    args = parser.parse_args()

    main(args)