const features = [
  {
    title: "Real-time insights",
    description: "Track outcomes and momentum with dashboards built for fast decisions.",
  },
  {
    title: "Community forecasts",
    description: "Invite collaborators to share probabilities and refine market signals.",
  },
  {
    title: "Secure payouts",
    description: "Automate settlements with transparent rules and escrow-friendly flows.",
  },
];

const stats = [
  { label: "Active markets", value: "128" },
  { label: "Avg. payout time", value: "42 sec" },
  { label: "Prediction accuracy", value: "87%" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-300">
              <span className="text-lg font-semibold">BF</span>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Bet on the Future</p>
              <p className="text-xl font-semibold">Prediction Markets</p>
            </div>
          </div>
          <button className="rounded-full border border-emerald-400/60 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-400 hover:bg-emerald-400/10">
            Join the waitlist
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-16 px-6 pb-20 pt-16">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
              New platform
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Build conviction with live prediction markets designed for strategic bets.
            </h1>
            <p className="text-lg text-slate-300">
              Bet on the Future brings trusted forecasting to your team, blending real-time
              sentiment with secure settlement tooling and delightful analytics.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300">
                Start forecasting
              </button>
              <button className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500">
                Schedule a demo
              </button>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-900/20 p-8">
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Featured market</p>
                <p className="mt-3 text-2xl font-semibold">
                  Will renewable energy surpass 50% of global power by 2035?
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-2 flex-1 rounded-full bg-slate-800">
                    <div className="h-2 w-[68%] rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="text-sm font-semibold text-emerald-300">68% YES</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 text-center"
                  >
                    <p className="text-2xl font-semibold text-emerald-200">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6"
            >
              <h2 className="text-xl font-semibold text-emerald-100">{feature.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
