import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Heart,
} from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home" || sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      // Use scrollIntoView instead of offsetTop to avoid forced reflows
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Adjust for fixed navbar
      setTimeout(() => {
        window.scrollBy({ top: -80, behavior: "smooth" });
      }, 0);
    }
  };

  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer
      className="bg-gradient-to-t from-black to-gray-900 text-white"
      ref={ref}
    >
      {/* Rainbow line */}
      <div className="w-full h-1 bg-rainbow-gradient" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-3xl font-bold mb-6 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("home")}
            >
              <span className="text-white bg-clip-text text-transparent">
                RAINBOW
              </span>{" "}
              <span className="text-white">FILMS</span>
            </motion.div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Crafting cinematic excellence through innovative storytelling,
              cutting-edge technology, and boundless creativity.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={16} className="text-white" />
                <span className="text-sm">hello@rainbowfilms.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={16} className="text-white" />
                <span className="text-sm">Ahemdabad, Gujarat</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Stay Connected
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Subscribe to our newsletter for the latest updates and
              behind-the-scenes content.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-8">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300"
                />
                <motion.button
                  className="px-4 py-2 bg-white text-black text-sm font-semibold rounded hover:bg-gray-200 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <social.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Rainbow Films. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>in Ahemdabad</span>
            </div>

            <div className="flex gap-6 text-gray-400 text-sm">
              <motion.a
                href="#"
                className="hover:text-white transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-white transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-white transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
