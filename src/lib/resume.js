import resumeData from "@/data/resumeData";

function normalizeUrl(value, fallback = "") {
  const raw = (value || fallback || "").trim();
  if (!raw) return "";
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  return `https://${raw}`;
}

export function getResumeData() {
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

  return {
    ...resumeData,
    profile: {
      ...resumeData.profile,
      email,
    },
    socials,
  };
}
