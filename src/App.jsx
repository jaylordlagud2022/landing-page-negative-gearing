import React, { useEffect, useMemo, useState } from "react";

export default function PropertyAdviceLanding() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeRemaining()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hsScript = document.createElement("script");
    hsScript.src = "//js.hsforms.net/forms/embed/v2.js";
    hsScript.async = true;
    hsScript.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "46099113",
          formId: "a16cc7c7-c201-478b-ae83-4b362ad8018e",
          region: "na1",
          target: "#hubspot-form"
        });
      }
    };
    document.body.appendChild(hsScript);
    return () => document.body.removeChild(hsScript);
  }, []);

  function getTimeRemaining() {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const CTAButton = ({ children }) => (
    <a
      href="#hubspot-form"
      onClick={(e) => {
        e.preventDefault();
        const el = document.getElementById("book");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          el.classList.add("highlight-form");
          setTimeout(() => el.classList.remove("highlight-form"), 2000);
        }
      }}
      className="inline-flex items-center justify-center rounded-xl bg-[#1C393F] px-6 py-3 text-[#F7E5C1] font-semibold shadow-lg hover:brightness-110 transition"
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-[#F7E5C1] text-[#1C393F] scroll-smooth">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px]">

          {/* Header */}
          <header className="sticky top-0 z-40 bg-[#F7E5C1] border-b border-[#1C393F]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <nav className="flex items-center gap-6 text-sm font-medium text-[#1C393F]">
                <a href="#how">How it works</a>
                <a href="#why">Why us</a>
                <a href="#faq">FAQ</a>
              </nav>
              <CTAButton>Speak with an advisor today</CTAButton>
            </div>
          </header>

          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-20 grid md:grid-cols-2 gap-10">
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
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section id="how" className="bg-[#F7E5C1]">
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
          <section id="faq" className="bg-[#F7E5C1]">
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
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
              <CTAButton>Speak with an advisor today</CTAButton>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-10 bg-[#1C393F] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-sm">
                <a href="https://propertyinvestors.com.au/privacy-policy/" className="hover:text-[#F7E5C1]">Privacy Policy</a>
                <a href="https://propertyinvestors.com.au/legal-statements/" className="hover:text-[#F7E5C1]">Terms</a>
                <a href="https://meetings.hubspot.com/charlie-jesaulenko-ash" className="hover:text-[#F7E5C1]">Contact</a>
              </div>
            </div>
          </footer>

        </div>
      </div>

      <style>
        {`
          .highlight-form {
            animation: highlightForm 2s ease-in-out;
            border: 2px solid #B7A85C !important;
          }
          @keyframes highlightForm {
            0% { box-shadow: 0 0 0 #B7A85C; }
            50% { box-shadow: 0 0 20px #B7A85C; }
            100% { box-shadow: 0 0 0 #B7A85C; }
          }
        `}
      </style>
    </div>
  );
}
