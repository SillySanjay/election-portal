"use client";
import { motion } from "framer-motion";
import { TrendingUp, Users, Building, Droplets, Briefcase } from "lucide-react";
import Image from "next/image";

export default function EconomyPage() {
  return (
    <main className="pt-24 bg-white min-h-screen">
      <section className="px-6 max-w-7xl mx-auto">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mb-20">
          <span className="text-blue-600 font-black text-xs uppercase tracking-[5px] mb-4 block">Self-Sustainability Model</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-slate-900 leading-none">The Village <br/> <span className="text-blue-600">Economy.</span></h1>
        </motion.div>

        {/* Featured Card */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white grid lg:grid-cols-2 gap-16 mb-20 shadow-3xl">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 italic">Zero External <br/> Funding.</h2>
            <p className="text-slate-400 font-bold uppercase text-sm leading-relaxed mb-10 tracking-widest">
              Punsari does not rely on NRIs or NGOs. Our economy is built on local tax efficiency (95%), land monetization, and a thriving dairy ecosystem.
            </p>
            <div className="space-y-6">
              <div className="flex justify-between border-b border-white/10 pb-4"><span className="text-[10px] font-black uppercase tracking-widest">Annual Revenue Growth</span><span className="text-blue-500 font-black">+400%</span></div>
              <div className="flex justify-between border-b border-white/10 pb-4"><span className="text-[10px] font-black uppercase tracking-widest">Active Sakhi Mandals</span><span className="text-blue-500 font-black">111 Units</span></div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/e.png" fill className="object-cover" alt="Agri economy" />
          </div>
        </div>

        {/* Economic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-32">
          {[
            { title: "Dairy", val: "12,000L", desc: "Daily milk collection through automated cooperatives." },
            { title: "RO Plant", val: "₹4/20L", desc: "Self-sustaining water model with daily cash surplus." },
            { title: "Retail", val: "8 Shops", desc: "Panchayat shopping centres run by Sakhi Mandals." },
            { title: "Transport", val: "₹3/Trip", desc: "Atal Express revenue covers 100% of fuel costs." },
          ].map((item, i) => (
            <div key={i} className="p-8 border-2 border-slate-50 rounded-3xl text-center hover:bg-slate-50 transition-all">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{item.title}</h4>
              <p className="text-4xl font-black text-slate-900 mb-4">{item.val}</p>
              <p className="text-[11px] font-bold text-slate-400 uppercase leading-relaxed tracking-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}