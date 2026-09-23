import React from "react";
import { ArrowRight, Search, Menu, ChevronDown, Globe2, BarChart3, Users, BriefcaseBusiness } from "lucide-react";

const nav = ["Services", "Industries", "Platforms", "Insights", "Careers"];

const capabilityCards = [
  {
    title: "AI Strategy & Automation",
    text: "Turn manual work into intelligent workflows that save time and unlock growth.",
  },
  {
    title: "Data & Digital Platforms",
    text: "Build modern data products, dashboards, cloud systems, and connected platforms.",
  },
  {
    title: "Customer Experience",
    text: "Create cleaner journeys, sharper websites, and smarter engagement systems.",
  },
];

const news = [
  "Exelup launches AI transformation advisory for growing businesses",
  "How small teams can scale using automation without adding headcount",
  "The future of work: practical AI systems for service companies",
  "Building secure, data-ready organizations for the next decade",
];

export default function ExelupHome() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="fixed left-0 right-0 top-0 z-50 bg-slate-950/30 backdrop-blur-md text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-black tracking-tight">Exelup</div>
          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            {nav.map((item) => (
              <a key={item} href="#" className="opacity-90 transition hover:opacity-100">{item}</a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Search size={19} />
            <Menu size={25} />
          </div>
        </div>
      </header>

      <section className="relative min-h-[760px] overflow-hidden bg-gradient-to-br from-sky-700 via-blue-700 to-cyan-500 text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)", backgroundSize: "34px 34px" }} />
        <div className="absolute right-[-8%] top-24 h-[560px] w-[560px] rounded-full border border-white/30" />
        <div className="absolute bottom-24 right-16 hidden h-64 w-64 rounded-full bg-white/10 blur-2xl lg:block" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-36 lg:grid-cols-2 lg:pt-44">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-cyan-100">Digital transformation partner</p>
            <h1 className="max-w-xl text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
              A purposeful partnership.
            </h1>
            <p className="mt-7 max-w-xl text-xl text-blue-50">
              Exelup helps businesses modernize operations, automate workflows, and build powerful digital systems that create measurable growth.
            </p>
            <button className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-wider text-blue-800 shadow-xl transition hover:scale-105">
              Know more <ArrowRight size={18} />
            </button>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -left-10 top-16 h-96 w-24 bg-white/20" />
            <div className="relative ml-auto h-[470px] w-[470px] rounded-[3rem] bg-white/15 p-8 shadow-2xl backdrop-blur-sm">
              <div className="h-full rounded-[2.5rem] bg-gradient-to-br from-white/35 to-white/5 p-8">
                <div className="flex h-full flex-col justify-end">
                  <BarChart3 className="mb-8 h-28 w-28 text-white" />
                  <h2 className="text-4xl font-black">AI. Data. Automation.</h2>
                  <p className="mt-4 text-lg text-white/85">Built for companies ready to move faster.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-3">
        <Panel color="bg-amber-700" title="Digital Core Capabilities" image="🦋" />
        <Panel color="bg-sky-700" title="Digital Operating Model" image="🌿" />
        <Panel color="bg-fuchsia-800" title="Talent Transformation" image="🦆" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 text-center">
        <p className="text-xs font-black uppercase tracking-[0.45em] text-slate-300">Navigate</p>
        <h2 className="mt-3 text-5xl font-black tracking-tight">The next</h2>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-slate-500">We bring powerful advantages to help you navigate your digital transformation.</p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {capabilityCards.map((card, index) => (
            <article key={card.title} className="group overflow-hidden rounded-3xl bg-slate-100 text-left shadow-sm transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-52 bg-gradient-to-br from-slate-300 to-slate-100 p-6">
                <div className="flex h-full items-end justify-between">
                  {[Globe2, BriefcaseBusiness, Users].map((Icon, i) => i === index && <Icon key={i} className="h-20 w-20 text-slate-700" />)}
                  <span className="text-6xl font-black text-white">0{index + 1}</span>
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black">{card.title}</h3>
                <p className="mt-3 text-slate-600">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-[2rem] border border-sky-300 p-10 text-center shadow-sm">
          <h2 className="text-4xl font-black">Our Purpose:</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold text-slate-700">
            To amplify human potential and create the next opportunity for people, businesses, and communities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <p className="text-xs font-black uppercase tracking-[0.45em] text-slate-300">About us</p>
        <h2 className="mt-3 text-5xl font-black tracking-tight">A global digital growth company</h2>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-slate-500">We help organizations turn strategy into systems, and systems into sustainable results.</p>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <Stat value="59" label="countries where our clients operate" />
          <Stat value="$20.2M" label="value unlocked through digital programs" />
          <Stat value="24+" label="enterprise and small-business solutions delivered" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 lg:grid-cols-[0.9fr_1.7fr]">
        <div className="rounded-3xl bg-amber-700 p-8 text-white">
          <h3 className="mb-8 text-3xl font-black">In the news</h3>
          {news.map((item) => (
            <div key={item} className="flex items-center justify-between border-t border-white/25 py-5 text-left font-semibold">
              <span>{item}</span><ArrowRight size={18} />
            </div>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {news.slice(0, 4).map((item, index) => (
            <article key={item} className="flex min-h-56 flex-col justify-end rounded-3xl bg-gradient-to-br from-slate-800 to-slate-500 p-6 text-left text-white shadow-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-white/60">Insight 0{index + 1}</p>
              <h4 className="mt-3 text-2xl font-black leading-tight">{item}</h4>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <p className="text-xs font-black uppercase tracking-[0.45em] text-slate-300">Careers</p>
        <h2 className="mt-3 text-5xl font-black tracking-tight">Grow with Exelup</h2>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-slate-500">Join a team building practical, beautiful, AI-powered solutions for modern businesses.</p>
        <button className="mt-10 rounded-full bg-slate-950 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-slate-800">Explore careers</button>
      </section>

      <footer className="bg-fuchsia-800 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-5xl font-black leading-tight">Let's help you navigate your next</h2>
            <p className="mt-5 max-w-xl text-white/80">Strategy, automation, data, AI, websites, and business systems designed for real-world execution.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {nav.map((item) => <a key={item} className="rounded-2xl border border-white/20 p-5 font-bold transition hover:bg-white hover:text-fuchsia-800" href="#">{item}</a>)}
          </div>
        </div>
      </footer>
    </main>
  );
}

function Panel({ color, title, image }) {
  return (
    <section className={`${color} relative min-h-[420px] overflow-hidden p-10 text-white`}>
      <div className="absolute right-16 top-16 h-72 w-20 bg-white/25" />
      <div className="absolute bottom-10 right-16 text-8xl drop-shadow-xl">{image}</div>
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <h2 className="max-w-sm text-4xl font-black leading-tight opacity-90">{title}</h2>
          <p className="mt-5 max-w-xs text-white/80">Move from scattered tools to connected, intelligent execution.</p>
        </div>
        <button className="mt-10 inline-flex w-fit items-center gap-3 text-sm font-black uppercase tracking-wider">Explore <ArrowRight size={18} /></button>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-5xl font-black">{value}</div>
      <p className="mx-auto mt-3 max-w-52 text-sm font-semibold text-slate-500">{label}</p>
    </div>
  );
}
