import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function resolvePdfPath() {
  const candidates = [
    path.resolve(process.cwd(), "assets/matin-azimi-CV.pdf"),
    path.resolve(process.cwd(), "matin-azimi-CV (1).pdf"),
  ];
  return candidates.find((candidate) => fs.existsSync(candidate)) || null;
}

export async function GET() {
  const pdfPath = resolvePdfPath();

  if (!pdfPath) {
    return NextResponse.json(
      { error: "Resume PDF file not found." },
      { status: 404 }
    );
  }

  try {
    const fileBuffer = fs.readFileSync(pdfPath);
    return new Response(new Uint8Array(fileBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Mohammad-Matin-Azimi-CV.pdf"',
        "Content-Length": String(fileBuffer.length),
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    console.error("Error reading resume PDF:", err);
    return NextResponse.json(
      { error: "Failed to download resume." },
      { status: 500 }
    );
  }
}
