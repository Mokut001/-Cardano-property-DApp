'use client';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PropertyCard({ property }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden group"
    >
      <div className="h-64 bg-neutral-800 relative overflow-hidden">
        <img src={property.image} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-widest">
          {property.type}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{property.title}</h3>
            <p className="text-white/50 text-sm flex items-center gap-1"><MapPin size={14}/> {property.location}</p>
          </div>
          <div className="text-right">
             <div className="text-blue-500 font-bold text-lg">{property.price} ADA</div>
             <div className="text-[10px] text-white/30 uppercase font-black uppercase tracking-tighter">Per Fraction</div>
          </div>
        </div>

        <button className="w-full bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-600 py-3 rounded-2xl font-bold text-white flex justify-center items-center gap-2 transition duration-300">
           Review Deal <ArrowUpRight size={18}/>
        </button>
      </div>
    </motion.div>
  );
}