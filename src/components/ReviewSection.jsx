import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

// Helper: Convert ISO date → "x time ago"
const timeAgo = (dateString) => {
  const now = new Date();
  const past = new Date(dateString);
  const diff = now - past;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
  if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return "Just now";
};

const reviews = [
  {
    id: 1,
    name: "Muhammad Umar",
    rating: 5,
    date: "2021-09-01", // ISO format
    text: "Excellent service and fast car battery replacement. The technicians were professional and replaced my Honda Accord battery on time.",
    response:
      "Thank you for your kind words! We're glad our team could assist with your Honda Accord battery.",
    avatar: "MU",
  },
  {
    id: 2,
    name: "Muthasim Cherichi",
    rating: 5,
    date: "2021-09-10",
    text: "Had a car battery replacement, they changed it quickly and even honored the warranty with no hassle.",
    response:
      "We appreciate your feedback! Standing by our warranty commitments is our promise.",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Ali Raza",
    rating: 5,
    date: "2023-08-15",
    text: "Quick service and friendly staff. Highly recommend this shop for car batteries. The replacement is working perfectly.",
    response: null,
    avatar: "AR",
  },
  {
    id: 4,
    name: "Ayesha Khan",
    rating: 4,
    date: "2023-06-20",
    text: "Professional staff and affordable battery prices. The installation was done in minutes.",
    response:
      "Thank you for your feedback! We look forward to serving you again.",
    avatar: "AK",
  },
];

const ReviewsSection = () => {
  // Build JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    name: "Mohammad Khan Car Battery Services",
    url: "https://mohammadkhanautoparts.com",
    description:
      "Professional online car battery replacement and delivery service in Abu Dhabi & Mussafah. Fast, affordable, and reliable.",
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
      datePublished: r.date, // ✅ proper ISO date
      itemReviewed: {
        "@type": "AutoPartsStore",
        name: "Mohammad Khan Car Battery Services",
        url: "https://mohammadkhanautoparts.com",
      },
    })),
  };

  return (
    <section
      id="reviews"
      className="py-20 bg-base-200 overflow-hidden"
      aria-label="Customer Reviews for Car Battery Replacement Abu Dhabi"
    >
      {/* Inject structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
            Customer Reviews – Car Battery Services
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-base-content/80 max-w-3xl mx-auto">
            See why customers trust us for fast and reliable car battery
            replacement in Abu Dhabi & Mussafah.
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
                  <p className="text-sm text-base-content/70">
                    {timeAgo(review.date)}
                  </p>
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
