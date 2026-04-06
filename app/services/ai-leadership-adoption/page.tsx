import Image from "next/image";
import { CheckCircle, ArrowRight, Download, Users, TrendingUp, Shield, Zap, MessageSquare, BarChart } from "lucide-react";
import type { Metadata } from "next";
import Nav from "../../components/Nav";

export const metadata: Metadata = {
  title: "AI Leadership Adoption | Jason St. Gelais",
  description: "Help your leadership team drive real AI adoption — not just deploy tools, but create lasting cultural and behavioral change. Download the free AI Adoption Checklist.",
};

export default function AILeadershipAdoption() {
  return (
    <main className="min-h-screen">
      {/* NAV */}
      <nav style={{ backgroundColor: "var(--navy)" }} className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl tracking-wide hover:text-yellow-400 transition-colors">
            Jason St. Gelais
          </a>
          <a href="/#contact" className="btn-primary text-sm py-2 px-6">Book a Call</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ backgroundColor: "var(--navy)", paddingTop: "120px", paddingBottom: "80px" }} className="px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-4">
            AI Leadership Adoption
          </div>
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            Your Team Has the Tools.<br />
            <span style={{ color: "var(--gold)" }}>Why Isn't Anyone Using Them?</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Deploying AI is a technology challenge. Getting people to <em>adopt</em> it is a leadership one. Most rollouts stall not because the tools are hard — but because no one led the human side of change.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#download" className="btn-primary">Download Free Checklist</a>
            <a href="/#contact" className="btn-secondary">Book a Discovery Call</a>
          </div>
        </div>
      </section>

      {/* STAT BAR */}
      <section style={{ backgroundColor: "var(--gold)" }} className="py-6 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center" style={{ color: "var(--navy)" }}>
          <div>
            <div className="text-3xl font-bold">70%</div>
            <div className="text-sm font-semibold mt-1">of large-scale transformation programs fail — not due to technology, but human resistance (McKinsey)</div>
          </div>
          <div>
            <div className="text-3xl font-bold">40%</div>
            <div className="text-sm font-semibold mt-1">avg. adoption increase when leaders are equipped with the right change frameworks</div>
          </div>
          <div>
            <div className="text-3xl font-bold">7</div>
            <div className="text-sm font-semibold mt-1">leadership principles that determine whether AI adoption thrives or stalls</div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ backgroundColor: "var(--cream)" }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3 text-center">The Real Problem</div>
          <h2 className="section-title text-center mb-12">Sound Familiar?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "You secured budget and leadership buy-in, ran the rollout — but usage is lower than projected",
              "The initial excitement has cooled and the promise of transformation feels just out of reach",
              "Nobody explained why this change matters in terms that connect to people's daily work",
              "Senior leaders expected adoption but weren't visibly modeling it themselves",
              "People are afraid to fail, so they're not experimenting — they're just complying",
              "There's no feedback loop, so you don't know what's blocking progress",
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "white", borderLeft: "4px solid var(--gold)" }} className="p-5 rounded-r-lg flex gap-3">
                <CheckCircle style={{ color: "var(--gold)", flexShrink: 0 }} size={20} className="mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <p style={{ color: "var(--navy)" }} className="text-center text-xl font-bold mt-10">
            The answer isn't more features or more licenses. It's better leadership.
          </p>
        </div>
      </section>

      {/* 7 PRINCIPLES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3 text-center">The Framework</div>
          <h2 className="section-title text-center mb-4">7 Principles of AI Adoption Leadership</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">From my field guide for IT executives and digital transformation leaders — the principles that separate a compliant rollout from a compounding adoption engine.</p>
          <div className="space-y-6">
            {[
              { icon: <MessageSquare size={24} />, num: "01", title: "Communicate the Why — In Terms That Matter to Daily Work", desc: "Adoption doesn't fail because the tool is hard to use. It fails because nobody explained why it matters. People don't change behavior for organizational goals — they change when they understand the personal impact." },
              { icon: <Users size={24} />, num: "02", title: "Know Your Champions and Resistors Before You Launch", desc: "Every team has both. Champions accelerate adoption when equipped early. Resistors slow it when ignored. Treating everyone identically is the fastest way to lose both." },
              { icon: <TrendingUp size={24} />, num: "03", title: "Leaders Must Model the Behavior — Not Just Mandate It", desc: "If senior leaders aren't visibly using the tools, adoption signals get crossed. People watch what you do, not what you say. If leadership isn't using it, why should they?" },
              { icon: <Zap size={24} />, num: "04", title: "Eliminate Overwhelm Before It Kills Momentum", desc: "Launching everything at once is the adoption killer nobody talks about. The best rollouts create small, early wins that build confidence — not comprehensive training marathons." },
              { icon: <Shield size={24} />, num: "05", title: "Create Psychological Safety for Experimentation", desc: "Without psychological safety, people won't try new things. If performance signals are tied to getting it right the first time, experimentation dies — and so does adoption." },
              { icon: <MessageSquare size={24} />, num: "06", title: "Build a Tight Feedback Loop That People Can See Working", desc: "If people give feedback and nothing changes, they stop giving it. The best adoption engines create visible response loops where input tangibly shapes direction." },
              { icon: <BarChart size={24} />, num: "07", title: "Measure Adoption Behavior — Not Just License Access", desc: "Access and adoption are not the same metric. Most organizations measure seat licenses. The best measure behavioral change — who is using it, how often, and with what outcome." },
            ].map((p, i) => (
              <div key={i} style={{ border: "1px solid #e5e7eb", borderLeft: "4px solid var(--gold)" }} className="p-6 rounded-r-lg flex gap-5">
                <div className="flex-shrink-0">
                  <div style={{ backgroundColor: "var(--navy)", color: "var(--gold)" }} className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm">{p.num}</div>
                </div>
                <div>
                  <div style={{ color: "var(--gold)" }} className="mb-2">{p.icon}</div>
                  <h3 style={{ color: "var(--navy)" }} className="font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE EBOOK DOWNLOAD */}
      <section id="download" style={{ backgroundColor: "var(--navy)" }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3">Free Resource</div>
          <h2 className="text-4xl font-bold text-white mb-6">The IT Leader's AI Adoption Checklist</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            A practical, human-centered field guide for IT executives and program owners who have invested in AI but aren't seeing meaningful adoption. Includes self-assessment, coaching questions, and action steps for each of the 7 principles.
          </p>
          <a
            href="/ai-leadership-adoption-checklist.pdf"
            download
            className="btn-primary inline-flex items-center gap-3 text-lg py-4 px-8"
          >
            <Download size={20} />
            Download Free Checklist (PDF)
          </a>
          <p className="text-gray-500 text-sm mt-4">No email required — just click and download</p>
        </div>
      </section>

      {/* HOW I HELP */}
      <section style={{ backgroundColor: "var(--cream)" }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3 text-center">How I Help</div>
          <h2 className="section-title text-center mb-12">From Insight to Organizational Action</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "AI Adoption Workshop", desc: "Half-day or full-day workshop for leadership teams. We diagnose your current adoption gaps, map your champions and resistors, and build a 90-day action plan.", cta: "Book Workshop" },
              { title: "Leadership Team Coaching", desc: "Ongoing coaching for your leadership team to build the behaviors, communication strategies, and cultural conditions that sustain AI adoption long-term.", cta: "Explore Coaching" },
              { title: "Keynote: AI & The Future of Leadership", desc: "An engaging, research-backed keynote for your next conference, all-hands, or leadership summit. Real stories, actionable takeaways, and a framework your leaders can use immediately.", cta: "Book Jason to Speak" },
            ].map((s, i) => (
              <div key={i} style={{ backgroundColor: "white", borderTop: "4px solid var(--gold)" }} className="p-8 rounded-lg">
                <h3 style={{ color: "var(--navy)" }} className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-600 mb-6">{s.desc}</p>
                <a href="/#contact" className="flex items-center gap-2 font-bold text-sm" style={{ color: "var(--navy)" }}>
                  {s.cta} <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--navy)" }} className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Turn Access Into Adoption?</h2>
          <p className="text-gray-300 mb-8">Let's talk about what's blocking your team and build a plan to fix it.</p>
          <a href="/#contact" className="btn-primary">Book a Free Discovery Call</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#0a1a30" }} className="py-8 px-6 text-center text-gray-500 text-sm">
        <p>© 2026 Jason St. Gelais · Maxwell Leadership Certified Team Member</p>
        <p className="mt-2"><a href="/" style={{ color: "var(--gold)" }}>← Back to Home</a></p>
      </footer>
    </main>
  );
}

