import React, { useEffect, useMemo, useState } from "react";

export default function CapitalGainsTaxLanding() {
  const deadline = useMemo(() => {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    return end.getTime();
  }, []);

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(deadline));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeRemaining(deadline)), 1000);
    return () => clearInterval(timer);
  }, [deadline]);

  /** Load HubSpot form */
  useEffect(() => {
    const hsScript = document.createElement("script");
    hsScript.src = "//js.hsforms.net/forms/embed/v2.js";
    hsScript.async = true;
    hsScript.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "46099113",
          formId: "cc21665b-9239-4e91-9fa8-cb915a0d74d4",
          region: "na1",
          target: "#hubspot-form",
        });
      }
    };
    document.body.appendChild(hsScript);
    return () => document.body.removeChild(hsScript);
  }, []);

  /** Utility */
  function getTimeRemaining(end) {
    const total = end - Date.now();
    const clamped = Math.max(total, 0);
    const seconds = Math.floor((clamped / 1000) % 60);
    const minutes = Math.floor((clamped / 1000 / 60) % 60);
    const hours = Math.floor((clamped / 1000 / 60 / 60) % 24);
    const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
    return { total: clamped, days, hours, minutes, seconds };
  }

  /** CTA Button */
  const CTAButton = ({ children }) => (
    <a
      href="#book"
      onClick={(e) => handleScroll(e, "book")}
      className="inline-flex items-center justify-center rounded-xl bg-[#A9CFE0] px-6 py-3 
      text-[#606F69] font-semibold shadow-lg hover:brightness-110 transition"
    >
      {children}
    </a>
  );

  /** Smooth scroll + highlight */
  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    el.classList.add("ring-4", "ring-[#A9CFE0]");
    setTimeout(() => el.classList.remove("ring-4", "ring-[#A9CFE0]"), 1200);
  };

  return (
    <div className="min-h-screen bg-[#F3F3E3] text-[#606F69] scroll-smooth">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px]">

          {/* HEADER */}
          <header className="sticky top-0 z-40 bg-[#F3F3E3]/95 backdrop-blur border-b border-[#606F69]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

              {/* Menu (Logo removed) */}
              <nav className="flex items-center gap-6 text-sm font-medium text-[#606F69]">
                <a href="#how" onClick={(e) => handleScroll(e, "how")} className="hover:text-[#A9CFE0]">
                  How it works
                </a>
                <a href="#why" onClick={(e) => handleScroll(e, "why")} className="hover:text-[#A9CFE0]">
                  Why us
                </a>
                <a href="#faq" onClick={(e) => handleScroll(e, "faq")} className="hover:text-[#A9CFE0]">
                  FAQ
                </a>
              </nav>

              <CTAButton>Get my free calculation</CTAButton>
            </div>
          </header>

          {/* HERO */}
          <section className="relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-20 grid md:grid-cols-2 gap-10">

              {/* TEXT */}
              <div>
                <h1 className="mt-4 text-4xl/tight md:text-5xl/tight font-extrabold text-[#606F69]">
                  Negative Gearing in Australia.{" "}
                  <span className="text-[#A9CFE0]">Maximise Your Tax Benefits and Long-Term Growth.</span>
                </h1>

                <p className="mt-4 text-lg">
                  Understand how negative gearing can strengthen your investment property strategy in Australia.
                </p>

                <p className="mt-4">
                  Negative gearing is a powerful tax tool — but only when applied correctly.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <CTAButton>Get my free calculation</CTAButton>
                </div>
              </div>

              {/* FORM (cleaned — no offers, no spots left) */}
              <div
                id="book"
                className="bg-white rounded-2xl shadow-xl border border-[#A9CFE0] p-6 transition-all"
              >
                <h3 className="text-2xl font-bold text-[#606F69]">Free Negative Gearing Assessment</h3>

                <div id="hubspot-form" className="mt-4"></div>
              </div>
            </div>
          </section>

          {/* HOW IT WORKS (py removed) */}
          <section id="how" className="bg-[#F3F3E3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <h2 className="text-3xl font-extrabold">How It Works</h2>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { step: "1", title: "Book Your Session", desc: "Choose a time for your free assessment." },
                  { step: "2", title: "We Analyse Your Numbers", desc: "We review your tax position and goals." },
                  { step: "3", title: "Get Your Calculation", desc: "Receive a tailored negative-gearing report." },
                ].map((s) => (
                  <div key={s.step} className="rounded-2xl border border-[#A9CFE0] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#A9CFE0] text-[#606F69] grid place-items-center font-bold">{s.step}</div>
                    <h3 className="mt-4 font-bold text-lg">{s.title}</h3>
                    <p className="mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WHY US */}
          <section id="why" className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold">Why Work With Us</h2>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { title: "Tax-Focused Strategy", desc: "Clear, practical analysis to maximise deductions." },
                  { title: "Data-Backed Property Insights", desc: "We identify suburbs with strong performance." },
                  { title: "Beginner-Friendly Support", desc: "We explain everything in simple terms." },
                ].map((w) => (
                  <div key={w.title} className="rounded-2xl border border-[#A9CFE0] bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-lg">{w.title}</h3>
                    <p className="mt-1">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ (py removed) */}
          <section id="faq" className="bg-[#F3F3E3] py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold">FAQ</h2>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {[
                  { q: "Is negative gearing only for high-income earners?", a: "Not always — it depends on strategy." },
                  { q: "Can beginners use negative gearing?", a: "Yes, we walk you through it step-by-step." },
                  { q: "Do you provide tax advice?", a: "We guide strategy and recommend licensed professionals." },
                  { q: "Is negative gearing risky?", a: "It must be planned with cash flow + yield in mind." },
                ].map((f) => (
                  <div key={f.q} className="rounded-2xl border border-[#A9CFE0] bg-white p-6 shadow-sm">
                    <h3 className="font-bold">{f.q}</h3>
                    <p className="mt-2">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="py-16 text-center">
            <CTAButton>Get my free calculation</CTAButton>
          </section>

          {/* FOOTER (clean) */}
          <footer className="py-10 bg-[#606F69] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex items-center justify-center gap-6 text-sm">
                <a href="https://propertyinvestors.com.au/privacy-policy/" className="hover:text-[#A9CFE0]">
                  Privacy Policy
                </a>
                <a href="https://propertyinvestors.com.au/legal-statements/" className="hover:text-[#A9CFE0]">
                  Terms
                </a>
                <a href="#book" onClick={(e) => handleScroll(e, "book")} className="hover:text-[#A9CFE0]">
                  Contact
                </a>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
