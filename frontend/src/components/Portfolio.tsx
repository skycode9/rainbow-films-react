import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import VideoModal from "./VideoModal";

export default function Films() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  const handlePlayClick = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsVideoModalOpen(true);
  };

  const projects = [
    {
      id: 1,
      title: "Ethereal Dreams",
      category: "Music Video",
      description:
        "A visually stunning music video featuring ethereal landscapes and dynamic cinematography.",
      thumbnail:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=eeJFh3YhPEs",
    },
    {
      id: 2,
      title: "Brand Evolution",
      category: "Commercial",
      description:
        "A compelling brand story showcasing innovation and growth in the tech industry.",
      thumbnail:
        "https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=eeJFh3YhPEs",
    },
    {
      id: 3,
      title: "Ocean Depths",
      category: "Documentary",
      description:
        "An immersive documentary exploring the mysteries of deep ocean ecosystems.",
      thumbnail:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=eeJFh3YhPEs",
    },
    {
      id: 4,
      title: "Midnight Runner",
      category: "Short Film",
      description:
        "A noir-inspired short film about redemption and second chances.",
      thumbnail:
        "https://images.unsplash.com/photo-1489599904472-445b83c3fb98?w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=eeJFh3YhPEs",
    },
  ];

  return (
    <section id="films" className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Our</span>{" "}
            <span className="text-white">Films</span>
          </h2>
          <motion.div
            className="relative w-28 h-0.5 mx-auto mb-8 overflow-hidden"
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our diverse collection of award-winning films, commercials,
            and creative content that showcase our passion for visual
            storytelling.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto" layout>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-white transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              layout
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handlePlayClick(project.videoUrl)}
                  >
                    <Play size={24} fill="black" />
                  </motion.button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/70 text-white text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <motion.button
                    className="text-white font-semibold hover:text-gray-300 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    onClick={() => handlePlayClick(project.videoUrl)}
                  >
                    Watch Now →
                  </motion.button>
                  <motion.button
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={18} />
                  </motion.button>
                </div>
              </div>

              {/* White accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={selectedVideoUrl}
      />
    </section>
  );
}
