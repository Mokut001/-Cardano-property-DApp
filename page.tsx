'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import PropertyCard from './components/PropertyCard';
import { initLucid } from './lib/lucid';

const MOCK_PROPERTIES = [
  { id: 1, title: 'Azure Sands Villa', location: 'Malibu, CA', price: 1200, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000', type: 'Residential' },
  { id: 2, title: 'Neo-Tokyo Heights', location: 'Shibuya, JP', price: 4500, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000', type: 'Commercial' },
  { id: 3, title: 'Savanna Retreat', location: 'Nairobi, KE', price: 800, image: 'https://images.unsplash.com/photo-1448630305452-039130728551?auto=format&fit=crop&q=80&w=1000', type: 'Luxury' }
];

export default function Home() {
  const [address, setAddress] = useState("");

  const connect = async () => {
    const lucid = await initLucid("Preview");
    const api = await (window as any).cardano.nami.enable();
    lucid.selectWallet(api);
    setAddress(await lucid.wallet.address());
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar onConnect={connect} address={address} />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <header className="mb-16">
          <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.3em] mb-4">Invest in Asset-Backed Tokens</h2>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">OWN REAL ESTATE <br/>ON MAINNET.</h1>
          <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
            Cardano Property Solutions tokenizes high-yield real world assets. Experience fractional ownership with secure transfers and transparent dividend flows.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PROPERTIES.map(p => <PropertyCard key={p.id} property={p} />)}
        </div>
      </div>
    </main>
  );
}