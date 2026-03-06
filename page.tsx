'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import PropertyCard from './components/PropertyCard';
import { initLucid } from './lib/lucid';

const PROPERTIES = [
  { id: 1, title: 'ONYX RESIDENCE', location: 'DUBAI, UAE', price: 2500, yield: 8.4, image: 'https://images.unsplash.com/photo-1541339905195-03f444a4051a?q=80&w=2070', category: 'Luxury' },
  { id: 2, title: 'THE SKYLINE LOFT', location: 'MANHATTAN, NY', price: 4200, yield: 6.2, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070', category: 'Residential' },
  { id: 3, title: 'AZURE PLAZA', location: 'SINGAPORE', price: 8900, yield: 11.5, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070', category: 'Commercial' },
];

export default function Home() {
  const [address, setAddress] = useState("");

  const connect = async () => {
    try {
      const lucid = await initLucid("Preview");
      const api = await (window as any).cardano.nami.enable();
      lucid.selectWallet(api);
      setAddress(await lucid.wallet.address());
    } catch (e) {
      alert("Failed to connect wallet. Make sure Nami is installed.");
    }
  };

  return (
    <div className="min-h-screen bg-black selection:bg-indigo-500">
      <Navbar address={address} onConnect={connect} />
      
      <main className="pt-40 pb-32 px-10 max-w-[1600px] mx-auto">
        <header className="mb-24 text-center md:text-left">
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
             <div className="h-[1px] w-12 bg-indigo-500"/>
             <span className="text-xs font-black uppercase tracking-[0.5em] text-indigo-500">Global Property Tokenization</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-white italic tracking-tighter leading-[0.85] mb-12">
            NEXT-GEN <br/>REAL ESTATE.
          </h1>
          <p className="max-w-2xl text-xl text-white/40 font-medium leading-relaxed">
            PropLoom enables fractional ownership of luxury properties on the Cardano mainnet. 
            Invest in asset-backed tokens and receive instant dividends globally.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROPERTIES.map(p => <PropertyCard key={p.id} property={p} />)}
        </div>
      </main>

      <footer className="py-20 border-t border-white/5 px-10">
         <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-white/20 text-xs font-black tracking-widest uppercase">© 2024 PropLoom Cardano Mainnet</p>
            <div className="flex gap-10 text-xs font-black tracking-widest uppercase text-white/20">
               <span className="hover:text-indigo-400 cursor-pointer transition">Whitepaper</span>
               <span className="hover:text-indigo-400 cursor-pointer transition">Staking</span>
               <span className="hover:text-indigo-400 cursor-pointer transition">Audit</span>
            </div>
         </div>
      </footer>
    </div>
  );
}