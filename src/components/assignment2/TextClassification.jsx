import React, { useState } from 'react';
import { 
    Filter, Cpu, Network, GitMerge, CheckCircle2, 
    ArrowRight, ArrowDown, Database, Target, BarChart3, 
    Zap, Activity, LayoutTemplate, Settings, AlertTriangle, Lightbulb, Flag
} from 'lucide-react';
import { ChevronDown } from "lucide-react";
import { Snowflake, Flame } from "lucide-react";
// --- IMPORT ẢNH TỪ ASSETS ---
// Tab 1
import labelDistImg from '../../assets/classification-text/label_distribution.png';
// Tab 2
import mlCompImg from '../../assets/classification-text/ml_comparison.png';
// import mlCmImg from '../../assets/classification-text/ml_confusion_matrix.png'; // NOTE: Chưa plot nên tạm comment

// Tab 3
import tfHistoryImg from '../../assets/classification-text/tf_history.png';
import tfCompImg from '../../assets/classification-text/tf_comparison.png';
import confuse1_1 from '../../assets/classification-text/confuse1.png';
import confuse1_2 from '../../assets/classification-text/confuse2.png';
import confuse1_3 from '../../assets/classification-text/confuse3.png';
import confuse1_4 from '../../assets/classification-text/confuse4.png';
import confuse1_5 from '../../assets/classification-text/confuse5.png';

// Tab 4
import w2vHistoryImg from '../../assets/classification-text/w2v_history.png';
import w2vCompImg from '../../assets/classification-text/w2v_comparison.png';
import confuse2_1 from '../../assets/classification-text/confuse2_1.png';
import confuse2_2 from '../../assets/classification-text/confuse2_2.png';
import confuse2_3 from '../../assets/classification-text/confuse2_3.png';
import confuse2_4 from '../../assets/classification-text/confuse2_4.png';


const TextClassification = () => {
    const [activeTab, setActiveTab] = useState('preprocessing');

    const tabs = [
        { id: 'preprocessing', icon: <Filter size={20} />, label: 'Data & Preprocessing', color: 'emerald' },
        { id: 'ml', icon: <Cpu size={20} />, label: 'Traditional ML', color: 'blue' },
        { id: 'transformers', icon: <Network size={20} />, label: 'Transformers DL', color: 'purple' },
        { id: 'classical_dl', icon: <GitMerge size={20} />, label: 'Classical DL (W2V)', color: 'rose' },
        { id: 'takeaways', icon: <Flag size={20} />, label: 'Final Takeaways', color: 'amber' }
    ];

    return (
        <div className="flex flex-col gap-8 w-full animate-in fade-in duration-700 h-full p-6 max-w-7xl mx-auto">
            {/* --- HEADER --- */}
            <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full w-max font-bold text-sm">
                    <Database size={16} /> Assignment 2: Sentiment Analysis Pipeline
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight">
                    From TF-IDF to Transformers
                </h2>
                <p className="text-slate-500 text-lg max-w-4xl leading-relaxed">
                    A comprehensive empirical study classifying Amazon Kindle Book Reviews. We evaluate architectural trade-offs ranging from traditional linear boundaries to state-of-the-art context-aware embeddings.
                </p>
            </div>

            {/* --- TAB NAVIGATION --- */}
            <div className="grid grid-cols-5 gap-3 border-b border-slate-200 pb-4 sticky top-0 bg-slate-50/80 backdrop-blur-md z-10 pt-2">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;

                    const colorMap = {
                        emerald: "bg-emerald-600 text-white shadow-emerald-200",
                        blue: "bg-blue-600 text-white shadow-blue-200",
                        purple: "bg-purple-600 text-white shadow-purple-200",
                        rose: "bg-rose-600 text-white shadow-rose-200",
                        amber: "bg-amber-500 text-white shadow-amber-200",
                    };

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-2xl font-bold transition-all duration-300 text-sm
                            ${
                                isActive
                                    ? colorMap[tab.color]
                                    : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200"
                            }`}
                        >
                            {tab.icon} <span className="hidden md:inline">{tab.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* --- TAB CONTENTS --- */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100 min-h-[800px]">
                
                {/* =========================================
                    TAB 1: PREPROCESSING (THE TWO PARALLEL WORLDS)
                ========================================= */}
                {activeTab === 'preprocessing' && (
                    <div className="flex flex-col gap-12 animate-in slide-in-from-bottom-4 duration-500">
                        {/* Key Insight */}
                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-8 rounded-r-3xl">
                            <h4 className="text-emerald-900 font-black text-xl mb-4 flex items-center gap-2">
                                <Lightbulb className="text-emerald-500" /> Key Insight: Two Parallel Input Worlds
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                                <div>
                                    <h5 className="font-bold text-emerald-800 border-b border-emerald-200 pb-2 mb-2">Traditional ML Strategy</h5>
                                    <ul className="text-emerald-700 space-y-2 text-sm">
                                        <li>• Requires aggressive normalization (Feature Engineering).</li>
                                        <li>• Goal: Reduce vocabulary size & noise.</li>
                                        <li>• Method: Maximize TF-IDF signal density.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-bold text-emerald-800 border-b border-emerald-200 pb-2 mb-2">Deep Learning Strategy</h5>
                                    <ul className="text-emerald-700 space-y-2 text-sm">
                                        <li>• Preserves raw text.</li>
                                        <li>• Goal: Keep syntax, grammar, and context intact.</li>
                                        <li>• Method: Let the model learn latent representations.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Pipeline Visualizer */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 flex flex-col items-center">
                                <h3 className="text-xl font-black text-slate-700 mb-6 text-center">ML Pipeline (TF-IDF)</h3>
                                <div className="flex flex-col gap-2 w-full max-w-xs text-sm font-bold text-slate-600 text-center">
                                    <div className="bg-white p-3 rounded-xl border shadow-sm">Raw Text</div>
                                    <ArrowDown className="mx-auto text-slate-300"/>
                                    <div className="bg-white p-3 rounded-xl border shadow-sm">Lowercase & Punctuation</div>
                                    <ArrowDown className="mx-auto text-slate-300"/>
                                    <div className="bg-white p-3 rounded-xl border shadow-sm">Stopwords Removal</div>
                                    <ArrowDown className="mx-auto text-slate-300"/>
                                    <div className="bg-white p-3 rounded-xl border shadow-sm">Lemmatization</div>
                                    <ArrowDown className="mx-auto text-slate-300"/>
                                    <div className="bg-emerald-100 text-emerald-700 p-3 rounded-xl border border-emerald-200 shadow-sm">TF-IDF Vector Space</div>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 flex flex-col items-center justify-center">
                                <h3 className="text-xl font-black text-slate-700 mb-6 text-center">DL Pipeline (Transformers)</h3>
                                <div className="flex flex-col gap-2 w-full max-w-xs text-sm font-bold text-slate-600 text-center">
                                    <div className="bg-white p-3 rounded-xl border shadow-sm">Raw Text</div>
                                    <ArrowDown className="mx-auto text-slate-300"/>
                                    <div className="bg-white p-3 rounded-xl border shadow-sm">Model-Specific Tokenizer</div>
                                    <ArrowDown className="mx-auto text-slate-300"/>
                                    <div className="bg-purple-100 text-purple-700 p-3 rounded-xl border border-purple-200 shadow-sm">Contextual Embeddings</div>
                                </div>
                            </div>
                        </div>

                        {/* Label Distribution & Imbalance */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-8 border-t border-slate-100">
                            <div className="flex flex-col gap-6">
                                <h3 className="text-2xl font-black text-slate-800">Target Labeling & Imbalance</h3>
                                <div className="bg-slate-900 rounded-2xl p-4 overflow-hidden">
                                    <pre className="text-emerald-400 text-sm font-mono leading-relaxed">
                                        <code>
{`label_map = {
    'negative': 0,
    'neutral':  1,
    'positive': 2
}
df['label_encoded'] = df['label'].map(label_map)`}
                                        </code>
                                    </pre>
                                </div>
                                <div className="bg-rose-50 border-l-4 border-rose-400 p-4 rounded-r-xl">
                                    <h5 className="font-bold text-rose-900 flex items-center gap-2 mb-1"><AlertTriangle size={18}/> Class Imbalance Issue</h5>
                                    <p className="text-sm text-rose-800">Positive class dominates (~50%), while Neutral is severely underrepresented. This justifies the mandatory use of <strong>class_weight='balanced'</strong> and <strong>Macro F1</strong> as the primary evaluation metric.</p>
                                </div>
                            </div>
                            <div className="flex justify-center bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
                                <img src={labelDistImg} alt="Label Distribution" className="w-full max-w-md rounded-2xl" />
                            </div>
                        </div>
                    </div>
                )}


                {/* =========================================
                    TAB 2: TRADITIONAL ML
                ========================================= */}
                {activeTab === 'ml' && (
                    <div className="flex flex-col gap-12 animate-in slide-in-from-bottom-4 duration-500">
                        
                        {/* Baseline & Insights */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-lg flex flex-col justify-center">
                                <div className="bg-blue-500/50 text-blue-100 px-3 py-1 rounded-full text-xs font-bold w-max mb-4 uppercase tracking-wider">Strong Baseline</div>
                                <h3 className="text-3xl font-black mb-2">Logistic Regression</h3>
                                <p className="mb-6 text-blue-100 text-sm">Why? It provides a fast, interpretable, and highly effective linear boundary for high-dimensional TF-IDF spaces.</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-blue-700/40 p-4 rounded-2xl text-center border border-blue-500/30">
                                        <p className="text-xs font-bold text-blue-200 uppercase mb-1">Accuracy</p>
                                        <p className="text-3xl font-black">75.99%</p>
                                    </div>
                                    <div className="bg-blue-700/40 p-4 rounded-2xl text-center border border-blue-500/30">
                                        <p className="text-xs font-bold text-blue-200 uppercase mb-1">Macro F1</p>
                                        <p className="text-3xl font-black text-amber-300">66.68%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl flex flex-col justify-center">
                                <h4 className="text-xl font-black text-slate-700 mb-4">Per-Class Performance Observation</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20}/>
                                        <div>
                                            <p className="font-bold text-slate-800">Positive & Negative (Strong)</p>
                                            <p className="text-sm text-slate-500">F1-Scores ~0.80. Linear models easily separate distinct polarities.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="text-rose-500 shrink-0 mt-1" size={20}/>
                                        <div>
                                            <p className="font-bold text-rose-600">Neutral Class (F1 = 0.36) ❌</p>
                                            <p className="text-sm text-slate-600">Severely struggles. Reason: High semantic ambiguity and vocabulary overlap with both polarities. 3-star reviews often contain both praises and complaints.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Models Grid */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-black text-slate-800">Evaluated Architectures</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="p-4 border border-slate-200 rounded-2xl bg-white"><p className="font-bold text-blue-700">LinearSVC</p><p className="text-xs text-slate-500 mt-1">Margin-based linear classifier</p></div>
                                <div className="p-4 border border-blue-300 bg-blue-50 rounded-2xl"><p className="font-bold text-blue-800">LogisticRegression</p><p className="text-xs text-blue-600/70 mt-1">Probabilistic linear model</p></div>
                                <div className="p-4 border border-slate-200 rounded-2xl bg-white"><p className="font-bold text-blue-700">NaiveBayes</p><p className="text-xs text-slate-500 mt-1">Word frequency assumption</p></div>
                                <div className="p-4 border border-slate-200 rounded-2xl bg-white"><p className="font-bold text-blue-700">KNeighbors</p><p className="text-xs text-slate-500 mt-1">Similarity/Distance-based</p></div>
                                <div className="p-4 border border-slate-200 rounded-2xl bg-white"><p className="font-bold text-blue-700">RandomForest</p><p className="text-xs text-slate-500 mt-1">Ensemble of decision trees</p></div>
                                <div className="p-4 border border-slate-200 rounded-2xl bg-white"><p className="font-bold text-blue-700">DecisionTree</p><p className="text-xs text-slate-500 mt-1">Interpretable but prone to overfit</p></div>
                            </div>
                        </div>

                        {/* Tuning Strategy & Table */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                            <h3 className="text-xl font-black text-slate-800 mb-6 flex justify-between items-center">
                                GridSearchCV Optimization
                                <span className="text-sm font-normal bg-white px-3 py-1 rounded-full border">Metric: Macro F1</span>
                            </h3>
                            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <table className="w-full text-left border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-slate-50 text-slate-600 border-b">
                                            <th className="p-4 font-bold">Model</th>
                                            <th className="p-4 font-bold">Best Macro F1</th>
                                            <th className="p-4 font-bold">Optimal Hyperparameters</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 text-slate-600">
                                        <tr className="bg-blue-50/30">
                                            <td className="p-4 font-bold text-slate-800">LogisticRegression</td>
                                            <td className="p-4 font-black text-blue-600 text-base">0.6547</td>
                                            <td className="p-4 font-mono text-xs text-slate-500">penalty: 'l2', C: 1, weight: 'balanced'</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-slate-800">LinearSVC</td>
                                            <td className="p-4 font-black text-blue-500">0.6527</td>
                                            <td className="p-4 font-mono text-xs text-slate-500">C: 0.1, weight: 'balanced'</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-slate-800">MultinomialNB</td>
                                            <td className="p-4 font-bold text-slate-500">0.6486</td>
                                            <td className="p-4 font-mono text-xs text-slate-500">alpha: 0.1</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-slate-800">RandomForest</td>
                                            <td className="p-4 font-bold text-slate-400">0.5637</td>
                                            <td className="p-4 font-mono text-xs text-slate-500">est: 200, depth: 10, weight: 'balanced_sub'</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-slate-800">DecisionTree</td>
                                            <td className="p-4 font-bold text-slate-400">0.4673</td>
                                            <td className="p-4 font-mono text-xs text-slate-500">depth: 10, crit: 'entropy'</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4 text-center">
                                <p className="text-slate-600 italic">💡 <strong>Insight:</strong> Simple linear models significantly outperform complex tree-based models when dealing with sparse, high-dimensional TF-IDF vectors.</p>
                            </div>
                        </div>

                        {/* Comparison Image */}
                        <div className="flex flex-col items-center">
                            <h4 className="font-bold text-slate-700 mb-4 text-xl">Cross-Validation Baseline Comparison</h4>
                            <img src={mlCompImg} alt="ML Comparison" className="w-full max-w-5xl rounded-2xl shadow-sm border border-slate-100" />
                        </div>
                    </div>
                )}


                {/* =========================================
                    TAB 3: TRANSFORMERS
                ========================================= */}
                {activeTab === 'transformers' && (
                    <div className="flex flex-col gap-12 animate-in slide-in-from-bottom-4 duration-500">
                        {/* Winner */}
                        <div className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white p-8 md:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-purple-300 mb-2">The Ultimate Winner</h3>
                                <h2 className="text-5xl font-black mb-3">E5_Tuned</h2>
                                <p className="text-purple-200 font-mono text-sm bg-black/20 px-4 py-2 rounded-lg w-max">intfloat/multilingual-e5-base</p>
                                <p className="mt-6 text-purple-100 max-w-md">Why? It combines a robust semantic embedding space (E5) with full network fine-tuning to perfectly adapt to our specific sentiment boundaries.</p>
                            </div>
                            <div className="text-center bg-white/10 p-8 rounded-[2rem] border border-white/20 backdrop-blur-sm">
                                <p className="text-6xl font-black text-white">66.16%</p>
                                <p className="text-purple-300 font-bold uppercase text-sm mt-2 tracking-widest">Macro F1 Score</p>
                            </div>
                        </div>

                        {/* Architecture Flow & Why */}
                        <div className="flex flex-col items-center gap-3 w-full max-w-sm mx-auto text-sm font-bold text-center">

                            <div className="bg-white w-full p-3 rounded-xl border shadow-sm font-mono">
                                Raw Text
                            </div>

                            <ChevronDown className="text-purple-500 stroke-[2.5]" size={22} />

                            <div className="bg-white w-full p-3 rounded-xl border shadow-sm">
                                Tokenizer (BPE)
                            </div>

                            <ChevronDown className="text-purple-500 stroke-[2.5]" size={22} />

                            <div className="bg-purple-600 text-white w-full p-3 rounded-xl shadow-md">
                                Transformer Encoder
                            </div>

                            <ChevronDown className="text-purple-500 stroke-[2.5]" size={22} />

                            <div className="bg-white w-full p-3 rounded-xl border shadow-sm font-mono">
                                [CLS] Embedding
                            </div>

                            <ChevronDown className="text-purple-500 stroke-[2.5]" size={22} />

                            <div className="bg-emerald-100 text-emerald-800 w-full p-3 rounded-xl border">
                                Classification Head
                            </div>
                        </div>

                        {/* Freeze vs Finetune */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-black text-slate-800 text-center">Training Strategies: The Trade-off</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-slate-100 text-slate-500 font-black px-4 py-1 rounded-bl-xl text-xs">FREEZE ❄️</div>
                                    <h4 className="font-black text-slate-700 mb-4 text-lg">Feature Extraction</h4>
                                    <p className="text-sm text-slate-600 mb-4">Locks the Transformer backbone. Only trains the final Classification Head.</p>
                                    <ul className="text-sm text-slate-500 space-y-2">
                                        <li>✅ Fast training, low VRAM footprint.</li>
                                        <li>❌ High risk of underfitting on specialized domains.</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border-2 border-purple-100 shadow-md relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-purple-500 text-white font-black px-4 py-1 rounded-bl-xl text-xs">FINE-TUNE 🔥</div>
                                    <h4 className="font-black text-purple-900 mb-4 text-lg">Full Network Adaptation</h4>
                                    <p className="text-sm text-purple-800/80 mb-4">Unfreezes the final layers (or all layers). Backpropagates error through the attention mechanism.</p>
                                    <ul className="text-sm text-purple-800/70 space-y-2 font-medium">
                                        <li>✅ Significantly higher accuracy & adaptation.</li>
                                        <li>❌ Computationally expensive, requires careful learning rate scheduling.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Models Table */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                            <h3 className="text-xl font-black text-slate-800 mb-4">Evaluated Architectures</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                                    <thead className="bg-slate-100 text-slate-700">
                                        <tr><th className="p-4">Model Base</th><th className="p-4">Design Strength / Focus</th></tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 text-slate-600">
                                        <tr><td className="p-4 font-bold">SciBERT</td><td className="p-4">Domain-specific (Trained on scientific text)</td></tr>
                                        <tr><td className="p-4 font-bold">ModernBERT</td><td className="p-4">Optimized architecture for fast inference</td></tr>
                                        <tr><td className="p-4 font-bold">MiniLM</td><td className="p-4">Lightweight, highly efficient student model</td></tr>
                                        <tr className="bg-purple-50"><td className="p-4 font-bold text-purple-700">E5 (multilingual-e5)</td><td className="p-4 font-medium text-purple-800">Embedding-focused, incredibly strong semantic clustering</td></tr>
                                        <tr><td className="p-4 font-bold">XLM-R</td><td className="p-4">Multilingual, cross-language transfer learning</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Plots */}
                        <div className="flex flex-col gap-8">
                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex flex-col">
                                <h4 className="font-bold text-center text-slate-700 mb-4">
                                    Training History
                                </h4>
                                <img src={tfHistoryImg} className="w-full rounded-xl shadow-sm" />
                            </div>

                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex flex-col">
                                <h4 className="font-bold text-center text-slate-700 mb-4">
                                    Metrics Comparison
                                </h4>
                                <img src={tfCompImg} className="w-full rounded-xl shadow-sm" />
                            </div>
                            
                            <div className="bg-slate-50 p-6 md:p-10 rounded-3xl border border-slate-200">
    <h4 className="font-black text-center text-slate-800 text-2xl mb-8">
        Confusion Matrices Analysis
    </h4>

    {/* Top 4 images */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[confuse1_1, confuse1_2, confuse1_3, confuse1_4].map((img, idx) => (
            <div
                key={idx}
                className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:scale-[1.02] transition-all"
            >
                <img src={img} className="rounded-xl w-full" />
            </div>
        ))}
    </div>

    {/* Highlight final model */}
    <div className="flex justify-center mt-10">
        <div className="w-full max-w-2xl bg-white p-4 rounded-3xl shadow-lg border-2 border-purple-300 hover:scale-[1.02] transition-all">
            <img
                src={confuse1_5}
                className="rounded-2xl w-full"
            />
            <p className="text-center mt-3 text-sm font-bold text-purple-700">
                Best Model (E5 Tuned)
            </p>
        </div>
    </div>
</div>
                        </div>
                    </div>
                )}


                {/* =========================================
                    TAB 4: CLASSICAL DL (WORD2VEC)
                ========================================= */}
                {activeTab === 'classical_dl' && (
                    <div className="flex flex-col gap-12 animate-in slide-in-from-bottom-4 duration-500">
                        
                        {/* Word2Vec Concept */}
                        <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-lg">
                            <h3 className="text-2xl font-black mb-4 flex items-center gap-3"><GitMerge className="text-rose-400"/> The Word2Vec Pretraining Goal</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                        We train a <strong>Skip-gram model (dim=100)</strong> strictly on our training set. The core idea: Words appearing in similar contexts are mapped to similar vector spaces.
                                    </p>
                                    <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700">
                                        <p className="text-rose-400 font-bold text-sm mb-2">🚨 The "Static" Limitation</p>
                                        <p className="text-slate-400 text-xs">Unlike Transformers, Word2Vec assigns exactly ONE vector per word. It cannot distinguish context (e.g., "bank" as a river vs. "bank" for finance). This acts as a performance ceiling.</p>
                                    </div>
                                </div>
                            <div className="flex flex-col items-center gap-3 w-full max-w-sm mx-auto text-sm font-bold text-center">

                                {/* Tokens */}
                                <div className="bg-slate-900 text-rose-300 w-full p-3 rounded-xl border border-slate-700 shadow-sm font-mono">
                                    Tokens
                                </div>

                                <ChevronDown className="text-rose-500 stroke-[2.5]" size={22} />

                                {/* Vocabulary */}
                                <div className="bg-slate-900 text-rose-300 w-full p-3 rounded-xl border border-slate-700 shadow-sm font-mono">
                                    Vocabulary
                                </div>

                                <ChevronDown className="text-rose-500 stroke-[2.5]" size={22} />

                                {/* Indices */}
                                <div className="bg-slate-900 text-rose-300 w-full p-3 rounded-xl border border-slate-700 shadow-sm font-mono">
                                    Indices
                                </div>

                                <ChevronDown className="text-rose-500 stroke-[2.5]" size={22} />

                                {/* Embedding */}
                                <div className="bg-rose-100 text-rose-800 w-full p-3 rounded-xl border border-rose-200 shadow-sm">
                                    Embedding Lookup Matrix <br />
                                    <span className="font-mono text-xs">E ∈ ℝ^(|V|×d)</span>
                                </div>

                                <ChevronDown className="text-rose-500 stroke-[2.5]" size={22} />

                                {/* Output */}
                                <div className="bg-blue-100 text-blue-800 w-full p-3 rounded-xl border border-blue-200 shadow-sm">
                                    Sequential Model Input X
                                </div>

                            </div>
                            </div>
                        </div>

                        {/* 4 Architectures Visualized */}
                        <div>
                            <h3 className="text-2xl font-black text-slate-800 mb-6 text-center">Sequence Modeling Architectures</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                                {/* CNN */}
                                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex flex-col items-center text-center">
                                    <h4 className="font-black text-slate-700 mb-2 text-lg">CNN</h4>
                                    <p className="text-xs text-slate-500 mb-6 h-8">Captures local n-gram patterns fast.</p>
                                    <div className="text-[11px] font-mono font-bold text-slate-600 flex flex-col gap-1.5 w-full">
                                        <div className="bg-white p-2 rounded shadow-sm">Embedding(seq, 100)</div>
                                        <ChevronDown className="mx-auto text-slate-300 animate-pulse" size={16}/>
                                        <div className="bg-white p-2 rounded shadow-sm">Permute</div>
                                        <ChevronDown className="mx-auto text-slate-300 animate-pulse" size={16}/>
                                        <div className="bg-rose-100 text-rose-800 border border-rose-200 p-2 rounded">Conv1D(k=5)</div>
                                        <ChevronDown className="mx-auto text-slate-300 animate-pulse" size={16}/>
                                        <div className="bg-white p-2 rounded shadow-sm">AdaptiveMaxPool</div>
                                        <ChevronDown className="mx-auto text-slate-300 animate-pulse" size={16}/>
                                        <div className="bg-slate-800 text-white p-2 rounded">Linear Head</div>
                                    </div>
                                </div>
                                
                                {/* RNN */}
                                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex flex-col items-center text-center">
                                    <h4 className="font-black text-slate-700 mb-2 text-lg">RNN</h4>
                                    <p className="text-xs text-slate-500 mb-6 h-8">Sequential, but weak long-term memory.</p>
                                    <div className="text-[11px] font-mono font-bold text-slate-600 flex flex-col gap-1.5 w-full">
                                        <div className="bg-white p-2 rounded shadow-sm">Embedding(seq, 100)</div>
                                        <ChevronDown className="mx-auto text-slate-300 animate-pulse" size={16}/>
                                        <div className="bg-purple-100 text-purple-800 border border-purple-200 p-2 rounded">RNN(hidden=128)</div>
                                        <ChevronDown className="mx-auto text-slate-300 animate-pulse" size={16}/>
                                        <div className="bg-white p-2 rounded shadow-sm">Extract state (h)</div>
                                        <ChevronDown className="mx-auto text-slate-300 animate-pulse" size={16}/>
                                        <div className="bg-white p-2 rounded shadow-sm">Squeeze(0)</div>
                                        <ChevronDown className="mx-auto text-slate-300 animate-pulse" size={16}/>
                                        <div className="bg-slate-800 text-white p-2 rounded">Linear Head</div>
                                    </div>
                                </div>

                                {/* LSTM */}
                                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex flex-col items-center text-center">
                                    <h4 className="font-black text-slate-700 mb-2 text-lg">LSTM</h4>
                                    <p className="text-xs text-slate-500 mb-6 h-8">Solves vanishing gradient, better memory.</p>
                                    <div className="text-[11px] font-mono font-bold text-slate-600 flex flex-col gap-1.5 w-full">
                                        <div className="bg-white p-2 rounded shadow-sm">Embedding(seq, 100)</div>
                                        <ChevronDown className="mx-auto text-slate-300 animate-pulse" size={16}/>
                                        <div className="bg-amber-100 text-amber-800 border border-amber-200 p-2 rounded">LSTM(hidden=128)</div>
                                        <ChevronDown className="mx-auto text-slate-300 animate-pulse" size={16}/>
                                        <div className="bg-white p-2 rounded shadow-sm">Extract h[-1]</div>
                                        <ArrowDown className="mx-auto text-transparent" size={12}/>
                                        <div className="bg-white p-2 rounded shadow-sm border-transparent text-transparent select-none">Spacer</div>
                                        <ChevronDown className="mx-auto text-slate-300 animate-pulse" size={16}/>
                                        <div className="bg-slate-800 text-white p-2 rounded">Linear Head</div>
                                    </div>
                                </div>

                                {/* BiLSTM */}
                                <div className="bg-slate-50 p-6 rounded-3xl border border-blue-200 shadow-md flex flex-col items-center text-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-black px-2 py-1 rounded-bl-lg">STRONGEST</div>
                                    <h4 className="font-black text-blue-700 mb-2 text-lg">BiLSTM</h4>
                                    <p className="text-xs text-blue-600/70 mb-6 h-8">Context from both directions.</p>
                                    <div className="text-[11px] font-mono font-bold text-slate-600 flex flex-col gap-1.5 w-full">
                                        <div className="bg-white p-2 rounded shadow-sm">Embedding(seq, 100)</div>
                                        <ChevronDown className="mx-auto text-slate-300 animate-pulse" size={16}/>
                                        <div className="bg-blue-100 text-blue-800 border border-blue-200 p-2 rounded">BiLSTM(bidirectional)</div>
                                        <ChevronDown className="mx-auto text-slate-300 animate-pulse" size={16}/>
                                        <div className="bg-white p-2 rounded shadow-sm">Concat(h[-2], h[-1])</div>
                                        <ArrowDown className="mx-auto text-transparent" size={12}/>
                                        <div className="bg-white p-2 rounded shadow-sm border-transparent text-transparent select-none">Spacer</div>
                                        <ChevronDown className="mx-auto text-slate-300 animate-pulse" size={16}/>
                                        <div className="bg-slate-800 text-white p-2 rounded">Linear(in=256)</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Plots */}
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-8">
                                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex flex-col">
                                    <h4 className="font-bold text-center text-slate-700 mb-4">
                                        Training History
                                    </h4>
                                    <img src={w2vHistoryImg} className="w-full rounded-xl shadow-sm" />
                                </div>

                                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex flex-col">
                                    <h4 className="font-bold text-center text-slate-700 mb-4">
                                        Metrics Comparison
                                    </h4>
                                    <img src={w2vCompImg} className="w-full rounded-xl shadow-sm" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[confuse2_1, confuse2_2, confuse2_3, confuse2_4].map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
                                    >
                                        <img
                                            src={img}
                                            alt={`W2V CM ${idx + 1}`}
                                            className="max-w-full h-auto rounded-xl"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}


                {/* =========================================
                    TAB 5: FINAL TAKEAWAYS
                ========================================= */}
                {activeTab === 'takeaways' && (
                    <div className="flex flex-col items-center justify-center py-10 animate-in zoom-in-95 duration-500">
                        <div className="max-w-4xl w-full flex flex-col gap-8">
                            <div className="text-center mb-6">
                                <Flag size={48} className="mx-auto text-amber-500 mb-4" />
                                <h2 className="text-4xl font-black text-slate-800">Final Research Takeaways</h2>
                                <p className="text-slate-500 mt-4 text-lg">Synthesizing the results across ML, Classical DL, and Modern Transformers.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-black text-emerald-800 mb-3">1. The Role of Preprocessing</h3>
                                    <p className="text-emerald-700/80 leading-relaxed">
                                        Aggressive text cleaning (lemmatization, stopword removal) is <strong>critical</strong> for Traditional ML (TF-IDF) to reduce noise. However, it is fundamentally <strong>harmful</strong> for Deep Learning, which relies on raw syntactic structure to build context.
                                    </p>
                                </div>
                                
                                <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-black text-blue-800 mb-3">2. Traditional ML Limits</h3>
                                    <p className="text-blue-700/80 leading-relaxed">
                                        Linear models (Logistic Regression, LinearSVC) dominate tree-based algorithms in sparse, high-dimensional TF-IDF spaces. They form a very strong, fast baseline but completely fail at distinguishing the nuanced 'Neutral' class.
                                    </p>
                                </div>

                                <div className="bg-rose-50 border border-rose-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-black text-rose-800 mb-3">3. Classical DL (Word2Vec)</h3>
                                    <p className="text-rose-700/80 leading-relaxed">
                                        Training static Word2Vec embeddings from scratch and feeding them into sequence models (BiLSTM) is superior to ML for capturing word order. However, static embeddings severely limit the ceiling of understanding.
                                    </p>
                                </div>

                                <div className="bg-purple-50 border border-purple-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-black text-purple-800 mb-3">4. Transformer Supremacy</h3>
                                    <p className="text-purple-700/80 leading-relaxed">
                                        Fine-tuned Transformers (specifically <strong>E5</strong>) deliver the best overall performance. The self-attention mechanism's ability to create dynamic, context-aware embeddings is the ultimate key to solving complex semantic boundaries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default TextClassification;