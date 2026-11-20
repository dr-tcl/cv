# Mohammad Matin Azimi — Resume Website

A dark-themed, responsive resume website built with **Next.js (JavaScript)** including built-in API routes for resume data, PDF download, and contact form submissions, packaged with a single `Dockerfile` and `docker-compose.yml`.

## Features

- Responsive dark UI with framed portrait (`public/images/matin-portrait.jpg`)
- Built-in API routes:
  - `GET /api/health`
  - `GET /api/resume`
  - `GET /api/resume/download`
  - `POST /api/contact`
- `.env`-driven contact email & social links (with built-in defaults)

## Run with Docker Compose

1. Review or update `.env`:
   ```env
   EMAIL=m.matinazimii@gmail.com
   INSTAGRAM_URL=https://instagram.com/matin_swim
   TELEGRAM_URL=https://t.me/matin_swim
   LINKEDIN_URL=https://www.linkedin.com/in/matin-azimi/
   ```
2. Build and start:
   ```bash
   docker compose up --build -d
   ```
3. Open `http://localhost:3000` in your browser.
