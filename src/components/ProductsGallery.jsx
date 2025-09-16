import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiBattery,
  FiSettings,
  FiShield,
  FiBox,
  FiZoomIn,
  FiX,
} from "react-icons/fi";

// SEO-optimized services data
const services = [
  {
    title: "Car Batteries in Abu Dhabi",
    description:
      "Buy high-quality, long-lasting car batteries in Abu Dhabi with full warranty. Available in Mussafah and across the UAE.",
    icon: <FiBattery className="w-8 h-8" />,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Engine Parts UAE",
    description:
      "Genuine and reliable engine parts for Toyota, Nissan, Mitsubishi, and all popular car brands in the UAE.",
    icon: <FiSettings className="w-8 h-8" />,
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "Suspension & Brake Parts Abu Dhabi",
    description:
      "Durable suspension systems and brake pads for safe driving in Abu Dhabi and across the UAE.",
    icon: <FiShield className="w-8 h-8" />,
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    title: "Car Accessories Abu Dhabi",
    description:
      "Premium car accessories in Abu Dhabi to enhance comfort, safety, and driving style.",
    icon: <FiBox className="w-8 h-8" />,
    color: "bg-purple-500/10 text-purple-600",
  },
];

// Mock product images (SEO alt tags)
const productImages = [
  {
    src: "https://images.unsplash.com/photo-1563720223880-4d93eef1f1c2?auto=format&fit=crop&w=500&q=80",
    alt: "Car battery for sale in Abu Dhabi",
  },
  {
    src: "https://images.unsplash.com/photo-1603712610494-93e154d3e52e?auto=format&fit=crop&w=500&q=80",
    alt: "Engine parts available in UAE",
  },
  {
    src: "https://images.unsplash.com/photo-1619767886558-d1a22b9a7f20?auto=format&fit=crop&w=500&q=80",
    alt: "Suspension system and brake parts in Abu Dhabi",
  },
  {
    src: "https://images.unsplash.com/photo-1601924582971-c7b2e5aa2f6d?auto=format&fit=crop&w=500&q=80",
    alt: "Car accessories shop in Mussafah",
  },
  {
    src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=500&q=80",
    alt: "Affordable car batteries UAE",
  },
  {
    src: "https://images.unsplash.com/photo-1605296867302-85bcb9f1b5de?auto=format&fit=crop&w=500&q=80",
    alt: "High-performance engine components",
  },
  {
    src: "https://images.unsplash.com/photo-1610465299991-33f8458d7314?auto=format&fit=crop&w=500&q=80",
    alt: "Brake pads and suspension systems in UAE",
  },
  {
    src: "https://images.unsplash.com/photo-1605296867300-0163ebc8a1f0?auto=format&fit=crop&w=500&q=80",
    alt: "Car parts store in Abu Dhabi",
  },
  {
    src: "https://images.unsplash.com/photo-1611071656862-fc21c7f81d8a?auto=format&fit=crop&w=500&q=80",
    alt: "Premium auto parts collection",
  },
  {
    src: "https://images.unsplash.com/photo-1603791452906-b3efb5e1d13f?auto=format&fit=crop&w=500&q=80",
    alt: "Auto accessories in Abu Dhabi",
  },
];

const ProductsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const combinedCardVariants = {
    rest: { y: 0, opacity: 1, scale: 1 },
    hover: { y: -8, scale: 1.02, transition: { duration: 0.3 } },
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const combinedImageVariants = {
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
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -translate-x-1/4 translate-y-1/2 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with SEO keywords */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4">
            Auto Parts & Car Accessories in Abu Dhabi
          </h2>
          <p className="text-lg md:text-xl text-base-content/80 max-w-3xl mx-auto">
            Shop genuine auto parts, car batteries, engine components, brakes,
            and accessories in Abu Dhabi, Mussafah, and across the UAE.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              className="bg-base-100 rounded-2xl p-6 text-center border border-base-300/30 shadow-sm hover:shadow-lg transition-all duration-300 group"
              variants={combinedCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div
                className={`p-4 rounded-2xl ${service.color} mb-5 inline-flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-base text-base-content/80">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* Product Gallery */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Auto Parts Gallery – Abu Dhabi & UAE
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Explore our extensive collection of high-quality auto parts and car
            accessories available across Abu Dhabi and the UAE.
          </p>
        </motion.div>

        {/* Masonry Product Gallery */}
        <motion.div
          className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {productImages.map((img, index) => (
            <motion.figure
              key={index}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative cursor-pointer"
              variants={combinedImageVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-500"
                loading="lazy"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <FiZoomIn className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
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
              src={selectedImage + "?w=500&format=webp"}
              alt="Enlarged auto part view from Abu Dhabi store"
              loading="lazy"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
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
