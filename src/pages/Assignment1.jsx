import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Type, ImageIcon, CheckCircle, Layers } from "lucide-react";
import TabularEDA from "../components/assignment1/TabularEDA";
import MultimodalEDA from "../components/assignment1/MultimodalEDA";
import TextEDA from "../components/assignment1/TextEDA";
import ImageEDA from "../components/assignment1/ImageEDA";

const Assignment1 = () => {
  const [activeTab, setActiveTab] = useState("tabular");

  const tabs = [
    { id: "tabular", label: "Tabular Data", icon: FileText },
    { id: "text", label: "Text Data", icon: Type },
    { id: "image", label: "Image Data", icon: ImageIcon },
    { id: "multimodal", label: "Multimodal Data", icon: Layers },
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
                ? "bg-blue-600 text-white shadow-xl shadow-blue-100"
                : "bg-white text-slate-500 hover:bg-white/80 border border-slate-100"
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
          {activeTab === "tabular" && <TabularEDA />}

          {activeTab === "multimodal" && <MultimodalEDA />}

          {activeTab === "text" && <TextEDA />}

          {activeTab === "image" && <ImageEDA />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Assignment1;
