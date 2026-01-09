"use client";
import Link from "next/link";
import { 
  Facebook, Twitter, Instagram, Youtube, Mail, Phone, 
  MapPin, Clock, ShieldAlert, Landmark, PhoneCall, ShieldCheck 
} from "lucide-react";
import { navLinks } from "./Navbar";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-8 px-6 border-t-4 border-orange-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
         
         {/* Column 1: Brand & Social */}
         <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center font-black rounded-xl shadow-lg text-xl">A</div>
              <div>
                <h3 className="text-xl font-black uppercase tracking-tighter leading-none">Aryan Patel</h3>
                <p className="text-[9px] font-bold text-orange-500 uppercase tracking-[2px] mt-1">Mission Punsari 2026</p>
              </div>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 leading-relaxed text-justify">
              Punsari Gram Panchayat is India's No.1 self-reliant "Smart Village". We believe in professional administration and transparent governance.
            </p>
            <div className="flex gap-4">
               <Link href="#" className="p-2.5 bg-white/5 rounded-lg hover:bg-blue-600 transition-all group">
                  <Facebook size={18} className="text-slate-400 group-hover:text-white" />
               </Link>
               <Link href="#" className="p-2.5 bg-white/5 rounded-lg hover:bg-pink-600 transition-all group">
                  <Instagram size={18} className="text-slate-400 group-hover:text-white" />
               </Link>
               <Link href="#" className="p-2.5 bg-white/5 rounded-lg hover:bg-sky-500 transition-all group">
                  <Twitter size={18} className="text-slate-400 group-hover:text-white" />
               </Link>
               <Link href="#" className="p-2.5 bg-white/5 rounded-lg hover:bg-red-600 transition-all group">
                  <Youtube size={18} className="text-slate-400 group-hover:text-white" />
               </Link>
            </div>
         </div>

         {/* Column 2: Official Address */}
         <div>
            <h4 className="text-[10px] font-black uppercase tracking-[4px] text-blue-500 mb-8 underline underline-offset-8">Official Address</h4>
            <div className="space-y-6 text-[11px] font-black uppercase tracking-widest text-slate-400">
               <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-orange-500 shrink-0" />
                  <p className="leading-relaxed">
                    Gram Panchayat Punsari,<br/>
                    Taluka: Himmatnagar,<br/>
                    Sabarkantha, Gujarat - 383001
                  </p>
               </div>
               <div className="flex items-center gap-4">
                  <Mail size={18} className="text-orange-500 shrink-0" />
                  <p className="lowercase hover:text-white transition-colors">office@aryanpunsari.in</p>
               </div>
               <div className="flex items-center gap-4">
                  <Clock size={18} className="text-orange-500 shrink-0" />
                  <p>Mon - Sat: 10:00 AM - 06:00 PM</p>
               </div>
            </div>
         </div>

         {/* Column 3: Helplines */}
         <div>
            <h4 className="text-[10px] font-black uppercase tracking-[4px] text-blue-500 mb-8 underline underline-offset-8">Direct Helplines</h4>
            <div className="space-y-4 text-[11px] font-black uppercase tracking-widest text-slate-400">
               <div className="p-3 bg-white/5 border-l-4 border-blue-600 rounded-lg">
                  <p className="text-blue-500 text-[9px] mb-1">Gram Sevak Office</p>
                  <p className="text-white flex items-center gap-2 font-black tracking-widest"><PhoneCall size={14}/> +91 94220-XXXXX</p>
               </div>
               <div className="p-3 bg-white/5 border-l-4 border-orange-600 rounded-lg">
                  <p className="text-orange-500 text-[9px] mb-1">RO Plant Service</p>
                  <p className="text-white flex items-center gap-2 font-black tracking-widest"><PhoneCall size={14}/> +91 99044-XXXXX</p>
               </div>
               <div className="p-3 bg-white/5 border-l-4 border-green-600 rounded-lg">
                  <p className="text-green-500 text-[9px] mb-1">Emergency Help</p>
                  <p className="text-white font-black tracking-widest">Dial: 100 / 108</p>
               </div>
            </div>
         </div>

         {/* Column 4: Links */}
         <div>
            <h4 className="text-[10px] font-black uppercase tracking-[4px] text-blue-500 mb-8 underline underline-offset-8">Quick Navigation</h4>
            <ul className="space-y-3 text-[11px] font-black uppercase tracking-widest text-slate-400 mb-8">
               {navLinks.map((l) => (
                 <li key={l.name}><Link href={l.href} className="hover:text-white transition-all flex items-center gap-2">/ {l.name}</Link></li>
               ))}
            </ul>
            <div className="grid grid-cols-2 gap-3">
               <div className="p-2 bg-white/5 rounded border border-white/10 text-[8px] font-black uppercase text-center">ISO Certified</div>
               <div className="p-2 bg-white/5 rounded border border-white/10 text-[8px] font-black uppercase text-center">Best Panchayat</div>
            </div>
         </div>

      </div>
      
      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[5px] text-slate-500">
         <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-blue-600" />
            <span>© 2026 Strategic Development Cell | Aryan Patel Campaign</span>
         </div>
         <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors tracking-[2px]">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors tracking-[2px]">Admin Login</span>
         </div>
      </div>
    </footer>
  );
}