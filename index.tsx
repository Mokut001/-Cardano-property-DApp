import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PropertyCard from '../components/PropertyCard';

const properties = [
  { id: 1, title: 'Azure Villa', location: 'Santorini', price: '50k ADA', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500' },
  { id: 2, title: 'Loft 42', location: 'New York', price: '120k ADA', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500' }
];

export default function Home() {
  const [addr, setAddr] = useState('');
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar addr={addr} setAddr={setAddr} />
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Featured Properties</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {properties.map(p => <PropertyCard key={p.id} p={p} />)}
        </div>
      </div>
    </div>
  );
}