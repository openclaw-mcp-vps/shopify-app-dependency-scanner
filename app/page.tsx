export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify App Scanner
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find breaking Shopify app conflicts{" "}
          <span className="text-[#58a6ff]">before customers do</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Instantly scan your store for app compatibility issues, version conflicts, and performance impacts. Get actionable reports and real-time webhook alerts — so you fix problems before they cost you sales.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Scanning — $19/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-medium px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            ["500+", "Stores Scanned"],
            ["3,200+", "Conflicts Caught"],
            ["99.9%", "Uptime"],
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid sm:grid-cols-3 gap-8 text-center">
          {[
            ["Conflict Detection", "Identifies CSS, JS, and API clashes between apps automatically."],
            ["Performance Impact", "Measures load-time degradation caused by each installed app."],
            ["Real-Time Alerts", "Webhook monitoring notifies you the moment a new conflict appears."],
          ].map(([title, desc]) => (
            <div key={title as string}>
              <div className="text-[#58a6ff] font-semibold mb-2">{title}</div>
              <p className="text-sm text-[#8b949e]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple, flat pricing</h2>
        <p className="text-[#8b949e] mb-8 text-sm">One plan. Everything included. Cancel anytime.</p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8">
          <div className="text-4xl font-bold text-white mb-1">
            $19<span className="text-lg font-normal text-[#8b949e]">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Per store. Unlimited scans.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Connect unlimited Shopify stores",
              "Full dependency conflict analysis",
              "Performance impact reports",
              "Real-time webhook monitoring",
              "Email alerts on new conflicts",
              "Priority support",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started — $19/mo
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Secured by Lemon Squeezy. 30-day money-back guarantee.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            [
              "How does the scanner connect to my Shopify store?",
              "You install our Shopify app from the App Store and grant read-only API access. We never modify your store — we only read installed app data and performance metrics.",
            ],
            [
              "What kinds of conflicts does it detect?",
              "We detect JavaScript conflicts (duplicate libraries, event listener clashes), CSS specificity wars, conflicting API calls, and apps that significantly degrade page load speed.",
            ],
            [
              "Can I cancel anytime?",
              "Yes. Cancel from your dashboard at any time. You keep access until the end of your billing period and we offer a 30-day money-back guarantee, no questions asked.",
            ],
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2 text-sm">{q}</div>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Shopify App Dependency Scanner. All rights reserved.
      </footer>
    </main>
  );
}
