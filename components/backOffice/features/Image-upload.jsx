"use client";

import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function ImageUpload({ name }) {
  const { setValue, watch, getValues } = useFormContext();
  const currentValue = watch(name) || []; // mixed: File | { url, fileId }

  const handleFiles = (files) => {
    if (!files) return;
    const fileArray = Array.from(files);
    setValue(name, [...currentValue, ...fileArray], { shouldValidate: true });
  };

  const removeImage = (index) => {
    const list = (getValues(name) ) || [];
    const target = list[index];

    // Build updated list by matching identity (safer than plain index)
    const updated = list.filter((item, i) => {
      if (i !== index) return true;
      return false;
    });

    // If the removed item is an existing image, record its fileId for deletion
    if (!(target instanceof File) && target?.fileId) {
      const deletedNow = getValues("deletedFileIds") || [];
      // avoid duplicates
      if (!deletedNow.includes(target.fileId)) {
        setValue("deletedFileIds", [...deletedNow, target.fileId], {
          shouldValidate: true,
        });
      }
    }

    // Update the mixed list the UI renders
    setValue(name, updated, { shouldValidate: true });
  };

  return (
    <div className="space-y-2">
      <Input
        type="file"
        accept="image/png, image/jpeg"
        multiple
        onChange={(e) => handleFiles(e.target.files)}
      />

      <div className="flex flex-wrap gap-2">
        {currentValue.map((item, i) => {
          const isFile = item instanceof File;
          const url = isFile ? URL.createObjectURL(item) : item.url;
          return (
            <div key={isFile ? `${item.name}-${item.lastModified}` : item.fileId ?? i} className="relative">
              <Image
                src={url}
                alt={`preview-${i}`}
                className="h-20 w-20 object-cover rounded-md border"
                width={80}
                height={80}
                // optionally: unoptimized for blob: urls
                unoptimized={isFile}
              />
              <Button
                type="button"
                size="sm"
                variant="destructive"
                className="absolute top-0 right-0"
                onClick={() => removeImage(i)}
              >
                ✕
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
