import Image from "next/image";
import { Award, Users, Mic, Target, ChevronRight, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* NAV */}
      <nav style={{ backgroundColor: "var(--navy)" }} className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl tracking-wide">
            Jason St. Gelais
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wider text-gray-300 uppercase">
            <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="#services" className="hover:text-yellow-400 transition-colors">Services</a>
            <a href="#speaking" className="hover:text-yellow-400 transition-colors">Speaking</a>
            <a href="#testimonials" className="hover:text-yellow-400 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
          </div>
          <a href="#contact" className="btn-primary text-sm py-2 px-6">Book a Call</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ backgroundColor: "var(--navy)", paddingTop: "120px", paddingBottom: "100px" }} className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-white">
              <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-4">
                Maxwell Leadership Certified Coach · Trainer · Speaker
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Level Up Your<br />
                <span style={{ color: "var(--gold)" }}>Leadership.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                I help leaders communicate powerfully, grow intentionally, and create real change in their organizations — using proven frameworks and a direct, no-fluff approach.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary">Book a Discovery Call</a>
                <a href="#services" className="btn-secondary">Explore Services</a>
              </div>
              <div className="flex gap-8 mt-12">
                <div>
                  <div style={{ color: "var(--gold)" }} className="text-3xl font-bold">20+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div>
                  <div style={{ color: "var(--gold)" }} className="text-3xl font-bold">40%</div>
                  <div className="text-gray-400 text-sm">Avg. Adoption Increase</div>
                </div>
                <div>
                  <div style={{ color: "var(--gold)" }} className="text-3xl font-bold">4.8/5</div>
                  <div className="text-gray-400 text-sm">Learner Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 flex justify-center">
              <Image
                src="/jason-headshot.png"
                alt="Jason St. Gelais - Leadership Coach, Trainer & Speaker"
                width={192}
                height={312}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIAL BAR */}
      <section style={{ backgroundColor: "var(--gold)" }} className="py-2 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-5" style={{ color: "var(--navy)" }}>
          <span className="text-xs font-bold tracking-widest uppercase">MBA · MS Leadership</span>
          <span className="text-xs font-bold">✦</span>
          <span className="text-xs font-bold tracking-widest uppercase">Agile SAFe 5.0</span>
          <span className="text-xs font-bold">✦</span>
          <span className="text-xs font-bold tracking-widest uppercase">McKinsey BPN Accelerator</span>
          <span className="text-xs font-bold">✦</span>
          <span className="text-xs font-bold tracking-widest uppercase">2× FedEx Innovation Finalist</span>
          <span className="text-xs font-bold">✦</span>
          <span className="text-xs font-bold tracking-widest uppercase">Maxwell Leadership Certified</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ backgroundColor: "var(--cream)" }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3">About Jason</div>
              <h2 className="section-title mb-6">Built for the<br />Real World of Leadership</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                With over 20 years spanning enterprise technology, learning & development, and leadership coaching, I bring a rare combination of corporate experience and personal growth methodology to every engagement.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                As a Maxwell Leadership Certified Team Member, I bring world-class leadership frameworks to leaders, teams, and organizations ready to grow beyond their current ceiling.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                My approach is direct, practical, and results-oriented. No fluff. No filler. Just the work that actually moves the needle.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <Image src="/Certified Trainer.png" alt="Maxwell Certified Trainer" width={64} height={64} className="object-contain" />
                <Image src="/ML Certified Team Logo.png" alt="Maxwell Leadership Certified Team" width={140} height={45} className="object-contain" />
              </div>
              <a href="#contact" className="btn-primary mt-6 inline-block">Let's Work Together</a>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              {[
                { icon: <Award size={28} />, label: "Maxwell Certified", sub: "Coach · Trainer · Speaker" },
                { icon: <Users size={28} />, label: "Enterprise Experience", sub: "FedEx · Chase · Higher Ed" },
                { icon: <Target size={28} />, label: "Results Focused", sub: "Measurable Impact" },
                { icon: <Mic size={28} />, label: "Keynote Speaker", sub: "Leadership · Growth · AI" },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: "white", border: "1px solid #e5e7eb" }} className="p-6 rounded-lg">
                  <div style={{ color: "var(--gold)" }} className="mb-3">{item.icon}</div>
                  <div style={{ color: "var(--navy)" }} className="font-bold mb-1">{item.label}</div>
                  <div className="text-gray-500 text-sm">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3">What I Offer</div>
            <h2 className="section-title">Services Built to<br />Transform Leaders</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "The Leadership Game",
                tag: "Workshop · 2-3 Hours",
                desc: "An immersive team experience that builds connection, surfaces leadership insights, and creates immediate opportunities for growth. The perfect entry point for teams ready to level up.",
                cta: "Book the Experience",
              },
              {
                title: "Leadership Training & Workshops",
                tag: "Half-Day · Full-Day · Multi-Session",
                desc: "From communication and influence to AI adoption in leadership — customized workshops that equip your team with principles they'll actually use. Based on Maxwell's proven frameworks and real-world application.",
                cta: "Explore Workshops",
              },
              {
                title: "Goal Setting Workshop",
                tag: "Group · 1:1",
                desc: "A structured, results-driven workshop that helps individuals get clarity on what they want, why it matters, and how to build the identity to achieve it. The starting point for transformational coaching.",
                cta: "Get Clarity",
              },
              {
                title: "1:1 Leadership Coaching",
                tag: "Ongoing · Package-Based",
                desc: "Personalized coaching for leaders ready to do the real work. We go beyond surface goals into identity, belief, and the mindset shifts that create lasting change. Application required.",
                cta: "Apply for Coaching",
              },
              {
                title: "Keynote Speaking",
                tag: "Events · Conferences · Corporate",
                desc: "Engaging, story-driven keynotes on leadership, communication, connection, growth, and the future of leadership in an AI-driven world. Audiences leave with tools they can use immediately.",
                cta: "Book Jason to Speak",
              },
              {
                title: "AI Leadership Adoption",
                tag: "Corporate Training",
                desc: "Help your leadership team understand how to drive real AI adoption — not just install tools, but create the culture, communication strategy, and change management framework that makes it stick.",
                cta: "Lead the Change",
                href: "/services/ai-leadership-adoption",
              },
            ].map((s, i) => (
              <div key={i} style={{ border: "1px solid #e5e7eb", borderTop: "4px solid var(--gold)" }} className="p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div style={{ color: "var(--gold)" }} className="text-xs font-bold tracking-widest uppercase mb-2">{s.tag}</div>
                <h3 style={{ color: "var(--navy)" }} className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{s.desc}</p>
                <a href={"href" in s ? s.href : "#contact"} className="flex items-center gap-2 font-bold text-sm" style={{ color: "var(--navy)" }}>
                  {s.cta} <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKING */}
      <section id="speaking" style={{ backgroundColor: "var(--navy)" }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3">Keynote Speaking</div>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Inspire Your Audience?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Jason delivers high-energy, content-rich keynotes that blend real-world experience with actionable frameworks. Topics include leadership, communication, connection, growth, and AI adoption.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Leadership Principles", "Communication & Influence", "Growth Mindset", "AI & The Future of Leadership", "Building Connection", "Team Development"].map((t, i) => (
              <span key={i} style={{ border: "1px solid var(--gold)", color: "var(--gold)" }} className="px-4 py-2 rounded-full text-sm font-semibold">
                {t}
              </span>
            ))}
          </div>
          <a href="#contact" className="btn-primary">Inquire About Speaking</a>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section id="testimonials" style={{ backgroundColor: "var(--cream)" }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3">What People Say</div>
          <h2 className="section-title mb-12">Real Results, Real People</h2>
          <div style={{ backgroundColor: "white", border: "1px solid #e5e7eb", borderTop: "4px solid var(--gold)" }} className="p-10 rounded-lg shadow-sm">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#c9a84c" color="#c9a84c" />)}
            </div>
            <p className="text-gray-700 text-xl leading-relaxed italic mb-8">
              "Jason helped me make a cybersecurity presentation that was engaging, had great flow, and created the sense of urgency I was looking for. His coaching was always upbeat while giving me the constructive criticism I needed. I presented to around 40 businesses — for my first time presenting, I was asked if I did this often and received tons of compliments. I highly recommend Jason to anyone creating a presentation or training."
            </p>
            <div>
              <div style={{ color: "var(--navy)" }} className="font-bold text-lg">Andy Bradford</div>
              <div className="text-gray-500">Owner, DandyIT.com</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" style={{ backgroundColor: "var(--navy)" }} className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div style={{ color: "var(--gold)" }} className="text-sm font-bold tracking-widest uppercase mb-3">Get Started</div>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Level Up?</h2>
          <p className="text-gray-300 text-lg mb-10">
            Whether you're looking for a speaker, a trainer for your team, or a coach to help you break through — let's have a conversation.
          </p>
          <div style={{ backgroundColor: "#1e3a5f" }} className="p-8 rounded-lg mb-6">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input type="text" placeholder="Your Name" className="flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded px-4 py-3 outline-none focus:border-yellow-400" />
                <input type="email" placeholder="Your Email" className="flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded px-4 py-3 outline-none focus:border-yellow-400" />
              </div>
              <select className="bg-white/10 border border-white/20 text-gray-400 rounded px-4 py-3 outline-none focus:border-yellow-400">
                <option value="">What are you interested in?</option>
                <option>Keynote Speaking</option>
                <option>Leadership Workshop / Training</option>
                <option>The Leadership Game</option>
                <option>Goal Setting Workshop</option>
                <option>1:1 Coaching</option>
                <option>AI Leadership Adoption</option>
              </select>
              <textarea placeholder="Tell me a bit about what you're looking for..." rows={4} className="bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded px-4 py-3 outline-none focus:border-yellow-400 resize-none" />
              <button type="submit" className="btn-primary w-full text-center">Send Message</button>
            </form>
          </div>
          <p className="text-gray-400 text-sm">Or email directly: <a href="mailto:jason@stgelaisleadership.com" style={{ color: "var(--gold)" }}>jason@stgelaisleadership.com</a></p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#0a1a30" }} className="py-8 px-6 text-center text-gray-500 text-sm">
        <p>© 2026 Jason St. Gelais · Maxwell Leadership Certified Team Member</p>
        <p className="mt-2">
          <a href="https://www.johncmaxwellgroup.com/jasonstgelais" style={{ color: "var(--gold)" }} target="_blank" rel="noopener noreferrer">
            View Maxwell Profile
          </a>
        </p>
      </footer>
    </main>
  );
}
