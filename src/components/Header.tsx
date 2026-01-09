"use client";
import { Globe } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-blue-900 text-white py-1.5 px-6 hidden md:block border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
        <span className="flex items-center gap-2">
          <Globe size={12} /> Government of Gujarat | Sabarkantha District
        </span>
        <div className="flex gap-4">
          <span className="opacity-70">Digital India Initiative</span>
        </div>
      </div>
    </div>
  );
}