"use client";
import { motion } from "framer-motion";
import { MapPin, Wind, Sun, Navigation, Layers } from "lucide-react";
import Image from "next/image";

export default function GeographyPage() {
  return (
    <main className="pt-24 bg-white min-h-screen">
      <section className="px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <span className="text-blue-600 font-black text-xs uppercase tracking-[5px] mb-4 block">Section 01 / Spatial Mapping</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-slate-900 leading-none">Geography & <br/> <span className="text-blue-600">Land Layout.</span></h1>
        </motion.div>

        {/* Top Image Wall */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50">
            <Image src="/images/geography1.png" fill className="object-cover" alt="Village View" />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-3xl font-black uppercase text-slate-900 italic underline decoration-blue-600 underline-offset-8">Location Strategy</h3>
            <p className="text-slate-500 font-bold uppercase text-sm leading-relaxed text-justify">
              Punsari is located in the Sabarkantha district of Gujarat, approximately 82 km from Ahmedabad. The village is strategically mapped to ensure that every household is within a 5-minute reach of the nearest RO plant and primary school.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-6 bg-slate-50 rounded-2xl"><p className="text-blue-600 font-black text-xl">82 KM</p><p className="text-[10px] uppercase font-bold text-slate-400">From Ahmedabad</p></div>
              <div className="p-6 bg-slate-50 rounded-2xl"><p className="text-blue-600 font-black text-xl">100%</p><p className="text-[10px] uppercase font-bold text-slate-400">Internal CC Roads</p></div>
            </div>
          </div>
        </div>

        {/* Climate & Terrain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-24">
          {[
            { icon: <Sun />, title: "Climate", desc: "Semi-arid climate with temperatures ranging from 12°C in winter to 42°C in peak summer. Ideal for specialized dairy farming." },
            { icon: <Navigation />, title: "Connectivity", desc: "Connected via state-of-the-art asphalt roads. Every street is equipped with solar-powered LED lighting." },
            { icon: <Layers />, title: "Terrain", desc: "Flat topography allows for 100% underground drainage efficiency, preventing water logging during monsoons." },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="p-10 border border-slate-100 rounded-[2.5rem] bg-white shadow-sm hover:shadow-2xl transition-all">
              <div className="text-blue-600 mb-6">{item.icon}</div>
              <h4 className="text-xl font-black uppercase text-slate-900 mb-4">{item.title}</h4>
              <p className="text-xs font-bold text-slate-400 leading-relaxed uppercase tracking-widest">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}