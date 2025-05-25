import React, { useState, useRef } from "react";
import axios from "axios";

type UploadFileProps = {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setIsProcessing: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccess: boolean; 
  isProcessing: boolean;
};

export default function UploadFile({
  file,
  setFile,
  setIsSuccess,
  setIsProcessing,
  isSuccess,
  isProcessing,
}: UploadFileProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setIsSuccess(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const droppedFile = droppedFiles[0];
      if (droppedFile.type.startsWith('video/')) {
        setFile(droppedFile);
        setIsSuccess(false);
      }
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("video", file);

    try {
      setIsLoading(true);
      setIsProcessing(true);
      
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
      setIsSuccess(true);
    } catch (error) {
      console.error("Upload error:", error);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
      setIsProcessing(false);
    }
  };

  const handleBrowseClick = () => {
    if (isProcessing || isSuccess) return;
    fileInputRef.current?.click();
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const isUploadDisabled = isLoading || isProcessing || isSuccess || !file;

  return (
    <div className="space-y-6">
      <div
        className={`relative border-3 border-dashed rounded-3xl p-12 text-center transition-all duration-300 ${
          isProcessing || isSuccess 
            ? 'cursor-not-allowed opacity-60' 
            : 'cursor-pointer'
        } ${
          isDragOver
            ? 'border-purple-400 bg-purple-50 scale-105'
            : file
            ? 'border-green-400 bg-green-50'
            : 'border-gray-300 bg-gray-50 hover:border-purple-400 hover:bg-purple-50'
        }`}
        onDragOver={isProcessing || isSuccess ? undefined : handleDragOver}
        onDragLeave={isProcessing || isSuccess ? undefined : handleDragLeave}
        onDrop={isProcessing || isSuccess ? undefined : handleDrop}
        onClick={handleBrowseClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          onChange={handleChange}
          className="hidden"
          disabled={isProcessing || isSuccess}
        />

        {file ? (
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg">
              <span className="text-3xl text-white">
                {file.type.startsWith('video/') ? '🎬' : '🎵'}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">File Terpilih!</h3>
              <p className="text-lg font-semibold text-gray-800">{file.name}</p>
              <p className="text-sm text-gray-500 mt-1">
                {formatFileSize(file.size)} • {file.type}
              </p>
            </div>
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
              isSuccess 
                ? 'bg-blue-100 text-blue-700'
                : isProcessing
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-green-100 text-green-700'
            }`}>
              <span className={`w-2 h-2 rounded-full mr-2 ${
                isSuccess 
                  ? 'bg-blue-500'
                  : isProcessing
                  ? 'bg-yellow-500'
                  : 'bg-green-500'
              }`}></span>
              {isSuccess ? 'Analisis selesai' : isProcessing ? 'Sedang diproses' : 'Siap diproses'}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {isDragOver ? 'Lepas file di sini!' : 'Unggah file Anda'}
              </h3>
              <p className="text-gray-600 text-lg mb-4">
                {isProcessing || isSuccess 
                  ? 'Upload tidak tersedia saat ini'
                  : 'Seret dan lepas file video di sini, atau klik untuk memilih'
                }
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">MP4</span>
              </div>
            </div>

            {!isProcessing && !isSuccess && (
              <button
                type="button"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Pilih File
              </button>
            )}
          </div>
        )}

        <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full opacity-50"></div>
      </div>

      {file && (
        <div className="text-center">
          <button
            onClick={handleUpload}
            disabled={isUploadDisabled}
            className={`group relative inline-flex items-center px-12 py-4 text-xl font-bold rounded-full transition-all duration-300 transform shadow-2xl ${
              isUploadDisabled
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-3xl'
            }`}
          >
            {isLoading ? (
              <>
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                Memproses...
              </>
            ) : isSuccess ? (
              <>
                <span className="mr-3 text-2xl">✅</span>
                Analisis Selesai
              </>
            ) : (
              <>
                <span className="mr-3 text-2xl group-hover:scale-110 transition-transform">🚀</span>
                Mulai Analisis
              </>
            )}
            
            {!isUploadDisabled && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
            )}
          </button>
          
          <p className="text-gray-500 text-sm mt-3">
            {isSuccess 
              ? 'File berhasil dianalisis dengan Audio Tagging AI'
              : isProcessing
              ? 'Sedang menganalisis file Anda...'
              : 'Klik untuk menganalisis file Anda dengan Audio Tagging AI'
            }
          </p>
        </div>
      )}
    </div>
  );
}