"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import FileUpload from "./File-upload";

export default function ImageUploadForm() {
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      imageUrl: "",
      thumbnailUrl: "",
    },
  });

  const handleUploadSuccess = (response) => {
    setValue("imageUrl", response.filePath);
    setValue("thumbnailUrl", response.thumbnailUrl || response.filePath);
    alert("Image uploaded successfully!");
    setUploadProgress(0);
  };

  const handleUploadProgress = (progress) => {
    setUploadProgress(progress);
  };

  const onSubmit = async (data) => {
    if (!data.imageUrl) {
      // showNotification("Please upload a image first", "error");
      return;
    }
//TODO Make sure imageUrl is a valid ImageKit-hosted URL (you can extract it from response.filePath or response.url).
    setLoading(true);
    try {
       const response = await fetch("/api/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Serialize form data
    });

    if (!response.ok) {
      throw new Error("Failed to publish image");
    }

      // Reset form after successful submission
      setValue("title", "");
      setValue("description", "");
      setValue("imageUrl", "");
      setValue("thumbnailUrl", "");
      setUploadProgress(0);
    } catch (error) {
      // showNotification(
      //   error instanceof Error ? error.message : "Failed to publish image",
      //   "error"
      // );
      console.log(first.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="form-control">
        <label className="label">Title</label>
        <input
          type="text"
          className={`input input-bordered ${
            errors.title ? "input-error" : ""
          }`}
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <span className="text-error text-sm mt-1">
            {errors.title.message}
          </span>
        )}
      </div>

      <div className="form-control">
        <label className="label">Description</label>
        <textarea
          className={`textarea textarea-bordered h-24 ${
            errors.description ? "textarea-error" : ""
          }`}
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && (
          <span className="text-error text-sm mt-1">
            {errors.description.message}
          </span>
        )}
      </div>

      <div className="form-control">
        <label className="label">Upload Image</label>
        <FileUpload
          fileType="image"
          onSuccess={handleUploadSuccess}
          onProgress={handleUploadProgress}
        />
        {uploadProgress > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div
              className="bg-primary h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        disabled={loading || !uploadProgress}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Publishing image...
          </>
        ) : (
          "Publish image"
        )}
      </button>
    </form>
  );
}
