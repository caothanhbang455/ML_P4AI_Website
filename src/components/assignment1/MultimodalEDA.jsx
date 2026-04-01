import React from 'react';
import { Info, Image as ImageIcon, MessageSquare, Hash, AlertTriangle, AlignLeft, BookOpen, Camera } from 'lucide-react';
import lenDistImg from '../../assets/eda-multimodal/caption_length_distribution.png';
import lenBoxplotImg from '../../assets/eda-multimodal/caption_length_boxplot.png';
import charDistImg from '../../assets/eda-multimodal/character_count_distribution.png';
import stopwordsImg from '../../assets/eda-multimodal/top20_stopwords.png';
import bigramsImg from '../../assets/eda-multimodal/top20_bigrams.png';
import trigramsImg from '../../assets/eda-multimodal/top20_trigrams.png';
import tfidfImg from '../../assets/eda-multimodal/top_tf-idf_words.png';
import importantWordsImg from '../../assets/eda-multimodal/top20_important_words.png';
import topWordsImg from '../../assets/eda-multimodal/top20_words.png';
import wordcloudImg from '../../assets/eda-multimodal/word_cloud.png';
import diversityImg from '../../assets/eda-multimodal/caption_diversity.png';
import wordVsCharImg from '../../assets/eda-multimodal/word_vs_character_count.png';
import diverseImg from '../../assets/eda-multimodal/diverse_images.png';
import extremeImg from '../../assets/eda-multimodal/extreme_images.png';
import blurryImg from '../../assets/eda-multimodal/top5_blurry_images.png';
import distImg from '../../assets/eda-multimodal/width_height_distribution.png';
import sample1Img from '../../assets/eda-multimodal/sample1.png';
import sample2Img from '../../assets/eda-multimodal/sample2.jpg';
import sample3Img from '../../assets/eda-multimodal/sample3.jpg';

const MultimodalEDA = () => {
    const datasetSamples = [
        { image: '4788161255.jpg', caption: 'A young man in a black shirt and jeans and ca...' },
        { image: '3612485097.jpg', caption: 'A black man leans over as a white man jumps o...' },
        { image: '3287963317.jpg', caption: 'Four people sitting in the snow at the base o...' },
        { image: '3629615546.jpg', caption: 'Two women in matching black and green outfits...' },
        { image: '4464793378.jpg', caption: 'A man sits down on a chair , checking his pho...' },
        { image: '3914088687.jpg', caption: 'At the rodeo a cowboy rides a horse .' },
        { image: '3667788497.jpg', caption: 'A child in an orange shirt examines the prope...' },
        { image: '2677296582.jpg', caption: 'Man works on lowering a train on tracks .' },
        { image: '3349308309.jpg', caption: 'Two people each riding a camel with one perso...' },
        { image: '311146855.jpg', caption: 'A man and a woman wearing decorative costumes...' },
    ];

    const shortCaptions = [
        { image: '2199200615.jpg', caption: 'NaN', length: 1 },
        { image: '2165461920.jpg', caption: 'dogs racing', length: 2 },
        { image: '244760301.jpg', caption: 'People walking', length: 2 },
        { image: '256085101.jpg', caption: 'Dog yawns', length: 2 },
        { image: '2714703706.jpg', caption: 'dogs playing', length: 2 },
    ];

    const longCaptions = [
        { image: '2073444485.jpg', caption: 'A man wearing a helmet , red pants with white...', length: 82 },
        { image: '19663663.jpg', caption: 'Four young adults sit outside on a wooden dec...', length: 79 },
        { image: '4864584935.jpg', caption: 'Two boys are looking upwards with their arms ...', length: 75 },
        { image: '5491402223.jpg', caption: 'In this photo there is are two men one in a b...', length: 73 },
        { image: '1616086463.jpg', caption: 'a " The Human Shop " display in a public area...', length: 72 },
    ];

    const topCommonWords = [
        { word: 'a', count: 271739, percentage: 100 },
        { word: 'in', count: 83520, percentage: 30.73 },
        { word: 'the', count: 62984, percentage: 23.17 },
        { word: 'on', count: 45686, percentage: 16.81 },
        { word: 'and', count: 44299, percentage: 16.30 },
        { word: 'man', count: 42626, percentage: 15.68 },
        { word: 'is', count: 41117, percentage: 15.13 },
        { word: 'of', count: 38844, percentage: 14.29 },
        { word: 'with', count: 36208, percentage: 13.32 },
        { word: 'woman', count: 22213, percentage: 8.17 },
    ];

    return (
        <div className="flex flex-col gap-12 w-full animate-in fade-in duration-500 h-full">
            {/* Intro Header */}
            <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-black text-purple-600 tracking-tight">
                    Multimodal Data Exploration
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                    Exploratory Data Analysis for the <strong>Flickr30k</strong> dataset, examining the relationship between images and their corresponding natural language captions.
                </p>
            </div>

            {/* SECTION 1: Dataset Overview */}
            <section className="flex flex-col gap-8">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-purple-100 p-2 rounded-xl">
                            <Info className="text-purple-600" size={24} />
                        </div>
                        1. Dataset Overview
                    </h3>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                        <div className="bg-blue-50 p-4 rounded-xl text-blue-500">
                            <ImageIcon size={28} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Unique Images</p>
                            <p className="text-3xl font-black text-slate-800">31,783</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                        <div className="bg-emerald-50 p-4 rounded-xl text-emerald-500">
                            <MessageSquare size={28} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Total Captions</p>
                            <p className="text-3xl font-black text-slate-800">158,915</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                        <div className="bg-amber-50 p-4 rounded-xl text-amber-500">
                            <Hash size={28} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Captions / Image</p>
                            <p className="text-3xl font-black text-slate-800">5.0</p>
                        </div>
                    </div>
                </div>

                {/* Sample Data Table */}
                <div className="bg-white border text-left border-slate-200 rounded-2xl shadow-sm overflow-hidden mt-4">
                    <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                        <h4 className="font-bold text-slate-700">Dataset Samples</h4>
                        <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">10 Random Pairs</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-center">
                            <thead className="bg-white text-xs text-slate-500 uppercase font-bold border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4 text-left w-1/3">Image File</th>
                                    <th className="px-6 py-4 text-left">Caption Snippet</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {datasetSamples.map((sample, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-3 font-bold text-slate-700 text-left font-mono">{sample.image}</td>
                                        <td className="px-6 py-3 text-slate-600 text-left italic">"{sample.caption}"</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Images & Captions Example */}
                <div className="bg-white border text-left border-slate-200 rounded-2xl shadow-sm overflow-hidden mt-4">
                    <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                        <h4 className="font-bold text-slate-700">Image & Captions Example</h4>
                        <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">Examples</span>
                    </div>
                    <div className="p-6 flex flex-col md:flex-row gap-8 items-center md:items-start border-b border-slate-100">
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img src={sample1Img} alt="Sample Data 1" className="w-full max-w-sm rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-3 justify-center h-full">
                            <h5 className="font-bold text-slate-600 text-sm uppercase tracking-wider mb-2">Detailed Captions</h5>
                            <ul className="space-y-3">
                                {[
                                    'A young man in swim shorts is jumping over a wave in the ocean .',
                                    'A man in swimming trunks plays in the ocean \'s waves .',
                                    'a surfer falling of his board into a wave',
                                    'A man falling over in an ocean wave',
                                    'A man is falling into waves .'
                                ].map((cap, idx) => (
                                    <li key={idx} className="flex gap-3 items-start bg-slate-50 p-3 rounded-lg border border-slate-100 hover:bg-purple-50 transition-colors">
                                        <div className="bg-purple-100 text-purple-700 text-xs font-black min-w-\[24px\] min-h-\[24px\] w-6 h-6 flex items-center justify-center rounded-full mt-0.5 shadow-sm">
                                            {idx + 1}
                                        </div>
                                        <p className="text-slate-700 italic leading-snug">"{cap}"</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col md:flex-row gap-8 items-center md:items-start border-b border-slate-100">
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img src={sample2Img} alt="Sample Data 2" className="w-full max-w-sm rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-3 justify-center h-full">
                            <h5 className="font-bold text-slate-600 text-sm uppercase tracking-wider mb-2">Detailed Captions</h5>
                            <ul className="space-y-3">
                                {[
                                    'Two young guys with shaggy hair look at their hands while hanging out in the yard.',
                                    'Two young white males are outside near many bushes .',
                                    'Two men in green shirts are standing in a yard.',
                                    'A man in a blue shirt standing in a garden.',
                                    'Two friends enjoy time spent together.'
                                ].map((cap, idx) => (
                                    <li key={idx} className="flex gap-3 items-start bg-slate-50 p-3 rounded-lg border border-slate-100 hover:bg-purple-50 transition-colors">
                                        <div className="bg-purple-100 text-purple-700 text-xs font-black min-w-\[24px\] min-h-\[24px\] w-6 h-6 flex items-center justify-center rounded-full mt-0.5 shadow-sm">
                                            {idx + 1}
                                        </div>
                                        <p className="text-slate-700 italic leading-snug">"{cap}"</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col md:flex-row gap-8 items-center md:items-start">
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img src={sample3Img} alt="Sample Data 3" className="w-full max-w-sm rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-3 justify-center h-full">
                            <h5 className="font-bold text-slate-600 text-sm uppercase tracking-wider mb-2">Detailed Captions</h5>
                            <ul className="space-y-3">
                                {[
                                    'A child in a pink dress is climbing up a set of stairs in an entry way.',
                                    'A little girl in a pink dress going into a wooden cabin.',
                                    'A little girl climbing the stairs to her playhouse.',
                                    'A little girl climbing into a wooden playhouse.',
                                    'A girl going into a wooden building.'
                                ].map((cap, idx) => (
                                    <li key={idx} className="flex gap-3 items-start bg-slate-50 p-3 rounded-lg border border-slate-100 hover:bg-purple-50 transition-colors">
                                        <div className="bg-purple-100 text-purple-700 text-xs font-black min-w-\[24px\] min-h-\[24px\] w-6 h-6 flex items-center justify-center rounded-full mt-0.5 shadow-sm">
                                            {idx + 1}
                                        </div>
                                        <p className="text-slate-700 italic leading-snug">"{cap}"</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Missing/Duplicate Values */}
            <section className="flex flex-col gap-8 mt-4">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-amber-100 p-2 rounded-xl">
                            <AlertTriangle className="text-amber-600" size={24} />
                        </div>
                        2. Missing & Duplicate Values
                    </h3>
                </div>

                <div className="flex flex-col xl:flex-row gap-8">
                    {/* MISSING VALUES */}
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 shadow-sm flex-grow">
                            <h4 className="text-xl font-bold text-amber-900 mb-2">Missing Values Analysis</h4>
                            <p className="text-amber-700/80 mb-6 leading-relaxed">
                                Overview of features containing null or missing data. Only <strong className="text-amber-900">1</strong> missing value was identified within the captions.
                            </p>

                            {/* Missing Table */}
                            <div className="bg-white border border-amber-200 rounded-xl overflow-hidden shadow-sm">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-amber-50/50 text-xs text-amber-800 uppercase font-bold border-b border-amber-100">
                                        <tr>
                                            <th className="px-4 py-3">Feature</th>
                                            <th className="px-4 py-3">Missing Count</th>
                                            <th className="px-4 py-3">Severity</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-amber-100/50">
                                        <tr className="hover:bg-amber-50/50 transition-colors">
                                            <td className="px-4 py-3 font-bold text-slate-700">image</td>
                                            <td className="px-4 py-3 text-slate-600 font-mono">0</td>
                                            <td className="px-4 py-3 font-bold text-emerald-600">🟢 Low</td>
                                        </tr>
                                        <tr className="hover:bg-amber-50/50 transition-colors">
                                            <td className="px-4 py-3 font-bold text-slate-700">caption</td>
                                            <td className="px-4 py-3 text-slate-600 font-mono">1</td>
                                            <td className="px-4 py-3 font-bold text-amber-600">🟢 Low</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* DUPLICATE VALUES */}
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 shadow-sm flex-grow">
                            <h4 className="text-xl font-bold text-emerald-900 mb-2">Duplicate Values Check</h4>
                            <p className="text-emerald-700/80 mb-6 leading-relaxed">
                                Validation for identical caption records within the dataset. A total of <strong className="text-emerald-900">34 duplicated rows</strong> were found.
                            </p>

                            {/* Duplicate Table */}
                            <div className="bg-white border border-emerald-200 rounded-xl overflow-hidden shadow-sm">
                                <table className="w-full text-sm text-center">
                                    <thead className="bg-emerald-50/50 text-xs text-emerald-800 uppercase font-bold border-b border-emerald-100">
                                        <tr>
                                            <th className="px-4 py-3">Total Rows</th>
                                            <th className="px-4 py-3">Unique Rows</th>
                                            <th className="px-4 py-3">Duplicate Rows</th>
                                            <th className="px-4 py-3">Duplicate %</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-emerald-100/50">
                                        <tr className="hover:bg-emerald-50/50 transition-colors">
                                            <td className="px-4 py-3 font-bold text-slate-700 font-mono">158,915</td>
                                            <td className="px-4 py-3 font-bold text-emerald-600 font-mono">158,881</td>
                                            <td className="px-4 py-3 font-bold text-slate-600 font-mono">34</td>
                                            <td className="px-4 py-3 font-bold text-slate-600 font-mono">0.02%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Caption Text Analysis */}
            <section className="flex flex-col gap-8 mt-4">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-blue-100 p-2 rounded-xl">
                            <AlignLeft className="text-blue-600" size={24} />
                        </div>
                        3. Caption Text Analysis
                    </h3>
                </div>

                {/* Caption Length & Word/Char Count Visuals */}
                <div className="flex flex-col gap-8">
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-slate-700 mb-2 text-xl w-full text-center border-b border-slate-100 pb-2">Caption Length Distribution</h4>
                        <p className="text-slate-600 text-lg font-medium mb-4 text-center">
                            Summary: Mean 13.39 words, Max 82 words, Min 1 word. Most captions range from 10 to 16 words.
                        </p>
                        <div className="flex justify-center w-full">
                            <img src={lenDistImg} alt="Length Distribution" className="w-full h-auto max-w-4xl rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                        </div>
                    </div>

                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-slate-700 mb-2 text-lg w-full text-center border-b border-slate-100 pb-2">Caption Length Boxplot</h4>
                        <div className="flex justify-center w-full mt-2">
                            <img src={lenBoxplotImg} alt="Length Boxplot" className="w-full h-auto max-w-4xl rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                        </div>
                    </div>

                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-slate-700 mb-2 text-xl w-full text-center border-b border-slate-100 pb-2">Word vs Character Count</h4>
                        <p className="text-slate-600 text-lg font-medium mb-4 text-center">Scatter mapping word count against character count per caption.</p>
                        <div className="flex justify-center w-full">
                            <img src={wordVsCharImg} alt="Word vs Character Count" className="w-full h-auto max-w-4xl rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                        </div>
                    </div>
                </div>

                {/* Outliers Custom Bar Chart */}
                <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm">
                    <h4 className="font-bold text-slate-700 mb-6 text-lg">Outlier Count: Short vs Long Captions</h4>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <span className="w-32 text-slate-500 font-bold text-right text-sm">Too Short (&lt; 3)</span>
                            <div className="flex-1 bg-slate-100 rounded-full h-6 overflow-hidden flex items-center">
                                {/* Max value is ~2000, 15 is <1% so we give it a min-width to be visible */}
                                <div className="bg-red-500 h-full rounded-none flex items-center justify-end px-3 text-white text-xs font-bold transition-all" style={{ width: '5%', minWidth: '40px' }}>
                                    15
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-32 text-slate-500 font-bold text-right text-sm">Too Long (&gt; 30)</span>
                            <div className="flex-1 bg-slate-100 rounded-full h-6 overflow-hidden flex items-center">
                                <div className="bg-indigo-500 h-full rounded-none flex items-center justify-end px-3 text-white text-xs font-bold transition-all" style={{ width: '100%' }}>
                                    1978
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Outlier Captions Tables */}
                <div className="flex flex-col xl:flex-row gap-8">
                    {/* Short Captions */}
                    <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                        <div className="bg-red-50 px-6 py-4 border-b border-red-100 flex items-center justify-between">
                            <h4 className="font-bold text-red-900">Shortest Captions Samples</h4>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-center">
                                <thead className="bg-white text-xs text-slate-500 uppercase font-bold border-b border-slate-200">
                                    <tr>
                                        <th className="px-4 py-3 text-left">Image</th>
                                        <th className="px-4 py-3 text-left">Caption</th>
                                        <th className="px-4 py-3">Length</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {shortCaptions.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50">
                                            <td className="px-4 py-3 font-mono text-slate-600 text-left">{row.image}</td>
                                            <td className="px-4 py-3 text-left italic">"{row.caption}"</td>
                                            <td className="px-4 py-3 font-bold text-red-500">{row.length}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Long Captions */}
                    <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                        <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100 flex items-center justify-between">
                            <h4 className="font-bold text-indigo-900">Longest Captions Samples</h4>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-center">
                                <thead className="bg-white text-xs text-slate-500 uppercase font-bold border-b border-slate-200">
                                    <tr>
                                        <th className="px-4 py-3 text-left">Image</th>
                                        <th className="px-4 py-3 text-left">Caption Snippet</th>
                                        <th className="px-4 py-3">Length</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {longCaptions.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50">
                                            <td className="px-4 py-3 font-mono text-slate-600 text-left">{row.image}</td>
                                            <td className="px-4 py-3 text-left italic truncate max-w-[200px]">"{row.caption}"</td>
                                            <td className="px-4 py-3 font-bold text-indigo-500">{row.length}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Additional length visualizations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-slate-700 mb-4 w-full text-center text-lg border-b border-slate-100 pb-2">Character Count Distribution</h4>
                        <img src={charDistImg} alt="Character Count Distribution" className="w-full h-auto rounded-xl object-contain hover:scale-[1.02] transition-transform" />
                    </div>
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-slate-700 mb-4 w-full text-center text-xl border-b border-slate-100 pb-2">Caption Diversity</h4>
                        <p className="text-slate-600 text-lg font-medium mb-4 text-center">Average diversity per image is roughly 5.0 (Standard Deviation 0.03).</p>
                        <img src={diversityImg} alt="Caption Diversity" className="w-full h-auto rounded-xl object-contain hover:scale-[1.02] transition-transform" />
                    </div>
                </div>
            </section>

            {/* SECTION 4: Vocabulary & Word Analysis */}
            <section className="flex flex-col gap-8 mt-4">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-emerald-100 p-2 rounded-xl">
                            <BookOpen className="text-emerald-600" size={24} />
                        </div>
                        4. Vocabulary & Word Analysis
                    </h3>
                </div>

                {/* Tokenization Overview */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 shadow-sm">
                    <div className="flex flex-col xl:flex-row justify-between gap-6">
                        <div className="min-w-fit">
                            <h4 className="text-xl font-black text-emerald-900 mb-2">Tokenization & Vocabulary Overview</h4>
                            <p className="text-emerald-800/80 mb-2">Total Words: <strong>1,957,129</strong></p>
                            <p className="text-emerald-800/80">Vocabulary Size (Unique Words): <strong>18,285</strong></p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 flex-1 w-full min-w-[300px]">
                            <p className="text-xs uppercase font-bold text-slate-400 mb-4 tracking-widest">Top 10 Most Common Words</p>
                            <div className="flex flex-col gap-3">
                                {topCommonWords.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <span className="w-14 text-right font-bold text-slate-600 text-sm">{item.word}</span>
                                        <div className="flex-1 h-6 bg-slate-100 rounded-lg overflow-hidden flex items-center">
                                            <div 
                                                className="h-full bg-emerald-400 rounded-none flex items-center justify-end px-2 text-xs font-bold text-emerald-900"
                                                style={{ width: `${item.percentage}%`, minWidth: '40px' }}
                                            >
                                                {item.count.toLocaleString()}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-slate-700 mb-4 w-full text-center text-lg border-b border-slate-100 pb-2">Top 20 Words</h4>
                        <img src={topWordsImg} alt="Top 20 Words" className="w-full h-auto rounded-xl object-contain hover:scale-[1.02] transition-transform" />
                    </div>
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-slate-700 mb-4 w-full text-center text-lg border-b border-slate-100 pb-2">Top 20 Stopwords</h4>
                        <img src={stopwordsImg} alt="Top 20 Stopwords" className="w-full h-auto rounded-xl object-contain hover:scale-[1.02] transition-transform" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-slate-700 mb-4 w-full text-center text-lg border-b border-slate-100 pb-2">Top 20 Important Words (No Stopwords)</h4>
                        <img src={importantWordsImg} alt="Important Words" className="w-full h-auto rounded-xl object-contain hover:scale-[1.02] transition-transform" />
                    </div>
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-slate-700 mb-4 w-full text-center text-lg border-b border-slate-100 pb-2">Top TF-IDF Words</h4>
                        <img src={tfidfImg} alt="Top TF-IDF Words" className="w-full h-auto rounded-xl object-contain hover:scale-[1.02] transition-transform" />
                    </div>
                </div>

                {/* N-Grams Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-slate-700 mb-4 w-full text-center text-lg border-b border-slate-100 pb-2">Top 20 Bigrams</h4>
                        <img src={bigramsImg} alt="Top 20 Bigrams" className="w-full h-auto rounded-xl object-contain hover:scale-[1.02] transition-transform" />
                    </div>
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-slate-700 mb-4 w-full text-center text-lg border-b border-slate-100 pb-2">Top 20 Trigrams</h4>
                        <img src={trigramsImg} alt="Top 20 Trigrams" className="w-full h-auto rounded-xl object-contain hover:scale-[1.02] transition-transform" />
                    </div>
                </div>

                {/* Wordcloud Wrapper */}
                <div className="bg-indigo-50 p-6 border border-indigo-100 rounded-2xl shadow-sm flex flex-col items-center mt-4">
                    <h4 className="font-black text-indigo-900 mb-6 text-2xl tracking-tight">Caption Word Cloud</h4>
                    <div className="bg-white p-4 rounded-xl shadow-inner w-full flex justify-center max-w-5xl">
                        <img src={wordcloudImg} alt="Word Cloud" className="w-full h-auto rounded-lg object-contain" />
                    </div>
                </div>
            </section>

            {/* SECTION 5: Image Quality Analysis */}
            <section className="flex flex-col gap-8 mt-4">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-rose-100 p-2 rounded-xl">
                            <Camera className="text-rose-600" size={24} />
                        </div>
                        5. Image Quality Analysis
                    </h3>
                </div>

                {/* Dimensions and RGB Config */}
                <div className="flex flex-col xl:flex-row gap-8">
                    {/* Dimension Overviews */}
                    <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                        <div className="bg-rose-50 px-6 py-4 border-b border-rose-100 flex items-center justify-between">
                            <h4 className="font-bold text-rose-900">Image Dimensions Overview</h4>
                        </div>
                        <div className="p-6 flex flex-col sm:flex-row gap-6 h-full">
                            <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl p-6 shadow-inner flex flex-col justify-center">
                                <h5 className="font-bold text-slate-600 text-sm uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Width Statistics</h5>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center"><span className="text-slate-500 font-medium">Min</span><span className="font-bold font-mono text-slate-700">164</span></div>
                                    <div className="flex justify-between items-center"><span className="text-slate-500 font-medium">Max</span><span className="font-bold font-mono text-slate-700">500</span></div>
                                    <div className="flex justify-between items-center"><span className="text-slate-500 font-medium">Mean</span><span className="font-bold font-mono text-slate-700">459.6</span></div>
                                    <div className="flex justify-between items-center"><span className="text-slate-500 font-medium">Std Dev</span><span className="font-bold font-mono text-slate-700">67.5</span></div>
                                </div>
                            </div>
                            <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl p-6 shadow-inner flex flex-col justify-center">
                                <h5 className="font-bold text-slate-600 text-sm uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Height Statistics</h5>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center"><span className="text-slate-500 font-medium">Min</span><span className="font-bold font-mono text-slate-700">112</span></div>
                                    <div className="flex justify-between items-center"><span className="text-slate-500 font-medium">Max</span><span className="font-bold font-mono text-slate-700">500</span></div>
                                    <div className="flex justify-between items-center"><span className="text-slate-500 font-medium">Mean</span><span className="font-bold font-mono text-slate-700">395.1</span></div>
                                    <div className="flex justify-between items-center"><span className="text-slate-500 font-medium">Std Dev</span><span className="font-bold font-mono text-slate-700">74.4</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RGB Statistics */}
                    <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                        <div className="bg-slate-800 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
                            <h4 className="font-bold text-slate-100">RGB Color Statistics</h4>
                        </div>
                        <div className="p-6 flex flex-col gap-6 justify-center h-full">
                            <div className="bg-white border-2 border-slate-100 rounded-xl overflow-hidden shadow-sm">
                                <table className="w-full text-base text-center">
                                    <thead className="bg-slate-50 text-xs text-slate-500 uppercase font-bold border-b border-slate-200">
                                        <tr>
                                            <th className="px-6 py-4">Channel</th>
                                            <th className="px-6 py-4">Mean</th>
                                            <th className="px-6 py-4">Standard Dev</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="hover:bg-red-50/50 transition-colors group">
                                            <td className="px-6 py-4 font-bold text-red-500">Red (R)</td>
                                            <td className="px-6 py-4 font-mono text-slate-600 group-hover:text-red-700">0.4443</td>
                                            <td className="px-6 py-4 font-mono text-slate-600 group-hover:text-red-700">0.2851</td>
                                        </tr>
                                        <tr className="hover:bg-emerald-50/50 transition-colors group">
                                            <td className="px-6 py-4 font-bold text-emerald-500">Green (G)</td>
                                            <td className="px-6 py-4 font-mono text-slate-600 group-hover:text-emerald-700">0.4213</td>
                                            <td className="px-6 py-4 font-mono text-slate-600 group-hover:text-emerald-700">0.2773</td>
                                        </tr>
                                        <tr className="hover:bg-blue-50/50 transition-colors group">
                                            <td className="px-6 py-4 font-bold text-blue-500">Blue (B)</td>
                                            <td className="px-6 py-4 font-mono text-slate-600 group-hover:text-blue-700">0.3849</td>
                                            <td className="px-6 py-4 font-mono text-slate-600 group-hover:text-blue-700">0.2858</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Width/Height Dist Image */}
                <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-slate-700 mb-2 text-xl w-full text-center border-b border-slate-100 pb-2">Width & Height Distribution</h4>
                    <p className="text-slate-600 text-lg font-medium mb-4 text-center">Mapping horizontal and vertical resolutions across all 31,783 images.</p>
                    <div className="flex justify-center w-full">
                        <img src={distImg} alt="Width/Height Distribution" className="w-full h-auto max-w-4xl rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                    </div>
                </div>

                {/* Visualizations - Diverse, Extreme, Blurry */}
                <div className="grid grid-cols-1 gap-8">
                    {/* Diverse View */}
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-slate-700 mb-4 w-full text-center text-xl border-b border-slate-100 pb-2">Top Diverse Images</h4>
                        <img src={diverseImg} alt="Diverse Images" className="w-full h-auto rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                    </div>
                    {/* Extreme View */}
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-slate-700 mb-4 w-full text-center text-xl border-b border-slate-100 pb-2">Images with Extreme Dimensions</h4>
                        <img src={extremeImg} alt="Extreme Images" className="w-full h-auto rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                    </div>
                    {/* Blurry View */}
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-slate-700 mb-4 w-full text-center text-xl border-b border-slate-100 pb-2">Top 5 Blurry Images</h4>
                        <img src={blurryImg} alt="Blurry Images" className="w-full h-auto rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MultimodalEDA;
