import React from "react";
import {
  Image as ImageIcon,
  AlertTriangle,
  BarChart3,
  Camera,
  CheckCircle,
  Lightbulb,
  Info,
  MessageSquare,
  Hash,
} from "lucide-react";
import showSampleImg from "../../assets/eda-image/eda-image_show-sample.png";
import imageClassDitribution from "../../assets/eda-image/eda-image_image-per-class-distribution.png";
import topBlurImagePerClass from "../../assets/eda-image/eda-image_top-image-blur-per-class.png";
import widthHeightDistribution from "../../assets/eda-image/eda-image_width-height-distribution.png";
import rgbDistrinution from "../../assets/eda-image/eda-image_rgb-distribution.png";
import featureVariance from "../../assets/eda-image/eda-feature-variance.png";
import correlationMatrix from "../../assets/eda-image/eda-feature-correlation.png";
import sampleGrid from "../../assets/eda-image/sample_grid.png";

const ImageEDA = () => {
  return (
    <div className="flex flex-col gap-16 w-full animate-in fade-in duration-700 h-full p-6">
      {/* HEADER */}
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-black text-emerald-600 flex items-center gap-3">
          <ImageIcon size={36} /> Image Data Exploration
        </h2>
        <p className="text-slate-500 text-lg max-w-4xl leading-relaxed">
          Exploratory Data Analysis for the Rice Image Dataset. This section
          focuses on image structure, quality, and distribution to prepare for
          Computer Vision modeling.
        </p>
      </div>

      {/* SECTION 1: DATASET OVERVIEW */}
      <section className="flex flex-col gap-8">
        <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
          <div className="bg-purple-100 p-2 rounded-xl">
            <Info className="text-purple-600" size={24} />
          </div>
          1. Dataset Overview & Sample
        </h3>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="bg-blue-50 p-4 rounded-xl text-blue-500">
              <ImageIcon size={28} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                Total Images
              </p>
              <p className="text-3xl font-black text-slate-800">4730</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="bg-emerald-50 p-4 rounded-xl text-emerald-500">
              <MessageSquare size={28} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                Number of Classes
              </p>
              <p className="text-3xl font-black text-slate-800">20</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="bg-amber-50 p-4 rounded-xl text-amber-500">
              <Hash size={28} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                Avg Images / Class
              </p>
              <p className="text-3xl font-black text-slate-800">236.5</p>
            </div>
          </div>
        </div>

        {/* Sample Images */}
        <div className="flex flex-col gap-8">
          <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
            <h4 className="font-bold text-slate-700 mb-2 text-xl w-full text-center border-b border-slate-100 pb-2">
              Samples Image of Different Class
            </h4>
            <div className="flex justify-center w-full">
              <img
                src={showSampleImg}
                alt="Length Distribution"
                className="w-full h-auto max-w-4xl rounded-xl object-contain hover:scale-[1.01] transition-transform"
              />
            </div>
          </div>

          <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
            <h4 className="font-bold text-slate-700 mb-2 text-xl w-full text-center border-b border-slate-100 pb-2">
              Samples Grid of Class
            </h4>
            <div className="flex justify-center w-full">
              <img
                src={sampleGrid}
                alt="Length Distribution"
                className="w-full h-auto max-w-4xl rounded-xl object-contain hover:scale-[1.01] transition-transform"
              />
            </div>
          </div>

          <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
            <h4 className="font-bold text-slate-700 mb-2 text-xl w-full text-center border-b border-slate-100 pb-2">
              Image/Class Distribution
            </h4>
            <div className="flex justify-center w-full">
              <img
                src={imageClassDitribution}
                alt="Length Distribution"
                className="w-full h-auto max-w-4xl rounded-xl object-contain hover:scale-[1.01] transition-transform"
              />
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-xl">
          <h4 className="font-bold text-emerald-900 flex items-center gap-2">
            <Lightbulb size={20} /> Key Insights
          </h4>
          <ul className="list-disc ml-5 mt-3 text-emerald-800 space-y-2">
            <li>
              The dataset contains <strong>4,730 images</strong> across{" "}
              <strong>20 rice types</strong>, with an average of ~236 images per
              class, making it suitable for training deep learning models.
            </li>
            <li>
              The class distribution is <strong>highly balanced</strong>{" "}
              (ranging from 230 to 256 images per class), which minimizes class
              imbalance issues during training.
            </li>
            <li>
              No class suffers from data scarcity, so{" "}
              <strong>
                oversampling or undersampling techniques are not required
              </strong>
              .
            </li>
            <li>
              With <strong>20 distinct classes</strong>, this is a relatively
              complex multi-class classification problem that requires strong
              feature extraction capability.
            </li>
            <li>
              Potential <strong>visual similarity between rice types</strong>{" "}
              may lead to misclassification, requiring careful model tuning and
              possibly feature enhancement.
            </li>
            <li>
              Applying <strong>data augmentation techniques</strong> (e.g.,
              rotation, flipping, zooming) is recommended to improve model
              generalization.
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 2: DATA QUALITY */}
      <section className="flex flex-col gap-8">
        <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
          <div className="bg-amber-100 p-2 rounded-xl">
            <AlertTriangle className="text-amber-600" size={24} />
          </div>
          2. Data Quality
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="bg-blue-50 p-4 rounded-xl text-blue-500">
              <ImageIcon size={28} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                Missing Images
              </p>
              <p className="text-3xl font-black text-slate-800">0</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="bg-emerald-50 p-4 rounded-xl text-emerald-500">
              <ImageIcon size={28} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                Corrupted Images
              </p>
              <p className="text-3xl font-black text-slate-800">0</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="bg-amber-50 p-4 rounded-xl text-amber-500">
              <ImageIcon size={28} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                Duplicate Images
              </p>
              <p className="text-3xl font-black text-slate-800">0</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
            <h4 className="font-bold text-slate-700 mb-2 text-xl w-full text-center border-b border-slate-100 pb-2">
              Top blurry Image per Class
            </h4>
            <div className="flex justify-center w-full">
              <img
                src={topBlurImagePerClass}
                alt="Length Distribution"
                className="w-full h-auto max-w-4xl rounded-xl object-contain hover:scale-[1.01] transition-transform"
              />
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-xl">
          <h4 className="font-bold text-amber-900 flex items-center gap-2">
            <AlertTriangle size={20} /> Key Insights
          </h4>
          <ul className="list-disc ml-5 mt-3 text-amber-800">
            <li>
              The dataset shows{" "}
              <strong>no missing, corrupted, or duplicate images</strong>,
              indicating high data integrity and consistency.
            </li>

            <li>
              However,{" "}
              <strong>blurry images are present across multiple classes</strong>
              , as indicated by low Laplacian variance scores.
            </li>

            <li>
              Some classes (e.g., <code>1_Subol_Lota</code>,{" "}
              <code>4_Shampakatari</code>) contain{" "}
              <strong>very low sharpness samples</strong>, which may introduce
              noise during training.
            </li>

            <li>
              Blurry images can negatively impact feature extraction, especially
              for <strong>fine-grained classification tasks</strong> like rice
              type recognition.
            </li>

            <li>
              The presence of blur across all classes suggests this is a{" "}
              <strong>systematic data issue</strong> rather than class-specific
              bias.
            </li>

            <li>
              <strong>Recommended action:</strong> Apply image quality filtering
              or augmentation (e.g., sharpening, contrast enhancement) to
              improve model robustness.
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 3: IMAGE STATISTICS */}
      <section className="flex flex-col gap-8">
        <div className="border-b border-slate-200 pb-4">
          <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
            <div className="bg-rose-100 p-2 rounded-xl">
              <Camera className="text-rose-600" size={24} />
            </div>
            3. Image Statistics
          </h3>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
            <h4 className="font-bold text-slate-700 mb-2 text-xl w-full text-center border-b border-slate-100 pb-2">
              Width & Height Distribution
            </h4>
            <div className="flex justify-center w-full">
              <img
                src={widthHeightDistribution}
                alt="Length Distribution"
                className="w-full h-auto max-w-4xl rounded-xl object-contain hover:scale-[1.01] transition-transform"
              />
            </div>
          </div>

          <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
            <h4 className="font-bold text-slate-700 mb-2 text-xl w-full text-center border-b border-slate-100 pb-2">
              RGB Distribution
            </h4>
            <div className="flex justify-center w-full">
              <img
                src={rgbDistrinution}
                alt="Length Distribution"
                className="w-full h-auto max-w-4xl rounded-xl object-contain hover:scale-[1.01] transition-transform"
              />
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl">
          <h4 className="font-bold text-blue-900 flex items-center gap-2">
            <BarChart3 size={20} /> Key Insights
          </h4>
          <ul className="list-disc ml-5 mt-3 text-blue-800">
            <li>
              The width and height distributions show a{" "}
              <strong>single sharp peak around 853 pixels</strong>, indicating
              that all images have been consistently resized to a uniform
              resolution.
            </li>

            <li>
              This uniformity eliminates the need for additional resizing during
              preprocessing and ensures{" "}
              <strong>stable input dimensions for deep learning models</strong>.
            </li>

            <li>
              The RGB channel distributions reveal that{" "}
              <strong>
                pixel intensities are concentrated in a relatively low range
              </strong>
              , suggesting that images have a{" "}
              <strong>dark background with limited brightness variation</strong>
              .
            </li>

            <li>
              The{" "}
              <strong>
                Red channel shows slightly higher intensity values
              </strong>{" "}
              compared to Green and Blue, which may reflect subtle color
              differences in rice grain textures.
            </li>

            <li>
              The overlapping distributions of RGB channels indicate{" "}
              <strong>low color diversity</strong>, meaning the dataset relies
              more on{" "}
              <strong>shape and texture features rather than color</strong> for
              classification.
            </li>

            <li>
              <strong>Recommendation:</strong> Apply normalization (e.g.,
              scaling pixel values to [0,1]) and consider contrast enhancement
              techniques to improve feature extraction.
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 4: FEATURE ANALYSIS */}
      <section className="flex flex-col gap-8">
        <div className="border-b border-slate-200 pb-4">
          <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
            <div className="bg-indigo-100 p-2 rounded-xl">
              <BarChart3 className="text-indigo-600" size={24} />
            </div>
            4. Feature Analysis
          </h3>
        </div>

        {/* Feature Variance */}
        <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
          <h4 className="font-bold text-slate-700 mb-2 text-xl w-full text-center border-b border-slate-100 pb-2">
            Feature Variance Across Classes
          </h4>
          <div className="flex justify-center w-full">
            <img
              src={featureVariance}
              alt="Feature Variance"
              className="w-full h-auto max-w-5xl rounded-xl object-contain hover:scale-[1.01] transition-transform"
            />
          </div>
        </div>

        {/* Correlation Matrix */}
        <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
          <h4 className="font-bold text-slate-700 mb-2 text-xl w-full text-center border-b border-slate-100 pb-2">
            Feature Correlation Matrix
          </h4>
          <div className="flex justify-center w-full">
            <img
              src={correlationMatrix}
              alt="Correlation Matrix"
              className="w-full h-auto max-w-4xl rounded-xl object-contain hover:scale-[1.01] transition-transform"
            />
          </div>
        </div>

        {/* Insights */}
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-xl">
          <h4 className="font-bold text-indigo-900 flex items-center gap-2">
            <Lightbulb size={20} /> Key Insights
          </h4>

          <ul className="list-disc ml-5 mt-3 text-indigo-800 space-y-2">
            <li>
              The variance of <strong>grain area</strong> differs across rice
              classes, indicating that{" "}
              <strong>size is a strong discriminative feature</strong>.
            </li>

            <li>
              Some classes show lower variance, meaning{" "}
              <strong>more consistent grain sizes</strong>, while higher
              variance classes may be harder to classify.
            </li>

            <li>
              The{" "}
              <strong>
                aspect ratio variance remains nearly constant (~1.0)
              </strong>
              , suggesting it provides{" "}
              <strong>very limited classification value</strong>.
            </li>

            <li>
              Strong correlations exist between <strong>RGB channels</strong>
              (e.g., R–G, G–B), indicating{" "}
              <strong>redundant color information</strong>.
            </li>

            <li>
              <strong>Grain area is largely independent</strong> from color
              features, making it a <strong>valuable and unique feature</strong>
              .
            </li>

            <li>
              <strong>Blur score shows weak correlation</strong> with other
              features, meaning it captures{" "}
              <strong>image quality rather than structural properties</strong>.
            </li>

            <li>
              <strong>Recommendation:</strong> Reduce redundancy (e.g., PCA or
              channel selection) and prioritize{" "}
              <strong>shape-based features</strong> like grain area for
              modeling.
            </li>
          </ul>
        </div>
      </section>

      {/* FINAL CHECKLIST
      <section className="grid md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border shadow-sm">
          <CheckCircle className="text-green-500" />
          <span className="font-bold">Image Resizing Considered</span>
        </div>

        <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border shadow-sm">
          <CheckCircle className="text-green-500" />
          <span className="font-bold">Normalization Parameters Ready</span>
        </div>

        <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border shadow-sm">
          <CheckCircle className="text-green-500" />
          <span className="font-bold">Data Quality Checked</span>
        </div>

        <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border shadow-sm">
          <CheckCircle className="text-green-500" />
          <span className="font-bold">Ready for Model Training</span>
        </div>
      </section> */}
    </div>
  );
};

export default ImageEDA;
