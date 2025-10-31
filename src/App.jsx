import React, { useEffect, useMemo, useState } from "react";

// NEGATIVEGEARINGEXPLAINED.COM.AU — Hype-Optimised Landing Page
// - React + TailwindCSS single-file component
// - Sticky header, hero, benefit bars, process, testimonials, FAQ, and footer
// - Lightweight countdown + spots-left logic (client-side only)
// - Replace hrefs with your booking link and privacy pages

export default function NegativeGearingExplainedLanding() {
  // Countdown to the last day of the current month at 23:59:59
  const deadline = useMemo(() => {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    return end.getTime();
  }, []);

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(deadline));
  const [spotsLeft, setSpotsLeft] = useState(15);
  const [form, setForm] = useState({ name: "", email: "", phone: "", timing: "Within 3 months" });

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeRemaining(deadline)), 1000);
    return () => clearInterval(timer);
  }, [deadline]);

  function getTimeRemaining(end) {
    const total = end - Date.now();
    const clamped = Math.max(total, 0);
    const seconds = Math.floor((clamped / 1000) % 60);
    const minutes = Math.floor((clamped / 1000 / 60) % 60);
    const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
    const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
    return { total: clamped, days, hours, minutes, seconds };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo only: reduce spots and show an alert. Replace with your submit/redirect.
    setSpotsLeft((s) => Math.max(s - 1, 0));
    alert(`Thanks ${form.name || "there"}! We'll be in touch to confirm your FREE strategy session.`);
  };

  const CTAButton = ({ children, onClick, href }) => (
    <a
      href={href || "#book"}
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition"
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-orange-600 text-white grid place-items-center font-bold">NG</div>
            <div className="font-bold">NegativeGearingExplained<span className="hidden sm:inline">.com.au</span></div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#how" className="hover:text-orange-700">How it works</a>
            <a href="#why" className="hover:text-orange-700">Why us</a>
            <a href="#faq" className="hover:text-orange-700">FAQ</a>
          </nav>
          <CTAButton href="#book">Book Free Session</CTAButton>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-50 via-white to-sky-50" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white shadow px-3 py-1 text-xs font-semibold border border-neutral-200">
              <span className="h-2 w-2 rounded-full bg-green-500" /> Limited free sessions this month
            </div>
            <h1 className="mt-4 text-4xl/tight md:text-5xl/tight font-extrabold">
              <span className="text-orange-600">Stop</span> Leaving Property Tax Savings on the Table
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              We turn confusing negative gearing rules into simple, profitable strategy—so you keep more cash, pay less tax, and grow wealth faster.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <CTAButton href="#book">Book My FREE Negative Gearing Strategy Session</CTAButton>
              <div className="text-sm text-neutral-600">Normally $495 • 30 minutes • No hard sell</div>
            </div>
            {/* Trust badges */}
            <div className="mt-8 flex items-center gap-6 opacity-70">
              <img alt="CoreLogic" className="h-6" src="https://dummyimage.com/120x24/ddd/000.png&text=CoreLogic" />
              <img alt="ABS" className="h-6" src="https://dummyimage.com/80x24/ddd/000.png&text=ABS" />
              <img alt="SQM" className="h-6" src="https://dummyimage.com/90x24/ddd/000.png&text=SQM" />
            </div>
          </div>

          {/* Mini Form Card */}
          <div id="book" className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-6">
            <div className="text-sm font-semibold text-orange-700">FREE 30-Min Strategy Session</div>
            <h3 className="text-2xl font-bold mt-1">Custom Negative Gearing Plan</h3>
            <p className="mt-2 text-sm text-neutral-600">Discover the exact tax + cashflow play to suit your income.</p>

            <form onSubmit={handleSubmit} className="mt-4 grid gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <select
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 bg-white focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none"
                value={form.timing}
                onChange={(e) => setForm({ ...form, timing: e.target.value })}
              >
                <option>Within 3 months</option>
                <option>3–6 months</option>
                <option>6–12 months</option>
                <option>Just researching</option>
              </select>

              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-xl bg-orange-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition">
                Secure My Free Session Now
              </button>

              <p className="text-xs text-neutral-500">By submitting, you agree to our <a href="#" className="underline hover:text-neutral-700">Privacy Policy</a>.</p>
            </form>

            {/* Scarcity / Countdown */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-3 text-center">
                <div className="text-xs text-neutral-500">Spots left this month</div>
                <div className="text-2xl font-extrabold text-orange-700">{spotsLeft}</div>
              </div>
              <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-3 text-center">
                <div className="text-xs text-neutral-500">Offer ends in</div>
                <div className="text-sm font-bold">
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Bar */}
      <section className="py-10 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 items-center">
            <div className="md:col-span-3">
              <h3 className="text-xl md:text-2xl font-bold">FREE 30-Minute Strategy Session (Normally $495)</h3>
              <p className="mt-1 text-neutral-300">Discover deductions, depreciation & structures most investors miss. Turn today's losses into tomorrow's gains—without nasty surprises.</p>
            </div>
            <div className="text-left md:text-right">
              <CTAButton href="#book">Get My Free Session</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">Why This Works</h2>
          <p className="mt-3 text-neutral-700 max-w-3xl">We don't guess—we model. ATO-aligned strategy, number-first analysis (repayments, rent, tax offsets, Division 40/43), and clarity on cashflow (interest-only vs principal & interest). Outcome: a clear, custom plan that balances tax benefits with long-term growth.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "ATO-aligned approach", desc: "Practical strategies that respect the rules." },
              { title: "Number-first modelling", desc: "Repayments, rent, depreciation, offsets—before you buy." },
              { title: "Cashflow clarity", desc: "Compare IO vs P&I, offset usage, and buffers." },
            ].map((b, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-orange-100 text-orange-700 grid place-items-center font-bold">{i+1}</div>
                <h3 className="mt-4 font-bold text-lg">{b.title}</h3>
                <p className="mt-1 text-neutral-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">3 Easy Steps to Your Next Profitable Investment</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Book Your Session", desc: "Pick a time that suits you." },
              { step: "2", title: "We Crunch the Numbers", desc: "Income, borrowing, buffers, and tax position." },
              { step: "3", title: "Get Your Action Plan", desc: "Price ranges, loan structure, and next steps." },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-orange-600 text-white grid place-items-center font-bold">{s.step}</div>
                <h3 className="mt-4 font-bold text-lg">{s.title}</h3>
                <p className="mt-1 text-neutral-600">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton href="#book">Book My FREE Strategy Session</CTAButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">What Our Clients Say</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "I finally understood how negative gearing fits my income. We modelled repayments, rent, and depreciation—then bought with confidence.",
                name: "K. Nguyen",
                city: "Melbourne",
              },
              {
                quote: "They showed me how to structure the loan and use my offset properly. Cashflow shock avoided.",
                name: "A. Patel",
                city: "Sydney",
              },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-neutral-800">“{t.quote}”</p>
                <div className="mt-3 text-sm font-semibold text-neutral-600">— {t.name}, {t.city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency / Scarcity */}
      <section className="py-14 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-extrabold">Spots Are Limited — and They Go FAST</h3>
          <p className="mt-2 text-neutral-600">Only {spotsLeft} free sessions left this month.</p>
          <div className="mt-6">
            <CTAButton href="#book">Yes! Save Me a Spot</CTAButton>
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

      {/* Compliance + Final CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-neutral-500">General information only. Not financial or tax advice. Past performance is not a reliable indicator of future results. Consider your circumstances and seek licensed advice before acting.</p>
          <div className="mt-6">
            <CTAButton href="#book">Book My FREE Negative Gearing Strategy Session Now</CTAButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-neutral-900 text-neutral-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">© 2025 NegativeGearingExplained.com.au. All rights reserved.</div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
