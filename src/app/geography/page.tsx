"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, CloudSun, Droplets, Navigation, Wind, 
  Globe, Layers, Compass, Ruler, Info, Target, 
  Landmark, Scaling, Waves, Trees, Tractor, ShieldCheck 
} from "lucide-react";

export default function GeographyPage() {
  const [index, setIndex] = useState(0);

  const carouselImages = [
    "https://res.cloudinary.com/dpccapers/image/upload/v1767774287/WhatsApp_Image_2026-01-07_at_12.47.42_PM_uijm9a.jpg",
    "https://res.cloudinary.com/dpccapers/image/upload/v1767774287/WhatsApp_Image_2026-01-07_at_12.47.45_PM_1_pua2kn.jpg",
    "https://res.cloudinary.com/dpccapers/image/upload/v1767774293/WhatsApp_Image_2026-01-07_at_12.47.58_PM_zgcqwp.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    // mt-20 handles navbar space without adding weird external margins
    <main className="bg-white min-h-screen font-sans selection:bg-blue-100 overflow-x-hidden pt-20">
      
      {/* 1. CINEMATIC HERO - Full Bleed */}
      <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden bg-slate-950 border-b-8 border-orange-600">
        <div className="absolute inset-0 z-0 bg-slate-950">
          <AnimatePresence mode="popLayout">
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <Image 
                src={carouselImages[index]} 
                fill 
                className="object-cover object-center brightness-[0.4]" 
                alt="Landscape"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <Compass size={40} className="mx-auto text-orange-500 mb-4 animate-pulse" />
            <h1 className="text-5xl md:text-[130px] font-black text-white uppercase tracking-tighter leading-none italic drop-shadow-2xl">
              SPATIAL<span className="text-orange-500">.</span>
            </h1>
            <p className="text-blue-400 font-black uppercase tracking-[8px] text-[10px] md:text-xs mt-4">Administrative Territorial Mapping</p>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE METRICS - Tight Bento (Reduced White Space) */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 -mt-16 md:-mt-24 relative z-20">
        <div className="grid lg:grid-cols-12 gap-4 md:gap-6 items-stretch">
          
          <div className="lg:col-span-8 bg-white p-6 md:p-10 shadow-2xl border border-slate-100 rounded-[2.5rem] flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-slate-50 pb-4 text-left">
               <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic flex items-center gap-4 tracking-tighter leading-none">
                 <Landmark size={28} className="text-blue-600" /> Vital Metrics
               </h2>
               <div className="flex gap-4 mt-4 md:mt-0">
                  <div className="text-right">
                     <p className="text-[9px] font-black text-slate-400 uppercase">LAT</p>
                     <p className="text-xs font-black text-blue-600 italic">23.63° N</p>
                  </div>
                  <div className="text-right border-l pl-4">
                     <p className="text-[9px] font-black text-slate-400 uppercase">LON</p>
                     <p className="text-xs font-black text-blue-600 italic">72.97° E</p>
                  </div>
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 flex-1">
              <div className="space-y-3">
                {[
                  { l: "Managed Ha", v: "1240 Hectares" },
                  { l: "Ward Structure", v: "12 Administrative" },
                  { l: "MSL Elevation", v: "124 Meters" },
                  { l: "Drainage", v: "100% Gravity" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-slate-50 pb-2">
                    <span className="text-[9px] font-black uppercase text-slate-400">{item.l}</span>
                    <span className="text-xs font-black text-slate-900 uppercase italic">{item.v}</span>
                  </div>
                ))}
              </div>
              <div className="bg-slate-900 p-6 rounded-[1.5rem] flex flex-col justify-center text-white relative overflow-hidden">
                 <Target className="absolute top-4 right-4 text-white/5" size={60} />
                 <p className="text-blue-400 text-[9px] font-black uppercase tracking-[3px] mb-2">Strategy</p>
                 <p className="text-slate-300 text-[10px] font-bold uppercase leading-relaxed text-justify italic">
                   "GIS mapping ensures every household is within a 5-minute reach of essential village infrastructure."
                 </p>
              </div>
            </div>
          </div>

          {/* Connectivity Card - Photo Fitting Perfectly */}
          <div className="lg:col-span-4 bg-slate-100 rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden group shadow-lg">
             <div className="space-y-6 relative z-10 text-left mb-6">
                <h4 className="text-blue-600 font-black uppercase tracking-[4px] text-[10px] flex items-center gap-2">
                  <Navigation size={16} /> Connectivity
                </h4>
                <div className="space-y-4">
                   <div className="border-l-4 border-blue-600 pl-4">
                      <p className="text-[8px] font-black text-slate-400 uppercase leading-none mb-1">State Capital</p>
                      <p className="text-slate-900 text-base font-black uppercase tracking-tighter">Ahmedabad (82KM)</p>
                   </div>
                   <div className="border-l-4 border-blue-600 pl-4">
                      <p className="text-[8px] font-black text-slate-400 uppercase leading-none mb-1">Admin Block</p>
                      <p className="text-slate-900 text-base font-black uppercase tracking-tighter">Himmatnagar (10KM)</p>
                   </div>
                </div>
             </div>
             <div className="relative flex-1 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-white min-h-[200px]">
                <Image 
                  src="https://res.cloudinary.com/dpccapers/image/upload/v1767774287/WhatsApp_Image_2026-01-07_at_12.47.45_PM_1_pua2kn.jpg" 
                  fill 
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-1000" 
                  alt="Infrastructure" 
                />
             </div>
          </div>
        </div>
      </section>

      {/* 3. TERRAIN & DRAINAGE - Tightened Padding */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
           <div className="relative group">
              <div className="relative aspect-video lg:aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-slate-50">
                 <Image 
                   src="https://res.cloudinary.com/dpccapers/image/upload/v1767784998/ChatGPT_Image_Jan_7_2026_04_52_10_PM_xqujx1.png" 
                   fill 
                   className="object-cover object-center group-hover:scale-105 transition-all duration-1000" 
                   alt="Drainage Grid" 
                 />
                 <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-all" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 p-6 rounded-[2rem] text-white shadow-2xl hidden md:flex items-center gap-4">
                 <Waves size={32} className="animate-pulse" />
                 <div>
                    <p className="text-[9px] font-black uppercase tracking-widest opacity-70">Science</p>
                    <p className="text-xl font-black uppercase italic leading-none">Flood Free</p>
                 </div>
              </div>
           </div>
           <div className="space-y-8 text-left">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none italic">Plateau <br/> <span className="text-blue-600 underline decoration-slate-100 underline-offset-4 decoration-4">Basin.</span></h2>
              <p className="text-slate-500 font-bold uppercase text-[11px] leading-relaxed tracking-widest text-justify italic border-l-8 border-orange-500 pl-8">
                Natural topography engineered for efficiency. Every ward is integrated with gravity-driven drainage.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 text-center">
                    <Scaling className="text-orange-500 mx-auto mb-2" size={24} />
                    <p className="text-2xl font-black text-slate-900 tracking-tighter">0%</p>
                    <p className="text-[9px] font-black text-slate-400 uppercase">Logging</p>
                 </div>
                 <div className="p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 text-center">
                    <Trees className="text-blue-600 mx-auto mb-2" size={24} />
                    <p className="text-2xl font-black text-slate-900 tracking-tighter">1,500+</p>
                    <p className="text-[9px] font-black text-slate-400 uppercase">Plants</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. CLIMATE & SOIL - Content-Rich Strip */}
      <section className="bg-slate-900 py-16 md:py-20 px-4 md:px-8 text-white">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-6 text-left flex flex-col justify-center">
               <h3 className="text-3xl font-black uppercase italic text-orange-500 tracking-tighter underline underline-offset-8 decoration-white/10">Climate Audit</h3>
               <p className="text-slate-400 text-xs font-bold uppercase leading-relaxed tracking-widest text-justify">
                 Operating in a semi-arid zone, Punsari achieves year-round production through 73 recharge wells and crop rotation.
               </p>
               <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3"><CloudSun size={20} className="text-blue-400"/><span className="text-sm font-black uppercase">42°C Peak</span></div>
                  <div className="flex items-center gap-3"><Wind size={20} className="text-blue-400"/><span className="text-sm font-black uppercase">300MM Rain</span></div>
               </div>
            </div>
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-4">
               <div className="relative h-64 md:h-80 rounded-[2rem] overflow-hidden border-4 border-white/5">
                  <Image 
                    src="https://res.cloudinary.com/dpccapers/image/upload/v1767774293/WhatsApp_Image_2026-01-07_at_12.47.58_PM_zgcqwp.jpg" 
                    fill 
                    className="object-cover object-center" 
                    alt="Soil Mapping" 
                  />
               </div>
               <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex flex-col justify-center text-left">
                  <div className="flex items-center gap-3 mb-4 text-blue-400 font-black uppercase text-sm italic"><Droplets size={20}/> Sandy Loam Mix</div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase leading-relaxed tracking-widest text-justify">
                    ISO verified soil health profile providing the perfect foundation for Golden Wheat exports and Long-staple Cotton.
                  </p>
                  <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/5">
                     <ShieldCheck size={16} className="text-orange-500" />
                     <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Verified Record</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. CROP ANALYTICS - No Extra Bottom Space */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
             <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-none italic text-left">Agrarian <br/> <span className="text-orange-600 underline decoration-blue-600 decoration-8 underline-offset-8">Assets.</span></h3>
             <div className="bg-white px-6 py-4 rounded-[1.5rem] shadow-xl border border-slate-100 flex items-center gap-3">
                <Tractor className="text-blue-600" size={20}/>
                <span className="text-xs font-black text-slate-900 uppercase italic">NMAET Audit Data</span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { t: "Golden Wheat", d: "High-yield Rabi harvest variety via automated canal networks.", img: "https://res.cloudinary.com/dpccapers/image/upload/v1767774293/WhatsApp_Image_2026-01-07_at_12.47.58_PM_zgcqwp.jpg", tag: "Rabi Season" },
              { t: "White Cotton", d: "Primary Cash Crop contributing to 60% of village agri-revenue.", img: "https://res.cloudinary.com/dpccapers/image/upload/v1767774287/WhatsApp_Image_2026-01-07_at_12.47.44_PM_1_toy9rh.jpg", tag: "Kharif Export" },
              { t: "Scientific Bio", d: "Winter seed rotation ensuring 100% land utility.", img: "https://res.cloudinary.com/dpccapers/image/upload/v1767774292/WhatsApp_Image_2026-01-07_at_12.47.57_PM_1_e556te.jpg", tag: "Bio-Rotation" },
            ].map((crop, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 group">
                <div className="relative h-56 md:h-64 w-full overflow-hidden">
                   <Image src={crop.img} fill className="object-cover object-center group-hover:scale-110 transition-all duration-1000" alt={crop.t} />
                   <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-all" />
                   <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1 rounded-xl shadow-xl flex items-center gap-2 border border-slate-100">
                      <Compass size={14} className="text-blue-600"/>
                      <span className="text-[9px] font-black uppercase text-blue-600 tracking-widest">{crop.tag}</span>
                   </div>
                </div>
                <div className="p-10">
                   <h4 className="text-xl font-black uppercase tracking-tighter italic text-slate-900 mb-2">{crop.t}</h4>
                   <p className="text-[10px] font-bold text-slate-400 uppercase leading-relaxed text-justify">{crop.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}