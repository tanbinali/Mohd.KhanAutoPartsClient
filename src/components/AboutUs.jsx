import { motion } from "framer-motion";
import {
  FiZap,
  FiTruck,
  FiShield,
  FiClock,
  FiMapPin,
  FiUsers,
  FiAward,
  FiPhoneCall,
} from "react-icons/fi";
import banner from "../assets/Banner.png";

const AboutUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="about" className="py-15 bg-base-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Mohammad Khan Auto Parts
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-base-content/80 max-w-3xl mx-auto">
            We specialize in <strong>online car battery replacement</strong>{" "}
            services across Abu Dhabi – fast delivery, free installation, and
            24/7 emergency support.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <motion.div
            className="md:w-1/2 relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={banner + "?w=500&format=webp"}
              alt="Online car battery replacement Abu Dhabi - Mohd. Khan Auto Parts"
              loading="lazy"
              className="rounded-xl shadow-2xl w-full object-cover"
            />

            {/* Experience badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-primary text-primary-content p-6 rounded-xl shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <span className="block text-3xl font-bold">25+</span>
                <span className="block text-sm">Years Experience</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl font-bold text-primary mb-6"
              variants={itemVariants}
            >
              Abu Dhabi’s Trusted Car Battery Service
            </motion.h3>

            <motion.p
              className="text-base-content/80 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              At Mohd. Khan Auto Parts, we focus exclusively on car battery
              solutions. From <strong>delivery & installation</strong> to{" "}
              <strong>emergency jump-starts</strong>, our certified team ensures
              your car gets back on the road quickly and safely.
            </motion.p>

            <motion.p
              className="text-base-content/80 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              We only provide genuine, warranty-backed batteries from trusted
              brands. With fast response and 24/7 support, we’re the most
              reliable choice for drivers in Abu Dhabi.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 mb-10"
              variants={containerVariants}
            >
              <div className="text-center p-4 bg-base-100 rounded-lg">
                <FiUsers className="text-3xl text-primary mx-auto mb-2" />
                <span className="block text-2xl font-bold text-primary">
                  1000+
                </span>
                <span className="block text-sm text-base-content/70">
                  Happy Customers
                </span>
              </div>
              <div className="text-center p-4 bg-base-100 rounded-lg">
                <FiAward className="text-3xl text-primary mx-auto mb-2" />
                <span className="block text-2xl font-bold text-primary">
                  24/7
                </span>
                <span className="block text-sm text-base-content/70">
                  Emergency Support
                </span>
              </div>
            </motion.div>

            {/* What We Offer */}
            <motion.h4
              className="text-xl font-semibold text-primary mb-6"
              variants={itemVariants}
            >
              Our Battery Services
            </motion.h4>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {[
                {
                  icon: <FiZap className="text-2xl text-primary" />,
                  title: "Battery Replacement",
                  description: "Quick and reliable replacement with warranty.",
                },
                {
                  icon: <FiTruck className="text-2xl text-primary" />,
                  title: "Free Delivery & Installation",
                  description:
                    "Get your battery delivered and installed at no extra cost.",
                },
                {
                  icon: <FiPhoneCall className="text-2xl text-primary" />,
                  title: "Emergency Jumpstart",
                  description:
                    "24/7 roadside battery jumpstart service anywhere in Abu Dhabi.",
                },
                {
                  icon: <FiShield className="text-2xl text-primary" />,
                  title: "Warranty Support",
                  description:
                    "All batteries come with official manufacturer warranty.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-base-100 rounded-lg hover:bg-base-300 transition-colors"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-primary/10 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-base-content/70 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Location and Hours */}
            <motion.div
              className="flex flex-wrap gap-6 mt-8"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 text-base-content/70">
                <FiMapPin className="text-primary" />
                <span>Musaffah, M6, Abu Dhabi, UAE</span>
              </div>
              <div className="flex items-center gap-2 text-base-content/70">
                <FiClock className="text-primary" />
                <span>Open 24/7 for Emergency Service</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* SEO Structured Data */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          "name": "Mohd. Khan Auto Parts",
          "serviceType": "Online Car Battery Replacement",
          "image": "https://mohammadkhanautoparts.ae/banner.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abu Dhabi",
            "addressCountry": "AE"
          },
          "openingHours": "Mo-Su 00:00-23:59",
          "telephone": "+971556939668",
          "url": "https://mohammadkhanautoparts.ae"
        }
        `}
      </script>
    </section>
  );
};

export default AboutUs;
