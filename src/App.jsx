import React, { useEffect, useMemo, useState } from "react"; 
import propertyIcon from "./assets/propertyinvestors_icon.webp";

export default function CapitalGainsTaxLanding() {
  const deadline = useMemo(() => {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    return end.getTime();
  }, []);

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(deadline));
  const [spotsLeft, setSpotsLeft] = useState(15);
  const [showWheel, setShowWheel] = useState(false);

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
          formId: "1279a88f-4336-418a-9093-a1359e5f6fcc",
          region: "na1",
          target: "#hubspot-form"
        });
      }
    };
    document.body.appendChild(hsScript);

    const cnScript = document.createElement("script");
    cnScript.src = "https://cdn.commoninja.com/sdk/latest/commonninja.js";
    cnScript.defer = true;
    document.body.appendChild(cnScript);

    const popupTimer = setTimeout(() => setShowWheel(true), 3000);

    return () => {
      document.body.removeChild(hsScript);
      document.body.removeChild(cnScript);
      clearTimeout(popupTimer);
    };
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
      href="https://meetings.hubspot.com/charlie-jesaulenko-ash"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-xl bg-[#6EABC6] px-6 py-3 text-white font-semibold shadow-lg hover:brightness-110 transition"
    >
      {children}
    </a>
  );

  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFE16D] text-[#253E4C] scroll-smooth">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px]">

          {/* Header */}
          <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[#253E4C]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={propertyIcon} alt="PropertyInvestors Icon" className="h-9 w-9 object-contain" />
                <a href="https://propertyinvestors.com.au" className="font-bold text-[#253E4C] hover:text-[#6EABC6]">propertyinvestors.com.au</a>
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#253E4C]">
                <a href="#how" onClick={(e) => handleScroll(e, "how")} className="hover:text-[#6EABC6]">How it works</a>
                <a href="#why" onClick={(e) => handleScroll(e, "why")} className="hover:text-[#6EABC6]">Why us</a>
                <a href="#faq" onClick={(e) => handleScroll(e, "faq")} className="hover:text-[#6EABC6]">FAQ</a>
              </nav>
              <CTAButton>Speak to Our Team</CTAButton>
            </div>
          </header>

          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="commonninja_component pid-ac09a1f9-1fc0-487b-9296-44a74a6ff867">&nbsp;</div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FFE16D]/40 via-white to-[#FFE16D]/20" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-20 grid md:grid-cols-2 gap-10">

              {/* Hero Text */}
              <div>
                <h1 className="mt-4 text-4xl/tight md:text-5xl/tight font-extrabold text-[#253E4C]">
                  Live a Debt-Free Life in Australia. <span className="text-[#6EABC6]">Restructure, Rebuild, and Reclaim Your Future.</span>
                </h1>
                <p className="mt-4 text-lg text-[#253E4C]">
                  Smart property strategy and financial structure can help you eliminate bad debt faster.
                </p>
                <p className="mt-2 text-[#253E4C]">
                  Debt doesn’t have to be a life sentence.
                </p>
                <p className="mt-2 text-[#253E4C]">
                  Through strategic lending advice, refinancing, and equity utilisation, we help Australians manage their mortgages and personal debt with confidence.
                </p>
                <p className="mt-2 text-[#253E4C]">
                  Our advisors work with leading Australian lenders to find better loan structures, improve cash flow, and identify property opportunities that help your finances work harder.
                </p>
                <p className="mt-2 text-[#253E4C]">
                  We’ll show you how to turn existing debt into a powerful tool for growth, safely and sustainably. Imagine owning property that pays you back instead of holding you back.
                </p>
                <p className="mt-2 text-[#253E4C]">
                  That’s the power of a smart, debt-free strategy designed for Australian households.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <CTAButton>Speak to Our Team</CTAButton>
                </div>
              </div>

              {/* HubSpot Form */}
              <div id="book" className="bg-white rounded-2xl shadow-xl border border-[#253E4C] p-6">
                <div className="text-sm font-semibold text-[#6EABC6]">FREE 30-Min Debt-Free Strategy Session</div>
                <h3 className="text-2xl font-bold mt-1">Custom Debt-Free Plan</h3>
                <p className="mt-2 text-sm text-[#253E4C]">Discover how to restructure, rebuild, and reclaim your financial future.</p>
                <div id="hubspot-form" className="mt-4"></div>

                {/* Scarcity */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#FFE16D]/30 border border-[#253E4C] p-3 text-center">
                    <div className="text-xs text-[#253E4C]">Spots left this month</div>
                    <div className="text-2xl font-extrabold text-[#6EABC6]">{spotsLeft}</div>
                  </div>
                  <div className="rounded-xl bg-[#FFE16D]/30 border border-[#253E4C] p-3 text-center">
                    <div className="text-xs text-[#253E4C]">Offer ends in</div>
                    <div className="text-sm font-bold">
                      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section id="how" className="py-16 bg-[#FFE16D]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#253E4C]">How It Works</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { step: "1", title: "Book Your Session", desc: "Pick a time for a free 30-min consultation." },
                  { step: "2", title: "We Analyse Your Situation", desc: "Our advisors identify opportunities to reduce debt and improve finances." },
                  { step: "3", title: "Receive Your Action Plan", desc: "Get a clear roadmap to becoming debt-free." },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl border border-[#253E4C] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#6EABC6] text-white grid place-items-center font-bold">{s.step}</div>
                    <h3 className="mt-4 font-bold text-lg text-[#253E4C]">{s.title}</h3>
                    <p className="mt-1 text-[#253E4C]">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Us */}
          <section id="why" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#253E4C]">Why Work With Us</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { title: "Expert Financial Advice", desc: "Decades of experience helping Australians manage debt and finances." },
                  { title: "Data-Driven Insights", desc: "We identify opportunities to improve cash flow and property returns." },
                  { title: "Clear, Actionable Strategies", desc: "Step-by-step guidance to achieve a debt-free life." },
                ].map((w, i) => (
                  <div key={i} className="rounded-2xl border border-[#253E4C] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#FFE16D] text-[#253E4C] grid place-items-center font-bold">{i+1}</div>
                    <h3 className="mt-4 font-bold text-lg text-[#253E4C]">{w.title}</h3>
                    <p className="mt-1 text-[#253E4C]">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-16 bg-[#FFE16D]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#253E4C]">FAQ</h2>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {[
                  { q: "Can anyone become debt-free?", a: "Yes, with the right strategy, guidance, and financial planning." },
                  { q: "Do you offer property-related debt solutions?", a: "Yes, we structure loans and refinancing for property portfolios." },
                  { q: "What if I have multiple debts?", a: "We analyse all debts and create a customised strategy to manage and reduce them." },
                  { q: "Is this financial advice?", a: "This is general guidance. Always seek licensed advice for your personal situation." },
                ].map((f, i) => (
                  <div key={i} className="rounded-2xl border border-[#FFE16D] bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-[#253E4C]">{f.q}</h3>
                    <p className="mt-2 text-[#253E4C]">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-xs text-[#253E4C]">General information only. Not financial advice. Consider your circumstances and seek licensed advice before acting.</p>
              <div className="mt-6">
                <CTAButton>Speak to Our Team About Your Debt-Free Plan</CTAButton>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-10 bg-[#253E4C] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm">© 2025 propertyinvestors.com.au. All rights reserved.</div>
              <div className="flex items-center gap-6 text-sm">
                <a href="https://propertyinvestors.com.au/privacy-policy/" className="hover:text-[#FFE16D]">Privacy Policy</a>
                <a href="https://propertyinvestors.com.au/legal-statements/" className="hover:text-[#FFE16D]">Terms</a>
                <a href="https://meetings.hubspot.com/charlie-jesaulenko-ash" className="hover:text-[#FFE16D]">Contact</a>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
