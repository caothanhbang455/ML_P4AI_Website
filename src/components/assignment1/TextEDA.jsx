import React from 'react';
import { 
    Book, 
    MessageSquare, 
    Star, 
    Languages, 
    FileText, 
    Layers, 
    Zap,
    Search,
    BrainCircuit,
    AlertCircle,
    Quote,
    Type,
    BarChart3,
    Activity,
    Lightbulb
} from 'lucide-react';

// Main Distribution & Stopword Images
import ratingDistImg from '../../assets/eda-text/rating_distribution.png';
import ratingPieImg from '../../assets/eda-text/rating_pie_donut.png';
import top10StopwordsImg from '../../assets/eda-text/top10_stopwords.png';
import stopwordWcImg from '../../assets/eda-text/stopwords_wordcloud.png';

// Text Characteristics Images
import wordCountDistImg from '../../assets/eda-text/word_count_distribution.png';
import langDistImg from '../../assets/eda-text/language_distribution.png';
import uniqueWordsRatingImg from '../../assets/eda-text/unique_words_per_rating.png';
import vocabStatsTableImg from '../../assets/eda-text/vocabulary_statistic_by_rating.png';

// TF-IDF & N-Gram Overview Grids
import tfidfTopWordsImg from '../../assets/eda-text/tfidf_top_words.png';
import topBigramsImg from '../../assets/eda-text/top_bigrams.png';
import topWordsGridImg from '../../assets/eda-text/top_words_grid.png';

// Individual TF-IDF & Bigram Charts (img1-10)
import img1 from '../../assets/eda-text/img1.png';
import img2 from '../../assets/eda-text/img2.png';
import img3 from '../../assets/eda-text/img3.png';
import img4 from '../../assets/eda-text/img4.png';
import img5 from '../../assets/eda-text/img5.png';
import img6 from '../../assets/eda-text/img6.png';
import img7 from '../../assets/eda-text/img7.png';
import img8 from '../../assets/eda-text/img8.png';
import img9 from '../../assets/eda-text/img9.png';
import img10 from '../../assets/eda-text/img10.png';

// Semantic Analysis Images
import cosineHeatmapImg from '../../assets/eda-text/cosine_similarity_heatmap.png';
import posWcImg from '../../assets/eda-text/positive_wordcloud.png';
import negWcImg from '../../assets/eda-text/negative_wordcloud.png';

const TextEDA = () => {
    const dataDictionary = [
        { name: 'asin', type: 'Categorical', meaning: 'Unique product ID (Amazon Standard Identification Number)' },
        { name: 'overall / rating', type: 'Numerical', meaning: 'Product rating from 1 to 5 stars' },
        { name: 'reviewText', type: 'Text', meaning: 'Detailed content of the customer review' },
        { name: 'summary', type: 'Text', meaning: 'Brief summary of the review' },
        { name: 'reviewerID', type: 'Categorical', meaning: 'Unique ID of the reviewer' },
        { name: 'sentiment', type: 'Target', meaning: 'Sentiment label (1: Positive if Rating >= 3, 0: Negative)' },
    ];

    const vocabStats = [
        { rating: 1, total: '93,889', unique: '13,708', reviews: '1,999' },
        { rating: 2, total: '112,807', unique: '15,468', reviews: '1,998' },
        { rating: 3, total: '117,342', unique: '15,986', reviews: '2,000' },
        { rating: 4, total: '179,323', unique: '21,003', reviews: '2,997' },
        { rating: 5, total: '146,496', unique: '18,258', reviews: '2,998' },
    ];

    const missingValues = [
        { feature: 'asin', count: 0 },
        { feature: 'helpful', count: 0 },
        { feature: 'rating', count: 0 },
        { feature: 'reviewText', count: 0 },
        { feature: 'reviewerName', count: 38 },
        { feature: 'summary', count: 2 },
    ];

    const sampleReviews = [
        { rating: 1, text: 'I received a copy of book to review. "A secret society. A fanatical cult. A telepathic girl." are not my cup of tea. This was not what I expected and I really don\'t need another continuational book. I still haven\'t read the Catching Fire from the Hunger Games. I don\'t get into all this sci-fi stuff. Just not my cup of tea. Sorry.' },
        { rating: 2, text: 'This has the makings of a good story... unfortunately it disappoints.it tells of two alpha were who are members of unfriendly packs... they have grown up together with one being gay and the other straight... then when it seems they are about to get together something happens and the story is told in alternating chapters of past and present.. the story and the couple fall apart in the switch of time and lack of a sustainable reason for the break.' },
        { rating: 3, text: `Jace Rankin may be short, but he's nothing to mess with, as the man who was just hauled out of the saloon by the undertaker knows now. He's a famous bounty hunter in Oregon in the 1890s who, when he shot the man in the saloon, just finished a years long quest to avenge his sister's murder and is now trying to figure out what to do next. When the snotty-nosed farm boy he just rescued from a gang of bullies offers him money to kill a man who forced him off his ranch, he reluctantly agrees to bring the man to justice, but not to kill him outright. But, first he needs to tell his sister's widower the news.Kyla "Kyle" Springer Bailey has been riding the trails and sleeping on the ground for the past month while trying to find Jace. She wants revenge on the man who killed her husband and took her ranch, amongst other crimes, and she's not so keen on the detour Jace wants to take. But she realizes she's out of options, so she hides behind her boy persona as best she can and tries to keep pace. When a confrontation along the way gets her shot and Jace discovers that Kyle's a Kyla, she has to come clean about the *whole* reason she needs this scoundrel dead and hope he'll still help her.The book has its share of touching moments and slow-blooming romance. Kyla, we find out, has good reason to fear men and hide behind a boy's persona. Watching Jace slowly pull her out of that shell and help her conquer her fears was endearing. Her pain was real and deeply-rooted and didn't just disappear in the face of his sexiness. Neither did his understandable aversion to marriage magically disappear after a round of nookie. Why would a man who's drifted from town to town for his entire adult life - a man who's killed his fair share of men along the way - feel he'd make a good husband or father? They're both the walking wounded and in a unique position to help each other, they just need time to realize it.However, while it was packed to bursting with my favorite themes - Old West setting, a heroine passing as male, a morally ambiguous hero, wounded souls, road romance, the kitchen sink - there was a certain...distance in the writing that kept me from getting carried away. Both characters were distinct and fully-formed and I couldn't point to any glaring instances of bland telling or anything, I just never felt really invested. I enjoyed it quite a bit, as it was an exciting trip, but I was watching them from far away. I definitely wasn't on the run alongside them. Add on a hasty and too tidy ending, and the book left me feeling a bit less than completely satisfied.I enjoyed the book, but I can't say it was above average. I'd still read another book by the author.Note: I read the re-released ebook version and noticed there were a lot of formatting errors and missing words. I had to mentally edit as I read for some sentences to make sense. It wasn't too too bad, but it was a little distracting.` },
        { rating: 4, text: 'I did not expect this type of book to be in library was pleased to find it price was right' },
        { rating: 5, text: 'Great short read. I didn\'t want to put it down so I read it all in one sitting. The sex scenes were great between the two males and one female character...a bit surprising - I never thought you could do that! I learned something new and really enjoyed reading this book! This is a great way to get all hot and bothered and take advantage of your significant other(s)!' },
    ];

    const stopwordList = "the, and, a, to, i, of, is, this, it, was, in, that, for, but, with, her, not, have, as, she, he, you, be, on, are, his, just, so, they, at, my, more, all, an, from, about, if, what, had, there, has, very, by, when, or, out, me, who, were, some";

    return (
        <div className="flex flex-col gap-16 w-full animate-in fade-in duration-700 h-full p-6">
            {/* --- HEADER --- */}
            <div className="flex flex-col gap-4 group cursor-default">
                <h2 className="text-4xl font-black text-indigo-600 tracking-tight flex items-center gap-4 group-hover:text-indigo-700 transition-colors">
                    <Type size={40} /> Textual Data Exploration
                </h2>
                <p className="text-slate-500 text-xl leading-relaxed max-w-5xl">
                    In-depth NLP analysis of the <strong>Amazon Kindle Book Reviews</strong> dataset. This report focuses on text preprocessing, vocabulary distribution, and feature extraction (TF-IDF/N-Grams) for Sentiment Analysis.
                </p>
            </div>

            {/* --- SECTION 1: DATASET OVERVIEW --- */}
            <section className="flex flex-col gap-8">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-indigo-100 p-2 rounded-xl shadow-sm"><Book className="text-indigo-600" size={24} /></div>
                        1. Dataset Overview & Samples
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="bg-blue-50 p-4 rounded-2xl text-blue-500"><MessageSquare size={28} /></div>
                        <div><p className="text-xs font-bold text-slate-400 uppercase">Samples</p><p className="text-2xl font-black text-slate-800">12,000</p></div>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="bg-amber-50 p-4 rounded-2xl text-amber-500"><Star size={28} /></div>
                        <div><p className="text-xs font-bold text-slate-400 uppercase">Avg Words</p><p className="text-2xl font-black text-slate-800">109.24</p></div>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-500"><AlertCircle size={28} /></div>
                        <div><p className="text-xs font-bold text-slate-400 uppercase">Missing Data</p><p className="text-2xl font-black text-rose-600">40 Cells</p></div>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="bg-purple-50 p-4 rounded-2xl text-purple-500"><Layers size={28} /></div>
                        <div><p className="text-xs font-bold text-slate-400 uppercase">Unique Words</p><p className="text-2xl font-black text-slate-800">18,285</p></div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-[3rem] p-10 border border-blue-100 shadow-inner">
                    <h4 className="text-2xl font-bold text-blue-900 mb-8 italic flex items-center gap-3">📝 Review Samples by Rating</h4>
                    <div className="flex flex-col gap-6">
                        {sampleReviews.map((sample, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
                                <h5 className="font-black text-blue-700 mb-2 uppercase text-xs flex items-center gap-2">
                                    <Star size={14} className="text-amber-400 fill-amber-400"/> Rating {sample.rating}
                                </h5>
                                <p className="text-slate-600 italic border-l-4 border-blue-100 pl-4">"{sample.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* KEY INSIGHTS - S1 */}
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 className="text-indigo-900 font-bold text-lg mb-3 flex items-center gap-2">
                        <Lightbulb size={22} className="text-indigo-600" /> Key Insights: Dataset Overview
                    </h4>
                    <ul className="list-disc list-inside text-indigo-800/80 space-y-2 ml-2 font-medium">
                        <li>The dataset size (12,000 samples) is optimal for training robust machine learning and NLP models.</li>
                        <li>Missing data is negligible (only found in non-essential columns like <code className="bg-white px-1 py-0.5 rounded">reviewerName</code> and <code className="bg-white px-1 py-0.5 rounded">summary</code>). The primary text column (<code className="bg-white px-1 py-0.5 rounded">reviewText</code>) is 100% complete.</li>
                        <li>The average length of a review (~109 words) is significantly long, providing rich contextual data for feature extraction.</li>
                    </ul>
                </div>
            </section>

            {/* --- SECTION 2: RATING DISTRIBUTIONS --- */}
            <section className="flex flex-col gap-8">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-amber-100 p-2 rounded-xl shadow-sm"><Zap className="text-amber-600" size={24} /></div>
                        2. Distribution & Labeling
                    </h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-white p-8 border border-slate-200 rounded-[2.5rem] shadow-sm flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <h4 className="font-bold text-slate-700 mb-6 text-center border-b w-full pb-2">Frequency Distribution</h4>
                        <img src={ratingDistImg} alt="Rating Distribution" className="w-full max-w-md h-auto rounded-xl hover:scale-[1.03] transition-transform cursor-crosshair" />
                    </div>
                    <div className="bg-white p-8 border border-slate-200 rounded-[2.5rem] shadow-sm flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <h4 className="font-bold text-slate-700 mb-6 text-center border-b w-full pb-2">Rating Proportion</h4>
                        <img src={ratingPieImg} alt="Rating Pie" className="w-full max-w-md h-auto rounded-xl hover:scale-[1.03] transition-transform cursor-crosshair" />
                    </div>
                </div>

                {/* KEY INSIGHTS - S2 */}
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 className="text-amber-900 font-bold text-lg mb-3 flex items-center gap-2">
                        <Lightbulb size={22} className="text-amber-600" /> Key Insights: Target Distribution
                    </h4>
                    <ul className="list-disc list-inside text-amber-800/80 space-y-2 ml-2 font-medium">
                        <li>The rating distribution exhibits a strong <strong>right-skew</strong> (imbalanced class problem), indicating users are highly likely to give 4 or 5 stars.</li>
                        <li><strong>Re-labeling Strategy:</strong> Merging ratings &ge; 3 into <span className="text-emerald-600 font-bold">Positive</span> and &lt; 3 into <span className="text-rose-600 font-bold">Negative</span> simplifies the task from Multi-class to Binary Classification, which significantly mitigates the imbalance and improves decision boundaries.</li>
                    </ul>
                </div>
            </section>

            {/* --- SECTION 3: STOPWORD ANALYSIS --- */}
            <section className="flex flex-col gap-8">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-emerald-100 p-2 rounded-xl shadow-sm"><Languages className="text-emerald-600" size={24} /></div>
                        3. Stopword Analysis
                    </h3>
                </div>
                <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 shadow-inner">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="flex flex-col gap-6 items-center">
                            <h4 className="font-bold text-slate-700 mb-2">Top 10 Stopwords</h4>
                            <img src={top10StopwordsImg} alt="Stopwords Bar" className="w-full h-auto rounded-2xl bg-white p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-crosshair" />
                        </div>
                        <div className="flex flex-col gap-6 items-center">
                            <h4 className="font-bold text-slate-700 mb-2">Stopwords WordCloud</h4>
                            <img src={stopwordWcImg} alt="Stopwords WC" className="w-full h-auto rounded-2xl bg-white p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-crosshair" />
                        </div>
                    </div>
                    <div className="mt-10 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-wrap gap-6 justify-around text-center hover:shadow-md transition-shadow">
                        <div>
                            <p className="text-xs uppercase font-bold text-slate-400">Total Words</p>
                            <p className="text-xl font-black text-slate-700">1,310,842</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase font-bold text-slate-400">Total Stopwords</p>
                            <p className="text-xl font-black text-rose-500">644,325</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase font-bold text-slate-400">Percentage</p>
                            <p className="text-xl font-black text-emerald-500">49.15%</p>
                        </div>
                    </div>
                </div>

                {/* KEY INSIGHTS - S3 */}
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 className="text-emerald-900 font-bold text-lg mb-3 flex items-center gap-2">
                        <Lightbulb size={22} className="text-emerald-600" /> Key Insights: Stopwords
                    </h4>
                    <ul className="list-disc list-inside text-emerald-800/80 space-y-2 ml-2 font-medium">
                        <li>A massive <strong>49.15%</strong> of the entire text corpus consists of non-informative stopwords (e.g., 'the', 'and', 'a', 'to').</li>
                        <li>While highly frequent, these words carry zero sentiment weight and obscure meaningful patterns.</li>
                        <li><strong>Action Taken:</strong> Removing stopwords is a crucial preprocessing step. It effectively halves the Vector Space Dimensionality, speeding up model training and drastically reducing statistical noise.</li>
                    </ul>
                </div>
            </section>

            {/* --- SECTION 4: TEXT CHARACTERISTICS --- */}
            <section className="flex flex-col gap-8">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-blue-100 p-2 rounded-xl shadow-sm"><Activity className="text-blue-600" size={24} /></div>
                        4. Review Length & Language
                    </h3>
                </div>
                <div className="bg-white p-10 border border-slate-100 rounded-[3rem] shadow-sm flex flex-col gap-12 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col items-center">
                        <h4 className="font-bold text-slate-700 mb-4 text-xl border-b border-slate-100 w-full text-center pb-2">Word Count Distribution</h4>
                        <img src={wordCountDistImg} alt="Word Count" className="w-full max-w-4xl h-auto hover:scale-[1.02] transition-transform cursor-crosshair" />
                    </div>
                    <div className="flex flex-col items-center">
                        <h4 className="font-bold text-slate-700 mb-4 text-xl border-b border-slate-100 w-full text-center pb-2">Language Detection Results</h4>
                        <img src={langDistImg} alt="Language" className="w-full max-w-xl h-auto hover:scale-[1.02] transition-transform cursor-crosshair" />
                    </div>
                </div>

                {/* KEY INSIGHTS - S4 */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 className="text-blue-900 font-bold text-lg mb-3 flex items-center gap-2">
                        <Lightbulb size={22} className="text-blue-600" /> Key Insights: Text Structure
                    </h4>
                    <ul className="list-disc list-inside text-blue-800/80 space-y-2 ml-2 font-medium">
                        <li>The Word Count Distribution is <strong>heavily right-skewed</strong>. While most reviews are concise, there is a long tail of highly detailed, multi-paragraph reviews (outliers).</li>
                        <li>Language detection algorithms confirmed the dataset is <strong>100% English</strong>. This guarantees that standard English NLP dictionaries (like NLTK or SpaCy) will operate perfectly without needing multi-lingual pipelines.</li>
                    </ul>
                </div>
            </section>

            {/* --- SECTION 5: VOCABULARY STATISTICS --- */}
            <section className="flex flex-col gap-8">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-purple-100 p-2 rounded-xl shadow-sm"><BarChart3 className="text-purple-600" size={24} /></div>
                        5. Vocabulary Statistics & Top Words
                    </h3>
                </div>
                
                {/* Tables & Bar Chart */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                    <div className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden border border-slate-100">
                        <img src={vocabStatsTableImg} alt="Vocab Table" className="w-full h-auto cursor-crosshair" />
                    </div>
                    <div className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden border border-slate-100">
                        <img src={uniqueWordsRatingImg} alt="Unique Words" className="w-full h-auto cursor-crosshair" />
                    </div>
                </div>

                {/* Overall Top Words Grid */}
                <div className="bg-white p-8 border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-all duration-300 mt-4 flex flex-col items-center">
                    <h4 className="font-bold text-slate-700 mb-6 text-center text-xl border-b w-full pb-2">Overall Top Words by Frequency (Before TF-IDF)</h4>
                    <img src={topWordsGridImg} alt="Top Words Grid" className="w-full h-auto rounded-xl hover:scale-[1.01] transition-transform cursor-crosshair" />
                </div>

                {/* KEY INSIGHTS - S5 */}
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 className="text-purple-900 font-bold text-lg mb-3 flex items-center gap-2">
                        <Lightbulb size={22} className="text-purple-600" /> Key Insights: Vocabulary Richness
                    </h4>
                    <ul className="list-disc list-inside text-purple-800/80 space-y-2 ml-2 font-medium">
                        <li><strong>Rating 4</strong> holds the highest vocabulary diversity (21,003 unique words). This suggests 4-star reviewers tend to write more balanced, analytical feedback combining both praises and minor criticisms.</li>
                        <li>Looking at the `Overall Top Words Grid`, basic nouns like "book", "story", and "read" appear frequently across <strong>all</strong> ratings. Because they appear everywhere, they offer poor distinguishing power for predictive models.</li>
                    </ul>
                </div>
            </section>

            {/* --- SECTION 6: UNIGRAM TF-IDF (ONE PER ROW) --- */}
            <section className="flex flex-col gap-8">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-indigo-100 p-2 rounded-xl shadow-sm"><Search className="text-indigo-600" size={24} /></div>
                        6. Unigram TF-IDF Analysis
                    </h3>
                </div>

                {/* Grid Overview */}
                <div className="bg-white p-8 border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center">
                    <h4 className="font-bold text-slate-700 mb-6 text-center text-xl border-b w-full pb-2">TF-IDF Overview Grid</h4>
                    <img src={tfidfTopWordsImg} alt="TFIDF Grid" className="w-full h-auto rounded-xl hover:scale-[1.01] transition-transform cursor-crosshair" />
                </div>

                {/* Detailed 1 by 1 */}
                <div className="bg-slate-50 p-8 border border-slate-200 rounded-[2rem] shadow-inner mt-4">
                    <div className="flex flex-col items-center gap-10 w-full">
                        {[img1, img2, img3, img4, img5].map((img, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 w-full max-w-4xl flex flex-col items-center">
                                <span className="text-sm font-bold text-indigo-600 mb-4 uppercase tracking-widest bg-indigo-50 px-6 py-1.5 rounded-full shadow-sm">
                                    Rating {idx + 1}
                                </span>
                                <div className="overflow-hidden w-full flex justify-center">
                                    <img src={img} alt={`Unigram R${idx+1}`} className="w-full max-w-3xl h-auto hover:scale-[1.03] transition-transform duration-500 cursor-crosshair" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* KEY INSIGHTS - S6 */}
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 className="text-indigo-900 font-bold text-lg mb-3 flex items-center gap-2">
                        <Lightbulb size={22} className="text-indigo-600" /> Key Insights: TF-IDF Unigrams
                    </h4>
                    <ul className="list-disc list-inside text-indigo-800/80 space-y-2 ml-2 font-medium">
                        <li><strong>TF-IDF Magic:</strong> By applying Term Frequency-Inverse Document Frequency, generic words ("book", "story") are penalized, allowing unique sentiment-bearing keywords to surface.</li>
                        <li><strong>Negative Signatures (Ratings 1-2):</strong> Dominated by strong critical adjectives and verbs such as "disappointing", "boring", "waste", and "bad".</li>
                        <li><strong>Positive Signatures (Ratings 4-5):</strong> Highlighted by enthusiastic affirmations like "great", "love", "highly", and "recommend".</li>
                    </ul>
                </div>
            </section>

            {/* --- SECTION 7: BIGRAM TF-IDF (ONE PER ROW) --- */}
            <section className="flex flex-col gap-8">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-rose-100 p-2 rounded-xl shadow-sm"><Layers className="text-rose-600" size={24} /></div>
                        7. Bigram TF-IDF Analysis
                    </h3>
                </div>

                {/* Grid Overview */}
                <div className="bg-white p-8 border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center">
                    <h4 className="font-bold text-slate-700 mb-6 text-center text-xl border-b w-full pb-2">Bigrams Overview Grid</h4>
                    <img src={topBigramsImg} alt="Bigrams Grid" className="w-full h-auto rounded-xl hover:scale-[1.01] transition-transform cursor-crosshair" />
                </div>

                {/* Detailed 1 by 1 */}
                <div className="bg-slate-50 p-8 border border-slate-200 rounded-[2rem] shadow-inner mt-4">
                    <div className="flex flex-col items-center gap-10 w-full">
                        {[img6, img7, img8, img9, img10].map((img, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-rose-200 transition-all duration-300 w-full max-w-4xl flex flex-col items-center">
                                <span className="text-sm font-bold text-rose-600 mb-4 uppercase tracking-widest bg-rose-50 px-6 py-1.5 rounded-full shadow-sm">
                                    Rating {idx + 1}
                                </span>
                                <div className="overflow-hidden w-full flex justify-center">
                                    <img src={img} alt={`Bigram R${idx+1}`} className="w-full max-w-3xl h-auto hover:scale-[1.03] transition-transform duration-500 cursor-crosshair" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* KEY INSIGHTS - S7 */}
                <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 className="text-rose-900 font-bold text-lg mb-3 flex items-center gap-2">
                        <Lightbulb size={22} className="text-rose-600" /> Key Insights: N-Gram Context
                    </h4>
                    <ul className="list-disc list-inside text-rose-800/80 space-y-2 ml-2 font-medium">
                        <li>Bigrams naturally capture <strong>context</strong> that single words lose. For instance, the unigram "good" might appear in a negative review ("not good"), but bigrams preserve the modifier.</li>
                        <li>Extracted phrases like "waste money", "could not" (Low Ratings) versus "highly recommend", "great read" (High Ratings) act as the most powerful discriminative features for the logistic regression model.</li>
                    </ul>
                </div>
            </section>

            {/* --- SECTION 8: SEMANTIC ANALYSIS --- */}
            <section className="flex flex-col gap-8">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-cyan-100 p-2 rounded-xl shadow-sm"><BrainCircuit className="text-cyan-600" size={24} /></div>
                        8. Semantic Similarity & Clouds
                    </h3>
                </div>
                
                <div className="bg-white p-10 border border-slate-200 rounded-[3rem] shadow-sm flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <h4 className="font-bold text-slate-700 mb-6 text-xl text-center border-b w-full pb-2">Average Cosine Similarity Heatmap</h4>
                    <img src={cosineHeatmapImg} alt="Heatmap" className="w-full max-w-2xl h-auto hover:scale-[1.03] transition-transform cursor-crosshair" />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
                    <div className="bg-gradient-to-b from-emerald-50 to-white p-8 border border-emerald-100 rounded-[2.5rem] flex flex-col items-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <h4 className="font-black text-emerald-800 mb-6 uppercase tracking-wider text-lg">Positive WordCloud</h4>
                        <img src={posWcImg} alt="Positive" className="w-full max-w-sm h-auto rounded-3xl bg-white p-4 shadow-inner hover:scale-[1.05] transition-transform cursor-crosshair" />
                    </div>
                    <div className="bg-gradient-to-b from-rose-50 to-white p-8 border border-rose-100 rounded-[2.5rem] flex flex-col items-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <h4 className="font-black text-rose-800 mb-6 uppercase tracking-wider text-lg">Negative WordCloud</h4>
                        <img src={negWcImg} alt="Negative" className="w-full max-w-sm h-auto rounded-3xl bg-white p-4 shadow-inner hover:scale-[1.05] transition-transform cursor-crosshair" />
                    </div>
                </div>

                {/* KEY INSIGHTS - S8 */}
                <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 className="text-cyan-900 font-bold text-lg mb-3 flex items-center gap-2">
                        <Lightbulb size={22} className="text-cyan-600" /> Key Insights: Semantic Distance
                    </h4>
                    <ul className="list-disc list-inside text-cyan-800/80 space-y-2 ml-2 font-medium">
                        <li><strong>Cosine Similarity Heatmap:</strong> This measures the vector distance between ratings. Noticeably, adjacent ratings (e.g., 4 and 5) share high linguistic similarity, while polarizing ratings (1 vs 5) show the lowest similarity scores.</li>
                        <li><strong>WordClouds:</strong> Visualizing by sentiment label visually proves that the re-labeling strategy successfully partitioned the dataset into two highly distinct semantic profiles, priming it perfectly for binary classification.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default TextEDA;