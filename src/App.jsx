import React, { useEffect, useMemo, useState } from "react";
import propertyIcon from "./assets/propertyinvestors_icon.webp";

export default function PropertyAdviceLanding() {
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
      className="inline-flex items-center justify-center rounded-xl bg-[#1C393F] px-6 py-3 text-[#F7E5C1] font-semibold shadow-lg hover:brightness-110 transition"
    >
      {children}
    </a>
  );

  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#F7E5C1] text-[#1C393F] scroll-smooth">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px]">

          {/* Header */}
          <header className="sticky top-0 z-40 bg-[#F7E5C1]/90 backdrop-blur border-b border-[#1C393F]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={propertyIcon} alt="PropertyInvestors Icon" className="h-9 w-9 object-contain" />
                <a href="https://propertyinvestors.com.au" className="font-bold text-[#1C393F] hover:text-[#B7A85C]">
                  propertyinvestors.com.au
                </a>
              </div>

              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#1C393F]">
                <a href="#how" onClick={(e) => handleScroll(e, "how")} className="hover:text-[#B7A85C]">How it works</a>
                <a href="#why" onClick={(e) => handleScroll(e, "why")} className="hover:text-[#B7A85C]">Why us</a>
                <a href="#faq" onClick={(e) => handleScroll(e, "faq")} className="hover:text-[#B7A85C]">FAQ</a>
              </nav>

              <CTAButton>Speak with an advisor today</CTAButton>
            </div>
          </header>

          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="commonninja_component pid-ac09a1f9-1fc0-487b-9296-44a74a6ff867">&nbsp;</div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-20 grid md:grid-cols-2 gap-10">

              {/* Hero Text */}
              <div>
                <h1 className="mt-4 text-4xl/tight md:text-5xl/tight font-extrabold text-[#1C393F]">
                  Get Property Advice from Australia’s Trusted <span className="text-[#B7A85C]">Investment Strategists.</span>
                </h1>

                <p className="mt-4 text-lg text-[#1C393F]">
                  Independent, research-backed property advice tailored to Australian investors.
                </p>

                <p className="mt-4 text-[#1C393F]">
                  Making the right property decision requires more than intuition — it requires real data and expert guidance.
                  Our Australian-based team provides personalised property strategies built around your financial goals, cash flow, and risk profile.
                </p>

                <p className="mt-4 text-[#1C393F]">
                  Using our proven SCIDY score, we identify emerging growth corridors across Australia — from Melbourne’s outer-ring suburbs
                  to infrastructure hubs in Brisbane and Perth.
                </p>

                <p className="mt-4 text-[#1C393F]">
                  We combine economic indicators, demographic data, and lending conditions to ensure every recommendation is grounded in reality.
                  Whether you’re a first-time investor or growing your portfolio, we provide clarity and confidence so you can move forward with a strategy that’s truly built around you.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <CTAButton>Speak with an advisor today</CTAButton>
                </div>
              </div>

              {/* HubSpot Form */}
              <div id="book" className="bg-white rounded-2xl shadow-xl border border-[#B7A85C] p-6">
                <div className="text-sm font-semibold text-[#B7A85C]">FREE 30-Min Strategy Session</div>
                <h3 className="text-2xl font-bold mt-1 text-[#1C393F]">Personalised Property Strategy</h3>
                <p className="mt-2 text-sm text-[#1C393F]">
                  Get a tailored conversation around your goals, borrowing power, and the next steps for your property plan.
                </p>
                <div id="hubspot-form" className="mt-4"></div>

                {/* Scarcity */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#F7E5C1]/30 border border-[#B7A85C] p-3 text-center">
                    <div className="text-xs text-[#B7A85C]">Spots left this month</div>
                    <div className="text-2xl font-extrabold text-[#B7A85C]">{spotsLeft}</div>
                  </div>
                  <div className="rounded-xl bg-[#F7E5C1]/30 border border-[#B7A85C] p-3 text-center">
                    <div className="text-xs text-[#B7A85C]">Offer ends in</div>
                    <div className="text-sm font-bold text-[#1C393F]">
                      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* How It Works */}
          <section id="how" className="py-16 bg-[#F7E5C1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#1C393F]">How It Works</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { step: "1", title: "Book Your Session", desc: "Choose a convenient time for a free consultation." },
                  { step: "2", title: "We Assess Your Position", desc: "We review goals, cash flow and borrowing power." },
                  { step: "3", title: "Get Your Strategy", desc: "Receive an actionable plan tailored to you." },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl border border-[#B7A85C] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#B7A85C] text-[#F7E5C1] grid place-items-center font-bold">{s.step}</div>
                    <h3 className="mt-4 font-bold text-lg text-[#1C393F]">{s.title}</h3>
                    <p className="mt-1 text-[#1C393F]">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Us */}
          <section id="why" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#1C393F]">Why Work With Us</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { title: "Independent Research", desc: "We base recommendations on data, not sales." },
                  { title: "Tailored Strategies", desc: "Plans built around your unique financial position." },
                  { title: "Australia-Wide Coverage", desc: "Advice for city and regional markets across Australia." },
                ].map((w, i) => (
                  <div key={i} className="rounded-2xl border border-[#B7A85C] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#F7E5C1] text-[#B7A85C] grid place-items-center font-bold">{i + 1}</div>
                    <h3 className="mt-4 font-bold text-lg text-[#1C393F]">{w.title}</h3>
                    <p className="mt-1 text-[#1C393F]">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-16 bg-[#F7E5C1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#1C393F]">FAQ</h2>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {[
                  { q: "Is your advice independent?", a: "Yes — we provide research-led recommendations, not product sales." },
                  { q: "Do you cover regional markets?", a: "Yes — we analyse both city and regional opportunities." },
                  { q: "Will you help with finance?", a: "We guide structuring and refer to trusted lenders/advisors." },
                  { q: "Do you offer ongoing support?", a: "Yes — we can help you implement and review your plan over time." },
                ].map((f, i) => (
                  <div key={i} className="rounded-2xl border border-[#B7A85C] bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-[#1C393F]">{f.q}</h3>
                    <p className="mt-2 text-[#1C393F]">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-xs text-[#1C393F]">General information only. Not financial or tax advice. Consider your circumstances and seek licensed advice before acting.</p>
              <div className="mt-6">
                <CTAButton>Speak with an advisor today</CTAButton>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-10 bg-[#1C393F] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm">© 2025 propertyinvestors.com.au. All rights reserved.</div>
              <div className="flex items-center gap-6 text-sm">
                <a href="https://propertyinvestors.com.au/privacy-policy/" className="hover:text-[#F7E5C1]">Privacy Policy</a>
                <a href="https://propertyinvestors.com.au/legal-statements/" className="hover:text-[#F7E5C1]">Terms</a>
                <a href="https://meetings.hubspot.com/charlie-jesaulenko-ash" className="hover:text-[#F7E5C1]">Contact</a>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
