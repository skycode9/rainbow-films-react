import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Film, Zap } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { icon: Film, number: '500+', label: 'Projects Completed' },
    { icon: Award, number: '50+', label: 'Awards Won' },
    { icon: Users, number: '200+', label: 'Happy Clients' },
    { icon: Zap, number: '10+', label: 'Years Experience' },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">About</span>{' '}
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
              At Rainbow Films, we believe every story deserves to be told with passion, 
              precision, and artistic excellence. Our team of visionary creators combines 
              cutting-edge technology with timeless storytelling techniques to produce 
              content that resonates with audiences worldwide.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From concept to final cut, we handle every aspect of production with 
              meticulous attention to detail, ensuring that your vision comes to life 
              in the most compelling way possible.
            </p>
            
            <motion.button
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-white transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <motion.h4
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                >
                  {stat.number}
                </motion.h4>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
