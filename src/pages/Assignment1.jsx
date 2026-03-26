import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Type, ImageIcon, Youtube, Github, FileDown, CheckCircle } from 'lucide-react';

const Assignment1 = () => {
  const [activeTab, setActiveTab] = useState('tabular');
  const tabs = [
    { id: 'tabular', label: 'Tabular Data', icon: FileText },
    { id: 'text', label: 'Text Data', icon: Type },
    { id: 'image', label: 'Image Data', icon: ImageIcon },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-16 border-b border-slate-200 pb-12">
        <h1 className="text-4xl font-black mb-8 tracking-tight italic">Assignment 1: EDA Report</h1>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-red-700 shadow-lg shadow-red-100 transition-all active:scale-95">
            <Youtube size={20}/> Presentation Video [cite: 54]
          </a>
          <a href="#" className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-black shadow-lg shadow-slate-200 transition-all active:scale-95">
            <Github size={20}/> Code Repository [cite: 62]
          </a>
          <a href="#" className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all active:scale-95">
            <FileDown size={20}/> PDF Report [cite: 57]
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-10">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'bg-white text-slate-500 hover:bg-white/80 border border-slate-100'}`}>
            <tab.icon size={22} /> {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 min-h-[500px]">
          {activeTab === 'tabular' && (
            <div className="animate-in fade-in duration-500">
              <h2 className="text-3xl font-black mb-6 text-blue-600">Tabular Data Exploration [cite: 27]</h2>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed">Phân tích dữ liệu dạng bảng, kiểm tra phân phối nhãn và xử lý các giá trị thiếu[cite: 35].</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 h-80 rounded-[2rem] border border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 font-medium">
                  <span className="mb-2">Chart: Label Distribution</span>
                  <p className="text-xs uppercase tracking-widest">Matplotlib / Seaborn Output</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle className="text-green-500" size={24}/>
                    <span className="font-bold text-slate-700">Missing Values Handled</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle className="text-green-500" size={24}/>
                    <span className="font-bold text-slate-700">Correlation Analysis Done</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Bạn chỉ cần copy cấu trúc tương tự cho Text và Image */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default Assignment1;