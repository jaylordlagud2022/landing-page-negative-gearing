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

  useEffect(() => {
    const hsScript = document.createElement("script");
    hsScript.src = "//js.hsforms.net/forms/embed/v2.js";
    hsScript.async = true;
    hsScript.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "46099113",
          formId: "7dfd0a9d-2c49-464d-b91f-4d2449e2c7f0",
          region: "na1",
          target: "#hubspot-form"
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

  const CTAButton = ({ children }) => (
    <a
      href="#book"
      className="inline-flex items-center justify-center rounded-xl bg-[#E3A750] px-6 py-3 text-white font-semibold shadow-lg hover:brightness-110 transition"
      onClick={(e) => {
        e.preventDefault();
        const el = document.getElementById("book");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          el.classList.add("highlight");
          setTimeout(() => el.classList.remove("highlight"), 2000);
        }
      }}
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-[#BCD4CC] text-[#002F45] scroll-smooth">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px]">

          {/* Header */}
          <header className="sticky top-0 z-40 bg-[#BCD4CC]/90 backdrop-blur border-b border-[#002F45]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              {/* Menu */}
              <nav className="flex items-center gap-6 text-sm font-medium text-[#E3A750]">
                <a href="#how" onClick={(e) => { e.preventDefault(); document.getElementById("how").scrollIntoView({ behavior: "smooth" }); }} className="hover:text-[#002F45]">How it works</a>
                <a href="#why" onClick={(e) => { e.preventDefault(); document.getElementById("why").scrollIntoView({ behavior: "smooth" }); }} className="hover:text-[#002F45]">Why us</a>
                <a href="#faq" onClick={(e) => { e.preventDefault(); document.getElementById("faq").scrollIntoView({ behavior: "smooth" }); }} className="hover:text-[#002F45]">FAQ</a>
              </nav>

              <CTAButton>Book Free Session</CTAButton>
            </div>
          </header>

          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#BCD4CC]/40 via-white to-[#BCD4CC]/20" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-20 grid md:grid-cols-2 gap-10">

              {/* Hero Text */}
              <div>
                <h1 className="mt-4 text-4xl/tight md:text-5xl/tight font-extrabold text-[#002F45]">
                  Capital Gains Tax Explained. <span className="text-[#E3A750]">How to Reduce What You Owe in Australia.</span>
                </h1>
                <p className="mt-4 text-lg text-[#002F45]">
                  Learn how capital gains tax applies to Australian property and discover legal ways to minimise your bill when selling your investment.
                </p>
                <p className="mt-2 text-[#002F45]">
                  Whether you own property in Sydney, Melbourne, Brisbane, or regional areas, our expert team will guide you on exemptions, discounts, and structuring to reduce your CGT liability.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <CTAButton>Book your free strategy session today</CTAButton>
                </div>
              </div>

              {/* HubSpot Form */}
              <div id="book" className="bg-white rounded-2xl shadow-xl border border-[#002F45] p-6">
                <div className="text-sm font-semibold text-[#E3A750]">FREE 30-Min Strategy Session</div>
                <h3 className="text-2xl font-bold mt-1">Custom CGT Plan</h3>
                <p className="mt-2 text-sm text-[#002F45]">Discover how to minimise your capital gains legally and efficiently.</p>
                <div id="hubspot-form" className="mt-4"></div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section id="how" className="bg-[#D7E5E2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#002F45]">How It Works</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { step: "1", title: "Book Your Session", desc: "Pick a time that suits you for a free 30-min consultation." },
                  { step: "2", title: "We Analyse Your Situation", desc: "Our team models your CGT liability and identifies opportunities to save." },
                  { step: "3", title: "Receive Your Action Plan", desc: "Get a clear strategy with exemptions, discounts, and structuring advice." },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl border border-[#002F45] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#E3A750] text-white grid place-items-center font-bold">{s.step}</div>
                    <h3 className="mt-4 font-bold text-lg text-[#002F45]">{s.title}</h3>
                    <p className="mt-1 text-[#002F45]">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Us */}
          <section id="why" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#002F45]">Why Work With Us</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { title: "Expertise in CGT", desc: "Decades of experience helping investors reduce CGT liabilities legally." },
                  { title: "ATO-Aligned Advice", desc: "We follow Australian Taxation Office rules to keep you compliant." },
                  { title: "Clear, Actionable Strategies", desc: "You get step-by-step guidance, not vague advice." },
                ].map((w, i) => (
                  <div key={i} className="rounded-2xl border border-[#002F45] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#BCD4CC] text-[#002F45] grid place-items-center font-bold">{i+1}</div>
                    <h3 className="mt-4 font-bold text-lg text-[#002F45]">{w.title}</h3>
                    <p className="mt-1 text-[#002F45]">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold">FAQ</h2>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {[
                  { q: "Do I have to pay CGT on my main residence?", a: "Typically, your main residence is exempt, but rules depend on ownership periods and partial use." },
                  { q: "How long do I need to hold property for the 50% discount?", a: "You must hold the property for more than 12 months to qualify for the CGT discount." },
                  { q: "Can I use previous losses to offset gains?", a: "Yes, capital losses can offset gains from other properties or investments." },
                  { q: "Is this personal financial advice?", a: "No, this is education and strategy guidance. Always confirm specifics with a licensed tax adviser." },
                ].map((f, i) => (
                  <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                    <h3 className="font-bold">{f.q}</h3>
                    <p className="mt-2 text-neutral-700">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-xs text-neutral-500">General information only. Not financial or tax advice. Past performance is not a reliable indicator of future results. Consider your circumstances and seek licensed advice before acting.</p>
              <div className="mt-6">
                <CTAButton>Book My FREE Capital Gains Strategy Session Now</CTAButton>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-10 bg-[#002F45] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-sm">
                <a href="https://propertyinvestors.com.au/privacy-policy/" className="hover:text-[#E3A750]">Privacy Policy</a>
                <a href="https://propertyinvestors.com.au/legal-statements/" className="hover:text-[#E3A750]">Terms</a>
                <a href="https://meetings.hubspot.com/charlie-jesaulenko-ash" className="hover:text-[#E3A750]">Contact</a>
              </div>
            </div>
          </footer>

        </div>
      </div>

      {/* Highlight effect style */}
      <style>{`
        .highlight {
          animation: highlightAnim 2s ease;
        }
        @keyframes highlightAnim {
          0% { box-shadow: 0 0 0 0 rgba(227,167,80,0.7); }
          50% { box-shadow: 0 0 15px 5px rgba(227,167,80,0.7); }
          100% { box-shadow: 0 0 0 0 rgba(227,167,80,0); }
        }
      `}</style>
    </div>
  );
}
