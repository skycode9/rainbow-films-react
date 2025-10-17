import { motion } from 'framer-motion'

export default function LoadingAnimation() {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Rainbow loading line */}
      <div className="absolute top-0 left-0 w-full h-1 overflow-hidden">
        <motion.div
          className="h-full bg-rainbow-gradient"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      </div>

      {/* Logo animation */}
      <div className="text-center">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          RAINBOW
        </motion.h1>
        <motion.div
          className="w-32 h-1 bg-rainbow-gradient mx-auto mb-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
        <motion.p
          className="text-2xl md:text-3xl font-light text-white tracking-widest"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          FILMS
        </motion.p>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const colors = ['#40e0d0', '#3fdfd1', '#0473fa', '#8ed34e', '#d7c521', '#e47e4a', '#ec5065'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          
          return (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full opacity-60"
              style={{ backgroundColor: randomColor }}
              initial={{
                x: Math.random() * 1200,
                y: 800,
              }}
              animate={{
                y: -50,
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          );
        })}
      </div>
    </motion.div>
  )
}
