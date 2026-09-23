import React, {useState} from 'react';
import {ArrowRight, Menu, X, CheckCircle2, Mail, ChevronRight} from 'lucide-react';

const services=[
 ['Digital Transformation','Turning change into a competitive advantage, not a disruption.','Digital transformation.jpg'],
 ['Technology & IT','IT strategy built for the business it serves, not the other way around.','Technology and IT.jpg'],
 ['Telecom Consulting','Deep operator experience applied to network, commercial, and regulatory strategy.','Telecom consulting.jpg'],
 ['Infrastructure Projects','Advisory across the full lifecycle of large capital projects.','Infrastructure projects.jpg'],
 ['Supply Chain & Operations','Operational resilience and efficiency engineered into how the business runs.','Supply chain and ops.jpg'],
 ['Customer Experience','Experience strategy that shows up in retention and revenue.','Customer experience.jpg'],
 ['Training & Capacity Building','Building the internal capability to sustain change after we leave.','Training and capacity.jpg']
];
const industries=[
 ['Telecom','Telecom industry.jpg'],['Finance','Finance industry.jpg'],['Technology','Technology industry.jpg'],['Public Sector','Public sector.jpg'],
 ['Retail','Retail industry.jpg'],['Manufacturing','Manufacturing.jpg'],['Infrastructure','Infrastructure industry.jpg'],['Healthcare','Healthcare industry.jpg']
];
const principles=[
 ['Our Mission','Turning digital ambition into measurable operational results.','Our mission.jpg'],
 ['Our Vision','To be the advisory partner organizations turn to first when strategy has to become reality.','Our vision.jpg'],
 ['Core Values','Excellence, integrity, partnership, impact, and accountability shape every engagement.','Core values.jpg']
];
const nav=[['Services','services'],['Industries','industries'],['About','about'],['Approach','approach'],['Contact','contact']];
const enc=s=>'/images/'+encodeURIComponent(s);

export default function App(){
 const [open,setOpen]=useState(false);
 return <main className="bg-white text-slate-950 selection:bg-cyan-200">
  <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-slate-950/90 text-white backdrop-blur-xl">
   <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
    <a href="#top" className="flex items-center gap-3"><img src={enc('Exelup Logo.jpg')} className="h-11 w-11 rounded-xl object-cover"/><span className="text-2xl font-black tracking-tight">exelup</span></a>
    <nav className="hidden gap-8 lg:flex">{nav.map(([n,id])=><a key={id} href={'#'+id} className="text-sm font-semibold text-white/80 hover:text-cyan-300">{n}</a>)}</nav>
    <a href="#contact" className="hidden rounded-full bg-cyan-400 px-5 py-3 text-sm font-extrabold text-slate-950 lg:block">Start a conversation</a>
    <button className="lg:hidden" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
   </div>
   {open&&<div className="border-t border-white/10 px-6 py-5 lg:hidden">{nav.map(([n,id])=><a onClick={()=>setOpen(false)} key={id} href={'#'+id} className="block py-3 font-semibold">{n}</a>)}</div>}
  </header>

  <section id="top" className="relative min-h-[780px] overflow-hidden bg-slate-950 text-white">
   <img src={enc('Strategic advisory.jpg')} className="absolute inset-0 h-full w-full object-cover opacity-40"/>
   <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20"/>
   <div className="relative mx-auto flex min-h-[780px] max-w-7xl items-center px-6 pt-20">
    <div className="max-w-4xl py-24">
     <p className="mb-6 font-bold uppercase tracking-[.28em] text-cyan-300">Strategic advisory & management consulting</p>
     <h1 className="text-5xl font-black leading-[.98] tracking-tight sm:text-6xl lg:text-8xl">Where strategy<br/><span className="text-cyan-300">meets execution.</span></h1>
     <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-200">We help leadership teams turn ambitious strategy into systems, operations, and measurable results — staying engaged from decision through delivery.</p>
     <div className="mt-10 flex flex-wrap gap-4"><a href="#services" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-4 font-extrabold text-slate-950">Explore our services <ArrowRight size={18}/></a><a href="#about" className="rounded-full border border-white/40 px-7 py-4 font-bold">About exelup</a></div>
    </div>
   </div>
  </section>

  <section className="bg-cyan-400"><div className="mx-auto grid max-w-7xl gap-px bg-slate-900/15 md:grid-cols-3">{['Independent, vendor-neutral advice','Senior expertise through delivery','Outcomes defined from day one'].map((x,i)=><div className="flex items-center gap-3 bg-cyan-400 p-7 font-extrabold" key={x}><span className="text-2xl">0{i+1}</span>{x}</div>)}</div></section>

  <section id="services" className="mx-auto max-w-7xl px-6 py-28">
   <Eyebrow>What we do</Eyebrow><div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">Transformation that holds up in operation.</h2><p className="max-w-md text-lg text-slate-600">Seven connected capabilities, designed to move organizations from strategic intent to sustainable execution.</p></div>
   <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(([t,d,img],i)=><article key={t} className={'group relative min-h-[360px] overflow-hidden rounded-3xl '+(i===0?'lg:col-span-2':'')}><img src={enc(img)} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent"/><div className="absolute inset-x-0 bottom-0 p-7 text-white"><span className="text-xs font-bold text-cyan-300">0{i+1}</span><h3 className="mt-2 text-2xl font-black">{t}</h3><p className="mt-2 max-w-xl text-white/75">{d}</p></div></article>)}</div>
  </section>

  <section id="industries" className="bg-slate-950 py-28 text-white"><div className="mx-auto max-w-7xl px-6"><Eyebrow>Industries we serve</Eyebrow><h2 className="max-w-3xl text-4xl font-black sm:text-6xl">Sector depth. Cross-industry perspective.</h2><div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">{industries.map(([t,img])=><div key={t} className="group relative aspect-[4/3] overflow-hidden rounded-2xl"><img src={enc(img)} className="h-full w-full object-cover opacity-65 transition group-hover:scale-105 group-hover:opacity-85"/><div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/><h3 className="absolute bottom-5 left-5 text-xl font-black">{t}</h3></div>)}</div></div></section>

  <section id="about" className="mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-2 lg:items-center"><div><img src={enc(' team.jpg')} className="min-h-[520px] w-full rounded-[2rem] object-cover"/></div><div><Eyebrow>About exelup</Eyebrow><h2 className="text-4xl font-black sm:text-6xl">Built to close the gap between advice and delivery.</h2><p className="mt-7 text-lg leading-8 text-slate-600">exelup is a strategic advisory and management consulting firm built around one idea: transformation only matters if it holds up in operation. We combine senior advisory judgment with technical depth and hands-on delivery.</p><p className="mt-5 text-lg leading-8 text-slate-600">Our clients face the same underlying challenge across sectors: legacy systems, shifting customer expectations, and pressure to modernize without disrupting the business. We stay engaged from strategy through implementation rather than handing off a slide deck and walking away.</p><div className="mt-8 space-y-3">{['Senior advisors with real operating experience','Independent recommendations without vendor incentives','Strategy, technology and operations considered together'].map(x=><div key={x} className="flex gap-3 font-bold"><CheckCircle2 className="text-cyan-600"/>{x}</div>)}</div></div></section>

  <section className="bg-slate-100 py-24"><div className="mx-auto max-w-7xl px-6"><div className="grid gap-5 md:grid-cols-3">{principles.map(([t,d,img])=><article className="overflow-hidden rounded-3xl bg-white shadow-sm" key={t}><img src={enc(img)} className="h-56 w-full object-cover"/><div className="p-7"><h3 className="text-2xl font-black">{t}</h3><p className="mt-3 leading-7 text-slate-600">{d}</p></div></article>)}</div></div></section>

  <section id="approach" className="mx-auto max-w-7xl px-6 py-28"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><Eyebrow>Our approach</Eyebrow><h2 className="text-4xl font-black sm:text-6xl">A consistent method, adapted to your context.</h2><p className="mt-6 text-lg text-slate-600">Every engagement is grounded in operational reality and built around a measurable outcome.</p></div><div>{[['01','Discover','Understand how the business actually operates today.'],['02','Design','Build recommendations around your real constraints and goals.'],['03','Deliver','Work alongside your teams through implementation.'],['04','Sustain','Transfer the capability so results continue after we leave.']].map(([n,t,d])=><div className="grid grid-cols-[60px_1fr_auto] items-center border-t border-slate-200 py-7" key={n}><span className="font-black text-cyan-600">{n}</span><div><h3 className="text-2xl font-black">{t}</h3><p className="mt-1 text-slate-600">{d}</p></div><ChevronRight/></div>)}</div></div></section>

  <section id="contact" className="relative overflow-hidden bg-cyan-400"><img src={enc('Partnership.jpg')} className="absolute right-0 h-full w-1/2 object-cover opacity-20"/><div className="relative mx-auto max-w-7xl px-6 py-24"><p className="font-bold uppercase tracking-[.25em]">Ready to move from strategy to results?</p><h2 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">Let's build what comes next.</h2><a href="mailto:info@exelup.com" className="mt-9 inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 font-bold text-white"><Mail size={19}/> info@exelup.com</a></div></section>

  <footer className="bg-slate-950 text-white"><div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2"><div><div className="text-3xl font-black">exelup</div><p className="mt-4 max-w-md text-slate-400">Strategic advisory and management consulting for organizations navigating complex transformation.</p></div><div className="grid grid-cols-2 gap-4 text-sm">{nav.map(([n,id])=><a className="text-slate-300 hover:text-cyan-300" href={'#'+id} key={id}>{n}</a>)}</div></div><div className="border-t border-white/10 px-6 py-6 text-center text-xs text-slate-500">© 2026 exelup. All rights reserved.</div></footer>
 </main>
}
function Eyebrow({children}){return <p className="mb-5 text-xs font-black uppercase tracking-[.32em] text-cyan-600">{children}</p>}
