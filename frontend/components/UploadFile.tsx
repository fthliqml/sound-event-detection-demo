"use client";

import React, { useState } from "react";
import { FileInput, Label, Button, Spinner } from "flowbite-react";
import { FaFileVideo } from "react-icons/fa6";
import axios from "axios";

export default function UploadFile() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
        "http://localhost:8000/api/upload",
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

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <Label
        htmlFor="dropzone-file"
        className="flex h-64 w-2xl cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        {file ? (
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <FaFileVideo className="mb-4 h-10 w-10 text-blue-600" />
            <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
              {file.name}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              {Math.round(file.size / 1024)} KB
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              MP4 (MAX. 800x400px)
            </p>
          </div>
        )}
        <FileInput
          id="dropzone-file"
          className="hidden"
          accept="video/*"
          onChange={handleChange}
        />
      </Label>

      <Button
        className="w-2xl hover:cursor-pointer"
        disabled={!file || isLoading}
        onClick={handleUpload}
      >
        {isLoading ? <Spinner className="w-6" /> : "Upload"}
      </Button>
    </div>
  );
}
