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
import { FaWhatsapp, FaWrench } from "react-icons/fa";
import videoMp4 from "../assets/hero-video.mp4";
import videoWebm from "../assets/hero-video.webm";
import poster from "../assets/hero-poster.webp";

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
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-visible py-20"
    >
      {/* Background Video */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
          className="w-full h-full object-cover"
        >
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
        </video>

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
          assistance anywhere in Mussafah & Abu Dhabi near you.
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

        {/* Badges + Arrow */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-6 text-white/80 w-full"
          variants={itemVariants}
        >
          {/* Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <span className="flex items-center space-x-2 text-sm sm:text-base md:text-lg">
              <FiClock className="w-6 h-6 text-accent" />
              <span>24/7 Availability</span>
            </span>
            <span className="flex items-center space-x-2 text-sm sm:text-base md:text-lg">
              <FiDollarSign className="w-6 h-6 text-accent" />
              <span>Affordable Pricing</span>
            </span>
            <span className="flex items-center space-x-2 text-sm sm:text-base md:text-lg">
              <FiShield className="w-6 h-6 text-accent" />
              <span>Guranteed Warranty</span>
            </span>
            <span className="flex items-center space-x-2 text-sm sm:text-base md:text-lg">
              <FiTruck className="w-6 h-6 text-accent" />
              <span>Fast Delivery</span>
            </span>
            <span className="flex items-center space-x-2 text-sm sm:text-base md:text-lg">
              <FaWrench className="w-6 h-6 text-accent" />
              <span>Skilled & Experienced Team</span>
            </span>
            <span className="flex items-center space-x-2 text-sm sm:text-base md:text-lg">
              <FiMap className="w-6 h-6 text-accent" />
              <span>Located in Mussafah M6, Abu Dhabi</span>
            </span>
          </div>

          {/* Location CTA */}
          <motion.div
            className="flex flex-col items-center mt-4"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-accent mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>

            <button
              onClick={() => {
                const mapSection = document.getElementById("map");
                if (mapSection)
                  mapSection.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 text-accent font-semibold text-lg hover:text-primary transition-colors"
            >
              Click here to visit our shop & buy car parts
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
