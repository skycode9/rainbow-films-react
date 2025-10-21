import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Lenis from "lenis";
import Home from "./pages/Home";
import LoadingAnimation from "./components/LoadingAnimation";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Back to top visibility
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      <AnimatePresence>{isLoading && <LoadingAnimation />}</AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Home />

          {/* Back to Top Button */}
          {showBackToTop && (
            <motion.button
              className="fixed bottom-8 right-8 z-50 w-12 h-12 border-2 hover:opacity-80 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={20} className="group-hover:animate-bounce" />
            </motion.button>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default App;
