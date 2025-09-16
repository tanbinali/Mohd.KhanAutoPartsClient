import { motion } from "framer-motion";
import { FiPhone, FiMessageSquare, FiMail } from "react-icons/fi";

const Contact = () => {
  const contactMethods = [
    {
      title: "Call Us in Abu Dhabi",
      description:
        "Speak directly with our auto parts specialists in Mussafah, Abu Dhabi for immediate assistance with car spare parts.",
      icon: <FiPhone className="w-8 h-8" />,
      buttonText: "+971 55 693 9668",
      link: "tel:+971556939668",
      color: "bg-primary",
      delay: 0.1,
    },
    {
      title: "Chat on WhatsApp",
      description:
        "Get fast replies on WhatsApp for inquiries about genuine spare parts, batteries, and accessories across the UAE.",
      icon: <FiMessageSquare className="w-8 h-8" />,
      buttonText: "Message Us",
      link: "https://wa.me/+971556939668",
      color: "bg-accent",
      delay: 0.2,
    },
    {
      title: "Email Our Team",
      description:
        "Send detailed inquiries about auto parts availability, pricing, and delivery in Abu Dhabi. We reply within 24 hours.",
      icon: <FiMail className="w-8 h-8" />,
      buttonText: "info@mkap.ae",
      link: "mailto:info@mkap.ae",
      color: "bg-secondary",
      delay: 0.3,
    },
  ];

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
      transition: { duration: 0.6, ease: "easeOut" },
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

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-base-200 relative overflow-hidden"
      aria-label="Contact Mohammad Khan Auto Parts Abu Dhabi"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Contact Mohammad Khan Auto Parts in Abu Dhabi
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-base-content/80 max-w-3xl mx-auto">
            Have questions about genuine car spare parts in Mussafah or Abu
            Dhabi? Call, WhatsApp, or email our team for quick support and
            expert advice.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-base-100 rounded-2xl p-8 flex flex-col items-center text-center border border-base-300/30 shadow-sm hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              custom={method.delay}
              whileHover={cardHover}
            >
              <motion.div
                className="p-5 rounded-2xl bg-primary/10 text-primary mb-6"
                whileHover={iconHover}
              >
                {method.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-secondary mb-3">
                {method.title}
              </h3>
              <p className="text-base text-base-content/80 mb-6 leading-relaxed">
                {method.description}
              </p>
              <a
                href={method.link}
                target={method.link.includes("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="w-full"
              >
                <motion.button
                  className={`btn w-full text-white ${method.color} border-0 hover:shadow-xl`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {method.buttonText}
                </motion.button>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "AutoPartsStore",
          "name": "Mohammad Khan Auto Parts",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971556939668",
            "contactType": "customer service",
            "areaServed": "AE",
            "availableLanguage": ["English", "Arabic"]
          }
        }
      `}
      </script>
    </section>
  );
};

export default Contact;
