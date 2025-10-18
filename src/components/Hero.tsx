import { useEffect, Suspense, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Play } from "lucide-react";
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { MeshTransmissionMaterial } from '@react-three/drei';
import { Mesh } from 'three';
import { Fluid } from './fluid/Fluid';
import VideoModal from './VideoModal';

// Optional 3D Torus for background depth
const Torus = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.005;
    meshRef.current.rotation.x += 0.002;
  });

  return (
    <mesh position-z={-8} ref={meshRef}>
      <torusGeometry attach="geometry" args={[3, 1, 16, 32]} />
      <MeshTransmissionMaterial
        transmission={0.9}
        samples={1}
        anisotropy={0}
        chromaticAberration={0.01}
        color="#40e0d0"
        thickness={0.05}
        roughness={0.1}
        metalness={0}
        ior={1.2}
        distortionScale={0}
        temporalDistortion={0}
        opacity={0.2}
      />
    </mesh>
  );
};

export default function Hero() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  const handlePlayClick = () => {
    setIsVideoModalOpen(true);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          className="absolute inset-0 pointer-events-none"
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={[1, 1.5]}
          performance={{ min: 0.5 }}
          frameloop="always"
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[5, 5, 5]} intensity={0.5} />
            <Torus />
            <EffectComposer>
              <Fluid
                intensity={3}
                force={2}
                distortion={1}
                curl={10}
                swirl={5}
                radius={0.5}
                rainbow={true}
                showBackground={false}
                fluidColor="#40e0d0"
                backgroundColor="#000000"
                blend={5}
                pressure={0.8}
                densityDissipation={0.95}
                velocityDissipation={0.98}
              />
              <Bloom 
                intensity={0.1} 
                luminanceThreshold={0.95} 
                luminanceSmoothing={0.95}
              />
            </EffectComposer>
          </Suspense>
        </Canvas>
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
        
        {/* Invisible mouse tracking area */}
        <div 
          className="absolute inset-0 pointer-events-auto"
          style={{ background: 'transparent' }}
          onMouseMove={(e) => {
            // Update cursor position for fluid effect
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 pointer-events-auto">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-12 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="font-normal">Imagining.</span>
          <span className="text-gray-300"> Designing.</span>
          <span className="text-gray-400"> Creating </span>
          <span className="bg-rainbow-gradient bg-clip-text text-transparent font-semibold">
            Experiences.
          </span>
        </motion.h1>

        {/* Play Button */}
        <motion.button
          className="group relative w-24 h-24 md:w-32 md:h-32 mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePlayClick}
        >
          <div className="absolute inset-0 bg-white/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
          <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl">
            <Play size={32} className="text-black ml-1" fill="black" />
          </div>

          {/* Ripple effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/20"
            initial={{ scale: 1 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.button>

        {/* Rainbow Films branding */}
        <motion.p
          className="mt-12 text-sm md:text-base text-gray-400 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="text-white">Rainbow</span>{' '}
          <span className="bg-rainbow-gradient bg-clip-text text-transparent">Films</span>
        </motion.p>
      </div>

      {/* Mouse follower indicator */}
      <motion.div
        className="fixed w-8 h-8 rounded-full border-2 border-white/30 pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=eeJFh3YhPEs"
      />
    </section>
  );
}
