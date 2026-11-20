import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = body || {};

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json(
      { error: "Please provide your name." },
      { status: 400 }
    );
  }

  if (
    !email ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (!message || typeof message !== "string" || message.trim().length < 5) {
    return NextResponse.json(
      { error: "Please write a message (at least 5 characters)." },
      { status: 400 }
    );
  }

  const entry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: name.trim(),
    email: email.trim(),
    subject: typeof subject === "string" ? subject.trim() : "",
    message: message.trim(),
    createdAt: new Date().toISOString(),
  };

  try {
    const dataDir = path.resolve(process.cwd(), "data");
    const messagesFile = path.join(dataDir, "messages.json");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    let existing = [];
    if (fs.existsSync(messagesFile)) {
      const raw = fs.readFileSync(messagesFile, "utf8");
      existing = JSON.parse(raw || "[]");
    }
    existing.push(entry);
    fs.writeFileSync(messagesFile, JSON.stringify(existing, null, 2), "utf8");
  } catch (err) {
    console.warn("Could not persist contact message to disk:", err.message);
  }

  console.log("New contact message received:", {
    id: entry.id,
    name: entry.name,
    email: entry.email,
    subject: entry.subject,
  });

  return NextResponse.json(
    {
      ok: true,
      message: "Your message has been received. Thank you for reaching out!",
    },
    { status: 201 }
  );
}
