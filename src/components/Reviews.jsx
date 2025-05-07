// components/Reviews.jsx
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
  {
    name: "Priya M.",
    role: "Startup Founder",
    quote:
      "EvisionTech helped us build our AI-based platform from scratch. Their speed and quality are unmatched.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul D.",
    role: "Creative Director",
    quote:
      "The portfolio website they delivered got me 3 freelance clients within a week!",
    rating: 4.5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ayesha S.",
    role: "Product Manager",
    quote:
      "We loved their structured approach and communication. The mobile app exceeded expectations.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Reviews = () => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} className="text-yellow-400 inline-block" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="text-yellow-400 inline-block" />
      );
    }

    return stars;
  };

  return (
    <section
      id="reviews"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feedback that fuels our passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex">{renderStars(testimonial.rating)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
