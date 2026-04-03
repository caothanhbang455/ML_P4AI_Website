import { motion } from 'framer-motion';
import { members } from '../data/members';
import { BookOpen, Calendar, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="max-w-7xl mx-auto px-4 py-16">

    {/* HERO */}
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-28 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 rounded-[3rem] text-white mb-24 shadow-2xl relative overflow-hidden"
    >
      <div className="relative z-10">
        <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
          Group ABT
        </h1>

        <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
          Programming for AI & Data Science (CO3135)
        </p>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
          <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-sm font-semibold">
            <GraduationCap size={18}/> Dr. Thanh-Sach Le
          </span>

          <span className="flex items-center bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-sm font-semibold">
            Semester 2 • 2025 - 2026
          </span>
        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          
          {/* GitHub */}
          <a
            href="https://github.com/caothanhbang455/ML_P4AI_Website"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg"
          >
            Source Code
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/watch?v=0TE0Cu69H10&t=77s"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg"
          >
            Demo Video
          </a>

        </div>
      </div>
    </motion.section>

    {/* MEMBERS */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
      {members.map((m, idx) => (
        <motion.div
          key={m.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.08 }}
          className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all text-center group"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl mx-auto mb-6 flex items-center justify-center text-blue-600 font-bold text-2xl group-hover:scale-110 transition-transform">
            {m.name.split(' ').slice(-1)[0].charAt(0)}
          </div>

          <h3 className="font-bold text-xl mb-1">{m.name}</h3>
          <p className="text-slate-400 text-sm font-mono mb-3">{m.id}</p>

          <p className="text-blue-600 text-xs font-medium bg-blue-50 py-1 px-3 rounded-full inline-block">
            {m.email}
          </p>
        </motion.div>
      ))}
    </div>

    {/* ASSIGNMENT CARD */}
    <section className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
            <BookOpen size={20}/> Assignment 1
          </div>

          <h2 className="text-3xl font-black mb-4">
            Exploratory Data Analysis (EDA)
          </h2>

          <p className="text-slate-500 leading-relaxed">
            In-depth analysis of three data types: Tabular, Text, and Image to prepare for AI/Data Science tasks.
          </p>
        </div>

        <div className="text-center md:text-right shrink-0">
          <div className="flex items-center gap-2 text-red-500 font-bold mb-6 justify-center md:justify-end">
            <Calendar size={20}/> Deadline: 23:59, 03/04/2026
          </div>

          <Link
            to="/assignment-1"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg"
          >
            Explore Now →
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Home;