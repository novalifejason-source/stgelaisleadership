import Image from "next/image";
import type { Metadata } from "next";
import Nav from "../../components/Nav";
import { CheckCircle, Mic, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Keynote Speaking | Jason St. Gelais",
  description: "Engaging keynote speaker on leadership, communication, connection, growth, and AI adoption. Maxwell Leadership Certified. Available for conferences, corporate events, and leadership summits.",
};

export default function Speaking() {
  return (
    <main className="min-h-screen">
      <nav style={{ backgroundColor: "var(--navy)" }} className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl tracking-wide hover:text-yellow-400 transition-colors">Jason St. Gelais</a>
          <a href="/#contact" className="btn-primary text-sm py-2 px-6">Book Jason to Speak</a>
        </div>
      </nav>

      <section style={{ backgroundColor: "var(--navy)", paddingTop: "120px", paddingBottom: "80px" }} className="px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-4">Keynote Speaking</div>
            <h1 className="text-5xl font-bold text-white leading-tight mb-6">
              A Speaker Who Leaves<br />
              <span style={{ color: "var(--gold)" }}>Your Audience Changed.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Not just entertained. Not just inspired. Actually equipped with frameworks they can use the next day. That's the difference between a motivational talk and a Jason St. Gelais keynote.
            </p>
            <a href="/#contact" className="btn-primary">Check Availability</a>
          </div>
          <div className="flex-shrink-0">
            <Image src="/John Maxwell Image 1.jpg" alt="Jason St. Gelais Speaking" width={400} height={320} className="rounded-lg shadow-2xl object-cover" />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--gold)" }} className="py-3 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6" style={{ color: "var(--navy)" }}>
          <span className="text-xs font-bold tracking-widest uppercase">Conferences & Summits</span>
          <span className="text-xs font-bold">✦</span>
          <span className="text-xs font-bold tracking-widest uppercase">Corporate Events</span>
          <span className="text-xs font-bold">✦</span>
          <span className="text-xs font-bold tracking-widest uppercase">Leadership Retreats</span>
          <span className="text-xs font-bold">✦</span>
          <span className="text-xs font-bold tracking-widest uppercase">All-Hands & Kickoffs</span>
          <span className="text-xs font-bold">✦</span>
          <span className="text-xs font-bold tracking-widest uppercase">Virtual Events</span>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)" }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3 text-center">Signature Topics</div>
          <h2 className="section-title text-center mb-12">Keynote Programs</h2>
          <div className="space-y-8">
            {[
              {
                title: "Level Up Your Leadership",
                duration: "45-90 min",
                desc: "The foundational leadership keynote. Using Maxwell's proven principles and real-world examples from 20+ years in enterprise environments, this talk gives audiences a clear framework for intentional, consistent growth — and the mindset shift that makes it sustainable.",
                outcomes: ["The 3 levels most leaders stay stuck at — and how to break through", "The Law of the Lid and how it's showing up in your organization right now", "A personal growth rhythm that works even when life is busy"],
              },
              {
                title: "The Communication Advantage",
                duration: "45-90 min",
                desc: "Communication is the most important leadership skill nobody taught you. This keynote breaks down the specific behaviors that separate influential communicators from everyone else — and gives audiences tools they can implement in their next conversation.",
                outcomes: ["Why most feedback fails (and what to do instead)", "The influence framework that works without authority", "How to read a room and adapt your message in real time"],
              },
              {
                title: "Leading AI Adoption: The Human Side of Digital Change",
                duration: "45-75 min",
                desc: "Your organization is rolling out AI. The technology isn't the problem — the people are. This keynote reframes AI adoption as a leadership challenge, gives leaders 7 principles for driving real behavioral change, and shifts the conversation from 'tool deployment' to 'transformation.'",
                outcomes: ["Why 70% of AI rollouts underperform (McKinsey)", "The 7 leadership behaviors that drive adoption", "What the best-performing digital transformation leaders do differently"],
                featured: true,
              },
              {
                title: "Connection: The Leadership Superpower",
                duration: "30-60 min",
                desc: "Leaders who connect lead better, retain better, and perform better. This talk explores the neuroscience and practical behaviors behind genuine connection — and why most leaders systematically underinvest in it.",
                outcomes: ["The connection behaviors high-trust leaders demonstrate daily", "Why remote leadership requires more intentionality, not less", "Practical ways to build connection at scale"],
              },
            ].map((t, i) => (
              <div key={i} style={{ border: `1px solid #e5e7eb`, borderLeft: `4px solid var(--gold)`, backgroundColor: t.featured ? "#fff9ee" : "white" }} className="p-8 rounded-r-lg">
                <div className="flex flex-wrap gap-3 items-center mb-3">
                  <h3 style={{ color: "var(--navy)" }} className="text-xl font-bold">{t.title}</h3>
                  <span style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }} className="text-xs font-bold px-3 py-1 rounded-full">{t.duration}</span>
                  {t.featured && <span style={{ backgroundColor: "var(--navy)", color: "var(--gold)" }} className="text-xs font-bold px-3 py-1 rounded-full">Most Requested</span>}
                </div>
                <p className="text-gray-600 mb-5">{t.desc}</p>
                <div className="space-y-2">
                  {t.outcomes.map((o, j) => (
                    <div key={j} className="flex gap-2 text-sm text-gray-700">
                      <CheckCircle style={{ color: "var(--gold)", flexShrink: 0 }} size={15} className="mt-0.5" />
                      {o}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--navy)" }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3">What to Expect</div>
          <h2 className="text-4xl font-bold text-white mb-10">Working With Jason</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              { title: "Pre-Event Discovery", desc: "Every engagement starts with a conversation about your audience, goals, and what you need them to leave with." },
              { title: "Customized Content", desc: "I don't do canned talks. Your industry, your challenges, and your audience shape every keynote." },
              { title: "High-Energy Delivery", desc: "Stories, humor, challenge, and practical tools — audiences stay engaged because the content earns their attention." },
              { title: "Post-Event Follow-Through", desc: "Optional workshop add-ons and resource packages help your audience turn the keynote into real behavior change." },
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
          <Mic size={48} style={{ color: "var(--gold)" }} className="mx-auto mb-4" />
          <h2 className="section-title mb-4">Ready to Book Jason?</h2>
          <p className="text-gray-600 mb-8">Share your event details and I'll get back to you within 24 hours to discuss availability, fees, and fit.</p>
          <a href="/#contact" className="btn-primary">Check Availability</a>
        </div>
      </section>

      <footer style={{ backgroundColor: "#0a1a30" }} className="py-8 px-6 text-center text-gray-500 text-sm">
        <p>© 2026 Jason St. Gelais · Maxwell Leadership Certified Team Member</p>
        <p className="mt-2"><a href="/" style={{ color: "var(--gold)" }}>← Back to Home</a></p>
      </footer>
    </main>
  );
}

