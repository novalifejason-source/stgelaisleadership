import type { Metadata } from "next";
import Nav from "../../components/Nav";
import { CheckCircle, Clock, Users, Target, ArrowRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "The Leadership Game | Jason St. Gelais",
  description: "A 2-3 hour immersive team-building experience that reveals leadership dynamics, builds connection, and opens the door to deeper organizational growth.",
};

export default function LeadershipGame() {
  return (
    <main className="min-h-screen">
      <nav style={{ backgroundColor: "var(--navy)" }} className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl tracking-wide hover:text-yellow-400 transition-colors">Jason St. Gelais</a>
          <a href="/#contact" className="btn-primary text-sm py-2 px-6">Book a Call</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ backgroundColor: "var(--navy)", paddingTop: "120px", paddingBottom: "80px" }} className="px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-4">Team Experience · 2-3 Hours</div>
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            The Leadership Game
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            An immersive, high-energy team experience that builds connection, surfaces leadership insights, and creates the conversations your team has been avoiding — in a way that actually feels good.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#contact" className="btn-primary">Book the Experience</a>
            <a href="/#contact" className="btn-secondary">Ask a Question</a>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section style={{ backgroundColor: "var(--gold)" }} className="py-6 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center" style={{ color: "var(--navy)" }}>
          {[
            { icon: <Clock size={20} />, label: "2-3 Hours", sub: "Duration" },
            { icon: <Users size={20} />, label: "5-50+", sub: "Team Size" },
            { icon: <Target size={20} />, label: "In-Person or Virtual", sub: "Format" },
            { icon: <Zap size={20} />, label: "Same Day Impact", sub: "Results" },
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              {f.icon}
              <div className="font-bold">{f.label}</div>
              <div className="text-xs">{f.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT IT IS */}
      <section style={{ backgroundColor: "var(--cream)" }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3">What It Is</div>
          <h2 className="section-title mb-6">More Than Team Building.<br />It's a Leadership Mirror.</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The Leadership Game is a structured, competitive team experience where participants don't just play — they lead. Designed around proven leadership principles, the game reveals how your team communicates under pressure, who naturally steps up, where trust gaps exist, and what your culture actually looks like when the stakes feel real.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            For leaders, it's a diagnostic tool. For teams, it's a breakthrough experience. For organizations, it's the entry point to something bigger.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Reveals authentic communication styles under pressure",
              "Surfaces natural leaders and identifies development gaps",
              "Builds psychological safety through shared experience",
              "Creates a common language for future growth conversations",
              "Generates data — I observe and debrief what I see",
              "Opens the door to deeper coaching and training engagements",
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle style={{ color: "var(--gold)", flexShrink: 0 }} size={20} className="mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3 text-center">How It Works</div>
          <h2 className="section-title text-center mb-12">The Experience Flow</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Pre-Game Setup (15 min)", desc: "I introduce the game, establish the rules, and create the context for why this experience matters. Teams are formed and the energy is set." },
              { step: "02", title: "The Game (90-120 min)", desc: "Teams compete through a series of leadership challenges that test communication, strategy, trust, and decision-making under pressure. The game unfolds — and so does your team's true dynamic." },
              { step: "03", title: "Debrief & Insight (30-45 min)", desc: "This is where the real value lives. I facilitate a structured debrief that connects what happened in the game to what's happening in your organization. Specific, observable, actionable." },
              { step: "04", title: "Next Steps Conversation", desc: "Every leadership game ends with a natural opening to go deeper. I share what I observed and offer a path forward — whether that's a workshop, coaching, or simply a follow-up conversation." },
            ].map((s, i) => (
              <div key={i} style={{ borderLeft: "4px solid var(--gold)" }} className="pl-6">
                <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-1">Step {s.step}</div>
                <h3 style={{ color: "var(--navy)" }} className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ backgroundColor: "var(--navy)" }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3">Who It's For</div>
          <h2 className="text-4xl font-bold text-white mb-10">Perfect For Any Team That Wants to Grow</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Corporate Teams", desc: "Department offsites, leadership retreats, quarterly kickoffs, new team formation" },
              { title: "Leadership Development Programs", desc: "Add a live experience to your L&D curriculum that creates immediate behavioral insight" },
              { title: "Executive Teams", desc: "High-stakes teams that need a safe container to surface real dynamics and build trust" },
            ].map((g, i) => (
              <div key={i} style={{ backgroundColor: "#1e3a5f", border: "1px solid rgba(201,168,76,0.3)" }} className="p-6 rounded-lg">
                <h3 style={{ color: "var(--gold)" }} className="font-bold text-lg mb-3">{g.title}</h3>
                <p className="text-gray-300">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--cream)" }} className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title mb-4">Ready to Play?</h2>
          <p className="text-gray-600 mb-8 text-lg">Let's talk about your team, your goals, and whether The Leadership Game is the right fit.</p>
          <a href="/#contact" className="btn-primary">Book the Leadership Game</a>
        </div>
      </section>

      <footer style={{ backgroundColor: "#0a1a30" }} className="py-8 px-6 text-center text-gray-500 text-sm">
        <p>© 2026 Jason St. Gelais · Maxwell Leadership Certified Team Member</p>
        <p className="mt-2"><a href="/" style={{ color: "var(--gold)" }}>← Back to Home</a></p>
      </footer>
    </main>
  );
}

