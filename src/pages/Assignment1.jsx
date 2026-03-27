import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Type, ImageIcon, CheckCircle } from 'lucide-react';
import TabularEDA from '../components/assignment1/TabularEDA';

const Assignment1 = () => {
  const [activeTab, setActiveTab] = useState('tabular');

  const tabs = [
    { id: 'tabular', label: 'Tabular Data', icon: FileText },
    { id: 'text', label: 'Text Data', icon: Type },
    { id: 'image', label: 'Image Data', icon: ImageIcon },
  ];

  return (
    <div className="max-w-[1600px] w-full mx-auto px-4 py-16">
      {/* HEADER */}
      <div className="mb-16 border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-black tracking-tight italic">
          Assignment 1: EDA Report
        </h1>
      </div>

      {/* TABS */}
      <div className="flex flex-wrap gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-100'
                : 'bg-white text-slate-500 hover:bg-white/80 border border-slate-100'
            }`}
          >
            <tab.icon size={22} /> {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100 min-h-[1200px] flex flex-col"
        >
          {activeTab === 'tabular' && (
            <TabularEDA />
          )}

          {activeTab === 'text' && (
            <div className="animate-in fade-in duration-500 flex-grow flex flex-col">
              <h2 className="text-3xl font-black mb-6 text-indigo-600">
                Text Data Exploration
              </h2>

              <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                Phân tích dữ liệu văn bản, làm sạch dữ liệu và trích xuất đặc trưng (TF-IDF, Word Embeddings).
              </p>

              <div className="flex flex-col gap-8 flex-grow">
                {/* Chart placeholder - Make it bigger */}
                <div className="bg-slate-50 min-h-[800px] flex-grow rounded-[2rem] border border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 font-medium w-full text-xl shadow-[inset_0_0_50px_rgba(0,0,0,0.02)]">
                  <span className="mb-2">Chart: Word Cloud / Token Distribution</span>
                  <p className="text-xs uppercase tracking-widest">
                    NLTK / SpaCy Output
                  </p>
                </div>

                {/* Checklist */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle className="text-green-500" size={24} />
                    <span className="font-bold text-slate-700">
                      Text Cleaning Done
                    </span>
                  </div>

                  <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle className="text-green-500" size={24} />
                    <span className="font-bold text-slate-700">
                      Vocabulary Size Analyzed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'image' && (
            <div className="animate-in fade-in duration-500 flex-grow flex flex-col">
              <h2 className="text-3xl font-black mb-6 text-emerald-600">
                Image Data Exploration
              </h2>

              <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                Phân tích dữ liệu hình ảnh, kiểm tra kích thước, số lượng kênh màu và phân phối pixel.
              </p>

              <div className="flex flex-col gap-8 flex-grow">
                {/* Chart placeholder - Make it bigger */}
                <div className="bg-slate-50 min-h-[800px] flex-grow rounded-[2rem] border border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 font-medium w-full text-xl shadow-[inset_0_0_50px_rgba(0,0,0,0.02)]">
                  <span className="mb-2">Image Gallery: Class Samples</span>
                  <p className="text-xs uppercase tracking-widest">
                    OpenCV / PIL Output
                  </p>
                </div>

                {/* Checklist */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle className="text-green-500" size={24} />
                    <span className="font-bold text-slate-700">
                      Image Resizing Handled
                    </span>
                  </div>

                  <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle className="text-green-500" size={24} />
                    <span className="font-bold text-slate-700">
                      Pixel Distribution Checked
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Assignment1;