import { motion } from 'framer-motion';
import { members } from '../data/members';
import { BookOpen, Users, Calendar } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white mb-16 shadow-xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Group APT - Machine Learning</h1>
        <p className="text-xl opacity-90 mb-8">Programming for AI & Data Science (CO3135)</p>
        <div className="flex justify-center gap-4 text-sm font-medium">
          <span className="bg-white/20 px-4 py-2 rounded-full border border-white/30">Instructor: Dr. Thanh-Sach LE</span>
          <span className="bg-white/20 px-4 py-2 rounded-full border border-white/30">Semester I 2025-2026</span>
        </div>
      </motion.section>

      {/* Team Section */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-8 border-b pb-2">
          <Users className="text-blue-600" />
          <h2 className="text-2xl font-bold">Project Members</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m) => (
            <div key={m.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-600 font-bold text-xl">
                {m.name.charAt(0)}
              </div>
              <h3 className="font-bold text-lg">{m.name}</h3>
              <p className="text-slate-500 text-sm mb-1">{m.id}</p>
              <p className="text-blue-600 text-xs truncate">{m.email}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Assignments Preview */}
      <section>
        <div className="flex items-center gap-2 mb-8 border-b pb-2">
          <BookOpen className="text-blue-600" />
          <h2 className="text-2xl font-bold">Course Assignments</h2>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-dashed border-slate-300 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Assignment 1: Exploratory Data Analysis (EDA)</h3>
            <p className="text-slate-600">Phân tích dữ liệu Tabular, Text và Image để chuẩn bị cho các bài toán AI.</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-red-500 font-semibold mb-2 flex items-center gap-1 justify-end">
              <Calendar size={16}/> Deadline: 03/04/2026
            </p>
            <a href="/assignment-1" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              View Details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;