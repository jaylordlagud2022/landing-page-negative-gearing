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
          formId: "014f921d-2d44-46af-abe1-ef0cd0fe2aa7",
          region: "na1",
          target: "#hubspot-form"
        });
      }
    };
    document.body.appendChild(hsScript);

    const popupTimer = setTimeout(() => setShowWheel(true), 3000);

    return () => {
      document.body.removeChild(hsScript);
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
      className="inline-flex items-center justify-center rounded-xl bg-[#91040C] px-6 py-3 text-white font-semibold shadow-lg hover:brightness-110 transition"
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
    <div className="min-h-screen bg-[#D0BA98] text-[#23140C] scroll-smooth">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px]">

          {/* Header */}
          <header className="sticky top-0 z-40 bg-[#D0BA98]/90 backdrop-blur border-b border-[#23140C]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={propertyIcon} alt="PropertyInvestors Icon" className="h-9 w-9 object-contain" />
                <a href="https://propertyinvestors.com.au" className="font-bold text-[#23140C] hover:text-[#91040C]">
                  propertyinvestors.com.au
                </a>
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#23140C]">
                <a href="#how" onClick={(e) => handleScroll(e, "how")} className="hover:text-[#91040C]">How it works</a>
                <a href="#why" onClick={(e) => handleScroll(e, "why")} className="hover:text-[#91040C]">Why us</a>
                <a href="#faq" onClick={(e) => handleScroll(e, "faq")} className="hover:text-[#91040C]">FAQ</a>
              </nav>
              <CTAButton>Get the Free Guide</CTAButton>
            </div>
          </header>

          {/* Hero */}
          <section className="relative overflow-hidden">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-20 grid md:grid-cols-2 gap-10">

              {/* Hero Text */}
              <div>
                <h1 className="mt-4 text-4xl/tight md:text-5xl/tight font-extrabold text-[#23140C]">
                  Understanding Investment Properties in Australia.{" "}
                  <span className="text-[#91040C]">What To Know Before You Buy.</span>
                </h1>

                <p className="mt-4 text-lg text-[#23140C]">
                  Build your knowledge and confidence with Australia’s leading property strategists.
                </p>

                <p className="mt-4 text-[#23140C]">
                  Before you invest in property, it’s crucial to understand how the Australian market works —
                  from rental yields and capital growth to tax deductions and depreciation.
                </p>

                <p className="mt-4 text-[#23140C]">
                  Using our SCIDY framework, we analyse growth markets nationwide, factoring in infrastructure
                  pipelines, demographic trends, and supply–demand balance.
                </p>

                <p className="mt-4 text-[#23140C]">
                  We’ll teach you how to interpret suburb-level data, identify undervalued areas, and structure
                  your finance correctly for Australian tax efficiency.
                </p>

                <p className="mt-4 text-[#23140C]">
                  This foundation of knowledge allows you to make confident decisions — whether you're buying
                  in Sydney, Perth, or regional Queensland.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <CTAButton>Get the Free Guide — Book a Meeting</CTAButton>
                </div>
              </div>

              {/* HubSpot Form */}
              <div id="book" className="bg-white rounded-2xl shadow-xl border border-[#91040C] p-6">
                <div className="text-sm font-semibold text-[#91040C]">FREE Investment Starter Session</div>
                <h3 className="text-2xl font-bold mt-1 text-[#23140C]">Understanding Property Strategy</h3>
                <p className="mt-2 text-sm text-[#23140C]">
                  Learn how to research growth markets, reduce risk, and build wealth through property.
                </p>
                <div id="hubspot-form" className="mt-4"></div>

                {/* Scarcity */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#D0BA98]/30 border border-[#91040C] p-3 text-center">
                    <div className="text-xs text-[#91040C]">Spots left this month</div>
                    <div className="text-2xl font-extrabold text-[#91040C]">{spotsLeft}</div>
                  </div>
                  <div className="rounded-xl bg-[#D0BA98]/30 border border-[#91040C] p-3 text-center">
                    <div className="text-xs text-[#91040C]">Offer ends in</div>
                    <div className="text-sm font-bold text-[#23140C]">
                      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section id="how" className="py-16 bg-[#D0BA98]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#23140C]">How It Works</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { step: "1", title: "Book Your Session", desc: "Choose a time for your free consultation." },
                  { step: "2", title: "We Analyse Your Situation", desc: "We assess your goals and position." },
                  { step: "3", title: "Get Your Investment Plan", desc: "Receive a clear roadmap to follow." },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl border border-[#91040C] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#91040C] text-white grid place-items-center font-bold">{s.step}</div>
                    <h3 className="mt-4 font-bold text-lg text-[#23140C]">{s.title}</h3>
                    <p className="mt-1 text-[#23140C]">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Us */}
          <section id="why" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#23140C]">Why Work With Us</h2>
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
                    <h3 className="mt-4 font-bold text-lg text-[#23140C]">{w.title}</h3>
                    <p className="mt-1 text-[#23140C]">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-16 bg-[#D0BA98]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#23140C]">FAQ</h2>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {[
                  { q: "Can beginners invest?", a: "Yes. We work with first-time and experienced investors." },
                  { q: "Do you help with finance structure?", a: "We help guide you on structuring for tax efficiency." },
                  { q: "Do I need a high income?", a: "Not always. It depends on borrowing capacity." },
                  { q: "Is property safe?", a: "We teach risk management to reduce exposure." },
                ].map((f, i) => (
                  <div key={i} className="rounded-2xl border border-[#91040C] bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-[#23140C]">{f.q}</h3>
                    <p className="mt-2 text-[#23140C]">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-xs text-[#23140C]">
                General information only. Not financial advice. Seek licensed advice.
              </p>
              <div className="mt-6">
                <CTAButton>Get the Free Guide — Book a Meeting</CTAButton>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-10 bg-[#23140C] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm">© 2025 propertyinvestors.com.au. All rights reserved.</div>
              <div className="flex items-center gap-6 text-sm">
                <a href="https://propertyinvestors.com.au/privacy-policy/" className="hover:text-[#D0BA98]">Privacy Policy</a>
                <a href="https://propertyinvestors.com.au/legal-statements/" className="hover:text-[#D0BA98]">Terms</a>
                <a href="https://meetings.hubspot.com/charlie-jesaulenko-ash" className="hover:text-[#D0BA98]">Contact</a>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
