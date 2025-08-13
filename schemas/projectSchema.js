import { z } from "zod";

// Match Prisma enums
export const ProjectStatusEnum = z.enum([
  "ACTIVE",
  "NEAR_COMPLETION",
  "COMPLETED",
]);

export const ProjectTypeEnum = z.enum([
  "RESIDENTIAL",
  "COMMERCIAL",
  "INDUSTRIAL",
  "INSTITUTIONAL",
  "INFRASTRUCTURE",
  "MIXED_USE",
]);

// Embedded type schema
export const KeyFeatureSchema = z.object({
  title: z.string().min(1, "Feature title is required"),
  description: z.string().min(1, "Feature description is required"),
});

// Main schema
export const ProjectSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  projectTagline: z.string().optional(),
  projectType: ProjectTypeEnum,
  clientName: z.string().optional(),
  contractorName: z.string().optional(),
  architectName: z.string().optional(),
  location: z.string().min(1, "Location is required"),
  startDate: z.coerce.date().optional(),
  completionDate: z.coerce.date().optional(),
  estimatedCost: z.number().positive("Cost must be a positive number").optional(),

  overview: z.string().min(1, "Overview is required"),
  objectives: z.array(z.string().min(1)).default([]),

  keyFeatures: z.array(KeyFeatureSchema).default([]),
  technologiesUsed: z.array(z.string().min(1)).default([]),

  imageGallery: z.array(z.string().url("Must be a valid URL")).default([]),
  videos: z.array(z.string().url("Must be a valid URL")).default([]),

  status: ProjectStatusEnum.default("ACTIVE"),
});
