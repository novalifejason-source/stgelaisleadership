import type { Metadata } from "next";
import Nav from "../../components/Nav";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "1:1 Leadership Coaching | Jason St. Gelais",
  description: "Personalized leadership coaching for executives and leaders ready to break through their current ceiling. Identity transformation, goal clarity, and accountability.",
};

export default function Coaching() {
  return (
    <main className="min-h-screen">
      <nav style={{ backgroundColor: "var(--navy)" }} className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl tracking-wide hover:text-yellow-400 transition-colors">Jason St. Gelais</a>
          <a href="/#contact" className="btn-primary text-sm py-2 px-6">Apply for Coaching</a>
        </div>
      </nav>

      <section style={{ backgroundColor: "var(--navy)", paddingTop: "120px", paddingBottom: "80px" }} className="px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-4">1:1 Leadership Coaching · Application Required</div>
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            You Don't Have a Goal Problem.<br />
            <span style={{ color: "var(--gold)" }}>You Have an Identity Problem.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Most coaching stops at strategy. Real transformation starts when you change who you believe you are — and build the habits, mindset, and direction that make results inevitable.
          </p>
          <a href="/#contact" className="btn-primary">Apply for Coaching</a>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)" }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3">Who This Is For</div>
          <h2 className="section-title mb-8">Leaders Who Are Ready for Real Work</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "You're achieving results but feel stuck at the same ceiling",
              "You know what you want but keep self-sabotaging or procrastinating",
              "You're in a leadership role but don't fully feel like a leader yet",
              "You're ready to invest in yourself — not just your skills",
              "You want accountability that's direct, not soft or generic",
              "You're willing to go deep, be honest, and do the work",
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle style={{ color: "var(--gold)", flexShrink: 0 }} size={20} className="mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <p style={{ color: "var(--navy)" }} className="font-bold text-lg border-l-4 pl-4" style2={{ borderColor: "var(--gold)" }}>
            This is not a program for people who want to feel good. It's for people who want to get better.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3 text-center">The Coaching Journey</div>
          <h2 className="section-title text-center mb-12">From Where You Are to Who You're Becoming</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { phase: "Phase 1", title: "Clarity", desc: "We start with the Goal Setting Workshop — a structured deep-dive into what you truly want, why it matters, and what's been in the way. You leave with a personal direction statement and a 90-day plan." },
              { phase: "Phase 2", title: "Identity", desc: "Goals require a new version of you. We work on the beliefs, stories, and patterns that are keeping you at your current level. This is where most coaching programs stop. We start here." },
              { phase: "Phase 3", title: "Execution", desc: "Accountability, momentum, and course-correction. We meet regularly, measure what matters, and keep adjusting until the new behaviors become the default. Results compound from here." },
            ].map((p, i) => (
              <div key={i} style={{ borderTop: "4px solid var(--gold)", backgroundColor: "var(--cream)" }} className="p-8 rounded-lg">
                <div style={{ color: "var(--gold)" }} className="text-xs font-bold tracking-widest uppercase mb-2">{p.phase}</div>
                <h3 style={{ color: "var(--navy)" }} className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--navy)" }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3">How It Works</div>
          <h2 className="text-4xl font-bold text-white mb-10">What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left mb-10">
            {[
              { label: "Format", val: "Video calls (Zoom/Teams), asynchronous support between sessions" },
              { label: "Cadence", val: "Typically 2x/month for focused clients, 1x/month for maintenance" },
              { label: "Duration", val: "Minimum 3-month commitment — real change takes time" },
              { label: "Access", val: "Direct messaging between sessions for quick questions and accountability" },
              { label: "Tools", val: "Goal-setting frameworks, identity exercises, curated reading, action tracking" },
              { label: "Investment", val: "Application required — pricing discussed after discovery call" },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "#1e3a5f" }} className="p-5 rounded-lg">
                <div style={{ color: "var(--gold)" }} className="text-xs font-bold tracking-widest uppercase mb-1">{item.label}</div>
                <p className="text-gray-300">{item.val}</p>
              </div>
            ))}
          </div>
          <a href="/#contact" className="btn-primary">Apply for Coaching</a>
        </div>
      </section>

      <footer style={{ backgroundColor: "#0a1a30" }} className="py-8 px-6 text-center text-gray-500 text-sm">
        <p>© 2026 Jason St. Gelais · Maxwell Leadership Certified Team Member</p>
        <p className="mt-2"><a href="/" style={{ color: "var(--gold)" }}>← Back to Home</a></p>
      </footer>
    </main>
  );
}

