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
        formId: "cc21665b-9239-4e91-9fa8-cb915a0d74d4",
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
        formId: "cc21665b-9239-4e91-9fa8-cb915a0d74d4",
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
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.add("ring-4", "ring-[#A9CFE0]");
    setTimeout(() => el.classList.remove("ring-4", "ring-[#A9CFE0]"), 1200);
  };

  return (
    <div className="min-h-screen bg-[#F3F3E3] text-[#606F69] scroll-smooth">

    <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px]">

          {/* HEADER */}
          <header className="sticky top-0 z-40 bg-[#F3F3E3]/95 backdrop-blur border-b border-[#606F69]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <nav className="flex items-center gap-6 text-sm font-medium">
                <a onClick={(e) => handleScroll(e, "how")} href="#how" className="text-[#606F69] hover:text-[#A9CFE0]">How it works</a>
                <a onClick={(e) => handleScroll(e, "why")} href="#why" className="text-[#606F69] hover:text-[#A9CFE0]">Why us</a>
                <a onClick={(e) => handleScroll(e, "faq")} href="#faq" className="text-[#606F69] hover:text-[#A9CFE0]">FAQ</a>
              </nav>
              <CTAButton>Get my free calculation</CTAButton>
            </div>
          </header>

          {/* HERO */}
          <section className="relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 md:pt-8 md:pb-20 grid md:grid-cols-2 gap-10">

              <div>
                <h1 className="mt-4 text-4xl/tight md:text-5xl/tight font-extrabold">
                  Negative Gearing in Australia.{" "}
                  <span className="text-[#A9CFE0]">Maximise Your Tax Benefits and Long-Term Growth.</span>
                </h1>

                <p className="mt-4 text-lg">
                  Understand how negative gearing can strengthen your investment property strategy in Australia.
                </p>

                <p className="mt-4">
                  Negative gearing is a powerful tax tool — but only when applied correctly.
                </p>

                <div className="mt-6">
                  <CTAButton>Get my free calculation</CTAButton>
                </div>
              </div>

              {/* INLINE FORM */}
              <div id="book" className="bg-white rounded-2xl shadow-xl border border-[#A9CFE0] p-6">
                <h3 className="text-2xl font-bold">Free Negative Gearing Assessment</h3>
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

          {/* HOW */}
          <section id="how" className="bg-[#F3F3E3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <h2 className="text-3xl font-extrabold">How It Works</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { step: "1", title: "Book Your Session", desc: "Choose a time for your free assessment." },
                  { step: "2", title: "We Analyse Your Numbers", desc: "We review your tax position and goals." },
                  { step: "3", title: "Get Your Calculation", desc: "Receive a tailored negative-gearing report." },
                ].map((s) => (
                  <div key={s.step} className="rounded-2xl border border-[#A9CFE0] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#A9CFE0] grid place-items-center font-bold">{s.step}</div>
                    <h3 className="mt-4 font-bold text-lg">{s.title}</h3>
                    <p className="mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WHY */}
          <section id="why" className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold">Why Work With Us</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { title: "Tax-Focused Strategy", desc: "Clear, practical analysis to maximise deductions." },
                  { title: "Data-Backed Property Insights", desc: "We identify suburbs with strong performance." },
                  { title: "Beginner-Friendly Support", desc: "We explain everything in simple terms." },
                ].map((w) => (
                  <div key={w.title} className="rounded-2xl border border-[#A9CFE0] bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-lg">{w.title}</h3>
                    <p className="mt-1">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="bg-[#F3F3E3] py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold">FAQ</h2>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {[
                  { q: "Is negative gearing only for high-income earners?", a: "Not always — it depends on strategy." },
                  { q: "Can beginners use negative gearing?", a: "Yes, we walk you through it step-by-step." },
                  { q: "Do you provide tax advice?", a: "We guide strategy and recommend licensed professionals." },
                  { q: "Is negative gearing risky?", a: "It must be planned with cash flow + yield in mind." },
                ].map((f) => (
                  <div key={f.q} className="rounded-2xl border border-[#A9CFE0] bg-white p-6 shadow-sm">
                    <h3 className="font-bold">{f.q}</h3>
                    <p className="mt-2">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="py-16 text-center">
            <CTAButton>Get my free calculation</CTAButton>
          </section>

          {/* FOOTER */}
          <footer className="py-10 bg-[#606F69] text-white">
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
              <h3 className="text-2xl font-bold leading-tight pr-6">
                Free Negative Gearing Assessment
              </h3>
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
