import React, { useEffect, useMemo, useState } from "react";

// PROPERTY INVESTING LANDING PAGE — React + TailwindCSS
// - Sticky header, hero, HubSpot form, benefits, FAQ, footer

export default function PropertyInvestingLanding() {
  const deadline = useMemo(() => {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    return end.getTime();
  }, []);

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(deadline));
  const [spotsLeft, setSpotsLeft] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeRemaining(deadline)), 1000);
    return () => clearInterval(timer);
  }, [deadline]);

  useEffect(() => {
    // Load HubSpot script dynamically
    const hsScript = document.createElement("script");
    hsScript.src = "//js.hsforms.net/forms/embed/v2.js";
    hsScript.type = "text/javascript";
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

    // Load Common Ninja script dynamically
    const cnScript = document.createElement("script");
    cnScript.src = "https://cdn.commoninja.com/sdk/latest/commonninja.js";
    cnScript.defer = true;
    document.body.appendChild(cnScript);

    return () => {
      document.body.removeChild(hsScript);
      document.body.removeChild(cnScript);
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

  const CTAButton = ({ children, onClick, href }) => (
    <a
      href={href || "#book"}
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-xl bg-[#E12826] px-6 py-3 text-white font-semibold shadow-lg hover:brightness-110 transition"
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-[#f5fafa] text-[#299f93]">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px]">

          {/* Header */}
          <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[#299f93]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-[#E12826] text-white grid place-items-center font-bold">PI</div>
                <div className="font-bold">PropertyInvestingExplained<span className="hidden sm:inline">.com.au</span></div>
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                <a href="#how" className="hover:text-[#E12826]">How it works</a>
                <a href="#why" className="hover:text-[#E12826]">Why us</a>
                <a href="#faq" className="hover:text-[#E12826]">FAQ</a>
              </nav>
              <CTAButton href="#book">Book Free Session</CTAButton>
            </div>
          </header>

          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="commonninja_component pid-ac09a1f9-1fc0-487b-9296-44a74a6ff867">&nbsp;</div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f5fafa]/40 via-white to-[#f5fafa]/20" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-20 grid md:grid-cols-2 gap-10 items-center">

              {/* Hero Text */}
              <div>
                <h1 className="mt-4 text-4xl/tight md:text-5xl/tight font-extrabold text-[#299f93]">
                  Property Investing in Australia <span className="text-[#E12826]">Explained Clearly and Simply.</span>
                </h1>
                <p className="mt-4 text-lg text-[#299f93]">
                  Your roadmap to building a high-performing property portfolio with confidence.
                </p>
                <p className="mt-4 text-[#299f93]">
                  Property investing in Australia can feel overwhelming but it doesn’t need to be.
                </p>
                <p className="mt-2 text-[#299f93]">
                  We simplify the process for you, breaking down complex topics like equity, gearing, and depreciation into clear, actionable steps.
                </p>
                <p className="mt-2 text-[#299f93]">
                  Our advisors research the strongest markets across the country identifying suburbs positioned for growth through infrastructure, migration, and rental demand.
                </p>
                <p className="mt-2 text-[#299f93]">
                  We’ll help you understand when to buy, what to buy, and how to finance your portfolio correctly within Australian lending rules.
                </p>
                <p className="mt-2 text-[#299f93]">
                  With transparent advice and a proven research framework, you’ll build confidence, knowledge, and momentum in your property journey.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <CTAButton href="#book">Secure Your Property Strategy Session Today</CTAButton>
                </div>
              </div>

              {/* HubSpot Form */}
              <div id="book" className="bg-white rounded-2xl shadow-xl border border-[#299f93] p-6">
                <div className="text-sm font-semibold text-[#E12826]">FREE 30-Min Strategy Session</div>
                <h3 className="text-2xl font-bold mt-1">Custom Property Plan</h3>
                <p className="mt-2 text-sm text-[#299f93]">Discover the best path to building your property portfolio efficiently.</p>

                <div id="hubspot-form" className="mt-4"></div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#f5fafa]/30 border border-[#299f93] p-3 text-center">
                    <div className="text-xs text-[#299f93]">Spots left this month</div>
                    <div className="text-2xl font-extrabold text-[#E12826]">{spotsLeft}</div>
                  </div>
                  <div className="rounded-xl bg-[#f5fafa]/30 border border-[#299f93] p-3 text-center">
                    <div className="text-xs text-[#299f93]">Offer ends in</div>
                    <div className="text-sm font-bold">
                      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold">FAQ</h2>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {[
                  { q: "Do I need a large deposit?", a: "No, our strategies are designed to get you started with minimal upfront capital." },
                  { q: "Which cities have the best growth?", a: "We focus on high-growth suburbs with strong rental demand and capital appreciation potential." },
                  { q: "Can I invest as a first-timer?", a: "Yes! We tailor strategies to help first-time investors navigate finance, research, and purchase confidently." },
                  { q: "Is this financial advice?", a: "We provide strategy guidance and education. Always consult a licensed adviser for personalised advice." },
                ].map((f, i) => (
                  <div key={i} className="rounded-2xl border border-[#299f93] bg-[#f5fafa] p-6 shadow-sm">
                    <h3 className="font-bold">{f.q}</h3>
                    <p className="mt-2 text-[#299f93]">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Compliance + Final CTA */}
          <section className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-xs text-neutral-500">General information only. Not financial advice. Seek licensed advice for your circumstances.</p>
              <div className="mt-6">
                <CTAButton href="#book">Book My FREE Property Strategy Session Now</CTAButton>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-10 bg-[#299f93] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm">© 2025 PropertyInvestingExplained.com.au. All rights reserved.</div>
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="hover:text-[#E12826]">Privacy Policy</a>
                <a href="#" className="hover:text-[#E12826]">Terms</a>
                <a href="#" className="hover:text-[#E12826]">Contact</a>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
