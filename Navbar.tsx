export default function Navbar({ addr, setAddr }) {
  return (
    <nav className="bg-white border-b p-4 flex justify-between items-center shadow-sm">
      <div className="text-xl font-bold">PropChain</div>
      <button onClick={() => setAddr('addr1...m9n')} className="bg-primary text-white px-4 py-2 rounded-lg">
        {addr ? addr : 'Connect Wallet'}
      </button>
    </nav>
  );
}