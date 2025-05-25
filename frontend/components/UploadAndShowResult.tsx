"use client";

import UploadFile from "@components/UploadFile";
import { useState } from "react";

export default function UploadAndShowResult() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <UploadFile setIsSuccess={setIsSuccess} file={file} setFile={setFile} />

      {isSuccess ? (
        <video
          src={`http://localhost:5000/videos/${file?.name}`}
          controls
          width={600}
        />
      ) : (
        ""
      )}
    </div>
  );
}
