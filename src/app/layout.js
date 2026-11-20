import "./globals.css";

export const metadata = {
  title: "Mohammad Matin Azimi | Senior Backend Engineer",
  description:
    "Senior Backend Developer & Distributed Systems Architect specializing in Python, Go (Golang), Apache Kafka, FinTech payments, and AI infrastructure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#060911] text-slate-200 antialiased selection:bg-sky-500/30 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
