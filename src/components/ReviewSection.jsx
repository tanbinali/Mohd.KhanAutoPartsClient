import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const reviews = [
  {
    id: 1,
    name: "Muhammad Umar",
    rating: 5,
    time: "2 years ago",
    text: "Excellent service and great working by the car technician, especially Abdul Rehman & Abdul Sattar. They were really helpful regarding my Honda Accord parts sorting and the price was reasonable for car battery.",
    response:
      "Thank you for your kind words! We're glad Abdul Rehman and Abdul Sattar provided excellent service.",
    avatar: "MU",
  },
  {
    id: 2,
    name: "Muthasim Cherichi",
    rating: 5,
    time: "2 years ago",
    text: "Services are good had a battery replacement which they have changed when the warranty is due in 2 months.",
    response:
      "We appreciate your feedback! We stand by our warranty commitments.",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Mohammed Faisal",
    rating: 5,
    time: "a week ago",
    text: "Good shop with quality parts and professional service. Will definitely return for future needs.",
    response: null,
    avatar: "MF",
  },
  {
    id: 4,
    name: "Ayesha Khan",
    rating: 4,
    time: "3 months ago",
    text: "Very professional staff and reasonable pricing. Will visit again!",
    response:
      "Thank you for your feedback! We look forward to serving you again.",
    avatar: "AK",
  },
  {
    id: 5,
    name: "Ali Raza",
    rating: 5,
    time: "1 month ago",
    text: "Quick service and friendly staff. Highly recommend this shop for car parts. The battery I purchased is working perfectly.",
    response: null,
    avatar: "AR",
  },
  {
    id: 6,
    name: "Sarah Ahmed",
    rating: 5,
    time: "2 months ago",
    text: "They have all the parts I needed for my Toyota Camry. The staff was knowledgeable and helped me find exactly what I needed.",
    response: "We're happy we could help with your Toyota Camry parts!",
    avatar: "SA",
  },
];

const ReviewsSection = () => {
  // Build JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    name: "Mohammad Khan Auto Parts",
    url: "https://mohammadkhanautoparts.ae",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (
        reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      ).toFixed(1),
      reviewCount: reviews.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.text,
      datePublished: r.time,
    })),
  };

  return (
    <section
      id="reviews"
      className="py-20 bg-base-200 overflow-hidden"
      aria-label="Customer Reviews for Mohammad Khan Auto Parts Abu Dhabi"
    >
      {/* Inject structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

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
            Customer Reviews
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-base-content/80 max-w-3xl mx-auto">
            Hear what our customers have to say about our auto parts and service
            in Abu Dhabi
          </p>
        </motion.div>

        {/* Scrollable Reviews Carousel */}
        <motion.div
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {reviews.map((review) => (
            <motion.blockquote
              key={review.id}
              className="min-w-[300px] md:min-w-[350px] bg-base-100 border border-base-300/30 rounded-2xl p-6 flex flex-col flex-shrink-0 h-[350px]"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Review Header */}
              <div className="flex items-center mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-lg">
                  {review.avatar}
                </div>
                <div className="ml-4">
                  <p
                    className="font-semibold text-base-content"
                    itemProp="author"
                  >
                    {review.name}
                  </p>
                  <p className="text-sm text-base-content/70">{review.time}</p>
                </div>
              </div>

              {/* Rating */}
              <div
                className="flex text-yellow-400 mb-2"
                itemProp="reviewRating"
                itemScope
                itemType="https://schema.org/Rating"
              >
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={i < review.rating ? "fill-current" : ""}
                  />
                ))}
                <meta itemProp="ratingValue" content={review.rating} />
                <meta itemProp="bestRating" content="5" />
              </div>

              {/* Review Text */}
              <p
                className="text-base-content/80 mb-2 flex-grow overflow-y-auto max-h-[120px]"
                itemProp="reviewBody"
              >
                {review.text}
              </p>

              {/* Response */}
              {review.response && (
                <div className="bg-primary/5 border-l-4 border-primary p-3 rounded-r-lg overflow-y-auto max-h-[80px]">
                  <p className="text-sm font-semibold text-primary mb-1">
                    Owner's Response
                  </p>
                  <p className="text-sm text-base-content/80">
                    {review.response}
                  </p>
                </div>
              )}
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
