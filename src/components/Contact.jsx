// components/Contact.jsx
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Drop us a message. We'd love to hear about your project.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <a
                  href="sachin.kolhe.evisiontech@gmail.com"
                  className="flex items-center text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  sachin.kolhe.evisiontech@gmail.com
                </a>
              </div>

              <div className="flex items-center">
                <FaMapMarkerAlt className="text-indigo-500 mr-2" />
                <span className="text-gray-600 dark:text-gray-300">
                  Pune, India
                </span>
              </div>

              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.linkedin.com/company/e-visiontech/people/?viewAsMember=true"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://x.com/evsachin123"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
                >
                  <FaTwitter className="text-2xl" />
                </a>
                <a
                  href="https://github.com/evsachin/"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
                >
                  <FaGithub className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-indigo-500/30 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
