const fallbackResume = {
  profile: {
    name: "Mohammad Matin Azimi",
    shortName: "Matin Azimi",
    title: "Senior Backend Engineer & Distributed Systems Architect",
    tagline:
      "Building high-throughput financial engines, event-driven architectures, and production AI infrastructure with Python and Go.",
    location: "Tehran, Iran",
    phone: "+98-9226058925",
    email: "m.matinazimii@gmail.com",
    availability: "Open to Senior Backend & Architecture Roles",
  },
  about: {
    summary:
      "Senior Backend Developer with 8+ years of hands-on experience designing scalable distributed systems, high-throughput payment workflows, and real-time data pipelines in Python and Go (Golang).",
    highlights: [],
    pillars: [],
  },
  experience: [],
  consulting: [],
  skills: [],
  education: [],
  certifications: [],
  socials: {
    instagram: "https://instagram.com/matin_swim",
    telegram: "https://t.me/matin_swim",
    linkedin: "https://www.linkedin.com/in/matin-azimi/",
  },
};

export async function getResumeData() {
  const apiUrl = process.env.API_INTERNAL_URL || "http://localhost:5000";
  try {
    const res = await fetch(`${apiUrl}/api/resume`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`API returned ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.warn("Failed to fetch resume from backend:", err.message);
    return fallbackResume;
  }
}
