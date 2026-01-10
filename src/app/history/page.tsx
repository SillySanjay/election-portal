"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HistoryPage() {
  const timeline = [
    {
      year: "1955",
      title: "Establishment",
      desc: "Punsari Gram Panchayat was officially formed, starting with basic administrative roots.",
    },
    {
      year: "2006",
      title: "The Revolution",
      desc: "Shri Himanshu Patel took charge at age 23. The vision for 'City Facilities' was born.",
    },
    {
      year: "2011",
      title: "Digital Leap",
      desc: "Village became 100% Wi-Fi enabled and secured via a full CCTV network.",
    },
    {
      year: "2026",
      title: "Mission Surplus",
      desc: "Under Aryan Patel, the village achieved ₹75L surplus with 100% literacy.",
    },
  ];

  return (
    <main className="pt-20 bg-slate-50 min-h-screen">
      <section className="px-4 sm:px-6 max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="text-blue-600 font-black text-[10px] uppercase tracking-[6px] mb-3 block">
            The Legacy of Punsari
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            Legacy & <br />
            <span className="text-slate-300">Milestones.</span>
          </h1>
        </motion.div>

        {/* MAIN TIMELINE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-24">

          {/* IMAGE */}
          <div className="relative h-56 sm:h-72 md:h-[420px] lg:h-[560px] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/history1.png"
              fill
              sizes="100vw"
              className="object-cover object-center"
              alt="Old Punsari"
              priority
            />
          </div>

          {/* TIMELINE */}
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-5 sm:gap-8 items-start"
              >
                <div className="text-blue-600 font-black text-2xl sm:text-3xl italic shrink-0">
                  {item.year}
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-black uppercase text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase leading-relaxed tracking-tight">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* HISTORY GALLERY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pb-24">
          {[
            "/images/history2.png",
            "/images/history3.png",
            "/images/history4.png",
          ].map((src, i) => (
            <div
              key={i}
              className="relative h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src={src}
                fill
                sizes="100vw"
                className="object-cover object-center"
                alt={`History ${i + 1}`}
              />
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}
