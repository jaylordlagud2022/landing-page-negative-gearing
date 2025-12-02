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
          target: "#hubspot-form",
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
      className="inline-flex items-center justify-center rounded-xl bg-[#A9CFE0] px-6 py-3 text-[#606F69] font-semibold shadow-lg hover:brightness-110 transition"
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
    <div className="min-h-screen bg-[#F3F3E3] text-[#606F69] scroll-smooth">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px]">

          {/* Header */}
          <header className="sticky top-0 z-40 bg-[#F3F3E3]/90 backdrop-blur border-b border-[#606F69]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={propertyIcon}
                  alt="PropertyInvestors Icon"
                  className="h-9 w-9 object-contain"
                />
                <a
                  href="https://propertyinvestors.com.au"
                  className="font-bold text-[#606F69] hover:text-[#A9CFE0]"
                >
                  propertyinvestors.com.au
                </a>
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#606F69]">
                <a href="#how" onClick={(e) => handleScroll(e, "how")} className="hover:text-[#A9CFE0]">How it works</a>
                <a href="#why" onClick={(e) => handleScroll(e, "why")} className="hover:text-[#A9CFE0]">Why us</a>
                <a href="#faq" onClick={(e) => handleScroll(e, "faq")} className="hover:text-[#A9CFE0]">FAQ</a>
              </nav>
              <CTAButton>Get my free calculation</CTAButton>
            </div>
          </header>

          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="commonninja_component pid-ac09a1f9-1fc0-487b-9296-44a74a6ff867">&nbsp;</div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-20 grid md:grid-cols-2 gap-10">

              {/* Hero Text */}
              <div>
                <h1 className="mt-4 text-4xl/tight md:text-5xl/tight font-extrabold text-[#606F69]">
                  Negative Gearing in Australia.{" "}
                  <span className="text-[#A9CFE0]">Maximise Your Tax Benefits and Long-Term Growth.</span>
                </h1>

                <p className="mt-4 text-lg text-[#606F69]">
                  Understand how negative gearing can strengthen your investment property strategy in Australia.
                </p>

                <p className="mt-4 text-[#606F69]">
                  Negative gearing is a powerful tax tool — but only when applied correctly. If your rental
                  income is lower than your expenses, you may be eligible to deduct that loss from your taxable
                  income under ATO rules.
                </p>

                <p className="mt-4 text-[#606F69]">
                  We help you determine when negative gearing makes sense for your situation by assessing your
                  income, borrowing power, interest rates, and long-term goals.
                </p>

                <p className="mt-4 text-[#606F69]">
                  With the right balance of rental yield and capital growth, negative gearing can build wealth
                  sustainably over time.
                </p>

                <p className="mt-4 text-[#606F69]">
                  We also guide you through identifying strong-performing suburbs, optimising loan structure,
                  utilising depreciation schedules, and planning for changing market conditions.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <CTAButton>Get my free calculation</CTAButton>
                </div>
              </div>

              {/* HubSpot Form */}
              <div id="book" className="bg-white rounded-2xl shadow-xl border border-[#A9CFE0] p-6">
                <div className="text-sm font-semibold text-[#A9CFE0]">
                  FREE Negative Gearing Assessment
                </div>
                <h3 className="text-2xl font-bold mt-1 text-[#606F69]">Calculate Your Tax Benefits</h3>
                <p className="mt-2 text-sm text-[#606F69]">
                  Get a personalised breakdown of your potential tax savings and investment strategy.
                </p>
                <div id="hubspot-form" className="mt-4"></div>

                {/* Scarcity */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#F3F3E3]/50 border border-[#A9CFE0] p-3 text-center">
                    <div className="text-xs text-[#A9CFE0]">Spots left this month</div>
                    <div className="text-2xl font-extrabold text-[#A9CFE0]">{spotsLeft}</div>
                  </div>
                  <div className="rounded-xl bg-[#F3F3E3]/50 border border-[#A9CFE0] p-3 text-center">
                    <div className="text-xs text-[#A9CFE0]">Offer ends in</div>
                    <div className="text-sm font-bold text-[#606F69]">
                      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* How It Works */}
          <section id="how" className="py-16 bg-[#F3F3E3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#606F69]">How It Works</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { step: "1", title: "Book Your Session", desc: "Choose a time for your free assessment." },
                  { step: "2", title: "We Analyse Your Numbers", desc: "We review your tax position and goals." },
                  { step: "3", title: "Get Your Calculation", desc: "Receive a tailored negative-gearing report." },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl border border-[#A9CFE0] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#A9CFE0] text-[#606F69] grid place-items-center font-bold">{s.step}</div>
                    <h3 className="mt-4 font-bold text-lg text-[#606F69]">{s.title}</h3>
                    <p className="mt-1 text-[#606F69]">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Us */}
          <section id="why" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#606F69]">Why Work With Us</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { title: "Tax-Focused Strategy", desc: "Clear, practical analysis to maximise deductions." },
                  { title: "Data-Backed Property Insights", desc: "We identify suburbs with strong performance." },
                  { title: "Beginner-Friendly Support", desc: "We explain everything in simple terms." },
                ].map((w, i) => (
                  <div key={i} className="rounded-2xl border border-[#A9CFE0] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#F3F3E3] text-[#A9CFE0] grid place-items-center font-bold">
                      {i + 1}
                    </div>
                    <h3 className="mt-4 font-bold text-lg text-[#606F69]">{w.title}</h3>
                    <p className="mt-1 text-[#606F69]">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-16 bg-[#F3F3E3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#606F69]">FAQ</h2>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {[
                  { q: "Is negative gearing only for high-income earners?", a: "Not always — it depends on borrowing capacity and strategy." },
                  { q: "Can beginners use negative gearing?", a: "Yes. We help you understand risks and benefits clearly." },
                  { q: "Do you provide tax advice?", a: "We guide strategy, but recommend licensed tax professionals." },
                  { q: "Is negative gearing risky?", a: "It must be planned with cash flow, yield, and rate changes in mind." },
                ].map((f, i) => (
                  <div key={i} className="rounded-2xl border border-[#A9CFE0] bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-[#606F69]">{f.q}</h3>
                    <p className="mt-2 text-[#606F69]">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-xs text-[#606F69]">
                General information only. Seek licensed advice.
              </p>
              <div className="mt-6">
                <CTAButton>Get my free calculation</CTAButton>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-10 bg-[#606F69] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm">© 2025 propertyinvestors.com.au. All rights reserved.</div>
              <div className="flex items-center gap-6 text-sm">
                <a href="https://propertyinvestors.com.au/privacy-policy/" className="hover:text-[#A9CFE0]">Privacy Policy</a>
                <a href="https://propertyinvestors.com.au/legal-statements/" className="hover:text-[#A9CFE0]">Terms</a>
                <a href="https://meetings.hubspot.com/charlie-jesaulenko-ash" className="hover:text-[#A9CFE0]">Contact</a>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
