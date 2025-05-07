// components/Hero.jsx
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaRobot } from "react-icons/fa";

const Hero = () => {
  const floatingIcons = [
    { icon: <FaCode className="text-2xl" />, delay: 0.2 },
    { icon: <FaMobileAlt className="text-2xl" />, delay: 0.4 },
    { icon: <FaRobot className="text-2xl" />, delay: 0.6 },
  ];

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-purple-50/20 to-pink-50/10 dark:from-indigo-900/10 dark:via-purple-900/5 dark:to-pink-900/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="block">Build the Future</span>
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                with EvisionTech
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
            >
              We specialize in intelligent web and mobile solutions — from
              cutting-edge AI tools to elegant portfolio websites. Let's turn
              your idea into innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-indigo-500/30 transition-all">
                Let's Talk
              </button>
              <button className="px-6 py-3 rounded-lg border-2 border-indigo-500 text-indigo-500 dark:text-indigo-400 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors">
                Our Work
              </button>
            </motion.div>
          </div>

          <div className="relative h-64 md:h-96">
            {/* Placeholder for Lottie animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center">
              <span className="text-gray-400">AI Brain Animation</span>
            </div>

            {/* Floating icons */}
            {floatingIcons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: item.delay,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                }}
                className="absolute bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg"
                style={{
                  top: `${20 + index * 20}%`,
                  left: `${10 + index * 20}%`,
                }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
