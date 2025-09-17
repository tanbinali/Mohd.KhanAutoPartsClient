import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiBattery,
  FiTruck,
  FiTool,
  FiShield,
  FiZoomIn,
  FiX,
} from "react-icons/fi";

// ✅ On-call car battery services
const services = [
  {
    title: "Emergency Battery Replacement",
    description:
      "Fast car battery replacement at your location within minutes in Abu Dhabi & Mussafah.",
    icon: <FiBattery className="w-8 h-8" />,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "24/7 Roadside Assistance",
    description:
      "Stranded with a dead battery? Our experts will arrive anywhere in Abu Dhabi for jumpstarts or battery replacement.",
    icon: <FiTruck className="w-8 h-8" />,
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "Battery Delivery & Installation",
    description:
      "Get your battery delivered and installed at your home, office, or roadside by certified technicians.",
    icon: <FiTool className="w-8 h-8" />,
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    title: "Battery Health Check & Warranty",
    description:
      "Free battery health check and warranty-backed batteries for complete peace of mind.",
    icon: <FiShield className="w-8 h-8" />,
    color: "bg-purple-500/10 text-purple-600",
  },
];

// ✅ Updated product gallery images
const productImages = [
  {
    src: "https://images.othoba.com/images/thumbs/0464353_hamko-car-battery-n70-lead-acid.jpeg",
    alt: "Emergency car battery replacement in Mussafah, Abu Dhabi",
    caption: "Hamko N70 – Warranty Included",
  },
  {
    src: "https://images.othoba.com/images/thumbs/0609801_hamko-car-battery-nx120-7-smf-18m-silva.webp",
    alt: "Mechanic installing car battery in Abu Dhabi",
    caption: "Hamko NX120 – On-site Installation",
  },
  {
    src: "https://image.made-in-china.com/202f0j00UNIcraByhgql/Tcs-Low-Self-Discharge-210h5-N200-CCA1400-200ah-Car-Maintenance-Free-Battery-Slim-Car-Batteries-Forklift-Lead-Acid-Battery-for-Lighting-System.webp",
    alt: "High quality car batteries with warranty in UAE",
    caption: "TCS N200 – Maintenance-Free Battery",
  },
  {
    src: "https://5.imimg.com/data5/UB/OW/MY-13127521/exide-truck-battery-500x500.jpg",
    alt: "Roadside car battery replacement Abu Dhabi",
    caption: "Exide Truck Battery – Roadside Ready",
  },
  {
    src: "https://japanparts.com.bd/cdn/shop/products/KrankPremiumN50ZL.jpg?v=1652872421",
    alt: "Affordable car battery delivery in Abu Dhabi",
    caption: "Krank Premium N50ZL – Affordable & Reliable",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNYcn-iAUeaOPUsEQXesvSDtS8k1oVev5ZQ&s",
    alt: "Premium sealed car battery for all vehicles UAE",
    caption: "Sealed Lead-Acid Battery – Warranty Included",
  },
  {
    src: "https://ia2.mycliplister.com/is/182544/191789785648112ca5cc64945eb233eef/c3/-/0e1982c799374d8cb3a7c3ea8cce031c?quality=90&strip=yes&format=webp&x=1024",
    alt: "Car battery maintenance and testing Abu Dhabi",
    caption: "Battery Health Check – Free Testing",
  },
  {
    src: "https://www.hinterland.co.za/cdn/shop/files/Willard_90tu-4g_313x.jpg?v=1703145185",
    alt: "Durable battery replacement service UAE",
    caption: "Willard 90TU-4G – Durable & Reliable",
  },
];

const ProductsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    rest: { y: 0, opacity: 1, scale: 1 },
    hover: { y: -8, scale: 1.02, transition: { duration: 0.3 } },
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
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
      {/* Decorative Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -translate-x-1/4 translate-y-1/2 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4">
            On-Call Car Battery Services in Abu Dhabi
          </h2>
          <p className="text-lg md:text-xl text-base-content/80 max-w-3xl mx-auto">
            Quick and reliable battery replacement, delivery, and roadside
            support across Mussafah & Abu Dhabi. 24/7 service with warranty.
          </p>
        </motion.div>

        {/* Service Cards */}
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
              variants={cardVariants}
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
            Car Battery Gallery – Abu Dhabi
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Browse durable car batteries available for on-site replacement with
            full warranty.
          </p>
        </motion.div>

        {/* Masonry Image Gallery */}
        <motion.div
          className="columns-2 sm:columns-2 md:columns-3 gap-6 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {productImages.map((img, index) => (
            <motion.figure
              key={index}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative cursor-pointer"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
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
              {/* Badge Caption */}
              <div className="absolute bottom-3 left-3 bg-primary/80 text-white text-xs px-2 py-1 rounded-lg">
                {img.caption}
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      {/* Modal for Enlarged Image */}
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
              src={selectedImage.src + "?w=500&format=webp"}
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
