import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-black"
      ref={ref}
    >
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
            className="relative w-32 h-0.5 mx-auto mb-8 overflow-hidden"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 lg:mb-12">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">
                  150+
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Projects
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">
                  15+
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Years
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-pink-400 mb-2">
                  50+
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Awards
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Satisfaction
                </div>
              </motion.div>
            </div>
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
              className="relative w-48 h-0.5 mx-auto mb-6 overflow-hidden"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="relative bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 hover:border-gray-700/80 transition-all duration-500">
                  {/* Rainbow Blur Effect on Hover */}
                  <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/25 via-blue-500/25 via-cyan-500/25 via-green-500/25 via-yellow-500/25 via-orange-500/25 to-pink-500/25 blur-2xl" />
                  </div>

                  <div className="p-6">
                    {/* Profile Image */}
                    <div className="relative mb-5 mx-auto w-32 h-32">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-full blur-md group-hover:blur-lg transition-all duration-500" />
                      <motion.div
                        className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-700/50 group-hover:border-gray-600/80 transition-all duration-500"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-white mb-1 group-hover:text-gray-100 transition-colors duration-300">
                        {member.name}
                      </h4>
                      <p
                        className={`text-sm font-medium bg-gradient-to-r ${member.accentColor} bg-clip-text text-transparent mb-3`}
                      >
                        {member.role}
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                        {member.tagline}
                      </p>

                      {/* Social Icons */}
                      <div className="flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <motion.button
                          className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-full transition-colors duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className="w-4 h-4 text-gray-400" />
                        </motion.button>
                        <motion.button
                          className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-full transition-colors duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Mail className="w-4 h-4 text-gray-400" />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div
                    className={`h-0.5 bg-gradient-to-r ${member.accentColor} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                  />
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
    name: "Alex Rodriguez",
    role: "Creative Director",
    tagline: "Visionary storyteller with a lens on the extraordinary",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    accentColor: "from-slate-400 to-slate-600",
  },
  {
    name: "Maya Chen",
    role: "Lead Cinematographer",
    tagline: "Painting emotions through light and shadow",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    accentColor: "from-zinc-400 to-zinc-600",
  },
  {
    name: "Jordan Blake",
    role: "Art Director",
    tagline: "Where imagination meets visual perfection",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    accentColor: "from-gray-400 to-gray-600",
  },
  {
    name: "Sam Rivera",
    role: "Sound Designer",
    tagline: "Crafting sonic landscapes that resonate with soul",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    accentColor: "from-neutral-400 to-neutral-600",
  },
  {
    name: "Taylor Morgan",
    role: "Creative Producer",
    tagline: "Transforming concepts into cinematic reality",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    accentColor: "from-stone-400 to-stone-600",
  },
  {
    name: "Casey Park",
    role: "Post-Production Lead",
    tagline: "Where the magic truly comes alive in every frame",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    accentColor: "from-slate-500 to-slate-700",
  },
];
