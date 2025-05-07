// components/Services.jsx
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaPaintBrush, FaRobot } from "react-icons/fa";

const services = [
  {
    title: "Web App Development",
    description:
      "From MVPs to enterprise systems, we build powerful web applications that scale.",
    icon: <FaCode className="text-4xl" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps designed for performance and experience.",
    icon: <FaMobileAlt className="text-4xl" />,
  },
  {
    title: "Portfolio Websites",
    description:
      "Showcase your brand or personal identity with stunning, SEO-optimized portfolios.",
    icon: <FaPaintBrush className="text-4xl" />,
  },
  {
    title: "AI Solutions",
    description:
      "Leverage machine learning, chatbots, and automation to stay ahead of the curve.",
    icon: <FaRobot className="text-4xl" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Digital craftsmanship across multiple dimensions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4 text-indigo-500">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
