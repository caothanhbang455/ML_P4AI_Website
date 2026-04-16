import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Type, ImageIcon, CheckCircle, Layers } from "lucide-react";
import TabularClassification from "../components/assignment2/TabularClassification";
import MultimodalClassification from "../components/assignment2/MultimodalClassification";
import TextClassification from "../components/assignment2/TextClassification";
import ImageClassification from "../components/assignment2/ImageClassification";

const Assignment2 = () => {
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
      <div className="mb-16 border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <h1 className="text-4xl font-black tracking-tight italic">
          Assignment 2: Classification Report
        </h1>

        {/* 🔥 YOUTUBE BUTTON */}
        <a
          href="https://www.youtube.com/watch?v=0TE0Cu69H10&t=77s"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg w-fit"
        >
          <CheckCircle size={18} /> Watch Demo
        </a>
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
          {activeTab === "tabular" && <TabularClassification />}
          {activeTab === "multimodal" && <MultimodalClassification />}
          {activeTab === "text" && <TextClassification />}
          {activeTab === "image" && <ImageClassification />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Assignment2;
