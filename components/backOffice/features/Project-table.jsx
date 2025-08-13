"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import Swal from "sweetalert2";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const projectSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  projectType: z.enum([
    "RESIDENTIAL",
    "COMMERCIAL",
    "INDUSTRIAL",
    "INSTITUTIONAL",
    "INFRASTRUCTURE",
    "MIXED_USE",
  ]),
  location: z.string().min(1),
  status: z.enum(["ACTIVE", "NEAR_COMPLETION", "COMPLETED"]),
  objectives: z.array(z.string().min(1)),
  keyFeatures: z.array(
    z.object({
      title: z.string().min(1),
      description: z.string().min(1),
    })
  ),
  technologiesUsed: z.array(z.string()),
  imageGallery: z.array(z.string().url().or(z.string().min(1))),
  videos: z.array(z.string().url().or(z.string().min(1))),
});

export default function ProjectsTable() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);

  const form = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projectName: "",
      projectType: "RESIDENTIAL",
      location: "",
      status: "ACTIVE",
      objectives: [""],
      keyFeatures: [{ title: "", description: "" }],
      technologiesUsed: [],
      imageGallery: [],
      videos: [],
    },
  });

  // Field arrays
  const objectivesField = useFieldArray({
    control: form.control,
    name: "objectives",
  });
  const keyFeaturesField = useFieldArray({
    control: form.control,
    name: "keyFeatures",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
    setLoading(false);
  };

  const onSubmit = async (values) => {
    if (editingId) {
      await fetch(`/api/projects/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      Swal.fire("Updated!", "Project updated successfully.", "success");
    } else {
      await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      Swal.fire("Created!", "Project created successfully.", "success");
    }
    setEditingId(null);
    form.reset();
    fetchProjects();
  };

  const handleArchive = (id) => {
    Swal.fire({
      title: "Archive this project?",
      text: "It will be marked as COMPLETED.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, archive it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`/api/projects/${id}/archive`, { method: "PATCH" });
        Swal.fire(
          "Archived!",
          "The project has been marked completed.",
          "success"
        );
        fetchProjects();
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete this project?",
      text: "This action cannot be undone.",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`/api/projects/${id}`, { method: "DELETE" });
        Swal.fire("Deleted!", "The project has been removed.", "success");
        fetchProjects();
      }
    });
  };

  const addChip = (field, value) => {
    if (value.trim()) {
      form.setValue(field, [...form.getValues(field), value.trim()]);
    }
  };

  const removeChip = (field, index) => {
    const arr = [...form.getValues(field)];
    arr.splice(index, 1);
    form.setValue(field, arr);
  };

  return (
    <div className="space-y-6">
      {/* Form Card */}
      <Card>
        <CardHeader>
          <CardTitle>{editingId ? "Edit Project" : "Create Project"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <input
              placeholder="Project Name"
              {...form.register("projectName")}
              className="border p-2 rounded"
            />
            <Select
              onValueChange={(v) => form.setValue("projectType", v)}
              value={form.watch("projectType")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Project Type" />
              </SelectTrigger>
              <SelectContent>
                {[
                  "RESIDENTIAL",
                  "COMMERCIAL",
                  "INDUSTRIAL",
                  "INSTITUTIONAL",
                  "INFRASTRUCTURE",
                  "MIXED_USE",
                ].map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <input
              placeholder="Location"
              {...form.register("location")}
              className="border p-2 rounded"
            />
            <Select
              onValueChange={(v) => form.setValue("status", v)}
              value={form.watch("status")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {["ACTIVE", "NEAR_COMPLETION", "COMPLETED"].map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Objectives */}
            <div>
              <p className="font-medium">Objectives</p>
              {objectivesField.fields.map((field, index) => (
                <div key={field.id} className="flex gap-2 mb-2">
                  <input
                    {...form.register(`objectives.${index}`)}
                    placeholder="Objective"
                    className="border p-2 rounded flex-1"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => objectivesField.remove(index)}
                  >
                    X
                  </Button>
                </div>
              ))}
              <Button type="button" onClick={() => objectivesField.append("")}>
                + Add Objective
              </Button>
            </div>

            {/* Key Features */}
            <div>
              <p className="font-medium">Key Features</p>
              {keyFeaturesField.fields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-2 gap-2 mb-2">
                  <input
                    {...form.register(`keyFeatures.${index}.title`)}
                    placeholder="Title"
                    className="border p-2 rounded"
                  />
                  <input
                    {...form.register(`keyFeatures.${index}.description`)}
                    placeholder="Description"
                    className="border p-2 rounded"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    className="col-span-2"
                    onClick={() => keyFeaturesField.remove(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                onClick={() =>
                  keyFeaturesField.append({ title: "", description: "" })
                }
              >
                + Add Feature
              </Button>
            </div>

            {/* Chips for Technologies, Images, Videos */}
            {["technologiesUsed", "imageGallery", "videos"].map((field) => (
              <div key={field}>
                <p className="font-medium">{field}</p>
                <div className="flex gap-2 flex-wrap mb-2">
                  {form.watch(field).map((val, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-200 rounded flex items-center gap-1"
                    >
                      {val}
                      <button
                        type="button"
                        onClick={() => removeChip(field, idx)}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <input
                  placeholder={`Add to ${field}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addChip(field, e.currentTarget.value);
                      e.currentTarget.value = "";
                    }
                  }}
                  className="border p-2 rounded"
                />
              </div>
            ))}

            <div className="flex gap-2">
              <Button type="submit">{editingId ? "Update" : "Create"}</Button>
              {editingId && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    form.reset();
                    setEditingId(null);
                  }}
                >
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-8 w-full" />
              ))}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell>{p.projectName}</TableCell>
                    <TableCell>{p.projectType}</TableCell>
                    <TableCell>{p.location}</TableCell>
                    <TableCell>{p.status}</TableCell>
                    <TableCell className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingId(p.id);
                          form.reset(p);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleArchive(p.id)}
                      >
                        Archive
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(p.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
