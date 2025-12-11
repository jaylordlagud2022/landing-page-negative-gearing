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

  // Load HubSpot Form
  useEffect(() => {
    const hsScript = document.createElement("script");
    hsScript.src = "//js.hsforms.net/forms/embed/v2.js";
    hsScript.async = true;
    hsScript.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "46099113",
          formId: "014f921d-2d44-46af-abe1-ef0cd0fe2aa7",
          region: "na1",
          target: "#hubspot-form",
        });
      }
    };
    document.body.appendChild(hsScript);
    return () => document.body.removeChild(hsScript);
  }, []);

  function getTimeRemaining(end) {
    const total = end - Date.now();
    const clamped = Math.max(total, 0);
    const seconds = Math.floor((clamped / 1000) % 60);
    const minutes = Math.floor((clamped / 1000 / 60) % 60);
    const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
    const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
    return { total: clamped, days, hours, minutes, seconds };
  }

  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });

      // highlight form when anchored
      el.classList.add("ring-4", "ring-[#91040C]");
      setTimeout(() => el.classList.remove("ring-4", "ring-[#91040C]"), 1200);
    }
  };

  // Reusable CTA Button — anchors to the form
  const CTAButton = ({ children }) => (
    <a
      href="#book"
      onClick={(e) => handleScroll(e, "book")}
      className="inline-flex items-center justify-center rounded-xl bg-[#91040C] px-6 py-3 text-white font-semibold shadow-lg hover:brightness-110 transition"
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-[#D0BA98] text-[#23140C] scroll-smooth">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px]">

          {/* Header */}
          <header className="sticky top-0 z-40 bg-[#D0BA98] border-b border-[#23140C]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

              {/* Menu replaces logo */}
              <nav className="flex items-center gap-6 text-sm font-medium text-[#23140C]">
                <a href="#how" onClick={(e) => handleScroll(e, "how")} className="hover:text-[#91040C]">How it works</a>
                <a href="#why" onClick={(e) => handleScroll(e, "why")} className="hover:text-[#91040C]">Why us</a>
                <a href="#faq" onClick={(e) => handleScroll(e, "faq")} className="hover:text-[#91040C]">FAQ</a>
              </nav>

              <CTAButton>Get the Free Guide</CTAButton>
            </div>
          </header>

          {/* Hero */}
          <section className="relative overflow-hidden">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 grid md:grid-cols-2 gap-10">

              {/* Hero Text */}
              <div>
                <h1 className="mt-4 text-4xl/tight md:text-5xl/tight font-extrabold text-[#23140C]">
                  Understanding Investment Properties in Australia.{" "}
                  <span className="text-[#91040C]">What To Know Before You Buy.</span>
                </h1>

                <p className="mt-4 text-lg">
                  Build your knowledge and confidence with Australia’s leading property strategists.
                </p>

                <p className="mt-4">
                  Before you invest in property, it’s crucial to understand how the Australian market works — 
                  from rental yields and capital growth to tax deductions and depreciation.
                </p>

                <p className="mt-4">
                  Using our SCIDY framework, we analyse growth markets nationwide, factoring in infrastructure
                  pipelines, demographic trends, and supply–demand balance.
                </p>

                <p className="mt-4">
                  We’ll teach you how to interpret suburb-level data, identify undervalued areas, and structure
                  your finance correctly for Australian tax efficiency.
                </p>

                <p className="mt-4">
                  This foundation of knowledge allows you to make confident decisions — whether you're buying
                  in Sydney, Perth, or regional Queensland.
                </p>

                <div className="mt-6">
                  <CTAButton>Get the Free Guide — Book a Meeting</CTAButton>
                </div>
              </div>

              {/* HubSpot Form */}
              <div id="book" className="bg-white rounded-2xl shadow-xl border border-[#91040C] p-6 transition-all">
                <div className="text-sm font-semibold text-[#91040C]">FREE Investment Starter Session</div>
                <h3 className="text-2xl font-bold mt-1 text-[#23140C]">Understanding Property Strategy</h3>
                <p className="mt-2 text-sm">
                  Learn how to research growth markets, reduce risk, and build wealth through property.
                </p>

                <div id="hubspot-form" className="mt-4"></div>
              </div>
            </div>
          </section>

          {/* How It Works (no py-16 / no py-10) */}
          <section id="how" className="bg-[#D0BA98]">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-extrabold">How It Works</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { step: "1", title: "Book Your Session", desc: "Choose a time for your free consultation." },
                  { step: "2", title: "We Analyse Your Situation", desc: "We assess your goals and position." },
                  { step: "3", title: "Get Your Investment Plan", desc: "Receive a clear roadmap to follow." },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl border border-[#91040C] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#91040C] text-white grid place-items-center font-bold">
                      {s.step}
                    </div>
                    <h3 className="mt-4 font-bold text-lg">{s.title}</h3>
                    <p className="mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Us */}
          <section id="why" className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-extrabold">Why Work With Us</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { title: "SCIDY Research Framework", desc: "We analyse markets based on data, not opinions." },
                  { title: "Beginner-Friendly Guidance", desc: "We break complex topics into simple steps." },
                  { title: "Australia-Wide Support", desc: "We help you invest confidently anywhere in the country." },
                ].map((w, i) => (
                  <div key={i} className="rounded-2xl border border-[#91040C] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#D0BA98] text-[#91040C] grid place-items-center font-bold">
                      {i + 1}
                    </div>
                    <h3 className="mt-4 font-bold text-lg">{w.title}</h3>
                    <p className="mt-1">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ (no py-16 / no py-10) */}
          <section id="faq" className="bg-[#D0BA98]">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-extrabold">FAQ</h2>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {[
                  { q: "Can beginners invest?", a: "Yes. We work with first-time and experienced investors." },
                  { q: "Do you help with finance structure?", a: "We guide you on structuring for tax efficiency." },
                  { q: "Do I need a high income?", a: "Not always. It depends on borrowing capacity." },
                  { q: "Is property safe?", a: "We teach risk management to reduce exposure." },
                ].map((f, i) => (
                  <div key={i} className="rounded-2xl border border-[#91040C] bg-white p-6 shadow-sm">
                    <h3 className="font-bold">{f.q}</h3>
                    <p className="mt-2">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <p className="text-xs">General information only. Not financial advice. Seek licensed advice.</p>
              <div className="mt-6">
                <CTAButton>Get the Free Guide — Book a Meeting</CTAButton>
              </div>
            </div>
          </section>

          {/* Footer (copyright removed) */}
          <footer className="py-10 bg-[#23140C] text-white">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

              {/* EMPTY LEFT SIDE (copyright removed) */}
              <div></div>

              <div className="flex items-center gap-6 text-sm">
                <a href="https://propertyinvestors.com.au/privacy-policy/" className="hover:text-[#D0BA98]">
                  Privacy Policy
                </a>
                <a href="https://propertyinvestors.com.au/legal-statements/" className="hover:text-[#D0BA98]">
                  Terms
                </a>
                <a
                  href="#book"
                  onClick={(e) => handleScroll(e, "book")}
                  className="hover:text-[#D0BA98]"
                >
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
