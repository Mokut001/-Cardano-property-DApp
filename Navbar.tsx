'use client';
import { useState } from 'react';
import { Home, LayoutDashboard, Wallet } from 'lucide-react';

export default function Navbar({ onConnect, address }: any) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center text-white">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">CPS</div>
        <span className="font-bold text-xl tracking-tight uppercase group-hover:text-blue-500 transition">Cardano Property Solutions</span>
      </div>
      
      <div className="hidden md:flex gap-8 font-medium text-white/70">
        <a href="/" className="hover:text-white flex items-center gap-2"><Home size={18}/> Marketplace</a>
        <a href="/dashboard" className="hover:text-white flex items-center gap-2"><LayoutDashboard size={18}/> Dashboard</a>
      </div>

      <button onClick={onConnect} className="bg-white text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all active:scale-95">
        <Wallet size={18}/> {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
      </button>
    </nav>
  );
}