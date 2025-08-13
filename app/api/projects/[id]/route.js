import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const projects = await db.projects.findMany();
  return NextResponse.json(projects);
}

export async function POST(req) {
  const data = await req.json();
  const project = await db.projects.create({ data });
  return NextResponse.json(project);
}
