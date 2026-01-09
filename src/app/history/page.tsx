"use client";
import { motion } from "framer-motion";
import { Clock, Award, History, Landmark } from "lucide-react";
import Image from "next/image";

export default function HistoryPage() {
  const timeline = [
    { year: "1955", title: "Establishment", desc: "Punsari Gram Panchayat was officially formed, starting with basic administrative roots." },
    { year: "2006", title: "The Revolution", desc: "Shri Himanshu Patel took charge at age 23. The vision for 'City Facilities' was born." },
    { year: "2011", title: "Digital Leap", desc: "Village became 100% Wi-Fi enabled and surveillance secured via CCTV network." },
    { year: "2026", title: "Mission Surplus", desc: "Under Aryan Patel, the village achieved a surplus of ₹75L with 100% literacy." },
  ];

  return (
    <main className="pt-24 bg-slate-50 min-h-screen">
      <section className="px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-24">
          <span className="text-blue-600 font-black text-xs uppercase tracking-[8px] mb-4 block">The Legacy of Punsari</span>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-slate-900 leading-none">Legacy & <br/> <span className="text-slate-300">Milestones.</span></h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-3xl">
            <Image src="https://res.cloudinary.com/dpccapers/image/upload/v1767784998/ChatGPT_Image_Jan_7_2026_04_52_10_PM_xqujx1.png" fill className="object-cover" alt="Old Punsari" />
          </div>
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} key={i} className="flex gap-8 group">
                <div className="text-blue-600 font-black text-3xl italic group-hover:scale-110 transition-transform">{item.year}</div>
                <div>
                  <h4 className="text-xl font-black uppercase text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm font-bold text-slate-400 uppercase leading-relaxed tracking-tight">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* History Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-24">
            <div className="relative h-80 rounded-3xl overflow-hidden"><Image src="/images/img.jpeg" fill className="object-cover" alt="H1" /></div>
            <div className="relative h-80 rounded-3xl overflow-hidden"><Image src="https://res.cloudinary.com/dpccapers/image/upload/v1767774287/WhatsApp_Image_2026-01-07_at_12.47.44_PM_1_toy9rh.jpg" fill className="object-cover" alt="H2" /></div>
            <div className="relative h-80 rounded-3xl overflow-hidden"><Image src="https://res.cloudinary.com/dpccapers/image/upload/v1767774291/WhatsApp_Image_2026-01-07_at_12.47.53_PM_csorlt.jpg" fill className="object-cover" alt="H3" /></div>
        </div>
      </section>
    </main>
  );
}