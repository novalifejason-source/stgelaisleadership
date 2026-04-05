import type { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Leadership Workshops & Training | Jason St. Gelais",
  description: "Customized leadership workshops and training programs for teams and organizations. Communication, influence, AI adoption, and Maxwell's proven growth principles.",
};

export default function Workshops() {
  return (
    <main className="min-h-screen">
      <nav style={{ backgroundColor: "var(--navy)" }} className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl tracking-wide hover:text-yellow-400 transition-colors">Jason St. Gelais</a>
          <a href="/#contact" className="btn-primary text-sm py-2 px-6">Book a Workshop</a>
        </div>
      </nav>

      <section style={{ backgroundColor: "var(--navy)", paddingTop: "120px", paddingBottom: "80px" }} className="px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-4">Leadership Training & Workshops</div>
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            Training That Actually<br />
            <span style={{ color: "var(--gold)" }}>Changes Behavior.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Most training events produce good notes and forgotten intentions. These workshops are designed differently — built on adult learning principles, real-world application, and follow-through frameworks that make the growth stick.
          </p>
          <a href="/#contact" className="btn-primary">Request a Workshop</a>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--gold)" }} className="py-3 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-center" style={{ color: "var(--navy)" }}>
          <span className="text-xs font-bold tracking-widest uppercase">Half-Day · Full-Day · Multi-Session</span>
          <span className="text-xs font-bold">✦</span>
          <span className="text-xs font-bold tracking-widest uppercase">In-Person or Virtual</span>
          <span className="text-xs font-bold">✦</span>
          <span className="text-xs font-bold tracking-widest uppercase">Corporate & Small Business</span>
          <span className="text-xs font-bold">✦</span>
          <span className="text-xs font-bold tracking-widest uppercase">Customized to Your Team</span>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)" }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3 text-center">Workshop Topics</div>
          <h2 className="section-title text-center mb-12">Choose Your Focus</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Communication & Influence",
                desc: "How leaders communicate is how they lead. This workshop teaches the frameworks behind clear, compelling communication — active listening, message framing, influence without authority, and delivering feedback that actually lands.",
                outcomes: ["DiSC-style communication style awareness", "Influence frameworks for non-authority situations", "Feedback models that build trust, not resentment"],
              },
              {
                title: "The 15 Laws of Growth",
                desc: "Based on John Maxwell's proven growth principles, this workshop helps leaders identify where they're growing and where they've stalled — and gives them a practical roadmap for intentional, consistent development.",
                outcomes: ["Personal growth audit", "Identifying your growth ceiling", "Building a sustainable growth rhythm"],
              },
              {
                title: "AI Adoption for Leaders",
                desc: "Your organization invested in AI. Now you need leaders who know how to drive actual adoption — not just mandate it. This workshop equips leaders with the human-centered change management skills that make AI transformation real.",
                outcomes: ["7 principles of AI adoption leadership", "Champion/resistor mapping", "90-day adoption action plan"],
                link: "/services/ai-leadership-adoption",
              },
              {
                title: "Building High-Trust Teams",
                desc: "Trust isn't built in a day — but it can be intentionally accelerated. This workshop gives leaders and teams a shared framework for building the psychological safety, vulnerability, and reliability that high-performing teams require.",
                outcomes: ["Trust assessment and gap analysis", "Vulnerability-based trust exercises", "Team agreements and norms framework"],
              },
              {
                title: "Leading Through Change",
                desc: "Change is constant, but most leaders have never been taught how to lead people through it. This workshop combines change management theory with practical leadership behaviors that reduce resistance and accelerate adoption.",
                outcomes: ["Change curve awareness and application", "Communication strategies for each change stage", "Stakeholder engagement frameworks"],
              },
              {
                title: "Custom Workshop",
                desc: "Have a specific challenge your team is facing? I design custom workshops around your organization's specific needs, culture, and goals. Starting with a discovery conversation, we build something that fits your situation exactly.",
                outcomes: ["Discovery call to define objectives", "Custom curriculum design", "Pre and post-workshop assessment"],
              },
            ].map((w, i) => (
              <div key={i} style={{ border: "1px solid #e5e7eb", borderTop: "4px solid var(--gold)" }} className="p-8 rounded-lg">
                <h3 style={{ color: "var(--navy)" }} className="text-xl font-bold mb-3">{w.title}</h3>
                <p className="text-gray-600 mb-5">{w.desc}</p>
                <div className="space-y-2 mb-6">
                  {w.outcomes.map((o, j) => (
                    <div key={j} className="flex gap-2 text-sm text-gray-700">
                      <CheckCircle style={{ color: "var(--gold)", flexShrink: 0 }} size={15} className="mt-0.5" />
                      {o}
                    </div>
                  ))}
                </div>
                <a href={"link" in w ? w.link! : "/#contact"} className="flex items-center gap-2 font-bold text-sm" style={{ color: "var(--navy)" }}>
                  {("link" in w) ? "Learn More" : "Request This Workshop"} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--navy)" }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3">My Approach</div>
          <h2 className="text-4xl font-bold text-white mb-8">Why This Training Is Different</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              { title: "Built for Adults", desc: "Every workshop uses adult learning principles — no lecture-only formats. Participants do, reflect, discuss, and apply." },
              { title: "Customized to You", desc: "I don't deliver the same deck to every client. I start with your challenges and build from there." },
              { title: "Measurable Outcomes", desc: "We define success before the workshop and measure it after. You know what changed." },
              { title: "Practical, Not Theoretical", desc: "20+ years of enterprise experience means every principle comes with a real-world application." },
            ].map((p, i) => (
              <div key={i} style={{ backgroundColor: "#1e3a5f" }} className="p-6 rounded-lg">
                <h4 style={{ color: "var(--gold)" }} className="font-bold mb-2">{p.title}</h4>
                <p className="text-gray-300 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)" }} className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title mb-4">Let's Build Something for Your Team</h2>
          <p className="text-gray-600 mb-8">Tell me about your team, your goals, and what you're trying to solve. I'll come back with a recommendation.</p>
          <a href="/#contact" className="btn-primary">Request a Workshop</a>
        </div>
      </section>

      <footer style={{ backgroundColor: "#0a1a30" }} className="py-8 px-6 text-center text-gray-500 text-sm">
        <p>© 2026 Jason St. Gelais · Maxwell Leadership Certified Team Member</p>
        <p className="mt-2"><a href="/" style={{ color: "var(--gold)" }}>← Back to Home</a></p>
      </footer>
    </main>
  );
}
