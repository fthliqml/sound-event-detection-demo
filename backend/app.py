from flask import Flask, request, jsonify, send_from_directory, abort
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
import subprocess

# Setup aplikasi Flask
app = Flask(__name__)
CORS(app)  # agar dapat diakses dari frontend Next.js

# Konfigurasi folder upload dan jenis file yang diizinkan
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'mp4', 'mov', 'avi', 'mkv'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 100 * 1024 * 1024  # Max upload 100MB

# Buat folder uploads jika belum ada
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Fungsi pengecekan ekstensi file
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

VIDEO_DIR = os.path.join(os.getcwd(), 'results')

@app.route('/videos/<basename>')
def get_video(basename):
  # Ganti spasi jadi underscore
  sanitized_basename = basename.replace(' ', '_')
    
  filename = f"with_audio_{sanitized_basename}"
  filepath = os.path.join(VIDEO_DIR, filename)
  print(filename)

  if not os.path.exists(filepath):
    return abort(404, description="Video not found")

  return send_from_directory(VIDEO_DIR, filename)

# Endpoint API untuk upload
@app.route('/api/upload', methods=['POST'])
def upload_file():
    if 'video' not in request.files:
        return jsonify({"error": "No video part in the request"}), 400

    file = request.files['video']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        # Buat path untuk output dan audio
        basename = os.path.splitext(filename)[0]
        audio_path = f"uploads/{basename}.wav"
        out_video_path = f"results/with_text_{basename}.mp4"

        # Jalankan model
        try:
            subprocess.run([
                "./venv/Scripts/python.exe", "sound_event_detection.py",
                "--model_type=Cnn14_DecisionLevelMax",
                "--checkpoint_path=models/Cnn14_DecisionLevelMax_mAP=0.385.pth",
                f"--audio_path={audio_path}",
                f"--video_path={filepath}",
                f"--out_video_path={out_video_path}",
                "--cuda"
            ], check=True)

            return jsonify({
                "message": "Processing complete",
                "result_path": out_video_path
            }), 200

        except subprocess.CalledProcessError as e:
            return jsonify({"error": "Failed to process video", "details": str(e)}), 500

    return jsonify({"error": "File type not allowed"}), 400
  
# Jalankan server Flask
if __name__ == '__main__':
    app.run(debug=True, port=5000)
