"use client";

import type React from "react";
import { useState, useCallback } from "react";
import { FileInput, Spinner } from "flowbite-react";
import { FaFileAudio } from "react-icons/fa6";
import {
  HiOutlineUpload,
  HiOutlineSave,
  HiOutlineChip,
  HiOutlineLightningBolt,
} from "react-icons/hi";
import axios from "axios";

export default function UploadFile() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dragActive, setDragActive] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("video", file);

    try {
      setIsLoading(true);
      const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload success:", res.data);
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  }, []);

  return (
    <div className="flex flex-col gap-6 justify-center items-center max-w-2xl mx-auto">
      {/* Neural Network Animation Background */}
      <div className="absolute top-0 left-0 right-0 h-64 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 mix-blend-overlay"></div>
        <div className="grid grid-cols-12 gap-2 p-4">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-tr-full"></div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            Sound Analysis Upload
          </h2>
          <p className="text-slate-400">
            Upload your audio file for deep learning analysis
          </p>
        </div>

        <label
          htmlFor="dropzone-file"
          className={`relative flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed transition-all duration-300 ${
            dragActive
              ? "border-blue-500 bg-blue-900/20"
              : "border-slate-600 bg-slate-800/50 hover:border-blue-500/70 hover:bg-slate-800"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {/* Sound Wave Animation */}
          <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-center overflow-hidden opacity-30 pointer-events-none">
            <div className="flex items-end space-x-1">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full"
                  style={{
                    height: `${Math.sin(i * 0.4) * 20 + (file ? 40 : 20)}%`,
                    animationDuration: `${1 + Math.random() * 0.5}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {file ? (
            <div className="flex flex-col items-center justify-center pb-6 pt-5 z-10">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                <FaFileAudio className="h-8 w-8 text-blue-500" />
              </div>
              <p className="mb-1 text-lg font-medium text-white">{file.name}</p>
              <p className="text-sm text-blue-400">
                {(file.size / 1024).toFixed(2)} KB
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Click or drag to replace file
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center pb-6 pt-5 z-10">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                <HiOutlineUpload className="h-8 w-8 text-blue-500" />
              </div>
              <p className="mb-2 text-lg font-medium text-white">
                <span className="text-blue-400">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-sm text-slate-400 mb-1">
                Upload your audio file for AI analysis
              </p>
              <p className="text-xs text-slate-500">
                Supported formats: MP3, WAV, FLAC, AAC
              </p>
            </div>
          )}
          <FileInput
            id="dropzone-file"
            className="hidden"
            accept="audio/*,video/*"
            onChange={handleChange}
          />
        </label>

        <div className="mt-6 grid grid-cols-3 gap-4 text-center text-xs text-slate-400">
          <div className="flex flex-col items-center p-3 bg-slate-800/50 rounded-lg">
            <HiOutlineSave className="h-5 w-5 text-blue-500 mb-2" />
            <span>Audio Analysis</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-slate-800/50 rounded-lg">
            <HiOutlineChip className="h-5 w-5 text-purple-500 mb-2" />
            <span>Neural Processing</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-slate-800/50 rounded-lg">
            <HiOutlineLightningBolt className="h-5 w-5 text-blue-500 mb-2" />
            <span>Real-time Results</span>
          </div>
        </div>

        <button
          className={`mt-6 w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center ${
            !file || isLoading
              ? "bg-slate-700 text-slate-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-900/20"
          }`}
          disabled={!file || isLoading}
          onClick={handleUpload}
        >
          {isLoading ? (
            <>
              <Spinner className="w-5 h-5 mr-3" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <HiOutlineUpload className="w-5 h-5 mr-2" />
              <span>Analyze Audio</span>
            </>
          )}
        </button>
      </div>

      <div className="text-center text-xs text-slate-500 max-w-md">
        Our deep learning model will analyze your audio file to detect and
        classify sound events with high precision.
      </div>
    </div>
  );
}
