import React from 'react';
import { Target, Cpu, Database, Settings, Brain, ArrowRight, CheckCircle2, Activity, BarChart2, Trophy, Timer } from 'lucide-react';

const TabularClassification = () => {

    const baselineResults = [
        { model: 'SVM',                stage: 'Baseline', accuracy: 0.8731, precision: 0.8302, recall: 0.8462, f1: 0.8381, roc_auc: 0.9109, training_time: 0.2257 },
        { model: 'Logistic Regression', stage: 'Baseline', accuracy: 0.8582, precision: 0.8235, recall: 0.8077, f1: 0.8155, roc_auc: 0.9102, training_time: 0.0600 },
        { model: 'Gradient Boosting',   stage: 'Baseline', accuracy: 0.8358, precision: 0.8571, recall: 0.6923, f1: 0.7660, roc_auc: 0.9053, training_time: 0.2153 },
        { model: 'AdaBoost',            stage: 'Baseline', accuracy: 0.8582, precision: 0.8113, recall: 0.8269, f1: 0.8190, roc_auc: 0.9001, training_time: 0.2495 },
        { model: 'MLP',                 stage: 'Baseline', accuracy: 0.8507, precision: 0.8333, recall: 0.7692, f1: 0.8000, roc_auc: 0.8663, training_time: 1.6724 },
        { model: 'Random Forest',       stage: 'Baseline', accuracy: 0.8134, precision: 0.7755, recall: 0.7308, f1: 0.7525, roc_auc: 0.8546, training_time: 0.2923 },
        { model: 'Naive Bayes',         stage: 'Baseline', accuracy: 0.7313, precision: 0.6905, recall: 0.5577, f1: 0.6170, roc_auc: 0.8342, training_time: 0.0565 },
        { model: 'Decision Tree',       stage: 'Baseline', accuracy: 0.7537, precision: 0.6727, recall: 0.7115, f1: 0.6916, roc_auc: 0.7277, training_time: 0.0625 },
    ];

    const sortedResults = [...baselineResults].sort((a, b) => b.accuracy - a.accuracy);

    const best = {
        accuracy:      Math.max(...baselineResults.map(r => r.accuracy)),
        precision:     Math.max(...baselineResults.map(r => r.precision)),
        recall:        Math.max(...baselineResults.map(r => r.recall)),
        f1:            Math.max(...baselineResults.map(r => r.f1)),
        roc_auc:       Math.max(...baselineResults.map(r => r.roc_auc)),
        training_time: Math.min(...baselineResults.map(r => r.training_time)),
    };

    const topModel = sortedResults[0].model;

    const modelCards = [
        {
            name: 'Naive Bayes',
            desc: 'Probabilistic classifier based on Bayes\' theorem with feature independence assumption. Fast and effective for high-dimensional data.',
            accuracy: 0.7313, roc_auc: 0.8342, best: false,
            Icon: Activity, iconBg: 'bg-sky-50', iconColor: 'text-sky-500',
        },
        {
            name: 'Logistic Regression',
            desc: 'Linear model that estimates survival probability via a logistic function. Highly interpretable with strong baseline performance.',
            accuracy: 0.8582, roc_auc: 0.9102, best: false,
            Icon: BarChart2, iconBg: 'bg-blue-50', iconColor: 'text-blue-500',
        },
        {
            name: 'Decision Tree',
            desc: 'Tree-structured model that recursively splits on feature thresholds. Intuitive but prone to overfitting without pruning.',
            accuracy: 0.7537, roc_auc: 0.7277, best: false,
            Icon: Target, iconBg: 'bg-orange-50', iconColor: 'text-orange-500',
        },
        {
            name: 'SVM',
            desc: 'Finds the optimal separating hyperplane maximizing the margin between classes. Robust in high-dimensional spaces.',
            accuracy: 0.8731, roc_auc: 0.9109, best: true,
            Icon: Trophy, iconBg: 'bg-indigo-50', iconColor: 'text-indigo-500',
        },
        {
            name: 'Random Forest',
            desc: 'Ensemble of decision trees trained on random feature subsets. Reduces overfitting through averaging and voting.',
            accuracy: 0.8134, roc_auc: 0.8546, best: false,
            Icon: Database, iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500',
        },
        {
            name: 'AdaBoost',
            desc: 'Boosting method that sequentially trains weak classifiers, giving more weight to misclassified samples at each step.',
            accuracy: 0.8582, roc_auc: 0.9001, best: false,
            Icon: Settings, iconBg: 'bg-amber-50', iconColor: 'text-amber-500',
        },
        {
            name: 'Gradient Boosting',
            desc: 'Builds trees sequentially to minimize residual errors. Generally achieves high accuracy with careful tuning.',
            accuracy: 0.8358, roc_auc: 0.9053, best: false,
            Icon: CheckCircle2, iconBg: 'bg-teal-50', iconColor: 'text-teal-500',
        },
        {
            name: 'MLP',
            desc: 'Multi-layer neural network with non-linear activations. Powerful pattern learner that may require more data and tuning.',
            accuracy: 0.8507, roc_auc: 0.8663, best: false,
            Icon: Brain, iconBg: 'bg-purple-50', iconColor: 'text-purple-500',
        },
    ];

    return (
        <div className="flex flex-col gap-12 w-full h-full pb-12">
            {/* Intro Header */}
            <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <h2 className="text-3xl font-black text-indigo-600 tracking-tight flex items-center gap-3">
                        <Cpu className="text-indigo-500" size={32} />
                        Tabular Classification Models
                    </h2>
                </div>
                <p className="text-slate-500 text-lg leading-relaxed max-w-4xl">
                    Predictive modeling section to determine passenger survival using various machine learning algorithms based on the features explored in the EDA phase.
                </p>
            </div>

            {/* Classification Pipeline Visualization */}
            <section className="flex flex-col gap-8 mt-4">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-indigo-100 p-2 rounded-xl">
                            <Activity className="text-indigo-600" size={24} />
                        </div>
                        Classification Pipeline
                    </h3>
                    <p className="text-slate-500 mt-2 text-lg">
                        End-to-end workflow for classifying passenger survival using the Titanic tabular dataset.
                    </p>
                </div>

                <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-between gap-4 w-full">
                    {/* Step 1: Raw Input Features */}
                    <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center relative hover:shadow-md transition-all hover:-translate-y-1 w-full xl:w-auto">
                        <div className="bg-blue-50 text-blue-600 p-4 rounded-xl mb-4">
                            <Database size={32} />
                        </div>
                        <h4 className="text-lg font-bold text-slate-800 mb-2">1. Raw Input Features</h4>
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm font-medium border border-slate-200">Pclass</span>
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm font-medium border border-slate-200">Sex</span>
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm font-medium border border-slate-200">Age</span>
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm font-medium border border-slate-200">SibSp</span>
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm font-medium border border-slate-200">Fare</span>
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm font-medium border border-slate-200">Embarked</span>
                        </div>
                    </div>

                    <div className="hidden xl:flex items-center justify-center text-slate-300">
                        <ArrowRight size={32} strokeWidth={3} />
                    </div>
                    <div className="flex xl:hidden items-center justify-center text-slate-300 transform rotate-90 my-2">
                        <ArrowRight size={32} strokeWidth={3} />
                    </div>

                    {/* Step 2: Preprocessing */}
                    <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center relative hover:shadow-md transition-all hover:-translate-y-1 w-full xl:w-auto">
                        <div className="bg-amber-50 text-amber-500 p-4 rounded-xl mb-4">
                            <Settings size={32} />
                        </div>
                        <h4 className="text-lg font-bold text-slate-800 mb-2">2. Feature Engineering</h4>
                        <ul className="text-[13px] text-slate-500 flex flex-col gap-1.5 mt-4 w-full text-left bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" /> Fill missing Age (median by Pclass)</li>
                            <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" /> Fill missing Embarked (mode)</li>
                            <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" /> Transform Cabin into Deck</li>
                            <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" /> Create FamilySize and IsAlone</li>
                            <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" /> One-hot encode Pclass, Embarked, Deck</li>
                            <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" /> Binary encode Sex</li>
                            <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" /> Apply log1p to Fare</li>
                            <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" /> Scale numerical features (Age, Fare)</li>
                        </ul>
                    </div>

                    <div className="hidden xl:flex items-center justify-center text-slate-300">
                        <ArrowRight size={32} strokeWidth={3} />
                    </div>
                    <div className="flex xl:hidden items-center justify-center text-slate-300 transform rotate-90 my-2">
                        <ArrowRight size={32} strokeWidth={3} />
                    </div>

                    {/* Step 3: Classifier */}
                    <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center relative hover:shadow-md transition-all hover:-translate-y-1 w-full xl:w-auto">
                        <div className="bg-purple-50 text-purple-600 p-4 rounded-xl mb-4">
                            <Brain size={32} />
                        </div>
                        <h4 className="text-lg font-bold text-slate-800 mb-2">3. Classifier Models</h4>
                        <div className="grid grid-cols-2 gap-2 mt-4 w-full">
                            <div className="bg-purple-50/50 text-purple-700 px-2 py-2 rounded-lg text-[11px] sm:text-xs font-semibold border border-purple-100 flex items-center justify-center text-center">Naive Bayes</div>
                            <div className="bg-purple-50/50 text-purple-700 px-2 py-2 rounded-lg text-[11px] sm:text-xs font-semibold border border-purple-100 flex items-center justify-center text-center">Logistic Reg.</div>
                            <div className="bg-purple-50/50 text-purple-700 px-2 py-2 rounded-lg text-[11px] sm:text-xs font-semibold border border-purple-100 flex items-center justify-center text-center">Decision Tree</div>
                            <div className="bg-purple-50/50 text-purple-700 px-2 py-2 rounded-lg text-[11px] sm:text-xs font-semibold border border-purple-100 flex items-center justify-center text-center">SVM</div>
                            <div className="bg-purple-50/50 text-purple-700 px-2 py-2 rounded-lg text-[11px] sm:text-xs font-semibold border border-purple-100 flex items-center justify-center text-center">Random Forest</div>
                            <div className="bg-purple-50/50 text-purple-700 px-2 py-2 rounded-lg text-[11px] sm:text-xs font-semibold border border-purple-100 flex items-center justify-center text-center">AdaBoost</div>
                            <div className="bg-purple-50/50 text-purple-700 px-2 py-2 rounded-lg text-[11px] sm:text-xs font-semibold border border-purple-100 flex items-center justify-center text-center">Grad. Boosting</div>
                            <div className="bg-purple-50/50 text-purple-700 px-2 py-2 rounded-lg text-[11px] sm:text-xs font-semibold border border-purple-100 flex items-center justify-center text-center">MLP</div>
                        </div>
                    </div>

                    <div className="hidden xl:flex items-center justify-center text-slate-300">
                        <ArrowRight size={32} strokeWidth={3} />
                    </div>
                    <div className="flex xl:hidden items-center justify-center text-slate-300 transform rotate-90 my-2">
                        <ArrowRight size={32} strokeWidth={3} />
                    </div>

                    {/* Step 4: Prediction Output */}
                    <div className="flex-1 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center relative hover:shadow-md transition-all hover:-translate-y-1 w-full xl:w-auto">
                        <div className="bg-emerald-500 text-white p-4 rounded-xl mb-4 shadow-lg shadow-emerald-200">
                            <Target size={32} />
                        </div>
                        <h4 className="text-lg font-bold text-emerald-900 mb-2">4. Prediction Output</h4>
                        <p className="text-emerald-700 text-sm mb-4">
                            Binary classification targeting the <strong>Survived</strong> feature.
                        </p>
                        <div className="flex gap-3 mt-auto w-full justify-center">
                            <div className="bg-white px-4 py-3 rounded-xl shadow-sm border border-emerald-100 text-center flex-1">
                                <span className="text-2xl font-black text-emerald-500">1</span>
                                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">Survived</p>
                            </div>
                            <div className="bg-white px-4 py-3 rounded-xl shadow-sm border border-emerald-100 text-center flex-1">
                                <span className="text-2xl font-black text-red-500">0</span>
                                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">Dead</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Model Cards */}
            <section className="flex flex-col gap-8 mt-4">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-purple-100 p-2 rounded-xl">
                            <Brain className="text-purple-600" size={24} />
                        </div>
                        Baseline Model Overview
                    </h3>
                    <p className="text-slate-500 mt-2 text-base">Short descriptions of each classifier evaluated in the baseline stage.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {modelCards.map((m) => (
                        <div 
                            key={m.name} 
                            className={`bg-white border rounded-[1.5rem] p-6 flex flex-col hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden ${
                                m.best 
                                    ? 'border-indigo-300 ring-4 ring-indigo-50 shadow-lg shadow-indigo-100' 
                                    : 'border-slate-100 shadow-sm'
                            }`}
                        >
                            {/* Decorative background blob for best model */}
                            {m.best && <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -mr-10 -mt-10"></div>}
                            
                            <div className="flex items-start justify-between mb-4 relative z-10">
                                <div className={`p-4 rounded-2xl ${m.iconBg} ${m.best ? 'shadow-inner' : ''}`}>
                                    <m.Icon size={24} className={m.iconColor} />
                                </div>
                                {m.best && (
                                    <span className="flex items-center gap-1.5 bg-indigo-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                                        <Trophy size={14} /> Best
                                    </span>
                                )}
                            </div>
                            
                            <div className="relative z-10 flex-grow flex flex-col">
                                <h4 className="font-extrabold text-slate-800 text-xl mb-2">{m.name}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-6">{m.desc}</p>
                            </div>
                            
                            <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between relative z-10">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Accuracy</p>
                                    <p className="text-2xl font-black text-slate-800">{(m.accuracy * 100).toFixed(1)}<span className="text-sm font-bold text-slate-500">%</span></p>
                                </div>
                                <div className="w-px h-10 bg-slate-200"></div>
                                <div className="text-right">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">ROC AUC</p>
                                    <p className="text-2xl font-black text-slate-800">{m.roc_auc.toFixed(4)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section: Performance Table */}
            <section className="flex flex-col gap-8 mt-4">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-emerald-100 p-2 rounded-xl">
                            <BarChart2 className="text-emerald-600" size={24} />
                        </div>
                        Baseline Performance Comparison
                    </h3>
                    <p className="text-slate-500 mt-2 text-base">
                        All models evaluated on the same holdout split. <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 font-semibold px-2 py-0.5 rounded-full border border-amber-200 text-xs"><Trophy size={11} /> Highlighted</span> cells indicate the best value per metric.
                    </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-center">
                            <thead className="bg-slate-50 text-xs text-slate-500 uppercase font-bold border-b border-slate-200">
                                <tr>
                                    <th className="px-5 py-4 text-left">Model</th>
                                    <th className="px-4 py-4">Stage</th>
                                    <th className="px-4 py-4">Accuracy</th>
                                    <th className="px-4 py-4">Precision</th>
                                    <th className="px-4 py-4">Recall</th>
                                    <th className="px-4 py-4">F1</th>
                                    <th className="px-4 py-4">ROC AUC</th>
                                    <th className="px-4 py-4 flex items-center justify-center gap-1"><Timer size={12} /> Train (s)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {sortedResults.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-5 py-3 font-bold text-slate-700 text-left">
                                            <span className="flex items-center gap-2">
                                                {row.model === topModel && <Trophy size={13} className="text-amber-400" />}
                                                {row.model}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-full">{row.stage}</span>
                                        </td>
                                        <td className={`px-4 py-3 font-mono font-bold ${row.accuracy === best.accuracy ? 'text-indigo-600 bg-indigo-50' : 'text-slate-600'}`}>
                                            {(row.accuracy * 100).toFixed(2)}%
                                            {row.accuracy === best.accuracy && <span className="ml-1 text-[10px] align-super">★</span>}
                                        </td>
                                        <td className={`px-4 py-3 font-mono font-bold ${row.precision === best.precision ? 'text-purple-600 bg-purple-50' : 'text-slate-600'}`}>
                                            {(row.precision * 100).toFixed(2)}%
                                            {row.precision === best.precision && <span className="ml-1 text-[10px] align-super">★</span>}
                                        </td>
                                        <td className={`px-4 py-3 font-mono font-bold ${row.recall === best.recall ? 'text-blue-600 bg-blue-50' : 'text-slate-600'}`}>
                                            {(row.recall * 100).toFixed(2)}%
                                            {row.recall === best.recall && <span className="ml-1 text-[10px] align-super">★</span>}
                                        </td>
                                        <td className={`px-4 py-3 font-mono font-bold ${row.f1 === best.f1 ? 'text-emerald-600 bg-emerald-50' : 'text-slate-600'}`}>
                                            {(row.f1 * 100).toFixed(2)}%
                                            {row.f1 === best.f1 && <span className="ml-1 text-[10px] align-super">★</span>}
                                        </td>
                                        <td className={`px-4 py-3 font-mono font-bold ${row.roc_auc === best.roc_auc ? 'text-amber-600 bg-amber-50' : 'text-slate-600'}`}>
                                            {row.roc_auc.toFixed(4)}
                                            {row.roc_auc === best.roc_auc && <span className="ml-1 text-[10px] align-super">★</span>}
                                        </td>
                                        <td className={`px-4 py-3 font-mono font-bold ${row.training_time === best.training_time ? 'text-teal-600 bg-teal-50' : 'text-slate-600'}`}>
                                            {row.training_time.toFixed(4)}s
                                            {row.training_time === best.training_time && <span className="ml-1 text-[10px] align-super">★</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-indigo-100 inline-block border border-indigo-200"></span> Best Accuracy</span>
                        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-purple-100 inline-block border border-purple-200"></span> Best Precision</span>
                        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-blue-100 inline-block border border-blue-200"></span> Best Recall</span>
                        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-emerald-100 inline-block border border-emerald-200"></span> Best F1</span>
                        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-100 inline-block border border-amber-200"></span> Best ROC AUC</span>
                        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-teal-100 inline-block border border-teal-200"></span> Fastest Training</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TabularClassification;
