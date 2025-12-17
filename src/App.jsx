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
        formId: "fc8ea854-a821-40f9-bd98-8bbe47ddfeaa",
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
        formId: "fc8ea854-a821-40f9-bd98-8bbe47ddfeaa",
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
    <div className="min-h-screen bg-[#EFEFEF] text-[#315762] scroll-smooth">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px]">

          {/* Header */}
          <header className="sticky top-0 z-40 bg-[#EFEFEF] border-b border-[#E9631A]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <nav className="flex items-center gap-6 text-sm font-medium" style={{ color: "#E9631A" }}>
                <a href="#how" onClick={(e) => handleScroll(e, "how")} className="hover:opacity-70">How it works</a>
                <a href="#why" onClick={(e) => handleScroll(e, "why")} className="hover:opacity-70">Why us</a>
                <a href="#faq" onClick={(e) => handleScroll(e, "faq")} className="hover:opacity-70">FAQ</a>
              </nav>

              <CTAButton>Kick Start Your Investment Journey</CTAButton>
            </div>
          </header>

          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#EFEFEF]/40 via-white to-[#EFEFEF]/20" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pb-20 grid md:grid-cols-2 gap-10">

              {/* Hero Text */}
              <div>
                <h1 className="mt-4 text-4xl/tight md:text-5xl/tight font-extrabold text-[#315762]">
                  Own an Investment Property in Australia. <span className="text-[#E9631A]">Start Building Wealth Now.</span>
                </h1>
                <p className="mt-4 text-lg text-[#315762]">
                  We help everyday Australians invest confidently with data-driven property research and support.
                </p>
                <p className="mt-2 text-[#315762]">
                  You don’t have to be rich to own investment property in Australia — you just need the right strategy and support. Our team helps Australians enter the market sooner by assessing borrowing power, leveraging equity, and using government incentives effectively.
                </p>
                <p className="mt-2 text-[#315762]">
                  We guide you through finance approval, property research, and purchase strategy, focusing on markets that offer strong capital growth and solid rental returns. From Perth to the Sunshine Coast, we pinpoint suburbs showing real movement, helping you buy with confidence and clarity.
                </p>
                <p className="mt-2 text-[#315762]">
                  If you’ve ever thought “I can’t afford to invest,” it’s time to discover how small steps today can create long-term results.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <CTAButton>Kick start your investment journey today</CTAButton>
                </div>
              </div>

              {/* HubSpot Form */}
              <div id="book" className="bg-white rounded-2xl shadow-xl border border-[#315762] p-6">
                <div className="text-sm font-semibold text-[#E9631A]">FREE 30-Min Strategy Session</div>
                <h3 className="text-2xl font-bold mt-1">Custom Investment Plan</h3>
                <p className="mt-2 text-sm text-[#315762]">Discover how to start your property investment journey confidently.</p>
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
          <section id="how" className="bg-[#EFEFEF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#315762]">How It Works</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { step: "1", title: "Book Your Session", desc: "Pick a time that suits you for a free 30-min consultation." },
                  { step: "2", title: "We Analyse Your Situation", desc: "Our team models your investment strategy and identifies opportunities." },
                  { step: "3", title: "Receive Your Action Plan", desc: "Get a clear strategy for buying and managing property with confidence." },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl border border-[#315762] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#E9631A] text-white grid place-items-center font-bold">{s.step}</div>
                    <h3 className="mt-4 font-bold text-lg text-[#315762]">{s.title}</h3>
                    <p className="mt-1 text-[#315762]">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Us */}
          <section id="why" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#315762]">Why Work With Us</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { title: "Expert Property Advice", desc: "Decades of experience helping Australians invest wisely." },
                  { title: "Data-Driven Insights", desc: "We use research to guide you to high-growth, strong rental return areas." },
                  { title: "Clear, Actionable Strategies", desc: "Step-by-step guidance, making investing simple and confident." },
                ].map((w, i) => (
                  <div key={i} className="rounded-2xl border border-[#315762] bg-white p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-xl bg-[#EFEFEF] text-[#315762] grid place-items-center font-bold">{i+1}</div>
                    <h3 className="mt-4 font-bold text-lg text-[#315762]">{w.title}</h3>
                    <p className="mt-1 text-[#315762]">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="bg-[#EFEFEF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-[#315762]">FAQ</h2>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {[
                  { q: "Do I need to be wealthy to invest?", a: "No, with the right strategy and support, anyone can start investing in property." },
                  { q: "How do I choose the right suburb?", a: "We use data-driven insights to identify high-growth areas with strong rental returns." },
                  { q: "What if I’m a first-time investor?", a: "Our team guides you step-by-step, from finance approval to purchase strategy." },
                  { q: "Is this financial advice?", a: "This is general information. Always seek licensed advice for your specific situation." },
                ].map((f, i) => (
                  <div key={i} className="rounded-2xl border border-[#EFEFEF] bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-[#315762]">{f.q}</h3>
                    <p className="mt-2 text-[#315762]">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
              <CTAButton>Kick Start Your Investment Journey Now</CTAButton>
            </div>
          </section>

          <footer className="py-10 bg-[#315762] text-white">
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
                <h3 className="text-2xl font-bold mt-1 text-[#315762]">Custom Investment Plan</h3>
 
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
