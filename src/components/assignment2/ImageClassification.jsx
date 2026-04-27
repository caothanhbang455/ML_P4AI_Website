import React, { useState } from "react";
import {
  Filter,
  Cpu,
  Network,
  GitMerge,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  Database,
  Target,
  BarChart3,
  Zap,
  Activity,
  LayoutTemplate,
  Settings,
  AlertTriangle,
  Lightbulb,
  ImageIcon,
  Brain,
  Search,
  Info,
  Trophy,
  BarChart,
  Maximize2,
  Layers,
  Terminal,
  ChevronDown,
  ChevronUp,
  Image as ImageIconLucide,
} from "lucide-react";

// Classification Images
import accuracyF1ComparisonApp2 from "../../assets/classification-image/accuray_f1_score_comparision_approach_2.png";
import animalClassDist from "../../assets/classification-image/animal_class_distribution.png";
import comparisonApp1 from "../../assets/classification-image/comparison_approach_1.png";
import comparisonApp2 from "../../assets/classification-image/comparison_approach_2.png";
import confusionMatrixApp1 from "../../assets/classification-image/confusion_matrix_best_model_approach_1.png";
import confusionMatrixApp2 from "../../assets/classification-image/confusion_matrix_best_model_approach_2.png";
import duplicatedSample from "../../assets/classification-image/duplicated_image_sample.png";
import overallComparison from "../../assets/classification-image/overall_comparison.png";
import rocCurveApp1 from "../../assets/classification-image/roc_curve_for_each_class_approach_1.png";
import rocCurveApp2 from "../../assets/classification-image/roc_curve_for_each_class_approach_2.png";
import sampleAugmented from "../../assets/classification-image/sample_augmented_image.png";
import splitDistribution from "../../assets/classification-image/train_test_val_class_distribution.png";
import transformationSample from "../../assets/classification-image/transformation_verification_sample.png";
import valAccLossApp1 from "../../assets/classification-image/val_acc_loss_comparison_approach_1.png";

const ALL_LOGS = {
  ResNet50_Freeze: `Training: ResNet50_Freeze\nStarting training on cuda...\n------------------------------\nEpoch 1/5:\n  Train Loss: 1.7913 | Acc: 68.10%\n  Val Loss:   1.1291 | Acc: 75.78%\nSaving weights...\nEpoch 2/5:\n  Train Loss: 0.7026 | Acc: 83.09%\n  Val Loss:   0.8627 | Acc: 77.78%\nSaving weights...\nEpoch 3/5:\n  Train Loss: 0.5044 | Acc: 86.26%\n  Val Loss:   0.7471 | Acc: 79.03%\nSaving weights...\nEpoch 4/5:\n  Train Loss: 0.4311 | Acc: 87.43%\n  Val Loss:   0.7069 | Acc: 79.41%\nSaving weights...\nEpoch 5/5:\n  Train Loss: 0.3767 | Acc: 89.00%\n  Val Loss:   0.7144 | Acc: 78.79%\n------------------------------\nTraining complete in 12m 38s\nBest Val Acc: 79.409158%`,
  ResNet50_FineTune: `Training: ResNet50_FineTune\nStarting training on cuda...\n------------------------------\nEpoch 1/5:\n  Train Loss: 1.3265 | Acc: 70.66%\n  Val Loss:   0.6037 | Acc: 81.30%\nSaving weights...\nEpoch 2/5:\n  Train Loss: 0.3765 | Acc: 88.19%\n  Val Loss:   0.5558 | Acc: 81.80%\nSaving weights...\nEpoch 3/5:\n  Train Loss: 0.2971 | Acc: 90.16%\n  Val Loss:   0.6085 | Acc: 80.83%\nEpoch 4/5:\n  Train Loss: 0.2390 | Acc: 91.97%\n  Val Loss:   0.5929 | Acc: 81.92%\nSaving weights...\nEpoch 5/5:\n  Train Loss: 0.2152 | Acc: 92.83%\n  Val Loss:   0.5914 | Acc: 81.74%\n------------------------------\nTraining complete in 19m 1s\nBest Val Acc: 81.7402%`,
  VGG16_Freeze: `Training: VGG16_Freeze\nStarting training on cuda...\n------------------------------\nEpoch 1/5:\n  Train Loss: 1.3742 | Acc: 63.16%\n  Val Loss:   1.1134 | Acc: 69.42%\nSaving weights...\nEpoch 5/5:\n  Train Loss: 0.8987 | Acc: 75.27%\n  Val Loss:   1.0671 | Acc: 73.80%\nBest Val Acc: 73.796160%`,
  VGG16_FineTune: `Training: VGG16_FineTune\nStarting training on cuda...\n------------------------------\nEpoch 1/5:\n  Train Loss: 1.8467 | Acc: 51.46%\n  Val Loss:   1.2777 | Acc: 61.57%\nSaving weights...\nEpoch 5/5:\n  Train Loss: 0.4507 | Acc: 85.91%\n  Val Loss:   1.1047 | Acc: 69.19%\nBest Val Acc: 69.187592%`,
  ResNet34_Freeze: `Training: ResNet34_Freeze\nStarting training on cuda...\n------------------------------\nEpoch 1/5:\n  Train Loss: 2.0926 | Acc: 53.06%\n  Val Loss:   1.4425 | Acc: 62.60%\nSaving weights...\nEpoch 5/5:\n  Train Loss: 0.8283 | Acc: 75.54%\n  Val Loss:   1.2272 | Acc: 65.85%\nBest Val Acc: 67.031019%`,
  ResNet34_FineTune: `Training: ResNet34_FineTune\nStarting training on cuda...\n------------------------------\nEpoch 1/5:\n  Train Loss: 1.4522 | Acc: 67.53%\n  Val Loss:   1.1501 | Acc: 67.21%\nSaving weights...\nEpoch 5/5:\n  Train Loss: 0.3406 | Acc: 89.33%\n  Val Loss:   1.0236 | Acc: 71.29%\nBest Val Acc: 72.319055%`,
  DenseNet121_Freeze: `Training: DenseNet121_Freeze\nStarting training on cuda...\n------------------------------\nEpoch 1/5:\n  Train Loss: 1.9386 | Acc: 58.29%\n  Val Loss:   1.2990 | Acc: 65.49%\nSaving weights...\nEpoch 5/5:\n  Train Loss: 0.6331 | Acc: 81.57%\n  Val Loss:   1.0443 | Acc: 69.19%\nBest Val Acc: 70.989660%`,
  DenseNet121_FineTune: `Training: DenseNet121_FineTune\nStarting training on cuda...\n------------------------------\nEpoch 1/5:\n  Train Loss: 2.0577 | Acc: 60.84%\n  Val Loss:   1.1869 | Acc: 70.66%\nSaving weights...\nEpoch 5/5:\n  Train Loss: 0.2886 | Acc: 90.93%\n  Val Loss:   0.7614 | Acc: 77.70%\nBest Val Acc: 77.695716%`,
  MobileNetV2_Freeze: `Training: MobileNetV2_Freeze\nStarting training on cuda...\n------------------------------\nEpoch 1/5:\n  Train Loss: 2.0110 | Acc: 59.24%\n  Val Loss:   1.4093 | Acc: 66.09%\nSaving weights...\nEpoch 5/5:\n  Train Loss: 0.7175 | Acc: 79.08%\n  Val Loss:   1.0558 | Acc: 69.63%\nBest Val Acc: 69.630724%`,
  MobileNetV2_FineTune: `Training: MobileNetV2_FineTune\nStarting training on cuda...\n------------------------------\nEpoch 1/5:\n  Train Loss: 2.4197 | Acc: 50.85%\n  Val Loss:   1.1996 | Acc: 69.51%\nSaving weights...\nEpoch 5/5:\n  Train Loss: 0.3793 | Acc: 88.45%\n  Val Loss:   0.6850 | Acc: 77.93%\nBest Val Acc: 77.932053%`,
  EfficientNetB0_Freeze: `Training: EfficientNetB0_Freeze\nStarting training on cuda...\n------------------------------\nEpoch 1/5:\n  Train Loss: 2.1394 | Acc: 55.20%\n  Val Loss:   1.5246 | Acc: 62.69%\nSaving weights...\nEpoch 5/5:\n  Train Loss: 0.9016 | Acc: 74.74%\n  Val Loss:   1.2484 | Acc: 65.02%\nBest Val Acc: 66.528804%`,
  EfficientNetB0_FineTune: `Training: EfficientNetB0_FineTune\nStarting training on cuda...\n------------------------------\nEpoch 1/5:\n  Train Loss: 2.3361 | Acc: 53.41%\n  Val Loss:   1.0512 | Acc: 71.11%\nSaving weights...\nEpoch 5/5:\n  Train Loss: 0.3425 | Acc: 89.40%\n  Val Loss:   0.6325 | Acc: 80.15%\nBest Val Acc: 81.1512%`,
  EfficientNetB1_Freeze: `Training: EfficientNetB1_Freeze\nStarting training on cuda...\n------------------------------\nEpoch 1/5:\n  Train Loss: 2.4894 | Acc: 62.72%\n  Val Loss:   1.6769 | Acc: 68.15%\nSaving weights...\nEpoch 5/5:\n  Train Loss: 0.7002 | Acc: 80.67%\n  Val Loss:   0.9114 | Acc: 74.86%\nBest Val Acc: 74.859675%`,
  EfficientNetB1_FineTune: `Training: EfficientNetB1_FineTune\nStarting training on cuda...\n------------------------------\nEpoch 1/5: Train Loss: 2.2299 | Acc: 57.10% | Val Loss: 0.8884 | Acc: 76.04%\nEpoch 2/5: Train Loss: 0.6928 | Acc: 81.39% | Val Loss: 0.6212 | Acc: 80.24%\nEpoch 3/5: Train Loss: 0.4835 | Acc: 85.67% | Val Loss: 0.5760 | Acc: 81.03%\nEpoch 4/5: Train Loss: 0.3820 | Acc: 87.98% | Val Loss: 0.5599 | Acc: 81.74%\nEpoch 5/5: Train Loss: 0.3323 | Acc: 89.26% | Val Loss: 0.5256 | Acc: 82.63%\nTraining complete in 13m 48s. Best Val Acc: 82.6315%`,
  ResNet50_SVM: `Processing: ResNet50_SVM\nExtracting features with resnet50...\nTraining svm...\nAccuracy: 82.45%\nF1 Score: 82.54%`,
  ResNet50_RandomForest: `Processing: ResNet50_RandomForest\nExtracting features with resnet50...\nTraining random_forest...\nAccuracy: 81.33%\nF1 Score: 81.32%`,
  ResNet50_LogReg: `Processing: ResNet50_LogReg\nExtracting features with resnet50...\nTraining logistic_regression...\n\n--- CLASSIFICATION REPORT for ResNet50_LogReg ---\n                       precision    recall  f1-score   support\n\n                 Bear       0.85      0.85      0.85        13\n            Butterfly       0.86      0.80      0.83       281\n               Chicken       0.93      0.74      0.83        58\n                Eagle       0.93      0.92      0.92       108\n             Elephant       1.00      0.96      0.98        23\n            Jellyfish       1.00      1.00      1.00        68\n                 Lion       0.97      1.00      0.98        31\n               Monkey       0.98      0.95      0.96       115\n                Panda       1.00      1.00      1.00        14\n                Zebra       0.96      0.96      0.96        27\n\n             accuracy                           0.8260      3385\n            macro avg       0.76      0.76      0.76      3385\n         weighted avg       0.83      0.83      0.83      3385\n\nOverall AUC-ROC Score: 0.9895`,
  ResNet50_KNN: `Processing: ResNet50_KNN\nExtracting features with resnet50...\nTraining knn...\nAccuracy: 75.69%`,
  ResNet50_MLP: `Processing: ResNet50_MLP\nExtracting features with resnet50...\nTraining mlp...\nAccuracy: 81.48%`,
  ResNet50_NaiveBayes: `Processing: ResNet50_NaiveBayes\nExtracting features with resnet50...\nTraining naive_bayes...\nAccuracy: 64.43%`,
  EfficientNetB0_SVM: `Processing: EfficientNetB0_SVM\nExtracting features with efficientnet_b0...\nTraining svm...\nAccuracy: 78.23%`,
  EfficientNetB0_RandomForest: `Processing: EfficientNetB0_RandomForest\nExtracting features with efficientnet_b0...\nTraining random_forest...\nAccuracy: 75.27%`,
  EfficientNetB0_LogReg: `Processing: EfficientNetB0_LogReg\nExtracting features with efficientnet_b0...\nTraining logistic_regression...\nAccuracy: 78.58%`,
  EfficientNetB0_KNN: `Processing: EfficientNetB0_KNN\nExtracting features with efficientnet_b0...\nTraining knn...\nAccuracy: 75.01%`,
  EfficientNetB0_MLP: `Processing: EfficientNetB0_MLP\nExtracting features with efficientnet_b0...\nTraining mlp...\nAccuracy: 77.70%`,
  EfficientNetB0_NaiveBayes: `Processing: EfficientNetB0_NaiveBayes\nExtracting features with efficientnet_b0...\nTraining naive_bayes...\nAccuracy: 76.69%`,
};

const ImageClassification = () => {
  const [activeTab, setActiveTab] = useState("data");
//   const [expandedLog, setExpandedLog] = useState(null);

  const tabs = [
    { id: "data", label: "Preprocessing", icon: Database },
    { id: "approach1", label: "Approach 1: Transfer", icon: Brain },
    { id: "approach2", label: "Approach 2: Hybrid", icon: Cpu },
    { id: "analysis", label: "Comparative Analysis", icon: BarChart3 },
    //{ id: "explainability", label: "Explainability", icon: Search },
    { id: "conclusion", label: "Summary", icon: Trophy },
  ];

  const approach1Results = [
    {
      name: "EfficientNetB1",
      strategy: "Fine-tune",
      acc: "82.63%",
      f1: "82.45%",
      inf: "8.19",
      vram: "457.5",
      time: "13.8m",
      params: "6.62",
      log_key: "EfficientNetB1_FineTune",
    },
    {
      name: "ResNet50",
      strategy: "Fine-tune",
      acc: "81.74%",
      f1: "81.75%",
      inf: "8.13",
      vram: "722.9",
      time: "19.1m",
      params: "23.67",
      log_key: "ResNet50_FineTune",
    },
    {
      name: "EfficientNetB0",
      strategy: "Fine-tune",
      acc: "81.15%",
      f1: "81.08%",
      inf: "7.80",
      vram: "418.1",
      time: "13.2m",
      params: "4.11",
      log_key: "EfficientNetB0_FineTune",
    },
    {
      name: "ResNet50",
      strategy: "Freeze",
      acc: "79.32%",
      f1: "79.62%",
      inf: "8.20",
      vram: "446.5",
      time: "12.6m",
      params: "23.67",
      log_key: "ResNet50_Freeze",
    },
    {
      name: "MobileNetV2",
      strategy: "Fine-tune",
      acc: "77.87%",
      f1: "77.86%",
      inf: "7.94",
      vram: "391.6",
      time: "13.0m",
      params: "2.33",
      log_key: "MobileNetV2_FineTune",
    },
    {
      name: "DenseNet121",
      strategy: "Fine-tune",
      acc: "76.84%",
      f1: "77.06%",
      inf: "8.15",
      vram: "450.8",
      time: "17.1m",
      params: "7.04",
      log_key: "DenseNet121_FineTune",
    },
    {
      name: "EfficientNetB1",
      strategy: "Freeze",
      acc: "75.13%",
      f1: "75.36%",
      inf: "8.05",
      vram: "381.4",
      time: "12.3m",
      params: "6.62",
      log_key: "EfficientNetB1_Freeze",
    },
    {
      name: "VGG16",
      strategy: "Freeze",
      acc: "72.82%",
      f1: "73.33%",
      inf: "8.84",
      vram: "3103.4",
      time: "13.5m",
      params: "134.59",
      log_key: "VGG16_Freeze",
    },
    {
      name: "ResNet34",
      strategy: "Fine-tune",
      acc: "71.99%",
      f1: "72.35%",
      inf: "8.04",
      vram: "576.8",
      time: "13.6m",
      params: "21.33",
      log_key: "ResNet34_FineTune",
    },
    {
      name: "DenseNet121",
      strategy: "Freeze",
      acc: "71.43%",
      f1: "71.62%",
      inf: "8.12",
      vram: "371.1",
      time: "13.0m",
      params: "7.04",
      log_key: "DenseNet121_Freeze",
    },
    {
      name: "MobileNetV2",
      strategy: "Freeze",
      acc: "69.96%",
      f1: "70.61%",
      inf: "7.80",
      vram: "365.5",
      time: "12.4m",
      params: "2.33",
      log_key: "MobileNetV2_Freeze",
    },
    {
      name: "VGG16",
      strategy: "Fine-tune",
      acc: "69.04%",
      f1: "69.09%",
      inf: "9.34",
      vram: "4644.5",
      time: "25.2m",
      params: "134.59",
      log_key: "VGG16_FineTune",
    },
    {
      name: "ResNet34",
      strategy: "Freeze",
      acc: "67.62%",
      f1: "68.35%",
      inf: "7.72",
      vram: "329.6",
      time: "12.3m",
      params: "21.33",
      log_key: "ResNet34_Freeze",
    },
    {
      name: "EfficientNetB0",
      strategy: "Freeze",
      acc: "66.44%",
      f1: "67.17%",
      inf: "8.04",
      vram: "371.8",
      time: "12.2m",
      params: "4.11",
      log_key: "EfficientNetB0_Freeze",
    },
  ];

  const approach2Results = [
    {
      name: "ResNet50 + LogReg",
      acc: "82.60%",
      f1: "82.66%",
      time: "0.7m",
      auc: "0.99",
      log_key: "ResNet50_LogReg",
    },
    {
      name: "ResNet50 + SVM",
      acc: "82.45%",
      f1: "82.54%",
      time: "13.5m",
      auc: "1.00",
      log_key: "ResNet50_SVM",
    },
    {
      name: "ResNet50 + MLP",
      acc: "81.48%",
      f1: "81.62%",
      time: "0.2m",
      auc: "0.99",
      log_key: "ResNet50_MLP",
    },
    {
      name: "ResNet50 + RF",
      acc: "81.33%",
      f1: "81.32%",
      time: "1.9m",
      auc: "0.99",
      log_key: "ResNet50_RandomForest",
    },
    {
      name: "ResNet50 + KNN",
      acc: "75.69%",
      f1: "76.04%",
      time: "0.1m",
      auc: "0.94",
      log_key: "ResNet50_KNN",
    },
    {
      name: "ResNet50 + NaiveBayes",
      acc: "64.43%",
      f1: "65.68%",
      time: "0.1m",
      auc: "0.92",
      log_key: "ResNet50_NaiveBayes",
    },
    {
      name: "EffNetB0 + LogReg",
      acc: "78.58%",
      f1: "78.87%",
      time: "0.6m",
      auc: "0.99",
      log_key: "EfficientNetB0_LogReg",
    },
    {
      name: "EffNetB0 + SVM",
      acc: "78.23%",
      f1: "78.23%",
      time: "6.6m",
      auc: "0.99",
      log_key: "EfficientNetB0_SVM",
    },
    {
      name: "EffNetB0 + MLP",
      acc: "77.70%",
      f1: "77.86%",
      time: "0.2m",
      auc: "0.99",
      log_key: "EfficientNetB0_MLP",
    },
    {
      name: "EffNetB0 + NB",
      acc: "76.69%",
      f1: "77.02%",
      time: "0.1m",
      auc: "0.97",
      log_key: "EfficientNetB0_NaiveBayes",
    },
    {
      name: "EffNetB0 + RF",
      acc: "75.27%",
      f1: "75.06%",
      time: "1.3m",
      auc: "0.98",
      log_key: "EfficientNetB0_RandomForest",
    },
    {
      name: "EffNetB0 + KNN",
      acc: "75.01%",
      f1: "75.55%",
      time: "0.1m",
      auc: "0.93",
      log_key: "EfficientNetB0_KNN",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header section */}
      <div className="mb-12 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-blue-100 rounded-2xl text-blue-600 shadow-sm">
            <ImageIcon size={40} />
          </div>
        </div>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Animal Classification
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Benchmarking Deep End-to-End Transfer Learning against Hybrid
          Feature-Extraction Architectures.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 bg-gray-100/80 backdrop-blur-sm p-2 rounded-[2rem] border border-gray-200 sticky top-4 z-50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-[1.5rem] font-bold transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-white text-blue-600 shadow-lg ring-1 ring-black/5 scale-105"
                : "text-gray-500 hover:bg-white/50 hover:text-gray-700"
            }`}
          >
            <tab.icon size={20} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px] pb-20">
        {/* 1. Data & Baselines Combined */}
        {activeTab === "data" && (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Section A: The Pipeline */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Data Preparation Pipeline
              </h2>
              <p className="text-lg text-gray-600">
                Transforming raw Kaggle images into standardized tensors for
                deep learning.
              </p>
            </div>

            <div className="relative py-12">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden lg:block"></div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
                {[
                  {
                    step: "01",
                    title: "Ingestion",
                    desc: "KaggleHub 'animals-detection-images-dataset' (80 Classes).",
                    icon: Database,
                  },
                  {
                    step: "02",
                    title: "Deduplication",
                    desc: "pHash (imagehash) scanning to purge 427 visual duplicates.",
                    icon: Filter,
                  },
                  {
                    step: "03",
                    title: "Geometry",
                    desc: "SafeResizeAndPad (LANCZOS) + 224x224 Constant Padding.",
                    icon: Maximize2,
                  },
                  {
                    step: "04",
                    title: "Statistics",
                    desc: "Global RGB Mean/Std calculated specifically for this dataset.",
                    icon: Activity,
                  },
                  {
                    step: "05",
                    title: "Imbalance",
                    desc: "WeightedRandomSampler using (1.0 / ClassCount) per sample.",
                    icon: GitMerge,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-3xl border border-gray-200 shadow-lg hover:border-blue-300 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-blue-200 shadow-lg group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <div className="text-[10px] font-black text-blue-600 mb-1 uppercase tracking-widest">
                      Step {item.step}
                    </div>
                    <h4 className="text-lg font-black text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section B: Visual Verification */}
            <div className="bg-white p-10 rounded-[3rem] border border-gray-200 shadow-xl overflow-hidden relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center flex items-center justify-center gap-3">
                <Maximize2 className="text-blue-500" /> Preprocessing
                Verification
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div className="space-y-6 text-center">
                  <img
                    src={sampleAugmented}
                    alt="Original Augmented"
                    className="aspect-square bg-gray-950 rounded-[2rem] border-4 border-gray-900 shadow-2xl object-contain mx-auto w-full"
                  />
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-xs font-black uppercase text-gray-500">
                    Original Augmented
                  </span>
                </div>
                <div className="space-y-6 text-center">
                  <img
                    src={transformationSample}
                    alt="Standardized Tensor"
                    className="aspect-square bg-gray-950 rounded-[2rem] border-4 border-gray-900 shadow-2xl object-contain mx-auto w-full"
                  />
                  <span className="px-4 py-2 bg-blue-100 rounded-full text-xs font-black uppercase text-blue-600">
                    Standardized Tensor (224x224)
                  </span>
                </div>
              </div>
            </div>

            {/* Section C: Data Challenges & Baselines */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Class Distribution Chart */}
              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 text-2xl flex items-center gap-3 mb-8">
                  <BarChart size={28} className="text-blue-600" /> Class
                  Imbalance Challenge
                </h3>
                <img
                  src={animalClassDist}
                  alt="Class Distribution"
                  className="w-full rounded-2xl mb-6 shadow-md"
                />
                <p className="text-gray-500 text-sm italic">
                  The extreme variance in sample counts required{" "}
                  <strong>Weighted Sampling</strong> to prevent majority-class
                  bias.
                </p>
              </div>

              {/* Performance Floor Section (Real Notebook Data) */}
              <div className="bg-gradient-to-br from-red-50 to-white p-10 rounded-[2.5rem] border border-red-100 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-red-900 text-2xl flex items-center gap-3 mb-6">
                    <Trophy size={28} className="text-red-600" /> Establishing
                    the Floor
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    Before applying fine-tuning (Approach 1) or complex ML
                    (Approach 2), we established our performance "bottom" using
                    frozen backbones and simple classifiers.
                  </p>
                  <div className="space-y-4">
                    <div className="p-5 bg-white rounded-2xl border border-red-200 shadow-sm flex justify-between items-center">
                      <span className="font-bold text-gray-700">
                        ResNet50 + Naive Bayes
                      </span>
                      <span className="font-black text-red-600 text-xl">
                        64.43%
                      </span>
                    </div>
                    <div className="p-5 bg-white rounded-2xl border border-red-200 shadow-sm flex justify-between items-center">
                      <span className="font-bold text-gray-700">
                        EfficientNetB0 (Frozen)
                      </span>
                      <span className="font-black text-orange-600 text-xl">
                        66.44%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-red-100/50 rounded-2xl border border-red-100 italic text-red-800 text-sm">
                  <strong>Note:</strong> Crossing the 80% threshold requires
                  moving beyond these "frozen" or "simple" baseline logic paths.
                </div>
              </div>
            </div>

            {/* Section D: Duplicate Detection & Split - ENLARGED VERSION */}
            <div className="space-y-12">
              {/* 1. pHash Duplicate Detection - Expanded Row */}
              <div className="bg-amber-50 p-10 lg:p-16 rounded-[4rem] border border-amber-100 shadow-sm overflow-hidden">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                  <div className="lg:w-1/2 group">
                    <img
                      src={duplicatedSample}
                      alt="Duplicate Detection"
                      className="w-full rounded-[3rem] shadow-2xl transform group-hover:rotate-0 -rotate-2 transition-transform duration-500 border-4 border-white"
                    />
                    <p className="text-center text-amber-500 font-black text-[10px] uppercase tracking-tighter mt-6">
                      Visual Hash Match Example
                    </p>
                  </div>
                  <div className="lg:w-1/2 space-y-6">
                    <div className="inline-block p-4 bg-amber-200/50 rounded-3xl text-amber-600">
                      <Search size={40} />
                    </div>
                    <h4 className="text-4xl font-black text-amber-900 tracking-tight">
                      pHash Quality Control
                    </h4>
                    <p className="text-amber-800/80 text-xl leading-relaxed font-medium">
                      To maintain data integrity, we purged{" "}
                      <strong>926  visual duplicates</strong>. Using Perceptual
                      Hashing (pHash), we identified images that were identical
                      pixel-for-pixel or slightly modified, ensuring no data
                      leakage exists between Training and Validation sets.
                    </p>
                    <div className="flex gap-4">
                      <div className="px-6 py-3 bg-white rounded-2xl border border-amber-200 text-amber-700 font-bold shadow-sm">
                        -926  Samples
                      </div>
                      <div className="px-6 py-3 bg-white rounded-2xl border border-amber-200 text-amber-700 font-bold shadow-sm">
                        Zero Leakage
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Dataset Stratification - Full Width Card */}
              <div className="bg-white p-10 lg:p-16 rounded-[4rem] border border-gray-200 shadow-2xl text-center">
                <div className="max-w-4xl mx-auto space-y-10">
                  <div className="space-y-4">
                    <h4 className="text-3xl font-black text-gray-900 tracking-tight flex items-center justify-center gap-4">
                      <GitMerge className="text-blue-600" size={32} />
                      Dataset Stratification
                    </h4>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                      A stratified 70/15/15 split was applied to ensure each of
                      the 80 classes is represented proportionally across all
                      training phases.
                    </p>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <img
                      src={splitDistribution}
                      alt="Split Distribution"
                      className="relative w-full rounded-[2.5rem] shadow-xl border border-gray-100"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-8 pt-8">
                    <div>
                      <div className="text-3xl font-black text-blue-600">
                        70%
                      </div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                        Train
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-purple-600">
                        15%
                      </div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                        Val
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-indigo-600">
                        15%
                      </div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                        Test
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. Approach 1: Transfer Learning */}
        {activeTab === "approach1" && (
          <div className="space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-blue-600 font-black text-sm uppercase tracking-[0.2em]">
                Strategy 1
              </span>
              <h2 className="text-5xl font-black text-gray-900 mt-4 mb-6">
                End-to-End Fine-Tuning
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Adapting SOTA architectures (EfficientNet, ResNet) by unfreezing
                layers and retraining on animal-specific features.
              </p>
            </div>

            {/* Detailed Pipeline Flow for App 1 */}
            <div className="relative py-12">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-50 -translate-y-1/2 hidden lg:block"></div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
                {[
                  {
                    step: "01",
                    title: "Head Surgery",
                    desc: "Dynamic replacement of FC/Classifier/Heads based on backbone type.",
                    icon: Settings,
                  },
                  {
                    step: "02",
                    title: "Tune Strategy",
                    desc: "Comparison of Full Fine-Tuning (1e-4 LR) vs. Locked Backbones (1e-3 LR).",
                    icon: GitMerge,
                  },
                  {
                    step: "03",
                    title: "Loss & Opt",
                    desc: "CrossEntropyLoss + Adam Optimizer with specific requires_grad filtering.",
                    icon: Zap,
                  },
                  {
                    step: "04",
                    title: "Adaptive LR",
                    desc: "ReduceLROnPlateau (Factor 0.1, Patience 2) monitoring Val Loss.",
                    icon: CheckCircle2,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-[2.5rem] border border-blue-100 shadow-xl hover:shadow-2xl transition-all group text-center"
                  >
                    <div className="w-16 h-16 rounded-3xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-blue-200 shadow-2xl group-hover:rotate-6 transition-transform mx-auto">
                      <item.icon size={32} />
                    </div>
                    <div className="text-xs font-black text-blue-500 mb-2 uppercase tracking-tighter">
                      Phase {item.step}
                    </div>
                    <h4 className="text-xl font-black text-gray-900 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-16">
              <div className="bg-white p-12 rounded-[3.5rem] border border-gray-200 shadow-2xl">
                <h3 className="text-3xl font-black text-gray-900 mb-12 text-center flex items-center justify-center gap-4">
                  <Activity className="text-blue-500" /> Training Performance
                  Curves
                </h3>
                <div className="max-w-6xl mx-auto">
                  <img
                    src={valAccLossApp1}
                    alt="Validation Accuracy/Loss"
                    className="w-full rounded-[2.5rem] shadow-2xl"
                  />
                </div>
              </div>

              <div className="bg-white p-12 rounded-[3.5rem] border border-gray-200 shadow-2xl">
                <h3 className="text-3xl font-black text-gray-900 mb-12 text-center flex items-center justify-center gap-4">
                  <BarChart className="text-blue-500" /> Architecture
                  Benchmarking
                </h3>
                <div className="max-w-6xl mx-auto">
                  <img
                    src={comparisonApp1}
                    alt="Approach 1 Comparison"
                    className="w-full rounded-[2.5rem] shadow-2xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-white p-12 rounded-[3.5rem] border border-gray-200 shadow-2xl">
                  <h3 className="text-2xl font-black text-gray-900 mb-10 text-center uppercase tracking-widest text-blue-600">
                    Confusion Matrix
                  </h3>
                  <div className="max-w-2xl mx-auto">
                    <img
                      src={confusionMatrixApp1}
                      alt="Confusion Matrix"
                      className="w-full rounded-2xl shadow-xl border border-gray-100"
                    />
                  </div>
                </div>
                <div className="bg-white p-12 rounded-[3.5rem] border border-gray-200 shadow-2xl">
                  <h3 className="text-2xl font-black text-gray-900 mb-10 text-center uppercase tracking-widest text-blue-600">
                    ROC-AUC Performance
                  </h3>
                  <div className="max-w-2xl mx-auto">
                    <img
                      src={rocCurveApp1}
                      alt="ROC Curve"
                      className="w-full rounded-2xl shadow-xl border border-gray-100"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-950 p-12 rounded-[4rem] text-white shadow-3xl">
              <h3 className="text-3xl font-black mb-10 text-center">
                Experimental Results: Deep Transfer Learning
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="border-b border-gray-800 text-gray-500 uppercase text-xs font-black tracking-widest">
                    <tr>
                      <th className="px-8 py-6">Architecture</th>
                      <th className="px-8 py-6 text-center">Accuracy</th>
                      <th className="px-8 py-6 text-center">F1-Score</th>
                      <th className="px-8 py-6 text-center">Inf (ms)</th>
                      <th className="px-8 py-6 text-center">VRAM (MB)</th>
                      <th className="px-8 py-6 text-center">Params (M)</th>
                      <th className="px-8 py-6 text-center">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-900">
                    {approach1Results.map((m, i) => (
                      <tr
                        key={i}
                        className="hover:bg-white/5 transition-colors group"
                      >
                        <td className="px-8 py-6 font-black text-lg">
                          {m.name}
                          <span
                            className={`text-[10px] uppercase ml-2 px-2 py-0.5 rounded ${m.strategy === "Fine-tune" ? "bg-blue-500/20 text-blue-400" : "bg-gray-700 text-gray-400"}`}
                          >
                            {m.strategy}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-center font-mono text-blue-400 text-xl font-black">
                          {m.acc}
                        </td>
                        <td className="px-8 py-6 text-center font-mono text-gray-400">
                          {m.f1}
                        </td>
                        <td className="px-8 py-6 text-center font-mono text-gray-500">
                          {m.inf}
                        </td>
                        <td className="px-8 py-6 text-center font-mono text-gray-500">
                          {m.vram}
                        </td>
                        <td className="px-8 py-6 text-center font-mono text-gray-500">
                          {m.params}
                        </td>
                        <td className="px-8 py-6 text-center text-gray-500 text-sm">
                          {m.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 4. Approach 2: Hybrid */}
        {activeTab === "approach2" && (
          <div className="space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-purple-600 font-black text-sm uppercase tracking-[0.2em]">
                Strategy 2
              </span>
              <h2 className="text-5xl font-black text-gray-900 mt-4 mb-6">
                Feature Extraction Hybrid
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Leveraging pre-trained deep features as static inputs to
                efficient classical ML classifiers (SVM, Logistic Regression).
              </p>
            </div>

            {/* Detailed Pipeline Flow for App 2 */}
            <div className="relative py-12">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-purple-50 -translate-y-1/2 hidden lg:block"></div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
                {[
                  {
                    step: "01",
                    title: "Feature Mining",
                    desc: "CNN backbones stripped to Identity layers to extract high-dim vectors.",
                    icon: Cpu,
                  },
                  {
                    step: "02",
                    title: "Flattening",
                    desc: "Converting Global Avg Pool outputs into 1D feature embeddings.",
                    icon: Layers,
                  },
                  {
                    step: "03",
                    title: "ML Suite",
                    desc: "Training 6 Classifiers: SVM, RF, LogReg, KNN, MLP, and Naive Bayes.",
                    icon: Filter,
                  },
                  {
                    step: "04",
                    title: "Metric OvR",
                    desc: "One-vs-Rest AUC-ROC scoring for multi-class probability evaluation.",
                    icon: Activity,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-[2.5rem] border border-purple-100 shadow-xl hover:shadow-2xl transition-all group text-center"
                  >
                    <div className="w-16 h-16 rounded-3xl bg-purple-600 text-white flex items-center justify-center mb-6 shadow-purple-200 shadow-2xl group-hover:-rotate-6 transition-transform mx-auto">
                      <item.icon size={32} />
                    </div>
                    <div className="text-xs font-black text-purple-500 mb-2 uppercase tracking-tighter">
                      Phase {item.step}
                    </div>
                    <h4 className="text-xl font-black text-gray-900 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-white p-12 rounded-[3.5rem] border border-gray-200 shadow-2xl">
                  <h3 className="text-2xl font-black text-gray-900 mb-10 text-center uppercase tracking-widest text-purple-600">
                    Feature Confusion Matrix
                  </h3>
                  <div className="max-w-2xl mx-auto">
                    <img
                      src={confusionMatrixApp2}
                      alt="Confusion Matrix Hybrid"
                      className="w-full rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
                <div className="bg-white p-12 rounded-[3.5rem] border border-gray-200 shadow-2xl">
                  <h3 className="text-2xl font-black text-gray-900 mb-10 text-center uppercase tracking-widest text-purple-600">
                    Hybrid ROC Curves
                  </h3>
                  <div className="max-w-2xl mx-auto">
                    <img
                      src={rocCurveApp2}
                      alt="ROC Curve Hybrid"
                      className="w-full rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-16 rounded-[4rem] border border-gray-200 shadow-2xl">
                <h3 className="text-4xl font-black text-gray-900 mb-16 text-center">
                  Hybrid Performance Benchmarks
                </h3>
                <div className="max-w-6xl mx-auto space-y-24">
                  <div className="group">
                    <img
                      src={comparisonApp2}
                      alt="Approach 2 Comparison"
                      className="w-full rounded-[3rem] shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    <div className="mt-10 flex items-center justify-center gap-4">
                      <div className="h-0.5 w-12 bg-purple-200"></div>
                      <p className="text-lg font-black text-gray-400 uppercase tracking-[0.3em]">
                        Accuracy Benchmark
                      </p>
                      <div className="h-0.5 w-12 bg-purple-200"></div>
                    </div>
                  </div>
                  <div className="group pt-24 border-t border-gray-100">
                    <img
                      src={accuracyF1ComparisonApp2}
                      alt="Accuracy F1 Comparison"
                      className="w-full rounded-[3rem] shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    <div className="mt-10 flex items-center justify-center gap-4">
                      <div className="h-0.5 w-12 bg-purple-200"></div>
                      <p className="text-lg font-black text-gray-400 uppercase tracking-[0.3em]">
                        Precision-Recall Analysis
                      </p>
                      <div className="h-0.5 w-12 bg-purple-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-950 p-12 rounded-[4rem] text-white shadow-3xl">
              <h3 className="text-3xl font-black mb-10 text-center">
                Experimental Results: Hybrid Models
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="border-b border-gray-800 text-gray-500 uppercase text-xs font-black tracking-widest">
                    <tr>
                      <th className="px-8 py-6">Hybrid Configuration</th>
                      <th className="px-8 py-6 text-center">Accuracy</th>
                      <th className="px-8 py-6 text-center">F1-Score</th>
                      <th className="px-8 py-6 text-center">AUC-ROC</th>
                      <th className="px-8 py-6 text-center">Train Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-900">
                    {approach2Results.map((m, i) => (
                      <tr
                        key={i}
                        className="hover:bg-white/5 transition-colors group"
                      >
                        <td className="px-8 py-6 font-black text-lg">
                          {m.name}
                        </td>
                        <td className="px-8 py-6 text-center font-mono text-purple-400 text-xl font-black">
                          {m.acc}
                        </td>
                        <td className="px-8 py-6 text-center font-mono text-gray-400">
                          {m.f1}
                        </td>
                        <td className="px-8 py-6 text-center font-mono text-purple-300">
                          {m.auc}
                        </td>
                        <td className="px-8 py-6 text-center text-gray-500 text-sm">
                          {m.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-purple-900 p-16 rounded-[4rem] text-white shadow-3xl overflow-hidden relative">
              <div className="absolute top-0 right-0 p-16 opacity-10">
                <Cpu size={240} />
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-black mb-12 text-center">
                  Why Hybrid Wins Efficiency?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
                    <h4 className="text-2xl font-black text-purple-300 mb-4">
                      Constant Latency
                    </h4>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Feature extraction is done once. Retraining a Logistic
                      Regression model on 8,000 samples takes{" "}
                      <strong className="text-white">
                        less than 2 seconds
                      </strong>{" "}
                      compared to 20 minutes for fine-tuning.
                    </p>
                  </div>
                  <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
                    <h4 className="text-2xl font-black text-purple-300 mb-4">
                      Feature Separation
                    </h4>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Deep backbones like ResNet50 provide such high-quality
                      embeddings that linear boundaries in high-dimensional
                      space (2,048-D) are sufficient for 80 classes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. Comparative Analysis Tab */}
        {activeTab === "analysis" && (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-blue-600 font-black text-sm uppercase tracking-[0.2em]">
                Cross-Paradigm Evaluation
              </span>
              <h2 className="text-5xl font-black text-gray-900 mt-4 mb-6">
                The Master Leaderboard
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                A unified comparison of all 26 model configurations, ranking
                them by accuracy and computational efficiency.
              </p>
            </div>

            {/* Top 3 Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-[2.5rem] border border-green-100 shadow-lg relative overflow-hidden">
                <Trophy
                  className="absolute -right-4 -bottom-4 text-green-200/50"
                  size={120}
                />
                <div className="relative z-10">
                  <h4 className="text-green-800 font-black uppercase text-xs tracking-widest mb-2">
                    Accuracy Champion
                  </h4>
                  <div className="text-4xl font-black text-green-600 mb-2">
                    82.63%
                  </div>
                  <div className="text-sm font-bold text-gray-600">
                    EfficientNetB1
                  </div>
                  <div className="text-[10px] text-green-500 uppercase font-black">
                    Fine-Tuning Strategy
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-[2.5rem] border border-blue-100 shadow-lg relative overflow-hidden">
                <Zap
                  className="absolute -right-4 -bottom-4 text-blue-200/50"
                  size={120}
                />
                <div className="relative z-10">
                  <h4 className="text-blue-800 font-black uppercase text-xs tracking-widest mb-2">
                    Inference Efficiency
                  </h4>
                  <div className="text-4xl font-black text-blue-600 mb-2">
                    82.60%
                  </div>
                  <div className="text-sm font-bold text-gray-600">
                    ResNet50 + LogReg
                  </div>
                  <div className="text-[10px] text-blue-500 uppercase font-black">
                    0.7 Min Training Time
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-[2.5rem] border border-purple-100 shadow-lg relative overflow-hidden">
                <Database
                  className="absolute -right-4 -bottom-4 text-purple-200/50"
                  size={120}
                />
                <div className="relative z-10">
                  <h4 className="text-purple-800 font-black uppercase text-xs tracking-widest mb-2">
                    Smallest Footprint
                  </h4>
                  <div className="text-4xl font-black text-purple-600 mb-2">
                    2.33M
                  </div>
                  <div className="text-sm font-bold text-gray-600">
                    MobileNetV2
                  </div>
                  <div className="text-[10px] text-purple-500 uppercase font-black">
                    Total Parameters
                  </div>
                </div>
              </div>
            </div>

            {/* Main Results Table */}
            <div className="bg-gray-950 rounded-[3rem] overflow-hidden shadow-3xl border border-gray-800">
              <div className="p-8 border-b border-gray-900 flex justify-between items-center">
                <h3 className="text-white text-2xl font-black">
                  Comprehensive Benchmarking Table
                </h3>
                <div className="flex gap-4">
                  <span className="flex items-center gap-2 text-[10px] text-blue-400 font-black uppercase">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>{" "}
                    Deep Learning
                  </span>
                  <span className="flex items-center gap-2 text-[10px] text-purple-400 font-black uppercase">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>{" "}
                    Hybrid ML
                  </span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-900/50 text-gray-400 uppercase text-[10px] font-black tracking-widest">
                      <th className="px-8 py-5">Rank</th>
                      <th className="px-8 py-5">Model Configuration</th>
                      <th className="px-8 py-5">Type</th>
                      <th className="px-8 py-5 text-center">Accuracy</th>
                      <th className="px-8 py-5 text-center">F1 Score</th>
                      <th className="px-8 py-5 text-center">AUC-ROC</th>
                      <th className="px-8 py-5 text-center">Train Time</th>
                      <th className="px-8 py-5 text-center">VRAM (MB)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-900">
                    {[
                      {
                        name: "EfficientNetB1_FineTune",
                        arch: "EffNetB1",
                        type: "DL",
                        strategy: "Fine-tune",
                        acc: 82.63,
                        f1: 82.45,
                        auc: "-",
                        time: "13.8m",
                        vram: "457.5",
                      },
                      {
                        name: "ResNet50_LogReg",
                        arch: "ResNet50",
                        type: "Hybrid",
                        strategy: "LogReg",
                        acc: 82.6,
                        f1: 82.66,
                        auc: "0.99",
                        time: "0.7m",
                        vram: "-",
                      },
                      {
                        name: "ResNet50_SVM",
                        arch: "ResNet50",
                        type: "Hybrid",
                        strategy: "SVM",
                        acc: 82.45,
                        f1: 82.54,
                        auc: "1.00",
                        time: "13.5m",
                        vram: "-",
                      },
                      {
                        name: "ResNet50_FineTune",
                        arch: "ResNet50",
                        type: "DL",
                        strategy: "Fine-tune",
                        acc: 81.74,
                        f1: 81.75,
                        auc: "-",
                        time: "19.1m",
                        vram: "722.9",
                      },
                      {
                        name: "ResNet50_MLP",
                        arch: "ResNet50",
                        type: "Hybrid",
                        strategy: "MLP",
                        acc: 81.48,
                        f1: 81.62,
                        auc: "0.99",
                        time: "0.2m",
                        vram: "-",
                      },
                      {
                        name: "ResNet50_RandomForest",
                        arch: "ResNet50",
                        type: "Hybrid",
                        strategy: "RF",
                        acc: 81.33,
                        f1: 81.32,
                        auc: "0.99",
                        time: "1.9m",
                        vram: "-",
                      },
                      {
                        name: "EfficientNetB0_FineTune",
                        arch: "EffNetB0",
                        type: "DL",
                        strategy: "Fine-tune",
                        acc: 81.15,
                        f1: 81.08,
                        auc: "-",
                        time: "13.2m",
                        vram: "418.1",
                      },
                      {
                        name: "ResNet50_Freeze",
                        arch: "ResNet50",
                        type: "DL",
                        strategy: "Freeze",
                        acc: 79.32,
                        f1: 79.62,
                        auc: "-",
                        time: "12.6m",
                        vram: "446.5",
                      },
                      {
                        name: "EfficientNetB0_LogReg",
                        arch: "EffNetB0",
                        type: "Hybrid",
                        strategy: "LogReg",
                        acc: 78.58,
                        f1: 78.87,
                        auc: "0.99",
                        time: "0.6m",
                        vram: "-",
                      },
                      {
                        name: "EfficientNetB0_SVM",
                        arch: "EffNetB0",
                        type: "Hybrid",
                        strategy: "SVM",
                        acc: 78.23,
                        f1: 78.23,
                        auc: "0.99",
                        time: "6.6m",
                        vram: "-",
                      },
                      {
                        name: "MobileNetV2_FineTune",
                        arch: "MobileNetV2",
                        type: "DL",
                        strategy: "Fine-tune",
                        acc: 77.87,
                        f1: 77.86,
                        auc: "-",
                        time: "13.0m",
                        vram: "391.6",
                      },
                      {
                        name: "EfficientNetB0_MLP",
                        arch: "EffNetB0",
                        type: "Hybrid",
                        strategy: "MLP",
                        acc: 77.7,
                        f1: 77.86,
                        auc: "0.99",
                        time: "0.2m",
                        vram: "-",
                      },
                      {
                        name: "DenseNet121_FineTune",
                        arch: "DenseNet121",
                        type: "DL",
                        strategy: "Fine-tune",
                        acc: 76.84,
                        f1: 77.06,
                        auc: "-",
                        time: "17.1m",
                        vram: "450.8",
                      },
                      {
                        name: "EfficientNetB0_NB",
                        arch: "EffNetB0",
                        type: "Hybrid",
                        strategy: "NB",
                        acc: 76.69,
                        f1: 77.02,
                        auc: "0.97",
                        time: "0.1m",
                        vram: "-",
                      },
                      {
                        name: "ResNet50_KNN",
                        arch: "ResNet50",
                        type: "Hybrid",
                        strategy: "KNN",
                        acc: 75.69,
                        f1: 76.04,
                        auc: "0.94",
                        time: "0.1m",
                        vram: "-",
                      },
                      {
                        name: "EffNetB1_Freeze",
                        arch: "EffNetB1",
                        type: "DL",
                        strategy: "Freeze",
                        acc: 75.13,
                        f1: 75.36,
                        auc: "-",
                        time: "12.3m",
                        vram: "381.4",
                      },
                      {
                        name: "VGG16_Freeze",
                        arch: "VGG16",
                        type: "DL",
                        strategy: "Freeze",
                        acc: 72.82,
                        f1: 73.33,
                        auc: "-",
                        time: "13.5m",
                        vram: "3103.4",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-white/5 transition-colors group"
                      >
                        <td className="px-8 py-5 font-mono text-gray-600 text-xs">
                          {i + 1}
                        </td>
                        <td className="px-8 py-5">
                          <div className="font-black text-gray-200">
                            {row.name}
                          </div>
                          <div className="text-[10px] text-gray-500 font-bold uppercase">
                            {row.arch}
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <span
                            className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                              row.type === "DL"
                                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                            }`}
                          >
                            {row.strategy}
                          </span>
                        </td>
                        <td
                          className={`px-8 py-5 text-center font-black text-lg ${row.acc >= 80 ? "text-green-400" : "text-gray-400"}`}
                        >
                          {row.acc}%
                        </td>
                        <td className="px-8 py-5 text-center font-mono text-gray-500 text-sm">
                          {row.f1}%
                        </td>
                        <td className="px-8 py-5 text-center font-mono text-gray-500 text-sm">
                          {row.auc === "-" ? (
                            <span className="text-gray-800">-</span>
                          ) : (
                            row.auc
                          )}
                        </td>
                        <td className="px-8 py-5 text-center text-gray-400 text-xs font-bold">
                          {row.time}
                        </td>
                        <td className="px-8 py-5 text-center text-gray-600 font-mono text-xs">
                          {row.vram === "-" ? (
                            <span className="text-gray-800">N/A</span>
                          ) : (
                            row.vram
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-gray-900/30 text-center">
                <p className="text-gray-500 text-xs italic">
                  Table displays the top 17 performing configurations out of 26
                  tested.
                </p>
              </div>
            </div>
            {/* Keeping existing image as requested */}
            <div className="bg-white p-12 rounded-[3.5rem] border border-gray-200 shadow-2xl">
              <h3 className="text-3xl font-black text-gray-900 mb-12 text-center">
                Performance Comparison Chart
              </h3>
              <div className="max-w-6xl mx-auto">
                <img
                  src={overallComparison}
                  alt="Overall Comparison"
                  className="w-full rounded-[2rem] shadow-2xl"
                />
              </div>
            </div>

            {/* Insight Box */}
            <div className="bg-blue-950 p-10 rounded-[3.5rem] border border-blue-800/50 shadow-2xl relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="p-6 bg-blue-500/20 rounded-[2rem] text-blue-400">
                  <Lightbulb size={48} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-white">
                    Efficiency Insight
                  </h3>
                  <p className="text-blue-200/70 text-lg leading-relaxed">
                    The data reveals a critical "Performance Plateau":
                    <strong className="text-white">
                      {" "}
                      Approach 2 (Hybrid)
                    </strong>{" "}
                    achieves 99.9% of the top accuracy while requiring
                    <strong className="text-white">
                      {" "}
                      95% less training time
                    </strong>
                    . For 80-class animal classification, using ResNet50 as a
                    static feature extractor for a Logistic Regression head
                    provides the best industrial trade-off.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "explainability" && (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Model Interpretability (Grad-CAM)
              </h2>
              <p className="text-lg text-gray-600">
                Visualizing high-activation regions to ensure the model focuses
                on biological traits rather than background noise.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-900 p-8 rounded-[3rem] shadow-2xl relative group">
                <div className="bg-gray-900 p-8 rounded-[3rem] shadow-2xl relative group">
                  <img
                    src={transformationSample}
                    alt="Grad-CAM Visualization"
                    className="w-full rounded-2xl shadow-xl"
                  />
                  <div className="mt-6 flex justify-between items-center text-white">
                    <span className="font-mono text-blue-400 text-xs">
                      Target: model.layer4[-1]
                    </span>
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                      Attention Heatmap
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center text-white">
                  <span className="font-mono text-blue-400">
                    Layer: model.layer4[-1]
                  </span>
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                    Class: Lion
                  </span>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl">
                  <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                    <Search className="text-blue-500" /> Feature Localization
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    By extracting gradients from the final convolutional layer,
                    we produce a heatmap showing where the model "looked." For
                    animals, high activations typically concentrate on{" "}
                    <strong>
                      facial structures, silhouettes, and texture patterns
                    </strong>
                    .
                  </p>
                </div>

                <div className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl">
                  <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                    <Maximize2 className="text-green-500" /> Class Activation
                    Mapping
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    This technique prevents "Shortcut Learning," where a model
                    might identify a 'Fish' based only on 'Blue Water.' Grad-CAM
                    verifies the model is identifying the{" "}
                    <strong>animal itself</strong>.
                  </p>
                </div>
                <div className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl">
                  <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                    <Search className="text-blue-500" /> Layer Activation
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    The notebook implements <code>pytorch_grad_cam</code>{" "}
                    targeting the final convolutional layers. For ResNet
                    variants, we target <code>layer4</code> to see how
                    biological features like ears, fur texture, and silhouettes
                    contribute to the final logit.
                  </p>
                </div>
                <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100">
                  <h4 className="text-blue-900 font-bold mb-2">
                    Technical Implementation:
                  </h4>
                  <p className="text-blue-800/70 text-sm font-mono">
                    grayscale_cam = cam(input_tensor=input_tensor,
                    targets=[ClassifierOutputTarget(label)])
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-10 rounded-[2.5rem] border border-blue-100">
              <h4 className="text-blue-900 font-bold mb-4 text-center">
                Architectural Target Layers used for Visualizing:
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "ResNet: layer4",
                  "VGG: features[-1]",
                  "EfficientNet: features[-1]",
                  "MobileNet: features[-1]",
                ].map((layer, i) => (
                  <span
                    key={i}
                    className="bg-white px-4 py-2 rounded-xl text-sm font-mono text-blue-600 shadow-sm border border-blue-100"
                  >
                    {layer}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "conclusion" && (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-block p-4 bg-amber-100 rounded-3xl text-amber-600 mb-4">
                <Trophy size={64} />
              </div>
              <h2 className="text-5xl font-black text-gray-900">
                Final Project Summary
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                This study confirms that for a diverse 80-class animal dataset,{" "}
                <strong>Transfer Learning</strong> is non-negotiable,
                outperforming scratch models by over 35% in accuracy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-10 rounded-[3rem] text-white shadow-2xl">
                <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <Lightbulb /> The "Best" Model
                </h3>
                <p className="text-blue-100 text-lg mb-8">
                  <strong>EfficientNetB1 (Fine-tuned)</strong> is the winner for
                  high-accuracy requirements. Its compound scaling allows it to
                  capture fine-grained differences between similar animal
                  species (e.g., various big cats).
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-bold">
                    <CheckCircle2 className="text-blue-300" /> 82.63% Accuracy
                  </li>
                  <li className="flex items-center gap-3 font-bold">
                    <CheckCircle2 className="text-blue-300" /> Robust
                    Multi-class F1
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-10 rounded-[3rem] text-white shadow-2xl">
                <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <Terminal /> The "Optimal" Pipeline
                </h3>
                <p className="text-purple-100 text-lg mb-8">
                  For production environments with limited GPU resources,{" "}
                  <strong>ResNet50 + Logistic Regression</strong> is
                  recommended. It matches the top accuracy while reducing
                  training time by 95%.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-bold">
                    <CheckCircle2 className="text-purple-300" /> ~0.7 Min
                    Training
                  </li>
                  <li className="flex items-center gap-3 font-bold">
                    <CheckCircle2 className="text-purple-300" /> No complex
                    optimizer tuning
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="bg-white p-12 rounded-[3rem] border border-gray-200 shadow-sm text-center">
              <h3 className="text-3xl font-black mb-6">Final Takeaway</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Pre-trained convolutional features are remarkably generalizable.
                In the Animal Kingdom classification task, the bottleneck is
                often <strong>data quality</strong> (duplicates, aspect ratio)
                rather than <strong>architecture depth</strong>. Cleaning the
                dataset via pHash contributed more to reliability than switching
                from ResNet50 to larger models.
              </p>
            </div> */}
            <div className="flex flex-col items-center justify-center py-10 animate-in zoom-in-95 duration-500">
              <div className="max-w-5xl w-full flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 1. Data Quality */}
                  <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-emerald-500 rounded-lg text-white">
                        <CheckCircle2 size={20} />
                      </div>
                      <h3 className="text-xl font-black text-emerald-800">
                        1. Data Quality & Preprocessing
                      </h3>
                    </div>
                    <p className="text-emerald-700/80 leading-relaxed">
                      The use of <strong>pHash (Perceptual Hashing)</strong> to
                      purge 427 visual duplicates was the single most effective
                      step for ensuring model reliability. Additionally, the{" "}
                      <strong>SafeResizeAndPad</strong> strategy ensured the
                      models learned from consistent animal silhouettes without
                      geometric distortion.
                    </p>
                  </div>

                  {/* 2. Fine-Tuning vs Freezing */}
                  <div className="bg-blue-50 border border-blue-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-500 rounded-lg text-white">
                        <Zap size={20} />
                      </div>
                      <h3 className="text-xl font-black text-blue-800">
                        2. Accuracy Leader: Fine-Tuning
                      </h3>
                    </div>
                    <p className="text-blue-700/80 leading-relaxed">
                      End-to-end Deep Learning reached its peak when{" "}
                      <strong>fully fine-tuned</strong>. EfficientNetB1 achieved
                      the highest score of <strong>82.63%</strong> accuracy,
                      proving that adapting pre-trained weights to specific
                      biological features is superior to using generic frozen
                      backbones.
                    </p>
                  </div>

                  {/* 3. Hybrid Efficiency */}
                  <div className="bg-purple-50 border border-purple-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-500 rounded-lg text-white">
                        <Cpu size={20} />
                      </div>
                      <h3 className="text-xl font-black text-purple-800">
                        3. Hybrid ML Performance
                      </h3>
                    </div>
                    <p className="text-purple-700/80 leading-relaxed">
                      The <strong>ResNet50 + Logistic Regression</strong> hybrid
                      was the most efficient configuration. It matched the top
                      accuracy (<strong>82.60%</strong>) but required{" "}
                      <strong>95% less training time</strong> (0.7 minutes),
                      making it the definitive choice for rapid prototyping.
                    </p>
                  </div>

                  {/* 4. Resource Management */}
                  <div className="bg-amber-50 border border-amber-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-amber-500 rounded-lg text-white">
                        <Settings size={20} />
                      </div>
                      <h3 className="text-xl font-black text-amber-800">
                        4. Edge & VRAM Optimization
                      </h3>
                    </div>
                    <p className="text-amber-700/80 leading-relaxed">
                      For deployment on restricted hardware,{" "}
                      <strong>MobileNetV2</strong> demonstrated the best
                      balance, using only <strong>391MB of VRAM</strong>{" "}
                      compared to VGG16's 4644MB. This 91% reduction in memory
                      usage makes it ideal for mobile or edge-based animal
                      detection.
                    </p>
                  </div>
                </div>

                {/* Final Verdict Box */}
                <div className="mt-8 bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Lightbulb size={120} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                      <Info className="text-amber-400" /> Deployment
                      Recommendations
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed italic">
                      "For absolute precision, deploy{" "}
                      <strong>EfficientNetB1 Fine-tuned</strong>. For production
                      systems requiring frequent updates or limited compute, the{" "}
                      <strong>ResNet50 + Hybrid</strong> approach provides
                      near-identical accuracy with negligible training
                      overhead."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageClassification;
