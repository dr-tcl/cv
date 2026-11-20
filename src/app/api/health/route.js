import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "matin-resume-app",
    timestamp: new Date().toISOString(),
  });
}
