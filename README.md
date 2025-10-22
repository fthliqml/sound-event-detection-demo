## Getting Started

This repository contains a Next.js frontend and a Flask (Python) backend for sound event detection in videos.

The app flow is:

- Frontend uploads a video to the backend.
- Backend extracts audio, runs sound event detection, renders labels on the video, and merges the original audio back in.
- Frontend plays the processed video from the backend.

Below are setup instructions for both frontend and backend on Windows using PowerShell.

---

## 1) Clone the repository

```powershell
git clone https://github.com/fthliqml/sound-event-detection-demo.git
cd sound-event-detection-demo
```

---

## 2) Backend (Flask + PyTorch)

Requirements:

- Python 3.9+ (recommended)
- FFmpeg available on PATH (used to extract/merge audio)

Steps:

```powershell
# Go to backend folder
cd backend

# Create and activate a virtual environment in ./backend/venv
py -m venv venv
./venv/Scripts/Activate.ps1

# Install dependencies (no upgrades)
pip install -r requirements.txt

# (If you use cmd.exe instead of PowerShell, activate with: venv\Scripts\activate)

# Install FFmpeg (Windows). If winget is available:
winget install --id=FFmpeg.FFmpeg -e

# Or download FFmpeg manually

# Verify FFmpeg
ffmpeg -version

# Run the backend (Flask)
python app.py
```

By default, the backend runs at http://localhost:5000.

Notes:

- The backend expects a local virtual environment at `backend/venv`, because it invokes `./venv/Scripts/python.exe` to run the detection pipeline.
- The detection script uses CUDA by default (`--cuda`). If you don't have a compatible NVIDIA GPU/CUDA setup, open `backend/app.py` and remove `"--cuda"` from the `subprocess.run([...])` arguments (near the upload handler) to force CPU mode.
- Processed videos will be written to `backend/results/` and served by `GET /videos/<original_filename>`.

Troubleshooting PowerShell activation:

- If you get an execution policy error when activating the venv, run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned -Force
```

---

## 3) Frontend (Next.js)

In a new terminal (keep the backend running):

```powershell
cd frontend
npm install
npm run dev
```

Open http://localhost:3000 to use the app.

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- Next.js Documentation: https://nextjs.org/docs
- Learn Next.js: https://nextjs.org/learn

You can also check out the Next.js GitHub repository: https://github.com/vercel/next.js

---

## Deploy on Vercel (Frontend)

The easiest way to deploy the Next.js app is to use the Vercel Platform: https://vercel.com/new

For more details, see: https://nextjs.org/docs/app/building-your-application/deploying
