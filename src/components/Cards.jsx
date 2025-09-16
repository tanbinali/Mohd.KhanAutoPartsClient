import { motion } from "framer-motion";
import { FiCheckCircle, FiTool, FiTruck, FiHeadphones } from "react-icons/fi";

const Cards = () => {
  const cardData = [
    {
      title: "100% Genuine Auto Parts",
      description:
        "We provide certified car spare parts in Abu Dhabi with full authenticity and reliability guarantees.",
      icon: <FiCheckCircle className="w-10 h-10" />,
      color: "bg-green-500/10",
      hoverColor: "group-hover:bg-green-500/20",
    },
    {
      title: "Premium Car Spare Parts",
      description:
        "Durable spare parts and accessories that deliver long-lasting performance for all major car brands in the UAE.",
      icon: <FiTool className="w-10 h-10" />,
      color: "bg-blue-500/10",
      hoverColor: "group-hover:bg-blue-500/20",
    },
    {
      title: "Fast Auto Parts Delivery in Abu Dhabi",
      description:
        "Get your order delivered safely to your doorstep in Mussafah and across Abu Dhabi within 24 hours.",
      icon: <FiTruck className="w-10 h-10" />,
      color: "bg-orange-500/10",
      hoverColor: "group-hover:bg-orange-500/20",
    },
    {
      title: "Expert Support for Car Parts",
      description:
        "Our specialists help you choose the right spare parts for Toyota, Nissan, Honda, and other vehicles in the UAE.",
      icon: <FiHeadphones className="w-10 h-10" />,
      color: "bg-purple-500/10",
      hoverColor: "group-hover:bg-purple-500/20",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardHoverVariants = {
    rest: {
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      y: -12,
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconVariants = {
    rest: {
      rotate: 0,
      scale: 1,
    },
    hover: {
      rotate: 5,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="choose-us"
      className="py-20 md:py-28 bg-base-100 relative overflow-hidden"
      aria-label="Why choose Mohammad Khan Auto Parts Abu Dhabi"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -translate-x-1/4 translate-y-1/2 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4"
            variants={titleVariants}
          >
            Why Choose Mohammad Khan Auto Parts in Abu Dhabi
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-base-content/80 max-w-3xl mx-auto"
            variants={titleVariants}
          >
            Discover why drivers across Abu Dhabi and Mussafah trust us for
            genuine car spare parts, fast delivery, and expert customer support.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="bg-base-100 rounded-2xl p-8 flex flex-col items-center text-center group relative overflow-hidden border border-base-300/30 shadow-sm hover:shadow-lg transition-all duration-500"
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={cardHoverVariants}
            >
              {/* Hover effect background */}
              <div
                className={`absolute inset-0 ${card.color} ${card.hoverColor} transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10`}
              ></div>

              {/* Icon container with subtle gradient */}
              <motion.div
                className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-base-100 to-base-200 shadow-sm flex items-center justify-center"
                variants={iconVariants}
              >
                <div className="text-primary">{card.icon}</div>
              </motion.div>

              <h3 className="text-xl font-heading font-semibold text-secondary mb-4 group-hover:text-primary transition-colors duration-500">
                {card.title}
              </h3>

              <p className="text-base text-base-content/80 mb-0 leading-relaxed">
                {card.description}
              </p>

              {/* Animated underline */}
              <motion.div
                className="w-12 h-1 bg-accent rounded-full mt-6"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Cards;
