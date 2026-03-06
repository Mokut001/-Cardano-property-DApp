'use client';
import { MapPin, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PropertyCard({ property }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-indigo-500/50 transition-all duration-500"
    >
      <div className="h-72 relative overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-6 left-6 flex gap-2">
          <span className="bg-black/40 backdrop-blur-lg px-4 py-1.5 rounded-full text-[10px] font-black text-white uppercase tracking-wider border border-white/10 italic">
            {property.category}
          </span>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
           <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex justify-between items-center">
              <div>
                <p className="text-[10px] text-white/50 uppercase font-black tracking-widest">Share Price</p>
                <p className="text-xl font-black text-indigo-400">{property.price} ADA</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-white/50 uppercase font-black tracking-widest">Yield</p>
                <p className="text-xl font-black text-emerald-400">{property.yield}%</p>
              </div>
           </div>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-black text-white mb-2 leading-none">{property.title}</h3>
        <p className="text-white/40 text-sm flex items-center gap-1.5 mb-6"><MapPin size={14} className="text-indigo-500"/> {property.location}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white/5 p-4 rounded-2xl">
            <Users size={18} className="text-white/30 mb-2"/>
            <p className="text-sm font-bold text-white leading-none">84/100</p>
            <p className="text-[10px] text-white/30 uppercase mt-1">Investors</p>
          </div>
          <div className="bg-white/5 p-4 rounded-2xl">
            <TrendingUp size={18} className="text-white/30 mb-2"/>
            <p className="text-sm font-bold text-white leading-none">Premium</p>
            <p className="text-[10px] text-white/30 uppercase mt-1">Tier</p>
          </div>
        </div>

        <button className="w-full py-5 bg-white text-black text-sm font-black rounded-2xl hover:bg-neutral-200 transition-all uppercase tracking-widest">
           View Property Details
        </button>
      </div>
    </motion.div>
  );
}