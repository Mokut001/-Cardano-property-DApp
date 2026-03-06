export default function PropertyCard({ p }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md group border border-slate-100">
      <img src={p.image} className="h-48 w-full object-cover group-hover:scale-105 transition" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{p.title}</h3>
        <p className="text-slate-500">{p.location}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold text-secondary">{p.price}</span>
          <button className="bg-slate-100 px-4 py-2 rounded-lg font-bold">Invest</button>
        </div>
      </div>
    </div>
  );
}