// components/Footer.jsx
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "About",
      links: ["Our Story", "Team", "Careers"],
    },
    {
      title: "Services",
      links: ["Web Development", "Mobile Apps", "AI Solutions", "Portfolios"],
    },
    {
      title: "Contact",
      links: ["Get a Quote", "Support", "Feedback"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookies"],
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-4"
            >
              <span className="text-2xl font-bold">EvisionTech</span>
            </motion.div>
            <p className="text-gray-300 mb-6">
              Engineering Tomorrow's Digital Solutions
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/e-visiontech"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://x.com/evsachin123"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://github.com/evsachin/"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
              <a href="mailto:"></a>
              <a
                href="mailto:sachin.kolhe.evisiontech@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Get tech insights & updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg w-full text-gray-900 focus:outline-none"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            © 2025 EvisionTech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
