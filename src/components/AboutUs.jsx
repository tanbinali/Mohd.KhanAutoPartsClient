import { motion } from "framer-motion";
import {
  FiZap,
  FiTool,
  FiTruck,
  FiShield,
  FiAward,
  FiUsers,
  FiClock,
  FiMapPin,
} from "react-icons/fi";
import banner from "../assets/Banner.png";

const AboutUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
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

  const statsVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.5,
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
            About Mohammad Khan Auto Parts Abu Dhabi
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-base-content/80 max-w-3xl mx-auto">
            Trusted by thousands of customers across Abu Dhabi for quality auto
            parts and exceptional service
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
              alt="Auto parts store in Mussafah Abu Dhabi - Mohammad Khan Auto Parts"
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
              Your Trusted Car Spare Parts Partner in Abu Dhabi
            </motion.h3>

            <motion.p
              className="text-base-content/80 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Mohammad Khan Auto Parts has been proudly serving Abu Dhabi with
              premium auto parts and accessories. Our mission is to provide
              reliable products, fast service, and expert guidance to every
              customer.
            </motion.p>

            <motion.p
              className="text-base-content/80 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Whether you need batteries, alternators, starter motors, or other
              essential car parts, our team of certified professionals ensures
              you get the right product quickly and efficiently. We source our
              products from trusted manufacturers to guarantee quality and
              durability.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 mb-10"
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-center p-4 bg-base-100 rounded-lg">
                <FiUsers className="text-3xl text-primary mx-auto mb-2" />
                <span className="block text-2xl font-bold text-primary">
                  1000+
                </span>
                <span className="block text-sm text-base-content/70">
                  Satisfied Customers
                </span>
              </div>
              <div className="text-center p-4 bg-base-100 rounded-lg">
                <FiAward className="text-3xl text-primary mx-auto mb-2" />
                <span className="block text-2xl font-bold text-primary">
                  150+
                </span>
                <span className="block text-sm text-base-content/70">
                  Quality Brands
                </span>
              </div>
            </motion.div>

            {/* What We Offer */}
            <motion.h4
              className="text-xl font-semibold text-primary mb-6"
              variants={itemVariants}
            >
              What We Offer
            </motion.h4>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {[
                {
                  icon: <FiZap className="text-2xl text-primary" />,
                  title: "Car Batteries",
                  description:
                    "High-quality batteries with extended lifespan and warranty",
                },
                {
                  icon: <FiTool className="text-2xl text-primary" />,
                  title: "Alternators & Starters",
                  description:
                    "Reliable power solutions from trusted manufacturers",
                },
                {
                  icon: <FiShield className="text-2xl text-primary" />,
                  title: "Car Accessories",
                  description:
                    "Premium accessories to enhance safety and performance",
                },
                {
                  icon: <FiTruck className="text-2xl text-primary" />,
                  title: "Fast Delivery",
                  description:
                    "Quick and reliable delivery across Abu Dhabi within hours",
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
                <span>Musaffah - M6 - Abu Dhabi - United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2 text-base-content/70">
                <FiClock className="text-primary" />
                <span>Open Daily: 8:00 AM – 10:00 PM</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <script type="application/ld+json">
        {`
  {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    "name": "Mohammad Khan Auto Parts",
    "image": "https://mohammadkhanautoparts.ae/banner.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Musaffah M6",
      "addressLocality": "Abu Dhabi",
      "addressCountry": "AE"
    },
    "openingHours": "Mo-Su 08:00-22:00",
    "telephone": "+971556939668",
    "url": "https://mohammadkhanautoparts.ae"
  }
  `}
      </script>
    </section>
  );
};

export default AboutUs;
