const path = require("path");
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");

// Load root .env when running locally outside Docker
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
dotenv.config();

const resumeData = require("./data/resumeData");

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST", "OPTIONS"],
  })
);
app.use(express.json({ limit: "100kb" }));

const normalizeUrl = (value, fallback = "") => {
  const raw = (value || fallback || "").trim();
  if (!raw) return "";
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  return `https://${raw}`;
};

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "matin-resume-backend",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/resume", (_req, res) => {
  const email = (process.env.EMAIL || resumeData.profile.email).trim();
  const socials = {
    instagram: normalizeUrl(
      process.env.INSTAGRAM_URL,
      "https://instagram.com/matin_swim"
    ),
    telegram: normalizeUrl(
      process.env.TELEGRAM_URL,
      "https://t.me/matin_swim"
    ),
    linkedin: normalizeUrl(
      process.env.LINKEDIN_URL,
      "https://www.linkedin.com/in/matin-azimi/"
    ),
  };

  res.json({
    ...resumeData,
    profile: {
      ...resumeData.profile,
      email,
    },
    socials,
  });
});

app.get("/api/resume/download", (_req, res) => {
  const pdfPath = path.resolve(__dirname, "../assets/matin-azimi-CV.pdf");
  if (!fs.existsSync(pdfPath)) {
    return res.status(404).json({ error: "Resume PDF file not found." });
  }

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    'attachment; filename="Mohammad-Matin-Azimi-CV.pdf"'
  );

  const stream = fs.createReadStream(pdfPath);
  stream.on("error", (err) => {
    console.error("Error streaming PDF:", err);
    if (!res.headersSent) {
      res.status(500).json({ error: "Failed to download resume." });
    }
  });
  stream.pipe(res);
});

app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({ error: "Please provide your name." });
  }
  if (
    !email ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return res
      .status(400)
      .json({ error: "Please provide a valid email address." });
  }
  if (!message || typeof message !== "string" || message.trim().length < 5) {
    return res
      .status(400)
      .json({ error: "Please write a message (at least 5 characters)." });
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
    const dataDir = path.resolve(__dirname, "../data");
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

  return res.status(201).json({
    ok: true,
    message: "Your message has been received. Thank you for reaching out!",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend server listening on http://0.0.0.0:${PORT}`);
});
