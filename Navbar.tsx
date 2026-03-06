'use client';
import Link from 'next/link';
import { Home, LayoutDashboard, Wallet, Search } from 'lucide-react';

export default function Navbar({ address, onConnect }: any) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 px-8 py-5 flex justify-between items-center transition-all duration-300">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-emerald-400 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">PL</div>
          <span className="font-bold text-2xl tracking-tight text-white group-hover:text-indigo-400 transition-colors uppercase italic">PropLoom</span>
        </Link>
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-white/40">
          <Link href="/" className="hover:text-white flex items-center gap-2 font-bold"><Search size={16}/> Market</Link>
          <Link href="/dashboard" className="hover:text-white flex items-center gap-2"><LayoutDashboard size={16}/> My Assets</Link>
        </div>
      </div>

      <button 
        onClick={onConnect} 
        className="px-8 py-3 bg-white text-black rounded-full font-bold flex items-center gap-3 hover:bg-neutral-200 transition-all active:scale-95 shadow-xl shadow-white/5"
      >
        <Wallet size={18}/>
        {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
      </button>
    </nav>
  );
}