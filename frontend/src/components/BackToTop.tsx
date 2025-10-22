import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Outer glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 via-cyan-500 via-green-500 via-yellow-500 via-orange-500 to-pink-500 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Button */}
          <div className="relative w-14 h-14 bg-black border-2 border-white/30 rounded-full flex items-center justify-center group-hover:border-white/50 transition-all duration-300">
            <ArrowUp className="w-6 h-6 text-white" />
          </div>

          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/20"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
