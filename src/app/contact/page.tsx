"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, ShieldAlert, Landmark, Send, Users, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"join" | "query">("join");

  return (
    <main className="pt-24 bg-slate-50 min-h-screen font-sans">
      <section className="max-w-7xl mx-auto px-6 pb-24">
        
        {/* Contact Header */}
        <div className="mb-20">
          <span className="text-blue-600 font-black text-xs uppercase tracking-[5px] mb-4 block">Official Contact Portal</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-slate-900 leading-none">Reach Out To <br/> <span className="text-blue-600">The Council.</span></h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Left: Contact Info (Govt Style) */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl border-l-8 border-blue-900 shadow-sm">
               <MapPin className="text-blue-600 mb-6" size={32} />
               <h4 className="font-black uppercase text-sm mb-4 text-black">Official Address</h4>
               <p className="text-xs font-bold text-slate-500 uppercase leading-relaxed tracking-widest italic">
                 Gram Panchayat Punsari,<br/>
                 Taluka: Himmatnagar,<br/>
                 Sabarkantha, Gujarat - 383001
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-l-8 border-orange-500 shadow-sm">
               <Phone className="text-orange-600 mb-6" size={32} />
               <h4 className="font-black uppercase text-sm mb-4 text-black">Official Helplines</h4>
               <div className="space-y-2 text-xs font-black uppercase text-slate-900">
                  <p>Gram Sevak: +91 94220-XXXXX</p>
                  <p>RO Plant: +91 99044-XXXXX</p>
                  <p>Talati: +91 98250-XXXXX</p>
               </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl">
               <ShieldAlert className="text-orange-500 mb-6" size={32} />
               <h4 className="font-black uppercase text-sm mb-4 tracking-widest">Emergency Services</h4>
               <div className="grid grid-cols-2 gap-4 text-[10px] font-black uppercase opacity-60">
                  <div>Police: 100</div>
                  <div>Ambulance: 108</div>
                  <div>Women Help: 181</div>
                  <div>Fire: 101</div>
               </div>
            </div>
          </div>

          {/* Right: Dual Purpose Form */}
          <div className="lg:col-span-2 bg-white p-6 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100">
             
             {/* Segmented Control (Tabs) */}
             <div className="flex flex-col md:flex-row gap-4 mb-12 bg-slate-50 p-2 rounded-2xl border border-slate-200">
                <button 
                  onClick={() => setActiveTab("join")}
                  className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all ${activeTab === "join" ? "bg-blue-900 text-white shadow-lg" : "text-slate-400 hover:text-slate-600"}`}
                >
                  <Users size={18} /> Join Aryan&apos;s Team
                </button>
                <button 
                  onClick={() => setActiveTab("query")}
                  className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all ${activeTab === "query" ? "bg-blue-900 text-white shadow-lg" : "text-slate-400 hover:text-slate-600"}`}
                >
                  <MessageSquare size={18} /> Advice & Queries
                </button>
             </div>

             <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-6">
                <Landmark className="text-blue-900" />
                <h3 className="text-2xl font-black uppercase tracking-tighter italic text-black">
                  {activeTab === "join" ? "Volunteer Enrollment" : "Public Feedback Cell"}
                </h3>
             </div>
             
             <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs font-bold uppercase focus:border-blue-600 outline-none" placeholder="Enter Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Mobile Number</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs font-bold uppercase focus:border-blue-600 outline-none" placeholder="+91 XXXX" />
                </div>

                <AnimatePresence mode="wait">
                  {activeTab === "join" ? (
                    <motion.div 
                      key="join-fields"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="md:col-span-2 space-y-8"
                    >
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Area of Interest / Skills</label>
                        <select className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs font-bold uppercase focus:border-blue-600 outline-none">
                          <option>Digital Literacy Mentor</option>
                          <option>Social Media Volunteer</option>
                          <option>On-Ground Campaigner</option>
                          <option>Policy & Advice Team</option>
                          <option>Youth Wing (Yuva Shakti)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Why do you want to join Mission Punsari?</label>
                        <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs font-bold uppercase focus:border-blue-600 outline-none" placeholder="Tell us about your motivation..."></textarea>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="query-fields"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="md:col-span-2 space-y-8"
                    >
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Subject of Advice/Query</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs font-bold uppercase focus:border-blue-600 outline-none" placeholder="e.g. RO Plant issue, Education Suggestion" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Your Message</label>
                        <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs font-bold uppercase focus:border-blue-600 outline-none" placeholder="Please describe your advice or query in detail..."></textarea>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="md:col-span-2 pt-4">
                   <button type="submit" className="w-full bg-blue-900 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[5px] flex justify-center items-center gap-4 hover:bg-slate-900 transition-all shadow-xl shadow-blue-200">
                     {activeTab === "join" ? "Send Application" : "Submit Feedback"} <Send size={16}/>
                   </button>
                </div>
             </form>
          </div>

        </div>
      </section>
    </main>
  );
}