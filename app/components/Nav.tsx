"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
  { label: "The Leadership Game", href: "/services/leadership-game" },
  { label: "Workshops & Training", href: "/services/workshops" },
  { label: "Goal Setting Workshop", href: "/services/goal-setting" },
  { label: "1:1 Coaching", href: "/services/coaching" },
  { label: "Keynote Speaking", href: "/services/speaking" },
  { label: "AI Leadership Adoption", href: "/services/ai-leadership-adoption" },
];

export default function Nav({ home = false }: { home?: boolean }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const prefix = home ? "" : "/";

  return (
    <nav
      style={{ backgroundColor: "var(--navy)" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-white font-bold text-xl tracking-wide hover:text-yellow-400 transition-colors">
          Jason St. Gelais
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wider text-gray-300 uppercase items-center">
          <a href={home ? "#about" : "/#about"} className="hover:text-yellow-400 transition-colors">About</a>

          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button
              className="flex items-center gap-1 hover:text-yellow-400 transition-colors uppercase font-semibold tracking-wider"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div
                style={{ backgroundColor: "var(--navy)", border: "1px solid rgba(201,168,76,0.3)", top: "calc(100% + 8px)" }}
                className="absolute left-0 w-64 rounded-lg shadow-2xl overflow-hidden"
              >
                {services.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                    className="block px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors text-xs tracking-wider uppercase font-semibold"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href={home ? "#speaking" : "/#speaking"} className="hover:text-yellow-400 transition-colors">Speaking</a>
          <a href={home ? "#testimonials" : "/#testimonials"} className="hover:text-yellow-400 transition-colors">Testimonials</a>
          <a href={home ? "#contact" : "/#contact"} className="hover:text-yellow-400 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href={home ? "#contact" : "/#contact"} className="btn-primary text-sm py-2 px-6 hidden md:inline-block">Book a Call</a>
          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: "var(--navy)", borderTop: "1px solid rgba(201,168,76,0.2)" }} className="md:hidden mt-4 pb-4">
          <div className="flex flex-col gap-1">
            <a href={home ? "#about" : "/#about"} className="px-4 py-3 text-gray-300 hover:text-yellow-400 text-sm font-semibold tracking-wider uppercase" onClick={() => setMobileOpen(false)}>About</a>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }} className="py-1">
              <div className="px-4 py-2 text-xs font-bold tracking-widest uppercase" style={{ color: "var(--gold)" }}>Services</div>
              {services.map((s) => (
                <a key={s.href} href={s.href} className="block px-6 py-2 text-gray-400 hover:text-yellow-400 text-xs font-semibold tracking-wider uppercase" onClick={() => setMobileOpen(false)}>
                  {s.label}
                </a>
              ))}
            </div>
            <a href={home ? "#speaking" : "/#speaking"} className="px-4 py-3 text-gray-300 hover:text-yellow-400 text-sm font-semibold tracking-wider uppercase" onClick={() => setMobileOpen(false)}>Speaking</a>
            <a href={home ? "#testimonials" : "/#testimonials"} className="px-4 py-3 text-gray-300 hover:text-yellow-400 text-sm font-semibold tracking-wider uppercase" onClick={() => setMobileOpen(false)}>Testimonials</a>
            <a href={home ? "#contact" : "/#contact"} className="px-4 py-3 text-gray-300 hover:text-yellow-400 text-sm font-semibold tracking-wider uppercase" onClick={() => setMobileOpen(false)}>Contact</a>
            <div className="px-4 pt-2">
              <a href={home ? "#contact" : "/#contact"} className="btn-primary block text-center" onClick={() => setMobileOpen(false)}>Book a Call</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
