# 📊 Exploratory Data Analysis for Multi-Modal Data  
**Course:** Programming for Artificial Intelligence and Data Science (P4AI-DS) – CO3135  
**Institution:** Ho Chi Minh City University of Technology (HCMUT), VNU-HCM  
**Instructor:** Dr. Thanh-Sach Le  
**Semester:** Fall 2025–2026  

---

## 📌 Overview
This project presents a comprehensive **Exploratory Data Analysis (EDA)** across **four data modalities**:

- 📋 Tabular Data  
- 🖼️ Image Data  
- 📝 Text Data  
- 🔗 Multimodal Data (Image + Text)

The goal is to systematically explore, analyze, and visualize datasets to uncover patterns, detect issues, and prepare for downstream AI/ML tasks.

---

## 🚀 Project Structure

```.
├── tabular_eda.ipynb
├── image_eda.ipynb
├── text_eda.ipynb
├── multimodal_eda.ipynb
├── report.pdf
└── README.md
```

---

## 👥 Team Members

| Name | Student ID | Responsibility |
|------|-----------|----------------|
| Pham Nam An | 2352016 | Tabular EDA |
| Cao Thanh Bang | 2352114 | Text & Multimodal EDA |
| Luong Tan Tai | 2353059 | Image & Multimodal EDA |

---

## 📊 Datasets

### 1. Tabular Dataset – Titanic
- 891 samples, 12 features  
- Target: `Survived`  
- Mixed numerical & categorical features  

### 2. Image Dataset – Rice Varieties
- 4,730 original images + augmented data  
- 20 classes  
- Balanced distribution  

### 3. Text Dataset – Amazon Kindle Reviews
- 12,000 reviews  
- Includes rating, review text, helpfulness  

### 4. Multimodal Dataset – Flickr30k
- ~31,000 images  
- ~158,000 captions  
- Image-caption pairs (1 image ↔ 5 captions)

---

## 🔍 EDA Methodology

### 🧮 Tabular Data Analysis
- Data profiling (shape, schema, types)
- Missing value analysis:
  - `Cabin`: ~77% missing (critical)
  - `Age`: ~20% missing
- Statistical analysis (mean, median, std)
- Correlation analysis
- Outlier detection (IQR method)

**Key Insights:**
- Gender and age strongly influence survival  
- Socio-economic status (Pclass, Fare) impacts survival  
- Significant skewness in features like Fare  

---

### 🖼️ Image Data Analysis
- Dataset structure exploration (20 classes)
- Class distribution analysis (balanced)
- Image quality checks:
  - Resolution
  - Brightness
  - Blur detection
- Pixel distribution analysis (RGB channels)

**Key Insights:**
- No missing or corrupted images  
- Well-balanced dataset → suitable for classification  
- Consistent image size supports model training  

---

### 📝 Text Data Analysis
- Data cleaning & preprocessing:
  - Lowercasing
  - Stopword removal
  - Lemmatization
- Language detection & filtering
- Word frequency & n-gram analysis
- Sentiment distribution via ratings
- Word clouds (positive vs negative)

**Key Insights:**
- High proportion of stopwords (~49%)  
- Clear sentiment patterns aligned with ratings  
- Text suitable for classification tasks  

---

### 🔗 Multimodal Data Analysis
- Image-caption alignment validation
- Missing & duplicate detection:
  - 34 duplicate pairs found
- Caption length distribution
- Text + image visualization
- TF-IDF & n-gram analysis

**Key Insights:**
- Strong alignment between images and captions  
- Data suitable for contrastive learning (e.g., CLIP-like models)  
- Minimal missing data  

---

## 🛠️ Technologies Used

- **Python**
- **NumPy, Pandas**
- **Matplotlib, Seaborn**
- **OpenCV, PIL**
- **Scikit-learn**
- **NLTK / TextBlob**
- **Missingno**

---

## 📈 Outputs

- Statistical summaries  
- Visualizations (histograms, heatmaps, word clouds)  
- Data quality reports  
- Insights for preprocessing & modeling  

---

## 🎥 Demo & Report

- 📺 YouTube Presentation: *(add your link here)*  
- 🌐 GitHub Pages: https://caothanhbang455.github.io/ML_P4AI_Website/  
- 📄 Full Report: `report.pdf`

---

## ⚠️ Academic Integrity

This project follows strict academic integrity guidelines:
- All datasets and resources are properly credited  
- External materials are used in compliance with their licenses  
- Contributions from all team members are acknowledged  

---

## 🔮 Future Work

- Apply machine learning models:
  - Classification (tabular & text)
  - CNN (image)
  - CLIP / multimodal models  
- Feature engineering & optimization  
- Model evaluation and deployment  

---

## 📌 Conclusion

This project demonstrates a complete EDA pipeline across multiple data modalities. The analysis provides valuable insights into data quality, structure, and potential challenges, forming a strong foundation for advanced AI and Data Science applications.
