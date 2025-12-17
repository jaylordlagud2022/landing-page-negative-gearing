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
        formId: "a16cc7c7-c201-478b-ae83-4b362ad8018e",
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
        formId: "a16cc7c7-c201-478b-ae83-4b362ad8018e",
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
      className="inline-flex items-center justify-center rounded-xl bg-[#A9CFE0] px-6 py-3
      text-[#606F69] font-semibold shadow-lg hover:brightness-110 transition"
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
    <div className="min-h-screen bg-[#F7E5C1] text-[#1C393F] scroll-smooth">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px]">

          {/* Header */}
          <header className="sticky top-0 z-40 bg-[#F7E5C1] border-b border-[#1C393F]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

              <nav className="flex items-center gap-6 text-sm font-medium" style={{ color: "#1C393F" }}>
                <a href="#how" onClick={(e) => handleScroll(e, "how")} className="hover:opacity-70">How it works</a>
                <a href="#why" onClick={(e) => handleScroll(e, "why")} className="hover:opacity-70">Why us</a>
                <a href="#faq" onClick={(e) => handleScroll(e, "faq")} className="hover:opacity-70">FAQ</a>
              </nav>

              <CTAButton>Speak with an advisor today</CTAButton>
            </div>
          </header>

          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pb-20 grid md:grid-cols-2 gap-10">
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

  
          <footer className="py-10 bg-[#1C393F] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex justify-center gap-6 text-sm">
                <a href="https://propertyinvestors.com.au/privacy-policy/" className="hover:text-[#A9CFE0]">Privacy Policy</a>
                <a href="https://propertyinvestors.com.au/legal-statements/" className="hover:text-[#A9CFE0]">Terms</a>
                <a href="#book" onClick={(e) => handleScroll(e, "book")} className="hover:text-[#A9CFE0]">Contact</a>
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
                <h3 className="text-2xl font-bold mt-1 text-[#1C393F]">Personalised Property Strategy</h3>
 
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
