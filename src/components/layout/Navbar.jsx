import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Type, ImageIcon, Youtube, Github, FileDown } from 'lucide-react';

const Assignment1 = () => {
  const [activeTab, setActiveTab] = useState('tabular');

  const tabs = [
    { id: 'tabular', label: 'Tabular Data', icon: FileText },
    { id: 'text', label: 'Text Data', icon: Type },
    { id: 'image', label: 'Image Data', icon: ImageIcon },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header & Resources */}
      <div className="mb-12 border-b pb-8">
        <h1 className="text-3xl font-bold mb-6">Assignment 1: Exploratory Data Analysis (EDA)</h1>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
            <Youtube size={18}/> Presentation Video
          </button>
          <button className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-900">
            <Github size={18}/> Code Repository
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <FileDown size={18}/> PDF Report
          </button>
        </div>
      </div>

      {/* Modality Tabs */}
      <div className="flex gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            <tab.icon size={20} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 min-h-[400px]"
        >
          {activeTab === 'tabular' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Tabular Data Analysis</h2>
              <p className="text-slate-600">Mô tả dataset và các biểu đồ thống kê (Phân phối nhãn, giá trị thiếu...)</p>
              {/* Insert Chart components here */}
            </div>
          )}
          {/* Tương tự cho Text và Image */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Assignment1;