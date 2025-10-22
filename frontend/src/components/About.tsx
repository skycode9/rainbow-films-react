import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">About</span>{" "}
            <span className="text-white">Us</span>
          </h2>
          <motion.div
            className="relative w-24 h-0.5 mx-auto mb-8 overflow-hidden"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, transparent, #8b5cf6, #3b82f6, #06b6d4, #10b981, #eab308, #f97316, #ec4899, transparent)'
              }}
            />
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, transparent, #a78bfa, #60a5fa, #22d3ee, #34d399, #fde047, #fb923c, #f472b6, transparent)'
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 lg:mb-8">
              Crafting Visual Stories That Inspire
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8 lg:mb-12">
              <div className="text-left">
                <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                  At Rainbow Films, we believe every story deserves to be told
                  with passion, precision, and artistic excellence. Our team of
                  visionary creators combines cutting-edge technology with
                  timeless storytelling techniques to produce content that
                  resonates with audiences worldwide.
                </p>
              </div>
              <div className="text-left">
                <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                  From concept to final cut, we handle every aspect of
                  production with meticulous attention to detail, ensuring that
                  your vision comes to life in the most compelling way possible.
                </p>
              </div>
            </div>

            {/* Stats Section */}
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          className="mt-16 lg:mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Who Makes the{" "}
              <span className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Magic
              </span>
            </h3>
            <motion.div
              className="relative w-56 h-0.5 mx-auto mb-6 overflow-hidden"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to right, transparent, #8b5cf6, #3b82f6, #06b6d4, #10b981, #eab308, #f97316, #ec4899, transparent)'
                }}
              />
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to right, transparent, #a78bfa, #60a5fa, #22d3ee, #34d399, #fde047, #fb923c, #f472b6, transparent)'
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A collective of passionate creatives and storytellers bringing
              cinematic visions to life with precision and artistry
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 max-w-7xl mx-auto px-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="text-center">
                  {/* Profile Image - Square with painted effect */}
                  <div className="relative mb-6 mx-auto w-full aspect-square max-w-[280px]">
                    {/* Soft shadow underneath that moves on hover */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/20 to-gray-900/40 blur-2xl transform translate-y-6 scale-95 group-hover:translate-y-8 transition-transform duration-500" />

                    <motion.div
                      className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black overflow-hidden"
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Subtle overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  </div>

                  {/* Name */}
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                    {member.name}
                  </h4>

                  {/* Role */}
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const teamMembers = [
  {
    name: "Ben Proudfoot",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=650&h=650&fit=crop&crop=faces",
  },
  {
    name: "Brandon Somerhalder",
    role: "Cinematographer-in-Residence",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=650&h=650&fit=crop&crop=faces",
  },
  {
    name: "David Bolen",
    role: "Cinematographer-in-Residence",
    image: "/davidb-650x650.jpg",
  },
  {
    name: "Gabriel Rivera",
    role: "Creative Director, Archival and Licensing",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=650&h=650&fit=crop&crop=faces",
  },
];
