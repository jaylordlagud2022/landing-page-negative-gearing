import React, { useEffect, useMemo, useState } from "react";

export default function CapitalGainsTaxLanding() {
  const deadline = useMemo(() => {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    return end.getTime();
  }, []);

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(deadline));
  const [spotsLeft, setSpotsLeft] = useState(15);
  const [modalOpen, setModalOpen] = useState(false);
  const [hsLoaded, setHsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(
      () => setTimeLeft(getTimeRemaining(deadline)),
      1000
    );
    return () => clearInterval(timer);
  }, [deadline]);

  /** Load HubSpot script */
  useEffect(() => {
    const hsScript = document.createElement("script");
    hsScript.src = "//js.hsforms.net/forms/embed/v2.js";
    hsScript.async = true;
    hsScript.onload = () => setHsLoaded(true);
    document.body.appendChild(hsScript);
    return () => document.body.removeChild(hsScript);
  }, []);

  /** Inline form */
  useEffect(() => {
    if (!hsLoaded || !window.hbspt) return;
    const target = document.getElementById("hubspot-form");
    if (target && target.innerHTML.trim() === "") {
      window.hbspt.forms.create({
        portalId: "46099113",
        formId: "e6b2577e-4c88-47e0-8369-4bca76eead59",
        region: "na1",
        target: "#hubspot-form",
      });
    }
  }, [hsLoaded]);

  /** Modal form */
  useEffect(() => {
    if (!modalOpen || !hsLoaded || !window.hbspt) return;
    const target = document.getElementById("hubspot-form-modal");
    if (target) {
      target.innerHTML = "";
      window.hbspt.forms.create({
        portalId: "46099113",
        formId: "e6b2577e-4c88-47e0-8369-4bca76eead59",
        region: "na1",
        target: "#hubspot-form-modal",
      });
    }
  }, [modalOpen, hsLoaded]);

  function getTimeRemaining(end) {
    const total = end - Date.now();
    const clamped = Math.max(total, 0);
    return {
      total: clamped,
      days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
      hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((clamped / (1000 * 60)) % 60),
      seconds: Math.floor((clamped / 1000) % 60),
    };
  }

  const CTAButton = ({ children }) => (
    <a
      href="#book"
      onClick={(e) => {
        e.preventDefault();
        setModalOpen(true);
      }}
      className="inline-flex items-center justify-center rounded-xl bg-[#CBD83B] px-6 py-3
      text-white font-semibold shadow-lg hover:brightness-110 transition"
    >
      {children}
    </a>
  );

const handleScroll = (e, id) => {
  e.preventDefault();

  const el = document.getElementById(id);
  if (!el) return;

  const offset = id === "why" ? 0 : 70; // 👈 no offset for #why

  const y =
    el.getBoundingClientRect().top +
    window.pageYOffset -
    offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};


  return (
    <div className="min-h-screen bg-[#FFFEEC] text-[#A88AED] scroll-smooth">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px]">

          {/* Header */}
          <header className="sticky top-0 z-40 bg-[#FFFEEC]/90 backdrop-blur border-b border-[#CBD83B]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

              {/* MENU replaces logo */}
              <nav className="flex items-center gap-6 text-sm font-medium text-[#CBD83B] font-semibold">
                <a href="#how" onClick={(e) => handleScroll(e, "how")} className="hover:text-[#A88AED]">How it works</a>
                <a href="#why" onClick={(e) => handleScroll(e, "why")} className="hover:text-[#A88AED]">Why us</a>
                <a href="#faq" onClick={(e) => handleScroll(e, "faq")} className="hover:text-[#A88AED]">FAQ</a>
              </nav>

              <CTAButton>Start Your Plan</CTAButton>
            </div>
          </header>

          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FFFEEC]/40 via-white to-[#FFFEEC]/20" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-20 grid md:grid-cols-2 gap-10">

              {/* Hero Text */}
              <div>
                <h1 className="mt-4 text-4xl/tight md:text-5xl/tight font-extrabold text-[#A88AED]">
                  Create Financial Freedom in Australia{" "}
                  <span className="text-[#CBD83B]">By Building Wealth for Life.</span>
                </h1>
                <p className="mt-4 text-lg text-[#253E4C]">
                  Financial freedom means having choices to work less, travel more, and live life on your terms.
                </p>
                <p className="mt-4 text-lg text-[#002F45]">
                  We help Australians create lasting wealth through property, using research-based strategies and personalised planning.
                </p>
                <p className="mt-2 text-[#002F45]">
                  We’ll show you how to build a portfolio that generates income, reduces tax, and compounds in value over time.                 
                </p>
                <p className="mt-2 text-[#002F45]">
                  Our process combines education, data, and coaching to help you make confident, independent investment decisions.

                  Whether you’re starting out or ready to expand your portfolio, we’ll help you take the next step toward real financial independence.                
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <CTAButton>Let’s create your plan today</CTAButton>
                </div>
              </div>

              {/* HubSpot Form */}
              <div
                id="book"
                className="bg-white rounded-2xl shadow-xl border border-[#CBD83B] p-6 transition-all"
              >
                <div className="text-sm font-semibold text-[#CBD83B]">FREE 30-Min Property Strategy Session</div>
                <h3 className="text-2xl font-bold mt-1">Custom Wealth Plan</h3>
                <p className="mt-2 text-sm text-[#253E4C]">Discover how to create financial freedom through property investing.</p>

                <div id="hubspot-form" className="mt-4"></div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-neutral-50 border p-3 text-center">
                    <div className="text-xs text-neutral-500">Spots left this month</div>
                    <div className="text-2xl font-extrabold text-orange-700">{spotsLeft}</div>
                  </div>
                  <div className="rounded-xl bg-neutral-50 border p-3 text-center">
                    <div className="text-xs text-neutral-500">Offer ends in</div>
                    <div className="text-sm font-bold">
                      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section id="how" className="bg-[#FFFEEC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#A88AED]">How It Works</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">

                {[ 
                  { step: "1", title: "Book Your Session", desc: "Pick a time for a free 30-min consultation." },
                  { step: "2", title: "We Analyse Your Situation", desc: "We assess your goals and current property position." },
                  { step: "3", title: "Receive Your Action Plan", desc: "Get a clear step-by-step roadmap to build wealth." },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl border border-[#CBD83B] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#CBD83B] text-white grid place-items-center font-bold">
                      {s.step}
                    </div>
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
              <h2 className="text-3xl font-extrabold text-[#A88AED]">Why Work With Us</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">

                {[
                  { title: "Research-Driven Advice", desc: "We provide data-backed property insights to maximise returns." },
                  { title: "Step-by-Step Guidance", desc: "From first property to portfolio expansion, we guide every step." },
                  { title: "Financial Freedom Focused", desc: "Our strategies aim to build wealth and independence for life." },
                ].map((w, i) => (
                  <div key={i} className="rounded-2xl border border-[#CBD83B] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#FFFEEC] text-[#CBD83B] grid place-items-center font-bold">
                      {i + 1}
                    </div>
                    <h3 className="mt-4 font-bold text-lg text-[#253E4C]">{w.title}</h3>
                    <p className="mt-1 text-[#253E4C]">{w.desc}</p>
                  </div>
                ))}

              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="bg-[#FFFEEC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#A88AED]">FAQ</h2>

              <div className="mt-8 grid md:grid-cols-2 gap-6">

                {[
                  { q: "Can I start with one property?", a: "Yes, our strategies work for both beginners and experienced investors." },
                  { q: "Do you help with tax and structuring?", a: "We provide guidance to optimise tax benefits and property structure." },
                  { q: "What if I want to expand my portfolio?", a: "We create step-by-step plans for portfolio growth over time." },
                  { q: "Is this personalised advice?", a: "This is general guidance. For personalised advice, consult a licensed adviser." },
                ].map((f, i) => (
                  <div key={i} className="rounded-2xl border border-[#CBD83B] bg-white p-6 shadow-sm">
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
              <p className="text-xs text-[#253E4C]">
                General information only. Not financial advice. Consider your circumstances and seek licensed advice before acting.
              </p>
              <div className="mt-6">
                <CTAButton>Let’s create your plan today</CTAButton>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="py-10 bg-[#606F69] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex justify-center gap-6 text-sm">
                <a href="https://propertyinvestors.com.au/privacy-policy/" className="hover:text-[#A9CFE0]">Privacy Policy</a>
                <a href="https://propertyinvestors.com.au/legal-statements/" className="hover:text-[#A9CFE0]">Terms</a>
                <a href="#book"
                  onClick={(e) => {
                    e.preventDefault();
                    setModalOpen(true);
                  }} className="hover:text-[#A9CFE0]">Contact</a>
              </div>
            </div>
          </footer>

        </div>
      </div>
      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-[#A9CFE0] w-full max-w-md relative">

            {/* MODAL HEADER */}
            <div className="flex items-start justify-between p-6 border-b border-[#A9CFE0]">
                <h3 className="text-2xl font-bold mt-1 text-[#A88AED]">Custom Wealth Plan</h3>
 
              <button
                onClick={() => setModalOpen(false)}
                className="text-2xl leading-none text-[#606F69] hover:text-[#A9CFE0]"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* MODAL BODY */}
            <div className="p-6">
              <h3></h3>
              <div id="hubspot-form-modal"></div>

              {/* SPOTS + COUNTDOWN */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-neutral-50 border p-3 text-center">
                  <div className="text-xs text-neutral-500">
                    Spots left this month
                  </div>
                  <div className="text-2xl font-extrabold text-orange-700">
                    {spotsLeft}
                  </div>
                </div>

                <div className="rounded-xl bg-neutral-50 border p-3 text-center">
                  <div className="text-xs text-neutral-500">
                    Offer ends in
                  </div>
                  <div className="text-sm font-bold">
                    {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
                    {timeLeft.seconds}s
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
