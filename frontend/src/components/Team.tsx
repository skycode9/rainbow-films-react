import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  tagline: string;
  image: string;
  accentColor: string;
}

const teamMembers: TeamMember[] = [
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="team"
      className="py-16 sm:py-20 lg:py-28 bg-black relative overflow-hidden"
      ref={ref}
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-slate-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-zinc-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Team
            </span>
          </h2>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6" />

          <motion.p
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A collective of passionate creatives and storytellers bringing
            cinematic visions to life with precision and artistry
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              {/* Card Container */}
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
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-gray-100 transition-colors duration-300">
                      {member.name}
                    </h3>
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
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="group relative px-8 py-3 bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-gray-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Join Our Creative Team
              <motion.span
                className="text-gray-400"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
