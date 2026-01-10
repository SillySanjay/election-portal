"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, Calendar, ArrowRight, Megaphone, PlayCircle } from "lucide-react";
import Image from "next/image";

// 1. DIVERSE NEWS DATA FOR THE GRID
const newsGridData = [
  {
    id: 1,
    date: "Jan 12, 2026",
    title: "Women Entrepreneurs Scaling Dairy Operations",
    desc: "111 Sakhi Mandals report a 40% increase in monthly revenue following the latest automation workshop led by the Strategic Cell.",
    image: "/images/news4.png"
  },
  {
    id: 2,
    date: "Jan 10, 2026",
    title: "Atal Express Buses Go Electric This Quarter",
    desc: "To further sustainability, the village council approves the transition of the student bus fleet to zero-emission electric vehicles.",
    image: "/images/news5.png"
  },
  {
    id: 3,
    date: "Jan 08, 2026",
    title: "Smart Schools Achieve 100% Digital Proficiency",
    desc: "A milestone reached: Every student from Std VI to VIII has successfully cleared the 'Basic Coding & Web Design' certification.",
    image: "/images/news6.png"
  },
  {
    id: 4,
    date: "Jan 05, 2026",
    title: "New RO Plant Extension For Industrial Ward",
    desc: "Construction begins for the third RO water purification unit to meet the rising demand for purified water in the upcoming dairy cluster.",
    image: "/images/news7.png"
  },
  {
    id: 5,
    date: "Jan 02, 2026",
    title: "Sabarkantha District Praises Punsari's Solar Model",
    desc: "District officials visit Punsari to study how the village-wide solar street lighting system has cut electricity costs by 85%.",
    image: "/images/news8.png"
  },
  {
    id: 6,
    date: "Dec 28, 2025",
    title: "Public Address System Upgrade Completed",
    desc: "120 new high-fidelity waterproof speakers installed across all village internal roads for seamless live news and emergency broadcasts.",
    image: "/images/news9.png"
  }
];

// Carousel Data (Aapne kaha tha touch mat karna, isliye isse waisa hi rakha hai)
const breakingNews = [
  {
    id: 1,
    title: "Punsari Leads National Digital Literacy Rankings 2026",
    desc: "Under Aryan Patel's leadership, Punsari achieves 100% digital proficiency among youth and elders alike.",
    image: "/images/news1.png"
  },
  {
    id: 2,
    title: "ISO 9001:2026 Re-Certification Awarded To Gram Panchayat",
    desc: "Official auditors praise the transparency and data management systems of the Punsari Strategic Cell.",
    image: "/images/news2.png"
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

        {/* 1. Breaking News Carousel (Untouched) */}
        {/* BREAKING NEWS CAROUSEL (FIXED + SLIDE CONTROLS) */}
<div className="relative h-[320px] sm:h-[420px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl mb-20">

  <AnimatePresence mode="wait">
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={(e, info) => {
        if (info.offset.x < -100) {
          setIndex((p) => (p + 1) % breakingNews.length);
        }
        if (info.offset.x > 100) {
          setIndex((p) =>
            p === 0 ? breakingNews.length - 1 : p - 1
          );
        }
      }}
      className="absolute inset-0"
    >
      <Image
        src={breakingNews[index].image}
        fill
        sizes="100vw"
        className="object-cover object-center"
        alt="Breaking News"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

      <div className="absolute bottom-0 left-0 p-5 sm:p-8 md:p-16 text-white max-w-3xl">
        <span className="bg-orange-600 px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-3 inline-block">
          Top Story
        </span>
        <h2 className="text-xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-3 italic">
          {breakingNews[index].title}
        </h2>
        <p className="text-xs sm:text-sm md:text-lg text-white/70 font-bold uppercase tracking-tight">
          {breakingNews[index].desc}
        </p>
      </div>
    </motion.div>
  </AnimatePresence>

  {/* LEFT ARROW */}
  <button
    onClick={() =>
      setIndex(index === 0 ? breakingNews.length - 1 : index - 1)
    }
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md"
  >
    ‹
  </button>

  {/* RIGHT ARROW */}
  <button
    onClick={() => setIndex((index + 1) % breakingNews.length)}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md"
  >
    ›
  </button>

  {/* DOTS */}
  <div className="absolute bottom-4 right-4 flex gap-2">
    {breakingNews.map((_, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`h-1.5 rounded-full transition-all ${
          index === i ? "w-10 bg-blue-600" : "w-4 bg-white/40"
        }`}
      />
    ))}
  </div>
</div>


        {/* 2. UPDATED NEWS GRID (6 UNIQUE CARDS) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pb-24">
          {newsGridData.map((news) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={news.id} 
              className="group cursor-pointer border-b border-slate-100 pb-10"
            >
              <div className="relative h-64 md:h-72 rounded-3xl overflow-hidden mb-8 shadow-xl border-4 border-slate-50">
                <Image src={news.image} fill className="object-cover group-hover:scale-110 transition-all duration-1000" alt={news.title} />
              </div>
              <div className="flex items-center gap-3 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">
                 <Calendar size={14} className="text-blue-600" /> {news.date}
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-4 leading-none group-hover:text-blue-600 transition-colors">
                {news.title}
              </h4>
              <p className="text-xs font-bold text-slate-500 uppercase leading-relaxed mb-6 tracking-tight italic">
                {news.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}