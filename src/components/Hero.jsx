import { motion } from "framer-motion";
import video from "../assets/hero-video.mp4";
import { FiMessageSquare, FiPhone, FiMail } from "react-icons/fi";

const Hero = () => {
  // Scroll helpers
  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Animations variants
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

  const badgeVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, delay: 1 },
    },
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <video
          src={video}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          title="Auto Parts Shop in Abu Dhabi – Mohd. Khan Auto Parts"
          aria-label="Car spare parts and batteries in Mussafah Abu Dhabi"
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
          className="text-5xl sm:text-6xl md:text-7xl font-bold font-heading text-white leading-tight"
          variants={itemVariants}
        >
          Mohammad Khan Auto Parts –{" "}
          <span className="text-accent">Car Spare Parts in Abu Dhabi</span>
        </motion.h1>

        <motion.h2
          className="mt-6 max-w-3xl text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed"
          variants={itemVariants}
        >
          Genuine car spare parts, batteries, and accessories in Mussafah, Abu
          Dhabi. Fast delivery & trusted service across the UAE.
        </motion.h2>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-6 items-center w-full max-w-md"
          variants={itemVariants}
        >
          <motion.button
            onClick={scrollToProducts}
            className="btn btn-primary btn-lg md:btn-xl shadow-lg transform transition-transform duration-200 hover:-translate-y-1"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse Auto Parts
          </motion.button>

          <motion.a
            href="https://wa.me/+971556939668"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-lg md:btn-xl shadow-lg flex items-center gap-3"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMessageSquare className="w-6 h-6" />
            Chat for Car Parts
          </motion.a>
        </motion.div>

        {/* Additional contact info */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 text-white/80"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-2">
            <FiPhone className="w-6 h-6 text-accent" />
            <a href="tel:+971556939668" className="hover:underline">
              +971 55 693 9668
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <FiMail className="w-6 h-6 text-accent" />
            <a
              href="mailto:info@mohammadkhanparts.com"
              className="hover:underline"
            >
              info@mohammadkhanparts.com
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll down arrow */}
      <motion.div
        className="absolute bottom-10 w-full flex justify-center z-20"
        variants={arrowVariants}
        animate="animate"
      >
        <button
          onClick={scrollToProducts}
          className="text-white bg-accent bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 shadow-lg focus:outline-none"
          aria-label="Scroll to products"
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
