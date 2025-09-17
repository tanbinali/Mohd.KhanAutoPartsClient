import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiZoomIn, FiX } from "react-icons/fi";

// ✅ Import all images dynamically
const importAllBatteries = import.meta.glob(
  "../assets/batteries/*.{jpg,jpeg,png,webp}",
  { eager: true, as: "url" }
);

// ✅ Convert filenames to readable captions
const batteries = Object.values(importAllBatteries).map((src) => {
  const fileName = src.split("/").pop().split(".")[0]; // remove extension
  const caption = fileName
    .replace(/[-_]/g, " ") // replace dash/underscore with space
    .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize first letters
  return {
    src,
    alt: caption,
    caption,
  };
});

const ProductsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const imageVariants = {
    rest: { scale: 1, opacity: 1, y: 0 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="products"
      className="py-20 md:py-28 bg-base-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Car Battery Gallery – Abu Dhabi
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Browse all car batteries available for on-site replacement with full
            warranty.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          className="columns-2 sm:columns-2 md:columns-3 gap-6 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {batteries.map((img, index) => (
            <motion.figure
              key={index}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative cursor-pointer"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <FiZoomIn className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 bg-primary/80 text-white text-xs px-2 py-1 rounded-lg">
                {img.caption}
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              loading="lazy"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white bg-black/50 px-3 py-1 rounded-lg text-sm">
              {selectedImage.caption}
            </div>
            <button
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              <FiX className="w-8 h-8" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProductsGallery;
