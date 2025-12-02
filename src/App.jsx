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
      className="inline-flex items-center justify-center rounded-xl bg-[#E12826] px-6 py-3 text-white font-semibold shadow-lg hover:brightness-110 transition"
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
    <div className="min-h-screen bg-[#f5fafa] text-[#299f93] scroll-smooth">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px]">

          {/* Header */}
          <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[#299f93]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={propertyIcon} alt="PropertyInvestors Icon" className="h-9 w-9 object-contain" />
                <a href="https://propertyinvestors.com.au" className="font-bold text-[#299f93] hover:text-[#E12826]">propertyinvestors.com.au</a>
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#299f93]">
                <a href="#how" onClick={(e) => handleScroll(e, "how")} className="hover:text-[#E12826]">How it works</a>
                <a href="#why" onClick={(e) => handleScroll(e, "why")} className="hover:text-[#E12826]">Why us</a>
                <a href="#faq" onClick={(e) => handleScroll(e, "faq")} className="hover:text-[#E12826]">FAQ</a>
              </nav>
              <CTAButton>Secure Your Strategy Session</CTAButton>
            </div>
          </header>

          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="commonninja_component pid-ac09a1f9-1fc0-487b-9296-44a74a6ff867">&nbsp;</div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f5fafa]/40 via-white to-[#f5fafa]/20" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-20 grid md:grid-cols-2 gap-10">

              {/* Hero Text */}
              <div>
                <h1 className="mt-4 text-4xl/tight md:text-5xl/tight font-extrabold text-[#299f93]">
                  Property Investing in Australia Explained <span className="text-[#E12826]">Clearly and Simply.</span>
                </h1>
                <p className="mt-4 text-lg text-[#299f93]">
                  Your roadmap to building a high-performing property portfolio with confidence.
                </p>
                <p className="mt-2 text-[#299f93]">
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
                  <CTAButton>Secure Your Property Strategy Session Today</CTAButton>
                </div>
              </div>

              {/* HubSpot Form */}
              <div id="book" className="bg-white rounded-2xl shadow-xl border border-[#299f93] p-6">
                <div className="text-sm font-semibold text-[#E12826]">FREE 30-Min Strategy Session</div>
                <h3 className="text-2xl font-bold mt-1">Custom Property Plan</h3>
                <p className="mt-2 text-sm text-[#299f93]">Discover how to confidently start and grow your property portfolio.</p>
                <div id="hubspot-form" className="mt-4"></div>

                {/* Scarcity */}
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

          {/* How It Works */}
          <section id="how" className="py-16 bg-[#f5fafa]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#299f93]">How It Works</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { step: "1", title: "Book Your Session", desc: "Pick a time that suits you for a free 30-min consultation." },
                  { step: "2", title: "We Analyse Your Situation", desc: "Our team models your investment strategy and identifies opportunities." },
                  { step: "3", title: "Receive Your Action Plan", desc: "Get a clear roadmap for confident property investing." },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl border border-[#299f93] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#E12826] text-white grid place-items-center font-bold">{s.step}</div>
                    <h3 className="mt-4 font-bold text-lg text-[#299f93]">{s.title}</h3>
                    <p className="mt-1 text-[#299f93]">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Us */}
          <section id="why" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#299f93]">Why Work With Us</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { title: "Expert Property Advice", desc: "Decades of experience helping Australians invest wisely." },
                  { title: "Data-Driven Insights", desc: "We research the strongest markets for growth and rental returns." },
                  { title: "Clear, Actionable Strategies", desc: "Step-by-step guidance to simplify investing and build confidence." },
                ].map((w, i) => (
                  <div key={i} className="rounded-2xl border border-[#299f93] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#f5fafa] text-[#299f93] grid place-items-center font-bold">{i+1}</div>
                    <h3 className="mt-4 font-bold text-lg text-[#299f93]">{w.title}</h3>
                    <p className="mt-1 text-[#299f93]">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-16 bg-[#f5fafa]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#299f93]">FAQ</h2>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {[
                  { q: "Do I need to be wealthy to invest?", a: "No, with the right guidance, anyone can start investing in property." },
                  { q: "How do I choose the right suburb?", a: "We research growth areas using infrastructure, migration, and rental demand trends." },
                  { q: "What if I’m a first-time investor?", a: "Our team guides you step-by-step from finance approval to purchase strategy." },
                  { q: "Is this financial advice?", a: "This is general information. Always seek licensed advice for your specific situation." },
                ].map((f, i) => (
                  <div key={i} className="rounded-2xl border border-[#f5fafa] bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-[#299f93]">{f.q}</h3>
                    <p className="mt-2 text-[#299f93]">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-xs text-[#299f93]">General information only. Not financial advice. Past performance is not a reliable indicator of future results. Consider your circumstances and seek licensed advice before acting.</p>
              <div className="mt-6">
                <CTAButton>Secure Your Property Strategy Session Today</CTAButton>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-10 bg-[#299f93] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm">© 2025 propertyinvestors.com.au. All rights reserved.</div>
              <div className="flex items-center gap-6 text-sm">
                <a href="https://propertyinvestors.com.au/privacy-policy/" className="hover:text-[#E12826]">Privacy Policy</a>
                <a href="https://propertyinvestors.com.au/legal-statements/" className="hover:text-[#E12826]">Terms</a>
                <a href="https://meetings.hubspot.com/charlie-jesaulenko-ash" className="hover:text-[#E12826]">Contact</a>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
