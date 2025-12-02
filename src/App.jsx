import React, { useEffect, useMemo, useState } from "react"; 
import propertyIcon from "./assets/propertyinvestors_icon.webp";

// CAPITAL GAINS TAX LANDING PAGE — React + TailwindCSS
export default function CapitalGainsTaxLanding() {
  const deadline = useMemo(() => {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    return end.getTime();
  }, []);

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(deadline));
  const [spotsLeft, setSpotsLeft] = useState(15);
  const [showWheel, setShowWheel] = useState(false); // Wheel popup state

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeRemaining(deadline)), 1000);
    return () => clearInterval(timer);
  }, [deadline]);

  useEffect(() => {
    // Load HubSpot form
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

    // Load Common Ninja Wheel
    const cnScript = document.createElement("script");
    cnScript.src = "https://cdn.commoninja.com/sdk/latest/commonninja.js";
    cnScript.defer = true;
    document.body.appendChild(cnScript);

    // Auto show wheel after 3s
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
      href="https://meetings.hubspot.com/charlie-jesaulenko-ash?__hstc=142318509.3d6b061e2d72e4983c91d7bc671929fa.1763108544732.1764637505673.1764656050077.12&__hssc=142318509.1.1764656050077&__hsfp=331823229book"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-xl bg-[#E3A750] px-6 py-3 text-white font-semibold shadow-lg hover:brightness-110 transition"
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-[#BCD4CC] text-[#002F45]">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px]">

          {/* Header */}
          <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[#002F45]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={propertyIcon} alt="PropertyInvestors Icon" className="h-9 w-9 object-contain" />
                <a href="https://propertyinvestors.com.au" className="font-bold text-[#002F45] hover:text-[#E3A750]">propertyinvestors.com.au</a>
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#002F45]">
                <a href="#how" className="hover:text-[#E3A750]">How it works</a>
                <a href="#why" className="hover:text-[#E3A750]">Why us</a>
                <a href="#faq" className="hover:text-[#E3A750]">FAQ</a>
              </nav>
              <CTAButton>Book Free Session</CTAButton>
            </div>
          </header>

          {/* Hero */}
          <section className="relative overflow-hidden">
            {/* Wheel popup */}
            <div className="commonninja_component pid-ac09a1f9-1fc0-487b-9296-44a74a6ff867">&nbsp;</div>


            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#BCD4CC]/40 via-white to-[#BCD4CC]/20" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-20 grid md:grid-cols-2 gap-10 items-center">

              {/* Hero Text */}
              <div>
                <h1 className="mt-4 text-4xl/tight md:text-5xl/tight font-extrabold text-[#002F45]">
                  Capital Gains Tax Explained. <span className="text-[#E3A750]">How to Reduce What You Owe in Australia.</span>
                </h1>
                <p className="mt-4 text-lg text-[#002F45]">
                  Learn how capital gains tax applies to Australian property and discover legal ways to minimise your bill when selling your investment.
                </p>
                <p className="mt-4 text-[#002F45]">
                  If you’ve sold or are planning to sell an investment property in Australia, you may be liable for Capital Gains Tax (CGT) under the Australian Taxation Office (ATO). CGT applies to the profit you make on a property sale — but smart investors know how to structure ownership and timing to keep more of their gains.
                </p>
                <p className="mt-2 text-[#002F45]">
                  We break down CGT in plain English, explaining rules like the 6-year exemption, main residence rule, and 50% CGT discount available to investors who hold property longer than 12 months.
                </p>
                <p className="mt-2 text-[#002F45]">
                  Whether you own property in Sydney, Melbourne, Brisbane, or regional areas, we’ll help you understand how local market timing and ownership structure can affect your final tax position.
                  Our expert team will guide you through the process of calculating your gain, managing your expenses, and using offsets and losses strategically.
                </p>
                <p className="mt-2 text-[#002F45]">
                  With clear advice backed by experience and research, you can sell smarter — and protect your wealth under Australia’s current tax system.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <CTAButton>Book your free strategy session today</CTAButton>
                </div>
              </div>

              {/* HubSpot Form */}
              <div id="book" className="bg-white rounded-2xl shadow-xl border border-[#002F45] p-6">
                <div className="text-sm font-semibold text-[#E3A750]">FREE 30-Min Strategy Session</div>
                <h3 className="text-2xl font-bold mt-1">Custom CGT Plan</h3>
                <p className="mt-2 text-sm text-[#002F45]">Discover how to minimise your capital gains legally and efficiently.</p>
                <div id="hubspot-form" className="mt-4"></div>

                {/* Scarcity */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#BCD4CC]/30 border border-[#002F45] p-3 text-center">
                    <div className="text-xs text-[#002F45]">Spots left this month</div>
                    <div className="text-2xl font-extrabold text-[#E3A750]">{spotsLeft}</div>
                  </div>
                  <div className="rounded-xl bg-[#BCD4CC]/30 border border-[#002F45] p-3 text-center">
                    <div className="text-xs text-[#002F45]">Offer ends in</div>
                    <div className="text-sm font-bold">
                      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-16 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold">FAQ</h2>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {[
                  { q: "Is negative gearing still worth it with today’s rates?", a: "It can be—if the numbers stack up. We model repayments, rent scenarios, and tax offsets so you can see your likely after-tax cashflow before you buy." },
                  { q: "P&I or Interest-Only?", a: "We compare both. IO may improve short-term cashflow; P&I builds equity. Your plan shows total interest, repayments, and after-tax position under each option." },
                  { q: "Will this work for my income bracket?", a: "That’s exactly what we assess. Your marginal tax rate strongly affects the benefit—your session includes a personalised model." },
                  { q: "Is this tax/financial advice?", a: "It’s education and strategy modelling. Confirm specifics with a licensed tax agent or financial adviser before acting." },
                ].map((f, i) => (
                  <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                    <h3 className="font-bold">{f.q}</h3>
                    <p className="mt-2 text-neutral-700">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-xs text-neutral-500">General information only. Not financial or tax advice. Past performance is not a reliable indicator of future results. Consider your circumstances and seek licensed advice before acting.</p>
              <div className="mt-6">
                <CTAButton>Book My FREE Strategy Session Now</CTAButton>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-10 bg-[#002F45] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm">© 2025 propertyinvestors.com.au. All rights reserved.</div>
              <div className="flex items-center gap-6 text-sm">
                <a href="https://propertyinvestors.com.au/privacy-policy/" className="hover:text-[#E3A750]">Privacy Policy</a>
                <a href="https://propertyinvestors.com.au/legal-statements/" className="hover:text-[#E3A750]">Terms</a>
                <a href="https://meetings.hubspot.com/charlie-jesaulenko-ash" className="hover:text-[#E3A750]">Contact</a>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
