import { Link } from 'react-router-dom';
import { Cpu } from 'lucide-react';

const Navbar = () => (
  <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
        <Cpu size={24} /> ABT Group
      </Link>
      <div className="flex gap-6 font-medium text-slate-600 text-sm">
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link to="/assignment-1" className="hover:text-blue-600 transition-colors">Assignment 1</Link>
      </div>
    </div>
  </nav>
);
export default Navbar;