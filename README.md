# Mohammad Matin Azimi — Resume Website

A dark-themed, responsive resume website with separated **Next.js (JavaScript)** frontend and **Node.js / Express (JavaScript)** backend.

## Structure

- `backend/` — Express API serving structured resume data, `.env`-driven social links, PDF resume download, and contact form submissions.
- `frontend/` — Next.js App Router UI with responsive dark design, framed portrait, interactive sections, and API rewrites.
- `.env` — Configure `EMAIL`, `INSTAGRAM_URL`, `TELEGRAM_URL`, and `LINKEDIN_URL`.

## Run with Docker Compose

1. Update your social links in `.env`:
   ```env
   EMAIL=m.matinazimii@gmail.com
   INSTAGRAM_URL=https://instagram.com/matin_swim
   TELEGRAM_URL=https://t.me/matin_swim
   LINKEDIN_URL=https://www.linkedin.com/in/matin-azimi/
   ```
2. Build and start both services:
   ```bash
   docker compose up --build -d
   ```
3. Open `http://localhost:3000` in your browser (or `http://localhost:5000/api/health` for the backend).
