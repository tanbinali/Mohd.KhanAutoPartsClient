import { motion } from "framer-motion";
import video from "../assets/hero-video.mp4";
import {
  FiClock,
  FiDollarSign,
  FiMap,
  FiPhone,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  const arrowVariants = {
    animate: {
      y: [0, 12, 0],
      transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <video
          src={video}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          title="On-Site Car Battery Replacement Service in Abu Dhabi – Mohammad Khan"
          aria-label="24/7 on-site car battery replacement and roadside assistance in Mussafah and Abu Dhabi"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center text-center px-6 md:px-10 max-w-5xl mx-auto h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold font-heading text-accent leading-tight text-center"
          variants={itemVariants}
        >
          Car Battery Services{" "}
          <span className="sm:whitespace-nowrap block sm:inline">
            in Abu Dhabi
          </span>
        </motion.h1>

        <motion.h2
          className="mt-6 max-w-3xl text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed"
          variants={itemVariants}
        >
          Stranded with a dead battery? We provide fast, reliable, and
          affordable 24/7 on-site battery replacement, delivery, and roadside
          assistance anywhere in Mussafah & Abu Dhabi.
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center w-full"
          variants={itemVariants}
        >
          <motion.a
            href="https://wa.me/+971556939668"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-lg md:btn-xl shadow-lg flex items-center gap-3"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="w-6 h-6" />
            Chat on WhatsApp
          </motion.a>
          <motion.a
            href="tel:+971556939668"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent btn-lg md:btn-xl shadow-lg flex items-center gap-3"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiPhone className="w-6 h-6" />
            Call Now
          </motion.a>
        </motion.div>

        {/* Additional info */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center items-center gap-6 text-white/80"
          variants={itemVariants}
        >
          <span className="flex items-center space-x-2 text-sm sm:text-base md:text-lg">
            <FiClock className="w-6 h-6 text-accent" />
            <span>24/7 Availability</span>
          </span>

          <span className="flex items-center space-x-2 text-sm sm:text-base md:text-lg">
            <FiDollarSign className="w-6 h-6 text-accent" />
            <span>Low Service Charges</span>
          </span>

          <span className="flex items-center space-x-2 text-sm sm:text-base md:text-lg">
            <FiShield className="w-6 h-6 text-accent" />
            <span>Warranty Provided</span>
          </span>

          <span className="flex items-center space-x-2 text-sm sm:text-base md:text-lg">
            <FiTruck className="w-6 h-6 text-accent" />
            <span>Fast Delivery</span>
          </span>

          <span className="flex items-center space-x-2 text-sm sm:text-base md:text-lg">
            <FiMap className="w-6 h-6 text-accent" />
            <span>Mussafah, M6, Abu Dhabi, UAE</span>
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-10 w-full flex justify-center z-20"
        variants={arrowVariants}
        animate="animate"
      >
        <button
          onClick={scrollToProducts}
          className="text-white bg-accent bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 shadow-lg focus:outline-none"
          aria-label="Scroll to our battery services section"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            whileHover={{ scale: 1.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
