import type { Metadata } from "next";
import Nav from "../../components/Nav";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Goal Setting Workshop | Jason St. Gelais",
  description: "A structured, results-driven workshop that creates clarity on what you want, why it matters, and the identity shifts required to achieve it.",
};

export default function GoalSetting() {
  return (
    <main className="min-h-screen">
      <nav style={{ backgroundColor: "var(--navy)" }} className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl tracking-wide hover:text-yellow-400 transition-colors">Jason St. Gelais</a>
          <a href="/#contact" className="btn-primary text-sm py-2 px-6">Register Now</a>
        </div>
      </nav>

      <section style={{ backgroundColor: "var(--navy)", paddingTop: "120px", paddingBottom: "80px" }} className="px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-4">Goal Setting Workshop · Group & 1:1</div>
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            Stop Setting Goals.<br />
            <span style={{ color: "var(--gold)" }}>Start Living Your Direction.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Most people don't have a goal problem. They have a clarity problem. This workshop cuts through the noise and gives you a clear, grounded direction — and the identity framework to actually follow through.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#contact" className="btn-primary">Register for Next Session</a>
            <a href="/services/coaching" className="btn-secondary">Upgrade to Full Coaching</a>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)" }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3 text-center">What You'll Walk Away With</div>
          <h2 className="section-title text-center mb-12">Results, Not Just Motivation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "A personal direction statement that actually means something to you",
              "Clarity on the 3 areas of your life that need the most attention right now",
              "Your core values defined — not from a list, but from your own story",
              "A 90-day action plan with specific, measurable first steps",
              "An identity blueprint — who you need to become to hit your goals",
              "A decision-making filter you can use immediately when you're stuck",
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle style={{ color: "var(--gold)", flexShrink: 0 }} size={20} className="mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3 text-center">Workshop Options</div>
          <h2 className="section-title text-center mb-12">Choose Your Format</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Group Workshop",
                tag: "4-6 Hours · Up to 20 Participants",
                desc: "A full-day experience with a small group of leaders going through the process together. Group energy accelerates insight. Includes breakout exercises, peer accountability pairs, and a shared commitment session.",
                features: ["Full-day facilitated experience", "Pre-work assessment", "Workbook included", "90-day follow-up check-in"],
                cta: "Register for Group Session",
              },
              {
                title: "Private 1:1 Workshop",
                tag: "3 Hours · Individual",
                desc: "A focused, personalized session where we go deep on your specific situation. More time to explore what's really blocking you and create a direction that fits your actual life — not a template.",
                features: ["3-hour private session", "Customized to your situation", "Recorded for reference", "Leads into coaching package option"],
                cta: "Book Private Session",
              },
            ].map((opt, i) => (
              <div key={i} style={{ border: "1px solid #e5e7eb", borderTop: "4px solid var(--gold)" }} className="p-8 rounded-lg">
                <div style={{ color: "var(--gold)" }} className="text-xs font-bold tracking-widest uppercase mb-2">{opt.tag}</div>
                <h3 style={{ color: "var(--navy)" }} className="text-2xl font-bold mb-3">{opt.title}</h3>
                <p className="text-gray-600 mb-6">{opt.desc}</p>
                <ul className="space-y-2 mb-8">
                  {opt.features.map((f, j) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-700">
                      <CheckCircle style={{ color: "var(--gold)", flexShrink: 0 }} size={16} className="mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/#contact" className="flex items-center gap-2 font-bold" style={{ color: "var(--navy)" }}>
                  {opt.cta} <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--navy)" }} className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">This Is the Starting Point</h2>
          <p className="text-gray-300 mb-4">The Goal Setting Workshop is the foundation for 1:1 coaching. Participants who complete the workshop and want to go deeper can apply for a coaching package.</p>
          <a href="/services/coaching" className="flex items-center justify-center gap-2 font-bold" style={{ color: "var(--gold)" }}>
            Learn about 1:1 Coaching <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <footer style={{ backgroundColor: "#0a1a30" }} className="py-8 px-6 text-center text-gray-500 text-sm">
        <p>© 2026 Jason St. Gelais · Maxwell Leadership Certified Team Member</p>
        <p className="mt-2"><a href="/" style={{ color: "var(--gold)" }}>← Back to Home</a></p>
      </footer>
    </main>
  );
}

