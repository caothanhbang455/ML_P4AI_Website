import React from 'react';
import { Users, LayoutList, Hash, Target, Info, Database, AlertTriangle, BarChart2, PieChart, Network, Crosshair, Activity, Lightbulb } from 'lucide-react';
import missingValuesImg from '../../assets/eda-tabular/tabular-missing-values.png';
import duplicateValuesImg from '../../assets/eda-tabular/tabular-duplicate-values.png';
import pclassDistImg from '../../assets/eda-tabular/tabular_pclass_distribution.png';
import ageDistImg from '../../assets/eda-tabular/tabular_age_distribution.png';
import sibspDistImg from '../../assets/eda-tabular/tabular_sibsp_distribution.png';
import parchDistImg from '../../assets/eda-tabular/tabular_parch_distribution.png';
import fareDistImg from '../../assets/eda-tabular/tabular_fare_distribution.png';
import categoricalDistImg from '../../assets/eda-tabular/tabular_categorical_distribution.png';
import ticketPrefixDistImg from '../../assets/eda-tabular/tabular_ticketprefix_distribution.png';
import correlationHeatmapImg from '../../assets/eda-tabular/tabular_correlation_heatmap.png';
import targetDistImg from '../../assets/eda-tabular/tabular_target_distribution.png';
import targetCorrImg from '../../assets/eda-tabular/tabular_target_correlation.png';
import catSurvivalRateImg from '../../assets/eda-tabular/tabular_categorical_survivalrate.png';
import numDistByTargetImg from '../../assets/eda-tabular/tabular_numerical_distribution_by_target.png';
import outlierBoxplotImg from '../../assets/eda-tabular/tabular_boxplot.png';
import skewnessImg from '../../assets/eda-tabular/tabular_skewness.png';
import kurtosisImg from '../../assets/eda-tabular/tabular_kurtosis.png';

const TabularEDA = () => {
    const numericalStats = [
        { feature: 'Pclass', count: 891, mean: '2.31', median: '3.00', std: '0.84', min: '1.00', max: '3.00' },
        { feature: 'Age', count: 714, mean: '29.70', median: '28.00', std: '14.53', min: '0.42', max: '80.00' },
        { feature: 'SibSp', count: 891, mean: '0.52', median: '0.00', std: '1.10', min: '0.00', max: '8.00' },
        { feature: 'Parch', count: 891, mean: '0.38', median: '0.00', std: '0.81', min: '0.00', max: '6.00' },
        { feature: 'Fare', count: 891, mean: '32.20', median: '14.45', std: '49.69', min: '0.00', max: '512.33' },
    ];

    const outlierStats = [
        { feature: 'Pclass', lower: '0.50', upper: '4.50', q1: '2.00', q3: '3.00', iqr: '1.00', skewness: '-0.63', kurtosis: '-1.28', count: 0, percent: '0.00', severity: '🟢 Low' },
        { feature: 'Age', lower: '-6.69', upper: '64.81', q1: '20.12', q3: '38.00', iqr: '17.88', skewness: '0.39', kurtosis: '0.18', count: 11, percent: '1.54', severity: '🟡 Medium' },
        { feature: 'SibSp', lower: '-1.50', upper: '2.50', q1: '0.00', q3: '1.00', iqr: '1.00', skewness: '3.70', kurtosis: '17.88', count: 46, percent: '5.16', severity: '🔴 High' },
        { feature: 'Parch', lower: '0.00', upper: '0.00', q1: '0.00', q3: '0.00', iqr: '0.00', skewness: '2.75', kurtosis: '9.78', count: 213, percent: '23.91', severity: '🔴 High' },
        { feature: 'Fare', lower: '-26.72', upper: '65.63', q1: '7.91', q3: '31.00', iqr: '23.09', skewness: '4.79', kurtosis: '33.40', count: 116, percent: '13.02', severity: '🔴 High' },
    ];

    const targetCorrelationStats = [
        { feature: 'Pclass', pbR: '-0.3385', spearmanR: '-0.3397', absR: '0.3385', pValue: '0.0000', significant: '✅' },
        { feature: 'Fare', pbR: '0.2573', spearmanR: '0.3237', absR: '0.2573', pValue: '0.0000', significant: '✅' },
        { feature: 'Parch', pbR: '0.0816', spearmanR: '0.1383', absR: '0.0816', pValue: '0.0148', significant: '✅' },
        { feature: 'Age', pbR: '-0.0772', spearmanR: '-0.0526', absR: '0.0772', pValue: '0.0391', significant: '✅' },
        { feature: 'SibSp', pbR: '-0.0353', spearmanR: '0.0889', absR: '0.0353', pValue: '0.2922', significant: '❌' },
    ];

    const correlationStats = [
        { featureA: 'Pclass', featureB: 'Fare', r: '-0.5495', absR: '0.5495', strength: '🟡 Moderate' },
        { featureA: 'SibSp', featureB: 'Parch', r: '0.4148', absR: '0.4148', strength: '🟡 Moderate' },
        { featureA: 'Pclass', featureB: 'Age', r: '-0.3692', absR: '0.3692', strength: '🟢 Weak' },
        { featureA: 'Age', featureB: 'SibSp', r: '-0.3082', absR: '0.3082', strength: '🟢 Weak' },
        { featureA: 'Parch', featureB: 'Fare', r: '0.2162', absR: '0.2162', strength: '🟢 Weak' },
        { featureA: 'Age', featureB: 'Parch', r: '-0.1891', absR: '0.1891', strength: '🟣 Negligible' },
        { featureA: 'SibSp', featureB: 'Fare', r: '0.1597', absR: '0.1597', strength: '🟣 Negligible' },
        { featureA: 'Age', featureB: 'Fare', r: '0.0961', absR: '0.0961', strength: '🟣 Negligible' },
        { featureA: 'Pclass', featureB: 'SibSp', r: '0.0831', absR: '0.0831', strength: '🟣 Negligible' },
        { featureA: 'Pclass', featureB: 'Parch', r: '0.0184', absR: '0.0184', strength: '🟣 Negligible' },
    ];

    const categoricalStats = [
        { feature: 'Name', unique: 891, cardinality: '🔴 High (ID-like)', mode: '"Abbing, Mr. Anthony"', modeFreq: 1, modePercent: '0.11', missingPercent: '0.00' },
        { feature: 'Sex', unique: 2, cardinality: '🟢 Binary', mode: 'male', modeFreq: 577, modePercent: '64.76', missingPercent: '0.00' },
        { feature: 'Ticket', unique: 681, cardinality: '🔴 High (ID-like)', mode: '1601', modeFreq: 7, modePercent: '0.79', missingPercent: '0.00' },
        { feature: 'Cabin', unique: 147, cardinality: '🟠 Medium', mode: 'B96 B98', modeFreq: 4, modePercent: '1.96', missingPercent: '77.10' },
        { feature: 'Embarked', unique: 3, cardinality: '🟡 Low', mode: 'S', modeFreq: 644, modePercent: '72.44', missingPercent: '0.22' },
    ];

    const missingData = [
        { feature: 'Cabin', count: 687, percent: '77.10', severity: '🔴 Critical' },
        { feature: 'Age', count: 177, percent: '19.87', severity: '🟡 Medium' },
        { feature: 'Embarked', count: 2, percent: '0.22', severity: '🟢 Low' },
    ];

    const deadSamples = [
        { index: 312, passengerId: 313, survived: 0, pclass: 2, name: 'Lahtinen, Mrs. William (Anna Sylfven)', sex: 'female', age: '26.0', sibsp: 1, parch: 1, ticket: '250651', fare: '26.0000', cabin: 'NaN', embarked: 'S', ticketPrefix: 'NUMERIC', ageGroup: 'Adult (19-35)' },
        { index: 124, passengerId: 125, survived: 0, pclass: 1, name: 'White, Mr. Percival Wayland', sex: 'male', age: '54.0', sibsp: 0, parch: 1, ticket: '35281', fare: '77.2875', cabin: 'D26', embarked: 'S', ticketPrefix: 'NUMERIC', ageGroup: 'Middle-aged (36-60)' },
        { index: 783, passengerId: 784, survived: 0, pclass: 3, name: 'Johnston, Mr. Andrew G', sex: 'male', age: 'NaN', sibsp: 1, parch: 2, ticket: 'W./C. 6607', fare: '23.4500', cabin: 'NaN', embarked: 'S', ticketPrefix: 'W./C.', ageGroup: 'NaN' },
        { index: 167, passengerId: 168, survived: 0, pclass: 3, name: 'Skoog, Mrs. William (Anna Bernhardina Karlsson)', sex: 'female', age: '45.0', sibsp: 1, parch: 4, ticket: '347088', fare: '27.9000', cabin: 'NaN', embarked: 'S', ticketPrefix: 'NUMERIC', ageGroup: 'Middle-aged (36-60)' },
        { index: 772, passengerId: 773, survived: 0, pclass: 2, name: 'Mack, Mrs. (Mary)', sex: 'female', age: '57.0', sibsp: 0, parch: 0, ticket: 'S.O./P.P. 3', fare: '10.5000', cabin: 'E77', embarked: 'S', ticketPrefix: 'S.O./P.P.', ageGroup: 'Middle-aged (36-60)' },
        { index: 798, passengerId: 799, survived: 0, pclass: 3, name: 'Ibrahim Shawah, Mr. Yousseff', sex: 'male', age: '30.0', sibsp: 0, parch: 0, ticket: '2685', fare: '7.2292', cabin: 'NaN', embarked: 'C', ticketPrefix: 'NUMERIC', ageGroup: 'Adult (19-35)' },
        { index: 132, passengerId: 133, survived: 0, pclass: 3, name: 'Robins, Mrs. Alexander A (Grace Charity Laury)', sex: 'female', age: '47.0', sibsp: 1, parch: 0, ticket: 'A/5. 3337', fare: '14.5000', cabin: 'NaN', embarked: 'S', ticketPrefix: 'A/5.', ageGroup: 'Middle-aged (36-60)' },
        { index: 606, passengerId: 607, survived: 0, pclass: 3, name: 'Karaic, Mr. Milan', sex: 'male', age: '30.0', sibsp: 0, parch: 0, ticket: '349246', fare: '7.8958', cabin: 'NaN', embarked: 'S', ticketPrefix: 'NUMERIC', ageGroup: 'Adult (19-35)' },
        { index: 201, passengerId: 202, survived: 0, pclass: 3, name: 'Sage, Mr. Frederick', sex: 'male', age: 'NaN', sibsp: 8, parch: 2, ticket: 'CA. 2343', fare: '69.5500', cabin: 'NaN', embarked: 'S', ticketPrefix: 'CA.', ageGroup: 'NaN' },
        { index: 601, passengerId: 602, survived: 0, pclass: 3, name: 'Slabenoff, Mr. Petco', sex: 'male', age: 'NaN', sibsp: 0, parch: 0, ticket: '349214', fare: '7.8958', cabin: 'NaN', embarked: 'S', ticketPrefix: 'NUMERIC', ageGroup: 'NaN' },
    ];

    const survivedSamples = [
        { index: 604, passengerId: 605, survived: 1, pclass: 1, name: 'Homer, Mr. Harry ("Mr E Haven")', sex: 'male', age: '35.0', sibsp: 0, parch: 0, ticket: '111426', fare: '26.5500', cabin: 'NaN', embarked: 'C', ticketPrefix: 'NUMERIC', ageGroup: 'Adult (19-35)' },
        { index: 311, passengerId: 312, survived: 1, pclass: 1, name: 'Ryerson, Miss. Emily Borie', sex: 'female', age: '18.0', sibsp: 2, parch: 2, ticket: 'PC 17608', fare: '262.3750', cabin: 'B57 B59 B63 B66', embarked: 'C', ticketPrefix: 'PC', ageGroup: 'Teen (13-18)' },
        { index: 307, passengerId: 308, survived: 1, pclass: 1, name: 'Penasco y Castellana, Mrs. Victor de Satode (M...', sex: 'female', age: '17.0', sibsp: 1, parch: 0, ticket: 'PC 17758', fare: '108.9000', cabin: 'C65', embarked: 'C', ticketPrefix: 'PC', ageGroup: 'Teen (13-18)' },
        { index: 107, passengerId: 108, survived: 1, pclass: 3, name: 'Moss, Mr. Albert Johan', sex: 'male', age: 'NaN', sibsp: 0, parch: 0, ticket: '312991', fare: '7.7750', cabin: 'NaN', embarked: 'S', ticketPrefix: 'NUMERIC', ageGroup: 'NaN' },
        { index: 329, passengerId: 330, survived: 1, pclass: 1, name: 'Hippach, Miss. Jean Gertrude', sex: 'female', age: '16.0', sibsp: 0, parch: 1, ticket: '111361', fare: '57.9792', cabin: 'B18', embarked: 'C', ticketPrefix: 'NUMERIC', ageGroup: 'Teen (13-18)' },
        { index: 708, passengerId: 709, survived: 1, pclass: 1, name: 'Cleaver, Miss. Alice', sex: 'female', age: '22.0', sibsp: 0, parch: 0, ticket: '113781', fare: '151.5500', cabin: 'NaN', embarked: 'S', ticketPrefix: 'NUMERIC', ageGroup: 'Adult (19-35)' },
        { index: 458, passengerId: 459, survived: 1, pclass: 2, name: 'Toomey, Miss. Ellen', sex: 'female', age: '50.0', sibsp: 0, parch: 0, ticket: 'F.C.C. 13531', fare: '10.5000', cabin: 'NaN', embarked: 'S', ticketPrefix: 'F.C.C.', ageGroup: 'Middle-aged (36-60)' },
        { index: 453, passengerId: 454, survived: 1, pclass: 1, name: 'Goldenberg, Mr. Samuel L', sex: 'male', age: '49.0', sibsp: 1, parch: 0, ticket: '17453', fare: '89.1042', cabin: 'C92', embarked: 'C', ticketPrefix: 'NUMERIC', ageGroup: 'Middle-aged (36-60)' },
        { index: 880, passengerId: 881, survived: 1, pclass: 2, name: 'Shelley, Mrs. William (Imanita Parrish Hall)', sex: 'female', age: '25.0', sibsp: 0, parch: 1, ticket: '230433', fare: '26.0000', cabin: 'NaN', embarked: 'S', ticketPrefix: 'NUMERIC', ageGroup: 'Adult (19-35)' },
        { index: 56, passengerId: 57, survived: 1, pclass: 2, name: 'Rugg, Miss. Emily', sex: 'female', age: '21.0', sibsp: 0, parch: 0, ticket: 'C.A. 31026', fare: '10.5000', cabin: 'NaN', embarked: 'S', ticketPrefix: 'C.A.', ageGroup: 'Adult (19-35)' },
    ];

    const features = [
        { name: 'PassengerId', type: 'Numerical', meaning: 'Unique identifier for each passenger' },
        { name: 'Survived', type: 'Target', meaning: 'Survival status (0 = No, 1 = Yes)' },
        { name: 'Pclass', type: 'Categorical', meaning: 'Ticket class (1 = 1st, 2 = 2nd, 3 = 3rd)' },
        { name: 'Name', type: 'Categorical', meaning: 'Passenger full name and title' },
        { name: 'Sex', type: 'Categorical', meaning: 'Passenger gender' },
        { name: 'Age', type: 'Numerical', meaning: 'Passenger age in years' },
        { name: 'SibSp', type: 'Numerical', meaning: 'Number of siblings / spouses aboard the Titanic' },
        { name: 'Parch', type: 'Numerical', meaning: 'Number of parents / children aboard the Titanic' },
        { name: 'Ticket', type: 'Categorical', meaning: 'Ticket number sequence' },
        { name: 'Fare', type: 'Numerical', meaning: 'Passenger fare amount paid' },
        { name: 'Cabin', type: 'Categorical', meaning: 'Cabin number assigned' },
        { name: 'Embarked', type: 'Categorical', meaning: 'Port of Embarkation (C = Cherbourg, Q = Queenstown, S = Southampton)' },
    ];

    return (
        <div className="flex flex-col gap-12 w-full animate-in fade-in duration-500 h-full">
            {/* Intro Header */}
            <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-black text-blue-600 tracking-tight">
                    Tabular Data Exploration
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                    Detailed analysis of the <strong>Titanic</strong> tabular dataset, from exploring the general overview and handling missing data to in-depth analysis of numerical and categorical features.
                </p>
            </div>

            {/* SECTION 1: Dataset Overview */}
            <section className="flex flex-col gap-8">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-blue-100 p-2 rounded-xl">
                            <Info className="text-blue-600" size={24} />
                        </div>
                        1. Dataset Overview
                    </h3>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                        <div className="bg-indigo-50 p-4 rounded-xl text-indigo-500">
                            <Users size={28} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Samples</p>
                            <p className="text-3xl font-black text-slate-800">891</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                        <div className="bg-violet-50 p-4 rounded-xl text-violet-500">
                            <Database size={28} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Total Features</p>
                            <p className="text-3xl font-black text-slate-800">12</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                        <div className="bg-emerald-50 p-4 rounded-xl text-emerald-500">
                            <Hash size={28} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Numerical</p>
                            <p className="text-3xl font-black text-slate-800">5</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                        <div className="bg-amber-50 p-4 rounded-xl text-amber-500">
                            <LayoutList size={28} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Categorical</p>
                            <p className="text-3xl font-black text-slate-800">6</p>
                        </div>
                    </div>
                </div>

                {/* Target Feature Highlight Box */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-[2rem] p-6 sm:p-8 shadow-inner flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
                    {/* Decorative background shape */}
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>

                    <div className="flex items-start sm:items-center gap-5 relative z-10">
                        <div className="bg-blue-600 p-4 rounded-2xl text-white shadow-xl shadow-blue-200">
                            <Target size={32} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-800 mb-1">
                                Target Feature: <span className="text-blue-600 font-black tracking-wide">Survived</span>
                            </h4>
                            <p className="text-slate-500 text-base max-w-md">
                                Variable indicating the survival status.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 w-full md:w-auto relative z-10">
                        <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 text-center flex-1 md:flex-none">
                            <span className="text-3xl font-black text-red-500">549</span>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Dead (0)</p>
                        </div>
                        <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 text-center flex-1 md:flex-none">
                            <span className="text-3xl font-black text-emerald-500">342</span>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Alive (1)</p>
                        </div>
                    </div>
                </div>

                {/* Feature Dictionary Table */}
                <div className="bg-white border text-left border-slate-200 rounded-2xl shadow-sm overflow-hidden mt-4">
                    <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                        <h4 className="font-bold text-slate-700">Feature Dictionary</h4>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-white text-xs text-slate-500 uppercase font-bold border-b border-slate-200">
                                <tr>
                                    <th scope="col" className="px-6 py-4 w-1/4">Feature Name</th>
                                    <th scope="col" className="px-6 py-4 w-1/4">Type</th>
                                    <th scope="col" className="px-6 py-4 w-1/2">Meaning / Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {features.map((feature, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-slate-700">
                                            {feature.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${feature.type === 'Numerical' ? 'bg-emerald-100 text-emerald-700' :
                                                feature.type === 'Categorical' ? 'bg-amber-100 text-amber-700' :
                                                    'bg-blue-100 text-blue-700'
                                                }`}>
                                                {feature.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-slate-500 font-medium">
                                            {feature.meaning}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Dead Samples Table */}
                <div className="bg-white border text-left border-slate-200 rounded-2xl shadow-sm overflow-hidden mt-4">
                    <div className="bg-red-50 px-6 py-4 border-b border-red-100 flex items-center justify-between">
                        <h4 className="font-bold text-red-900">10 Random Samples</h4>
                        <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Survived = 0</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-xs text-center whitespace-nowrap">
                            <thead className="bg-white text-slate-500 uppercase font-bold border-b border-slate-200">
                                <tr>
                                    <th className="px-3 py-3">Index</th>
                                    <th className="px-3 py-3">PassengerId</th>
                                    <th className="px-3 py-3 text-red-600">Survived</th>
                                    <th className="px-3 py-3">Pclass</th>
                                    <th className="px-3 py-3 text-left">Name</th>
                                    <th className="px-3 py-3">Sex</th>
                                    <th className="px-3 py-3">Age</th>
                                    <th className="px-3 py-3">SibSp</th>
                                    <th className="px-3 py-3">Parch</th>
                                    <th className="px-3 py-3 text-left">Ticket</th>
                                    <th className="px-3 py-3 border-l border-slate-100 bg-slate-50/50">Fare</th>
                                    <th className="px-3 py-3">Cabin</th>
                                    <th className="px-3 py-3">Embarked</th>
                                    <th className="px-3 py-3">Ticket_Prefix</th>
                                    <th className="px-3 py-3 text-left border-l border-slate-100 bg-slate-50/50">Age_Group</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {deadSamples.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-3 py-2 text-slate-400 font-mono">{row.index}</td>
                                        <td className="px-3 py-2 text-slate-600 font-mono">{row.passengerId}</td>
                                        <td className="px-3 py-2 font-black text-red-500">{row.survived}</td>
                                        <td className="px-3 py-2 text-slate-600 font-bold">{row.pclass}</td>
                                        <td className="px-3 py-2 text-slate-700 font-medium text-left truncate max-w-[200px]" title={row.name}>{row.name}</td>
                                        <td className="px-3 py-2 text-slate-600">{row.sex}</td>
                                        <td className="px-3 py-2 text-slate-600 font-mono">{row.age}</td>
                                        <td className="px-3 py-2 text-slate-600 font-mono">{row.sibsp}</td>
                                        <td className="px-3 py-2 text-slate-600 font-mono">{row.parch}</td>
                                        <td className="px-3 py-2 text-slate-600 font-mono text-left">{row.ticket}</td>
                                        <td className="px-3 py-2 text-slate-600 font-mono border-l border-slate-100 bg-slate-50/50">{row.fare}</td>
                                        <td className="px-3 py-2 text-slate-600 font-mono">{row.cabin}</td>
                                        <td className="px-3 py-2 text-slate-600 font-bold">{row.embarked}</td>
                                        <td className="px-3 py-2 text-slate-600 font-mono">{row.ticketPrefix}</td>
                                        <td className="px-3 py-2 text-slate-600 border-l border-slate-100 bg-slate-50/50 text-left">{row.ageGroup}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Survived Samples Table */}
                <div className="bg-white border text-left border-slate-200 rounded-2xl shadow-sm overflow-hidden mt-4">
                    <div className="bg-emerald-50 px-6 py-4 border-b border-emerald-100 flex items-center justify-between">
                        <h4 className="font-bold text-emerald-900">10 Random Samples (Survived)</h4>
                        <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">Survived = 1</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-xs text-center whitespace-nowrap">
                            <thead className="bg-white text-slate-500 uppercase font-bold border-b border-slate-200">
                                <tr>
                                    <th className="px-3 py-3">Index</th>
                                    <th className="px-3 py-3">PassengerId</th>
                                    <th className="px-3 py-3 text-emerald-600">Survived</th>
                                    <th className="px-3 py-3">Pclass</th>
                                    <th className="px-3 py-3 text-left">Name</th>
                                    <th className="px-3 py-3">Sex</th>
                                    <th className="px-3 py-3">Age</th>
                                    <th className="px-3 py-3">SibSp</th>
                                    <th className="px-3 py-3">Parch</th>
                                    <th className="px-3 py-3 text-left">Ticket</th>
                                    <th className="px-3 py-3 border-l border-slate-100 bg-slate-50/50">Fare</th>
                                    <th className="px-3 py-3">Cabin</th>
                                    <th className="px-3 py-3">Embarked</th>
                                    <th className="px-3 py-3">Ticket_Prefix</th>
                                    <th className="px-3 py-3 text-left border-l border-slate-100 bg-slate-50/50">Age_Group</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {survivedSamples.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-3 py-2 text-slate-400 font-mono">{row.index}</td>
                                        <td className="px-3 py-2 text-slate-600 font-mono">{row.passengerId}</td>
                                        <td className="px-3 py-2 font-black text-emerald-500">{row.survived}</td>
                                        <td className="px-3 py-2 text-slate-600 font-bold">{row.pclass}</td>
                                        <td className="px-3 py-2 text-slate-700 font-medium text-left truncate max-w-[200px]" title={row.name}>{row.name}</td>
                                        <td className="px-3 py-2 text-slate-600">{row.sex}</td>
                                        <td className="px-3 py-2 text-slate-600 font-mono">{row.age}</td>
                                        <td className="px-3 py-2 text-slate-600 font-mono">{row.sibsp}</td>
                                        <td className="px-3 py-2 text-slate-600 font-mono">{row.parch}</td>
                                        <td className="px-3 py-2 text-slate-600 font-mono text-left">{row.ticket}</td>
                                        <td className="px-3 py-2 text-slate-600 font-mono border-l border-slate-100 bg-slate-50/50">{row.fare}</td>
                                        <td className="px-3 py-2 text-slate-600 font-mono truncate max-w-[100px]" title={row.cabin}>{row.cabin}</td>
                                        <td className="px-3 py-2 text-slate-600 font-bold">{row.embarked}</td>
                                        <td className="px-3 py-2 text-slate-600 font-mono">{row.ticketPrefix}</td>
                                        <td className="px-3 py-2 text-slate-600 border-l border-slate-100 bg-slate-50/50 text-left">{row.ageGroup}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
                        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 shadow-sm">
                            <h4 className="text-xl font-bold text-amber-900 mb-2">Missing Values Analysis</h4>
                            <p className="text-amber-700/80 mb-6 leading-relaxed">
                                Overview of features containing null or missing data. A total of <strong className="text-amber-900">866</strong> missing cells scattered across <strong className="text-amber-900">3</strong> columns were identified.
                            </p>

                            {/* Missing Table */}
                            <div className="bg-white border border-amber-200 rounded-xl overflow-hidden shadow-sm">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-amber-50/50 text-xs text-amber-800 uppercase font-bold border-b border-amber-100">
                                        <tr>
                                            <th className="px-4 py-3">Feature</th>
                                            <th className="px-4 py-3">Missing Count</th>
                                            <th className="px-4 py-3">Missing %</th>
                                            <th className="px-4 py-3">Severity</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-amber-100/50">
                                        {missingData.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-amber-50/50 transition-colors">
                                                <td className="px-4 py-3 font-bold text-slate-700">{item.feature}</td>
                                                <td className="px-4 py-3 text-slate-600">{item.count}</td>
                                                <td className="px-4 py-3 font-medium text-slate-600">{item.percent}%</td>
                                                <td className="px-4 py-3 font-bold">{item.severity}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Missing Visualization */}
                        <div className="bg-white p-4 border border-slate-200 rounded-2xl shadow-sm">
                            <img src={missingValuesImg} alt="Missing Values Chart" className="w-full h-auto rounded-xl" />
                        </div>
                    </div>

                    {/* DUPLICATE VALUES */}
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 shadow-sm">
                            <h4 className="text-xl font-bold text-emerald-900 mb-2">Duplicate Values Check</h4>
                            <p className="text-emerald-700/80 mb-6 leading-relaxed">
                                Validation for completely identical records within the dataset. <strong className="text-emerald-900">No fully duplicated rows</strong> were found during the analysis.
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
                                            <td className="px-4 py-3 font-bold text-slate-700">891</td>
                                            <td className="px-4 py-3 font-bold text-emerald-600">891</td>
                                            <td className="px-4 py-3 font-bold text-slate-600">0</td>
                                            <td className="px-4 py-3 font-bold text-slate-600">0.0%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Duplicate Visualization */}
                        <div className="bg-white p-4 border border-slate-200 rounded-2xl shadow-sm">
                            <img src={duplicateValuesImg} alt="Duplicate Analysis Chart" className="w-full h-auto rounded-xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Numerical Analysis */}
            <section className="flex flex-col gap-8 mt-4">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-emerald-100 p-2 rounded-xl">
                            <BarChart2 className="text-emerald-600" size={24} />
                        </div>
                        3. Numerical Features Distribution
                    </h3>
                </div>

                {/* Table */}
                <div className="bg-white border text-left border-slate-200 rounded-2xl shadow-sm overflow-hidden mt-4">
                    <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                        <h4 className="font-bold text-slate-700">Numerical Features Statistics</h4>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-center">
                            <thead className="bg-white text-xs text-slate-500 uppercase font-bold border-b border-slate-200">
                                <tr>
                                    <th className="px-4 py-4 text-left">Column</th>
                                    <th className="px-3 py-4">Count</th>
                                    <th className="px-3 py-4">Mean</th>
                                    <th className="px-3 py-4">Median</th>
                                    <th className="px-3 py-4">Std</th>
                                    <th className="px-3 py-4">Min</th>
                                    <th className="px-3 py-4">Max</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {numericalStats.map((stat, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-4 py-3 font-bold text-slate-700 text-left">{stat.feature}</td>
                                        <td className="px-3 py-3 text-slate-600">{stat.count}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.mean}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.median}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.std}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.min}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.max}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Distribution Visualizations */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h5 className="font-bold text-slate-700 mb-4 w-full text-center text-lg border-b border-slate-100 pb-2">Pclass Distribution</h5>
                        <img src={pclassDistImg} alt="Pclass Distribution" className="w-full h-auto rounded-xl object-contain hover:scale-[1.02] transition-transform" />
                    </div>
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h5 className="font-bold text-slate-700 mb-4 w-full text-center text-lg border-b border-slate-100 pb-2">Age Distribution</h5>
                        <img src={ageDistImg} alt="Age Distribution" className="w-full h-auto rounded-xl object-contain hover:scale-[1.02] transition-transform" />
                    </div>
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h5 className="font-bold text-slate-700 mb-4 w-full text-center text-lg border-b border-slate-100 pb-2">SibSp Distribution</h5>
                        <img src={sibspDistImg} alt="SibSp Distribution" className="w-full h-auto rounded-xl object-contain hover:scale-[1.02] transition-transform" />
                    </div>
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h5 className="font-bold text-slate-700 mb-4 w-full text-center text-lg border-b border-slate-100 pb-2">Parch Distribution</h5>
                        <img src={parchDistImg} alt="Parch Distribution" className="w-full h-auto rounded-xl object-contain hover:scale-[1.02] transition-transform" />
                    </div>
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                        <h5 className="font-bold text-slate-700 mb-4 w-full text-center text-lg border-b border-slate-100 pb-2">Fare Distribution</h5>
                        <img src={fareDistImg} alt="Fare Distribution" className="w-full h-auto rounded-xl object-contain hover:scale-[1.02] transition-transform" />
                    </div>
                </div>
            </section>

            {/* SECTION 4: Categorical Features Distribution */}
            <section className="flex flex-col gap-8 mt-4">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-purple-100 p-2 rounded-xl">
                            <PieChart className="text-purple-600" size={24} />
                        </div>
                        4. Categorical Features Distribution
                    </h3>
                </div>

                {/* Table */}
                <div className="bg-white border text-left border-slate-200 rounded-2xl shadow-sm overflow-hidden mt-4">
                    <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                        <h4 className="font-bold text-slate-700">Categorical Features Statistics</h4>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-center">
                            <thead className="bg-white text-xs text-slate-500 uppercase font-bold border-b border-slate-200">
                                <tr>
                                    <th className="px-4 py-4 text-left">Column</th>
                                    <th className="px-3 py-4">Unique Values</th>
                                    <th className="px-3 py-4">Cardinality</th>
                                    <th className="px-3 py-4">Mode (Most Frequent)</th>
                                    <th className="px-3 py-4">Mode Frequency</th>
                                    <th className="px-3 py-4">Mode %</th>
                                    <th className="px-3 py-4">Missing %</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {categoricalStats.map((stat, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-4 py-3 font-bold text-slate-700 text-left">{stat.feature}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.unique}</td>
                                        <td className="px-3 py-3 font-bold">{stat.cardinality}</td>
                                        <td className="px-3 py-3 text-slate-600 font-medium italic">{stat.mode}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.modeFreq}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.modePercent}%</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.missingPercent}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Narrative blocks and Images */}
                <div className="flex flex-col gap-12 mt-4">
                    {/* Standard Categorical Dist */}
                    <div className="w-full flex flex-col gap-6">
                        <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 shadow-sm">
                            <h4 className="text-xl font-bold text-purple-900 mb-2">Non-ID Categorical Distribution</h4>
                            <p className="text-purple-700/80 leading-relaxed">
                                Variables such as <strong className="text-purple-900">Name</strong> and <strong className="text-purple-900">Ticket</strong> have extremely high cardinality mapping closely to unique IDs. Therefore, they are excluded from frequency analysis in favor of true categorical classifications: <strong className="text-purple-900">Sex, Cabin, and Embarked</strong>.
                            </p>
                        </div>
                        <div className="bg-white p-4 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow w-full">
                            <img src={categoricalDistImg} alt="Categorical Distribution" className="w-full h-auto max-h-[800px] rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                        </div>
                    </div>

                    {/* Ticket Prefix */}
                    <div className="w-full flex flex-col gap-6">
                        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 shadow-sm">
                            <h4 className="text-xl font-bold text-blue-900 mb-2">Ticket Prefix Analysis</h4>
                            <p className="text-blue-700/80 leading-relaxed">
                                While the <strong className="text-blue-900">Ticket</strong> column has <strong className="text-blue-900">681</strong> unique values, extracting and aggregating its alphanumeric prefixes reveals hidden clustering patterns that correlate with socio-economic or boarding status.
                            </p>
                        </div>
                        <div className="bg-white p-4 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow w-full">
                            <img src={ticketPrefixDistImg} alt="Ticket Prefix Distribution" className="w-full h-auto max-h-[800px] rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Correlation Analysis */}
            <section className="flex flex-col gap-8 mt-4">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-rose-100 p-2 rounded-xl">
                            <Network className="text-rose-600" size={24} />
                        </div>
                        5. Correlation Analysis
                    </h3>
                </div>

                {/* Table */}
                <div className="bg-white border text-left border-slate-200 rounded-2xl shadow-sm overflow-hidden mt-4">
                    <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                        <h4 className="font-bold text-slate-700">Pearson Correlation Matrix Top Pairs</h4>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-center">
                            <thead className="bg-white text-xs text-slate-500 uppercase font-bold border-b border-slate-200">
                                <tr>
                                    <th className="px-4 py-4 text-left w-1/5">Feature A</th>
                                    <th className="px-4 py-4 text-left w-1/5">Feature B</th>
                                    <th className="px-3 py-4 w-1/5">Pearson r</th>
                                    <th className="px-3 py-4 w-1/5">|r|</th>
                                    <th className="px-4 py-4 text-left w-1/5">Strength</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {correlationStats.map((stat, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-4 py-3 font-bold text-slate-700 text-left">{stat.featureA}</td>
                                        <td className="px-4 py-3 font-bold text-slate-700 text-left">{stat.featureB}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.r}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.absR}</td>
                                        <td className="px-4 py-3 font-bold text-left">{stat.strength}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Heatmap Visualization */}
                <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center">
                    <h4 className="font-bold text-slate-700 mb-6 w-full text-center text-xl border-b border-slate-100 pb-4">Correlation Heatmap</h4>
                    <img src={correlationHeatmapImg} alt="Correlation Heatmap" className="w-full h-auto max-w-4xl rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                </div>
            </section>

            {/* SECTION 6: Target Analysis */}
            <section className="flex flex-col gap-8 mt-4">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-blue-100 p-2 rounded-xl">
                            <Crosshair className="text-blue-600" size={24} />
                        </div>
                        6. Target Analysis
                    </h3>
                </div>

                {/* Target Distribution */}
                <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center">
                    <h4 className="font-bold text-slate-700 mb-6 w-full text-center text-xl border-b border-slate-100 pb-4">Target Distribution</h4>
                    <img src={targetDistImg} alt="Target Distribution" className="w-full h-auto max-w-3xl rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                </div>

                {/* Table: Numerical Feature Correlation with Target */}
                <div className="bg-white border text-left border-slate-200 rounded-2xl shadow-sm overflow-hidden mt-4">
                    <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                        <h4 className="font-bold text-slate-700">Numerical Feature Correlation with Target</h4>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-center">
                            <thead className="bg-white text-xs text-slate-500 uppercase font-bold border-b border-slate-200">
                                <tr>
                                    <th className="px-4 py-4 text-left w-1/6">Feature</th>
                                    <th className="px-3 py-4 w-1/6">Point-Biserial r</th>
                                    <th className="px-3 py-4 w-1/6">Spearman r</th>
                                    <th className="px-3 py-4 w-1/6">|r|</th>
                                    <th className="px-3 py-4 w-1/6">p-value</th>
                                    <th className="px-4 py-4 w-1/6">Significant</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {targetCorrelationStats.map((stat, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-4 py-3 font-bold text-slate-700 text-left">{stat.feature}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.pbR}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.spearmanR}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.absR}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.pValue}</td>
                                        <td className="px-4 py-3 font-bold text-center text-lg">{stat.significant}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Target Correlation Diagram */}
                <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center">
                    <img src={targetCorrImg} alt="Numerical Feature Correlation with Target" className="w-full h-auto max-w-4xl rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                </div>

                {/* Categorical and Numerical Splits by Target */}
                <div className="flex flex-col gap-12 mt-4">
                    {/* Categorical Survival Rate */}
                    <div className="w-full flex flex-col gap-6">
                        <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100 shadow-sm">
                            <h4 className="text-xl font-bold text-cyan-900 mb-2">Categorical Features vs Target</h4>
                            <p className="text-cyan-700/80 leading-relaxed">
                                Analysis showing how survival rates differ significantly across the various <strong className="text-cyan-900">categorical groupings</strong>. Let's observe the distribution densities here!
                            </p>
                        </div>
                        <div className="bg-white p-4 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow w-full">
                            <img src={catSurvivalRateImg} alt="Categorical Survival Rate" className="w-full h-auto max-h-[800px] rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                        </div>
                    </div>

                    {/* Numerical Feature Split */}
                    <div className="w-full flex flex-col gap-6">
                        <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 shadow-sm">
                            <h4 className="text-xl font-bold text-indigo-900 mb-2">Numerical Features vs Target</h4>
                            <p className="text-indigo-700/80 leading-relaxed">
                                Analysis splitting <strong className="text-indigo-900">numerical variables</strong> distributions by the target feature to highlight shift biases among passenger profiles!
                            </p>
                        </div>
                        <div className="bg-white p-4 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow w-full">
                            <img src={numDistByTargetImg} alt="Numerical Distribution by Target" className="w-full h-auto max-h-[800px] rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Outlier Detection & Distribution Shape */}
            <section className="flex flex-col gap-8 mt-4">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-orange-100 p-2 rounded-xl">
                            <Activity className="text-orange-600" size={24} />
                        </div>
                        7. Outlier Detection & Distribution Shape
                    </h3>
                </div>

                {/* Table: Outlier Stats Combine */}
                <div className="bg-white border text-left border-slate-200 rounded-2xl shadow-sm overflow-hidden mt-4">
                    <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                        <h4 className="font-bold text-slate-700">Outlier Detection & Skewness/Kurtosis Combined Metrics</h4>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-center">
                            <thead className="bg-white text-xs text-slate-500 uppercase font-bold border-b border-slate-200">
                                <tr>
                                    <th className="px-4 py-4 text-left">Feature</th>
                                    <th className="px-3 py-4">Lower Fence</th>
                                    <th className="px-3 py-4">Upper Fence</th>
                                    <th className="px-3 py-4">Q1</th>
                                    <th className="px-3 py-4">Q3</th>
                                    <th className="px-3 py-4">IQR</th>
                                    <th className="px-3 py-4">Skewness</th>
                                    <th className="px-3 py-4">Kurtosis</th>
                                    <th className="px-3 py-4">Outlier Count</th>
                                    <th className="px-3 py-4">Outlier %</th>
                                    <th className="px-4 py-4 text-left">Severity</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {outlierStats.map((stat, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-4 py-3 font-bold text-slate-700 text-left">{stat.feature}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.lower}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.upper}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.q1}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.q3}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.iqr}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.skewness}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.kurtosis}</td>
                                        <td className="px-3 py-3 font-bold text-slate-700 font-mono">{stat.count}</td>
                                        <td className="px-3 py-3 text-slate-600 font-mono">{stat.percent}%</td>
                                        <td className="px-4 py-3 font-bold text-left whitespace-nowrap">{stat.severity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Boxplot Diagram */}
                <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center">
                    <h4 className="font-bold text-slate-700 mb-6 w-full text-center text-xl border-b border-slate-100 pb-4">Numerical Feature Boxplots</h4>
                    <img src={outlierBoxplotImg} alt="Outlier Boxplots" className="w-full h-auto rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                </div>

                {/* Skewness & Kurtosis */}
                <div className="flex flex-col xl:flex-row gap-8 mt-4">
                    {/* Skewness */}
                    <div className="w-full flex-1 flex flex-col gap-6">
                        <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 shadow-sm flex-grow">
                            <h4 className="text-xl font-bold text-orange-900 mb-2">Skewness Comparison</h4>
                            <p className="text-orange-700/80 leading-relaxed">
                                Highlights the distribution asymmetry. Variables like <strong className="text-orange-900">Fare</strong> and <strong className="text-orange-900">SibSp</strong> show significant right skew.
                            </p>
                        </div>
                        <div className="bg-white p-4 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                            <img src={skewnessImg} alt="Skewness Analysis" className="w-full h-auto max-h-[600px] rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                        </div>
                    </div>

                    {/* Kurtosis */}
                    <div className="w-full flex-1 flex flex-col gap-6">
                        <div className="bg-red-50 rounded-2xl p-6 border border-red-100 shadow-sm flex-grow">
                            <h4 className="text-xl font-bold text-red-900 mb-2">Kurtosis Comparison</h4>
                            <p className="text-red-700/80 leading-relaxed">
                                Measures the "tailedness" of the distribution. High kurtosis in <strong className="text-red-900">Fare</strong> implies extreme outliers.
                            </p>
                        </div>
                        <div className="bg-white p-4 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                            <img src={kurtosisImg} alt="Kurtosis Analysis" className="w-full h-auto max-h-[600px] rounded-xl object-contain hover:scale-[1.01] transition-transform" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 8: Key Insights */}
            <section className="flex flex-col gap-8 mt-4">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <div className="bg-yellow-100 p-2 rounded-xl">
                            <Lightbulb className="text-yellow-600" size={24} />
                        </div>
                        8. Key Insights & Conclusion
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Insight 1 */}
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                        <h4 className="font-bold text-lg text-slate-800 mb-3 ml-2">Demographic Disparity</h4>
                        <p className="text-slate-600 ml-2 leading-relaxed">
                            Gender and Age were the strongest demographic predictors of survival. Females exhibited a drastically higher survival rate compared to males, reflecting the "women and children first" protocol.
                        </p>
                    </div>

                    {/* Insight 2 */}
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
                        <h4 className="font-bold text-lg text-slate-800 mb-3 ml-2">Socio-Economic Impact</h4>
                        <p className="text-slate-600 ml-2 leading-relaxed">
                            <strong className="text-slate-700">Pclass</strong> and <strong className="text-slate-700">Fare</strong> strongly correlated with survival length. First-class passengers had a significantly higher survival rate than those in third class, indicating socio-economic status determined rescue priority.
                        </p>
                    </div>

                    {/* Insight 3 */}
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
                        <h4 className="font-bold text-lg text-slate-800 mb-3 ml-2">Distribution Shapes & Outliers</h4>
                        <p className="text-slate-600 ml-2 leading-relaxed">
                            Features like <strong className="text-slate-700">Fare</strong> and <strong className="text-slate-700">SibSp</strong> are immensely right-skewed with heavy kurtosis. These massive outliers (e.g. Fare = 512.33) require logarithmic transformations or robust scaling before applying predictive models.
                        </p>
                    </div>

                    {/* Insight 4 */}
                    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-rose-500"></div>
                        <h4 className="font-bold text-lg text-slate-800 mb-3 ml-2">Missing Data Strategy</h4>
                        <p className="text-slate-600 ml-2 leading-relaxed">
                            <strong className="text-slate-700">Cabin</strong> is critically sparse (~77% missing) and should either be dropped or engineered into a binary "Has Cabin" feature. <strong className="text-slate-700">Age</strong> (~20% missing) can be statistically imputed using grouping based on Pclass and Title.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default TabularEDA;
