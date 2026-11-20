import { NextResponse } from "next/server";
import { getResumeData } from "@/lib/resume";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(getResumeData());
}
