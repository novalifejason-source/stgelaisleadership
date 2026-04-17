import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect with Jason St. Gelais | Leadership Coach & Speaker",
  description: "Leadership Coach, Trainer & Speaker. Maxwell Leadership Certified. Helping leaders level up and drive AI adoption.",
};

const VCARD = `BEGIN:VCARD
VERSION:3.0
N:St Gelais;Jason;;;
FN:Jason St Gelais
ORG:St Gelais Leadership
TITLE:Leadership Coach, Trainer & Speaker
TEL;TYPE=CELL:4807219092
EMAIL:jason@stgelaisleadership.com
URL:https://stgelaisleadership.com
URL:https://www.linkedin.com/in/jstgelais
END:VCARD`;

const VCARD_URL = `data:text/vcard;charset=utf-8,${encodeURIComponent(VCARD)}`;

const btnPrimary = {
  display: "block", padding: "16px 24px",
  background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
  color: "#0f2444", fontWeight: 700, fontSize: "16px",
  textDecoration: "none", borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(201,168,76,0.3)",
} as const;

const btnGold = {
  display: "block", padding: "16px 24px",
  background: "rgba(201,168,76,0.15)",
  color: "#C9A84C", fontWeight: 700, fontSize: "16px",
  textDecoration: "none", borderRadius: "12px",
  border: "1.5px solid rgba(201,168,76,0.5)",
} as const;

const btnBlue = {
  display: "block", padding: "16px 24px",
  background: "#0077b5",
  color: "white", fontWeight: 600, fontSize: "16px",
  textDecoration: "none", borderRadius: "12px",
} as const;

const btnGhost = {
  display: "block", padding: "16px 24px",
  background: "rgba(255,255,255,0.06)",
  color: "#f1f5f9", fontWeight: 500, fontSize: "16px",
  textDecoration: "none", borderRadius: "12px",
  border: "1.5px solid rgba(255,255,255,0.15)",
} as const;

const btnDim = {
  display: "block", padding: "14px 24px",
  background: "rgba(255,255,255,0.03)",
  color: "#8badc9", fontWeight: 500, fontSize: "14px",
  textDecoration: "none", borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.08)",
} as const;

export default function Connect() {
  return (
    <main style={{
      fontFamily: "'Inter', system-ui, sans-serif",
      minHeight: "100vh",
      background: "linear-gradient(160deg, #0f2444 0%, #1a3a5c 60%, #0f2444 100%)",
      color: "#f1f5f9",
    }}>
      <div style={{ maxWidth: "480px", margin: "0 auto", padding: "48px 24px 60px", textAlign: "center" }}>

        {/* HEADSHOT */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
          <div style={{
            width: "160px", height: "160px", borderRadius: "50%",
            border: "5px solid #C9A84C",
            boxShadow: "0 0 0 3px rgba(201,168,76,0.2), 0 12px 40px rgba(0,0,0,0.4)",
            overflow: "hidden",
          }}>
            <Image
              src="/jason-headshot.png"
              alt="Jason St. Gelais"
              width={160} height={160}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            />
          </div>
        </div>

        {/* NAME */}
        <h1 style={{ fontSize: "28px", fontWeight: 700, margin: "0 0 6px", letterSpacing: "-0.02em" }}>
          Jason St. Gelais
        </h1>
        <p style={{ fontSize: "16px", color: "#C9A84C", fontWeight: 600, marginBottom: "6px" }}>
          Leadership Coach · Trainer · Speaker
        </p>
        <p style={{ fontSize: "13px", color: "#8badc9", marginBottom: "28px" }}>
          Maxwell Leadership Certified · MBA · MS Leadership
        </p>

        {/* BIO */}
        <p style={{ fontSize: "15px", color: "#cbd5e1", maxWidth: "380px", margin: "0 auto 36px", lineHeight: 1.7 }}>
          I help leaders level up, communicate powerfully, and drive real AI adoption inside their organizations. 20+ years spanning enterprise technology, L&D, and leadership coaching.
        </p>

        {/* BUTTONS — ordered for AI conference */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "380px", margin: "0 auto" }}>

          <a href={VCARD_URL} download="Jason-St-Gelais.vcf" style={btnPrimary}>
            💾 Save to Contacts
          </a>

          <a href="/ai-leadership-adoption-checklist.pdf" download="AI-Leadership-Adoption-Checklist.pdf" style={btnGold}>
            🤖 Free Download: AI Adoption Checklist
          </a>

          <a href="https://www.linkedin.com/in/jstgelais" style={btnBlue}>
            in&nbsp;&nbsp;Connect on LinkedIn
          </a>

          <a href="https://stgelaisleadership.com" style={btnGhost}>
            🌐 Visit My Website
          </a>

          <a href="https://calendly.com/jasonstgelais" target="_blank" rel="noopener noreferrer" style={btnGhost}>
            📅 Book a Free Discovery Call
          </a>

          <a href="tel:4807219092" style={btnGhost}>
            📞 Call or Text: (480) 721-9092
          </a>

          <a href="mailto:jason@stgelaisleadership.com" style={btnGhost}>
            ✉️ jason@stgelaisleadership.com
          </a>

          <a href="https://youarethegoal.com" style={btnDim}>
            🎯 Free Life Audit — youarethegoal.com
          </a>

        </div>

        {/* CREDENTIALS */}
        <div style={{ marginTop: "40px", padding: "20px", background: "rgba(255,255,255,0.04)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)" }}>
          <p style={{ fontSize: "11px", color: "#8badc9", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "10px", margin: "0 0 10px" }}>Credentials</p>
          <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0, lineHeight: 1.8 }}>
            MBA · MS Leadership · BS Information Technology<br />
            McKinsey &amp; Co. Management Accelerator<br />
            Maxwell Leadership Certified Coach, Trainer &amp; Speaker<br />
            Agile SAFe 5.0 · 2× FedEx Innovation Finalist
          </p>
        </div>

        <p style={{ marginTop: "36px", fontSize: "13px", color: "#4a6080" }}>
          Let's connect and explore how we can drive real leadership and AI adoption impact together.
        </p>
      </div>
    </main>
  );
}
