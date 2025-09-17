import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiGlobe } from "react-icons/fi";

const StoreMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const businessInfo = [
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Our Location",
      content: "Musaffah - M6 - Abu Dhabi - United Arab Emirates",
      delay: 0.1,
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Sat-Thu: 8:00 AM - 10:00 PM | Fri: 2:00 PM - 10:00 PM",
      delay: 0.2,
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Service Area",
      content: "Serving all of Abu Dhabi and surrounding areas",
      delay: 0.3,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const cardHover = {
    scale: 1.03,
    transition: { duration: 0.3, ease: "easeOut" },
  };
  const iconHover = {
    rotate: 10,
    transition: { duration: 0.3, ease: "easeOut" },
  };

  // LocalBusiness structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    name: "Mohammad Khan Auto Parts",
    image: "https://mohammadkhanautoparts.com/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Musaffah - M6",
      addressLocality: "Abu Dhabi",
      addressCountry: "AE",
    },
    telephone: "+971556939668",
    email: "info@mohammadkhanparts.com",
    url: "https://mohammadkhanautoparts.com",
    openingHours: ["Sat-Thu 08:00-22:00", "Fri 14:00-22:00"],
    areaServed: "Abu Dhabi and surrounding areas",
  };

  return (
    <section
      id="map"
      className="py-20 md:py-28 bg-base-100 relative overflow-hidden"
      aria-label="Mohammad Khan Auto Parts Location and Store Information"
    >
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4">
            Visit Our Store
          </h2>
          <p className="text-lg md:text-xl text-base-content/80 max-w-3xl mx-auto">
            Find us conveniently located in Abu Dhabi for all your car battery
            needs
          </p>
        </motion.div>

        {/* Side-by-side layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Business Cards */}
          <motion.div
            className="flex-1 grid grid-cols-1 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {businessInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-base-100 rounded-2xl p-6 flex items-start text-left border border-base-300/30 shadow-sm hover:shadow-md transition-all duration-300"
                variants={itemVariants}
                whileHover={cardHover}
              >
                <motion.div
                  className="p-3 rounded-xl bg-primary/10 text-primary mr-4 flex-shrink-0"
                  whileHover={iconHover}
                >
                  {info.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-1">
                    {info.title}
                  </h3>
                  <p className="text-base-content/80">{info.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Map */}
          <motion.div
            className="flex-1 rounded-2xl overflow-hidden shadow-2xl border border-base-300/30"
            variants={mapVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="relative overflow-hidden"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.2720817139802!2d54.511370910996696!3d24.37183666454483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4111868fc909%3A0xdf86320bb1a40484!2sMohammed%20khan%20auto%20parts%20trading%20Shope!5e0!3m2!1sen!2sbd!4v1757920316539!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mohammad Khan Auto Parts Location"
                className={`transition-opacity duration-500 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setIsLoaded(true)}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoreMap;
