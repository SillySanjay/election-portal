"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, Users, BookOpen, Zap, Landmark, 
  MapPin, Phone, Mail, FileText, CheckCircle2, 
  Sprout, Activity, ShieldCheck, Heart, Lightbulb,
  Bus, Droplets, Radio, Building2, TrendingUp,
  Facebook, Twitter, Instagram, Youtube, ChevronRight,
  Quote, Award, Star, Search
} from "lucide-react";



export default function UltimateLeaderWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="bg-[#fcfcfc] font-sans text-slate-900 leading-relaxed antialiased overflow-x-hidden">
      {/* 2. HERO SECTION */}
      {/* HERO SECTION */}
<section
  id="vision"
  className="relative min-h-screen flex items-center pt-24 px-4 sm:px-6 bg-slate-50 overflow-hidden"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

    {/* LEFT CONTENT */}
    <motion.div
      className="lg:col-span-7 z-10"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[3px] mb-6">
        <Star size={12} fill="white" /> Model Village Of India
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-[90px] lg:text-[110px] font-black uppercase leading-tight md:leading-[0.85] tracking-tight mb-6">
        Gramin <span className="text-blue-600">Shetra ki,</span><br />
        Nayi <span className="text-slate-400">Awaaz.</span>
      </h1>

      <p className="text-sm sm:text-base md:text-xl text-slate-600 font-bold max-w-xl mb-8">
        Transforming Punsari into a Global Benchmark where technology meets tradition.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          { label: "Financial Status", value: "₹75L+ Surplus" },
          { label: "Security", value: "CCTV Enabled" },
          { label: "Energy", value: "Solar Grid" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-4 border-t-4 border-blue-600 shadow-lg rounded-b-xl"
          >
            <p className="text-[10px] font-black text-slate-400 uppercase mb-1">
              {item.label}
            </p>
            <p className="text-xs font-black uppercase text-slate-800">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </motion.div>

    {/* RIGHT IMAGES */}
    <div className="lg:col-span-5 grid grid-cols-2 gap-4">
      {[
        "/images/home3.png",
        "/images/home2.png",
        "/images/imgfour.png",
        "https://res.cloudinary.com/dpccapers/image/upload/v1767774293/WhatsApp_Image_2026-01-07_at_12.47.58_PM_zgcqwp.jpg",
      ].map((src, i) => (
        <div
          key={i}
          className="relative h-40 sm:h-56 md:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={src}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover object-center"
            alt="Hero Image"
            priority
          />
        </div>
      ))}
    </div>

  </div>
</section>


      {/* NEW: AWARDS MARQUEE SECTION */}
      <div className="bg-slate-900 py-10 overflow-hidden border-y border-white/10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-16 px-8">
              <span className="text-white/40 text-sm font-black uppercase tracking-[6px] flex items-center gap-4"><Award className="text-blue-500" /> Best Gram Panchayat Gujarat</span>
              <span className="text-white/40 text-sm font-black uppercase tracking-[6px] flex items-center gap-4"><Award className="text-blue-500" /> Nirmal Gram Puraskar</span>
              <span className="text-white/40 text-sm font-black uppercase tracking-[6px] flex items-center gap-4"><Award className="text-blue-500" /> Swarnim Gram Award</span>
              <span className="text-white/40 text-sm font-black uppercase tracking-[6px] flex items-center gap-4"><Award className="text-blue-500" /> ISO 9001:2008 Certified</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. THE LEADER'S BIOGRAPHY */}
      <section id="leader" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          <div className="sticky top-28">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl border-8 border-slate-50">
              <Image src="/images/architect.png" fill className="object-cover" alt="Leader Aryan" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/100 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                 <p className="text-xs font-black uppercase tracking-[4px] text-blue-400 mb-2">The Face Of Change</p>
                 <h2 className="text-4xl font-black uppercase tracking-tighter">Aryan Patel</h2>
                 <p className="text-sm font-bold uppercase mt-4 text-white/70 tracking-widest leading-relaxed">
                   "Development is not a favor to the people; it is the duty of the leadership."
                 </p>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-8">The Architect of <br/> Modern Governance</h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6 italic border-l-4 border-blue-600 pl-6">
                Under the visionary guidance of the Patel family, Punsari transitioned from a debt of ₹1 Lakh in 2006 to a surplus of ₹75 Lakhs today, without a single penny from NGOs or NRI funding.
              </p>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                Aryan Patel believes in **Land Monetization** and **Self-Sustainability**. By auctioning panchayat land for residential use, he generated the seed capital needed to build RO plants, smart schools, and digital grids.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="p-6 bg-blue-50 rounded-2xl">
                    <TrendingUp className="text-blue-600 mb-4" size={28} />
                    <h4 className="font-black uppercase text-sm mb-2 text-blue-900">Revenue Innovation</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-tight">Utilizing 95% tax collection efficiency for local development projects.</p>
                 </div>
                 <div className="p-6 bg-slate-50 rounded-2xl">
                    <ShieldCheck className="text-slate-900 mb-4" size={28} />
                    <h4 className="font-black uppercase text-sm mb-2 text-slate-900">Safe Village</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-tight">Zero theft recorded since 2021 due to tech-driven surveillance.</p>
                 </div>
              </div>
            </div>
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
               <Image src="/images/architect2.png" fill className="object-cover" alt="Governance" />
               <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Public Meeting 2025</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEVELOPMENT PILLARS */}
      <section id="pillars" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Strategic Pillars</h2>
            <p className="text-blue-600 font-black uppercase text-xs tracking-[5px] mt-6">Sustainable Infrastructure Framework</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <Droplets/>, title: "Pure RO Water", desc: "Mineral water at ₹4/20L. 100% piped connectivity to every home.", img: "/images/pillars1.png" },
              { icon: <BookOpen/>, title: "Digital Education", desc: "Smart boards, zero-dropout rate, and air-conditioned libraries.", img: "/images/pillars2.png" },
              { icon: <Bus/>, title: "Atal Express", desc: "Village bus service. Free for students, ₹3 for others per trip.", img: "/images/pillars3.png" },
              { icon: <Radio/>, title: "Smart Broadcast", desc: "120 speakers connected to the Sarpanch office for live updates.", img: "/images/pillars4.png" },
              { icon: <Building2/>, title: "Women Economic Wing", desc: "111 Sakhi Mandals empowering 1200+ rural women entrepreneurs.", img: "/images/pillars5.png" },
              { icon: <ShieldCheck/>, title: "Safe Governance", desc: "24x7 CCTV monitoring for streets, schools, and public assets.", img: "/images/pillars6.png" },
            ].map((p, i) => (
              <div key={i} className="group bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 transition-all hover:-translate-y-2 flex flex-col h-full">
                <div className="relative h-72 overflow-hidden">
                   <Image src={p.img} fill className="object-cover transition-transform duration-700 group-hover:scale-110" alt={p.title} />
                   <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-all"></div>
                   <div className="absolute bottom-4 left-4 bg-white p-3 rounded-2xl text-blue-600 shadow-2xl">
                      {p.icon}
                   </div>
                </div>
                <div className="p-10 flex-1">
                  <h4 className="text-xl font-black uppercase text-slate-900 mb-4 tracking-tighter">{p.title}</h4>
                  <p className="text-sm font-bold text-slate-500 uppercase leading-relaxed tracking-tight">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IMAGE COLLAGE SECTION */}
      <section id="collage" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter">Life In Punsari</h2>
                <p className="text-blue-600 font-black text-xs uppercase tracking-[5px] mt-2">Documenting Daily Progress</p>
              </div>
              <div className="hidden md:block text-right">
                <p className="text-xs font-black uppercase text-slate-300 tracking-[2px]">Archive-2025</p>
              </div>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[300px]">
              <div className="relative col-span-2 row-span-2 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image src="/images/life1.png" fill className="object-cover" alt="c1" /></div>
              <div className="relative col-span-1 row-span-1 rounded-[2.5rem] overflow-hidden shadow-xl hover:rotate-2 transition-all">
                <Image src="/images/life2.png" fill className="object-cover" alt="c2" /></div>
              <div className="relative col-span-1 row-span-2 rounded-[2.5rem] overflow-hidden shadow-xl">
                <Image src="/images/life5.png" fill className="object-cover" alt="c3" /></div>
              <div className="relative col-span-1 row-span-1 rounded-[2.5rem] overflow-hidden shadow-xl hover:-rotate-2 transition-all">
                <Image src="https://res.cloudinary.com/dpccapers/image/upload/v1767774290/WhatsApp_Image_2026-01-07_at_12.47.47_PM_1_ipdzzt.jpg" fill className="object-cover" alt="c4" /></div>
              <div className="relative col-span-2 row-span-1 rounded-[2.5rem] overflow-hidden shadow-xl">
                <Image src="/images/life4.png" fill className="object-cover" alt="c5" /></div>
              <div className="relative col-span-1 row-span-1 rounded-[2.5rem] overflow-hidden shadow-xl">
                <Image src="/images/life3.png" fill className="object-cover" alt="c6" /></div>
           </div>
        </div>
      </section>

      {/* NEW: TESTIMONIALS SECTION */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3">
               <h3 className="text-5xl font-black uppercase tracking-tighter leading-none mb-6 italic">Voices of <br/> The Village.</h3>
               <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Stories from the residents who built this dream together with Aryan Patel.</p>
            </div>
            <div className="md:w-2/3 grid md:grid-cols-2 gap-8">
               <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-md">
                  <Quote size={40} className="text-blue-500 mb-6 opacity-40" />
                  <p className="text-lg font-medium leading-relaxed uppercase tracking-tight mb-8">"Atal Express has changed the lives of women in our dairy sector. We can now reach the market safely and on time."</p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-blue-600"></div>
                     <div><p className="text-sm font-black uppercase">Sunita Ben</p><p className="text-[10px] font-bold text-slate-500 uppercase">Sakhi Mandal Lead</p></div>
                  </div>
               </div>
               <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-md">
                  <Quote size={40} className="text-blue-500 mb-6 opacity-40" />
                  <p className="text-lg font-medium leading-relaxed uppercase tracking-tight mb-8">"Our kids now study in air-conditioned smart schools. The digital classrooms are at par with city schools."</p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-slate-700"></div>
                     <div><p className="text-sm font-black uppercase">Ramjibhai Kaka</p><p className="text-[10px] font-bold text-slate-500 uppercase">Local Farmer</p></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GOVERNANCE & STATS */}
      <section id="stats" className="py-24 bg-white text-slate-900 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none">Financial <br/> Discipline.</h3>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-12 italic border-l-4 border-slate-900 pl-6 leading-relaxed">
                "Punsari does not rely on foreign aid. We believe in the power of Indian villages to generate their own wealth through smart administration."
              </p>
              <div className="space-y-4">
                {[
                  { label: "Admin Staff", val: "22 Professionals", p: "100%" },
                  { label: "Tax Collection", val: "95% Annual Recovery", p: "95%" },
                  { label: "Infrastructure Growth", val: "300% In 5 Years", p: "100%" },
                  { label: "Youth Employment", val: "Local Ventures", p: "80%" },
                ].map((s, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-end">
                       <span className="text-[11px] font-black uppercase text-slate-400 tracking-[2px]">{s.label}</span>
                       <span className="text-sm font-black text-slate-900 uppercase">{s.val}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} whileInView={{ width: s.p }} className="h-full bg-blue-600"></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-50">
               <Image src="/images/financialdiscipline.png" fill className="object-cover" alt="Data" />
               <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: FAQ SECTION */}
      <section id="faq" className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black uppercase tracking-tighter">Public Queries</h2>
             <p className="text-blue-600 font-black text-xs uppercase tracking-[5px] mt-4">Addressing Transparency</p>
          </div>
          <div className="space-y-4">
             {[
               { q: "Is Punsari funded by NRIs?", a: "No. All projects are funded through Government schemes and the Panchayat's own generated income (Land auction & Taxes)." },
               { q: "How is the water so affordable?", a: "We run our RO plants on a no-profit model. The electricity is subsidized by our village solar grid." },
               { q: "Can other villages replicate this?", a: "Yes. Our 'Punsari Model' is a standard framework being studied by the World Bank and other state governments." },
               { q: "How do you achieve Zero Dropout?", a: "By providing free bus transport, digital engagement, and regular parent-teacher transparency." }
             ].map((item, idx) => (
               <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <button onClick={() => toggleFaq(idx)} className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-all">
                     <span className="text-sm font-black uppercase text-slate-800 tracking-tight">{item.q}</span>
                     <ChevronRight size={20} className={`text-blue-600 transition-transform ${activeFaq === idx ? "rotate-90" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                         <div className="p-6 pt-0 text-sm font-bold text-slate-500 uppercase leading-relaxed border-t border-slate-100 bg-slate-50/50">
                            {item.a}
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>
             ))}
          </div>
        </div>
      </section>


      {/* Global CSS for Marquee Animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
      `}</style>

    </main>
  );
}
