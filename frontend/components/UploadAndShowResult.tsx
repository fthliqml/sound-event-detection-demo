"use client";

import UploadFile from "@/components/UploadFile";
import { useState, useEffect } from "react";

function ProcessingAnimation() {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    "Mengunggah file...",
    "Memuat model AI...", 
    "Menganalisis audio...",
    "Mendeteksi suara...",
    "Membuat tag audio...",
    "Menyelesaikan proses..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        const stepIndex = Math.floor((newProgress / 100) * steps.length);
        setCurrentStep(Math.min(stepIndex, steps.length - 1));
        
        if (newProgress >= 95) {
          clearInterval(interval);
          return 95;
        }
        return newProgress;
      });
    }, 800 + Math.random() * 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-12">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl border border-blue-100 p-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Memproses File Anda
          </h3>
          <p className="text-gray-600 mb-6">
            AI kami sedang menganalisis konten audio. Mohon tunggu sebentar...
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-700 ease-out" 
                style={{width: `${progress}%`}}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mb-4">
              <span className="transition-all duration-500">{steps[currentStep]}</span>
              <span className="font-mono">{Math.round(progress)}%</span>
            </div>
            
            <div className="flex justify-center space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index <= currentStep 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                      : 'bg-gray-300'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UploadAndShowResult() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unggah File Anda
            </h2>
            <p className="text-gray-600 text-lg">
              Pilih file video untuk dianalisis dengan AI kami
            </p>
          </div>
          
          <UploadFile 
            setIsSuccess={setIsSuccess} 
            file={file} 
            setFile={setFile}
            setIsProcessing={setIsProcessing}
            isSuccess={isSuccess}
            isProcessing={isProcessing}
          />
        </div>
      </div>

      {isProcessing && <ProcessingAnimation />}

      {isSuccess && !isProcessing && (
        <div className="mb-12">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-500 text-xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold">Analisis Selesai!</h3>
              </div>
              <p className="text-green-100">
                File Anda telah berhasil diproses dengan Audio Tagging
              </p>
            </div>

            <div className="p-8">
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Hasil Video dengan Tag
                </h4>
                <p className="text-gray-600">
                  Tonton video Anda dengan tag audio yang dihasilkan AI
                </p>
              </div>
              
              <div className="relative max-w-3xl mx-auto">
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    src={`http://localhost:5000/videos/${file?.name}`}
                    controls
                    className="w-full h-auto"
                    style={{ maxHeight: '500px' }}
                  />
                  
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
                      🎵 AI Tagged
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="text-blue-500 mr-2">📁</span>
                      <span className="font-medium">{file?.name}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span>Ukuran: {file ? Math.round(file.size / 1024 / 1024 * 100) / 100 : 0} MB</span>
                      <span className="text-green-500 font-semibold">✓ Diproses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isSuccess && !isProcessing && (
        <div className="text-center">
          <button
            onClick={() => {
              setIsSuccess(false);
              setFile(null);
            }}
            className="inline-flex items-center px-8 py-4 text-lg font-bold text-purple-600 bg-white border-2 border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">🔄</span>
            Coba File Lain
          </button>
        </div>
      )}
    </div>
  );
}