import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Director & Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
    },
    {
      name: "Priya Sharma",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop&crop=face",
    },
    {
      name: "Amit Singh",
      role: "Cinematographer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
    },
    {
      name: "Neha Gupta",
      role: "Editor",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face",
    },
    {
      name: "Vikram Patel",
      role: "Sound Designer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face",
    },
    {
      name: "Kavya Reddy",
      role: "Producer",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">About</span>{" "}
            <span className="text-white">Us</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Crafting Visual Stories That Inspire
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              At Rainbow Films, we believe every story deserves to be told with
              passion, precision, and artistic excellence. Our team of visionary
              creators combines cutting-edge technology with timeless
              storytelling techniques to produce content that resonates with
              audiences worldwide.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From concept to final cut, we handle every aspect of production
              with meticulous attention to detail, ensuring that your vision
              comes to life in the most compelling way possible.
            </p>

            <motion.button
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Film Strip Team Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Film Strip Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Meet Our Team
              </h3>
              <p className="text-gray-300">
                The creative minds behind Rainbow Films
              </p>
            </div>

            {/* Film Strip Container */}
            <div className="relative  p-4 rounded-lg overflow-hidden">
              <div className="relative h-80 md:h-96 overflow-hidden">
                <motion.div
                  className="flex h-full"
                  animate={{
                    x: ["0%", "-600%"],
                  }}
                  transition={{
                    duration: 85,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  {/* Duplicate team members for seamless infinite loop */}
                  {[...teamMembers, ...teamMembers].map((member, index) => (
                    <div
                      key={index}
                      className="w-48 h-64 md:w-56 md:h-72 relative bg-black flex-shrink-0 mx-2"
                    >
                      {/* Film Perforations Top */}
                      <div className="absolute top-0 left-0 right-0 h-4 bg-black flex justify-between items-center px-2">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 bg-gray-600 rounded-sm"
                          ></div>
                        ))}
                      </div>

                      {/* Film Perforations Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-4 bg-black flex justify-between items-center px-2">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 bg-gray-600 rounded-sm"
                          ></div>
                        ))}
                      </div>

                      {/* Film Frame */}
                      <div className="absolute inset-x-2 top-6 bottom-6 bg-white overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />

                        {/* Member Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2 md:p-4">
                          <h4 className="text-white font-bold text-sm md:text-lg">
                            {member.name}
                          </h4>
                          <p className="text-gray-300 text-xs md:text-sm">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
