"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, Calendar, ArrowRight, Megaphone, PlayCircle } from "lucide-react";
import Image from "next/image";

const breakingNews = [
  {
    id: 1,
    title: "Punsari Leads National Digital Literacy Rankings 2026",
    desc: "Under Aryan Patel's leadership, Punsari achieves 100% digital proficiency among youth and elders alike.",
    image: "https://res.cloudinary.com/dpccapers/image/upload/v1767774287/WhatsApp_Image_2026-01-07_at_12.47.44_PM_1_toy9rh.jpg"
  },
  {
    id: 2,
    title: "ISO 9001:2026 Re-Certification Awarded To Gram Panchayat",
    desc: "Official auditors praise the transparency and data management systems of the Punsari Strategic Cell.",
    image: "https://res.cloudinary.com/dpccapers/image/upload/v1767784998/ChatGPT_Image_Jan_7_2026_04_52_10_PM_xqujx1.png"
  },
  {
    id: 3,
    title: "New Waste-To-Energy Plant Operationalized",
    desc: "The ₹85 Lakh plant starts generating electricity for the village street-light grid.",
    image: "https://res.cloudinary.com/dpccapers/image/upload/v1767774293/WhatsApp_Image_2026-01-07_at_12.47.58_PM_zgcqwp.jpg"
  }
];

export default function NewsPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % breakingNews.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="pt-24 bg-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6">
        
        {/* News Header */}
        <div className="mb-12 border-b-4 border-slate-900 pb-8 flex justify-between items-end">
          <div>
            <span className="text-blue-600 font-black text-xs uppercase tracking-[5px] mb-2 block">Official Bulletin</span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black">Media & <span className="text-blue-600">Press.</span></h1>
          </div>
          <div className="hidden md:block text-right">
             <p className="text-[10px] font-black uppercase text-slate-400">Current Year</p>
             <p className="text-xl font-black italic text-slate-900 underline decoration-orange-500">2026</p>
          </div>
        </div>

        {/* 1. News Carousel */}
        <div className="relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl mb-20 group">
          <AnimatePresence mode="wait">
            <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="absolute inset-0">
              <Image src={breakingNews[index].image} fill className="object-cover" alt="News" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white max-w-3xl">
                <span className="bg-orange-600 px-4 py-1 text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Top Story</span>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4 italic">{breakingNews[index].title}</h2>
                <p className="text-sm md:text-lg text-white/70 font-bold uppercase tracking-tight">{breakingNews[index].desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Progress Indicators */}
          <div className="absolute bottom-8 right-8 flex gap-2">
            {breakingNews.map((_, i) => (
              <div key={i} className={`h-1.5 transition-all rounded-full ${index === i ? "w-12 bg-blue-600" : "w-4 bg-white/30"}`} />
            ))}
          </div>
        </div>

        {/* 2. News Grid */}
        <div className="grid md:grid-cols-3 gap-10 pb-24">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="border-b-2 border-slate-100 pb-8 hover:border-blue-600 transition-all group cursor-pointer">
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                <Image src="https://res.cloudinary.com/dpccapers/image/upload/v1767774292/WhatsApp_Image_2026-01-07_at_12.47.57_PM_1_e556te.jpg" fill className="object-cover" alt="Thumbnail" />
              </div>
              <div className="flex items-center gap-4 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">
                 <Calendar size={14} /> Jan 09, 2026
              </div>
              <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4 leading-tight">Village Council Reviews Progress of Suvidha Shopping Hub</h4>
              <p className="text-xs font-bold text-slate-400 uppercase leading-relaxed mb-6">Local entrepreneurs to get subsidized shop rentals for the next quarter.</p>
              <div className="flex items-center gap-2 text-slate-900 font-black text-[10px] uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                Read Full Report <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}