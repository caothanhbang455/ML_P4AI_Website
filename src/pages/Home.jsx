import { motion } from 'framer-motion';
import { members } from '../data/members';
import { BookOpen, Users, Calendar, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="max-w-7xl mx-auto px-4 py-16">
    <motion.section initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-center py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 rounded-[3rem] text-white mb-20 shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Group ABT</h1>
        <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto leading-relaxed">Programming for AI & Data Science (CO3135) [cite: 7]</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-sm font-semibold tracking-wide">
            <GraduationCap size={18}/> Dr. Thanh-Sach LE [cite: 11]
          </span>
          <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-sm font-semibold tracking-wide">
             Semester I 2025-2026 [cite: 9]
          </span>
        </div>
      </div>
    </motion.section>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
      {members.map((m, idx) => (
        <motion.div key={m.id} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: idx*0.1}} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all text-center group">
          <div className="w-20 h-20 bg-blue-50 rounded-2xl mx-auto mb-6 flex items-center justify-center text-blue-600 font-bold text-2xl group-hover:scale-110 transition-transform">{m.name.charAt(0)}</div>
          <h3 className="font-bold text-xl mb-1">{m.name}</h3>
          <p className="text-slate-400 text-sm font-mono mb-4">{m.id}</p>
          <p className="text-blue-600 text-xs font-medium bg-blue-50 py-1 px-3 rounded-full inline-block">{m.email}</p>
        </motion.div>
      ))}
    </div>

    <section className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
            <BookOpen size={20}/> Assignment 1
          </div>
          <h2 className="text-3xl font-black mb-4">Exploratory Data Analysis (EDA) [cite: 24]</h2>
          <p className="text-slate-500 leading-relaxed">Phân tích chuyên sâu 3 modality dữ liệu: Tabular, Text và Image để chuẩn bị cho các bài toán AI/DS tiếp theo[cite: 26].</p>
        </div>
        <div className="text-center md:text-right shrink-0">
          <div className="flex items-center gap-2 text-red-500 font-bold mb-6 justify-center md:justify-end">
            <Calendar size={20}/> Deadline: 23:59, 03/04/2026 
          </div>
          <Link to="/assignment-1" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-200 inline-block">Bắt đầu khám phá</Link>
        </div>
      </div>
    </section>
  </div>
);
export default Home;