'use client';
import { useRef, useState } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
const denAlignHeroLogo = '/assets/51132c9e1a264f6426509e988a49c2be42c8646c.png';

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
const [isPlaying, setIsPlaying] = useState(false);
const handlePlayPause = () => {
  if (!videoRef.current) return;
  if (isPlaying) {
    videoRef.current.pause();
    setIsPlaying(false);
  } else {
    videoRef.current.play();
    setIsPlaying(true);
  }
};
  return (
    <section className="relative pt-16 pb-10 sm:pt-24 sm:pb-16 lg:pt-40 lg:pb-32 overflow-visible bg-transparent">
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-2xl"
          >
            {/* DenAlign Logo */}
           <motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1, duration: 0.6 }}
  className="mb-6 sm:mb-8"
>
  <div className="inline-block  px-4 py-2 ">
    <img src={denAlignHeroLogo} alt="DenAlign" className="h-12 sm:h-16 md:h-20 w-auto" />
  </div>
</motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-4 sm:mb-6 border border-blue-200 shadow-sm"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-semibold text-blue-700">
                The All-In-One AI Assistant That Never Sleeps.
              </span>
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
             The Next Generation of {' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Modern Dental
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute bottom-0.5 sm:bottom-1 left-0 h-1.5 sm:h-2 bg-gradient-to-r from-blue-200 to-cyan-200 -z-10 rounded"
                />
              </span>
              {' '}Practice Software. 
            </h1>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-xl font-medium">
           From  seamless scheduling to automated billing, Denstack simplifies the complexities of 
dental management. Experience a cloud-based ecosystem designed to let you focus on what 
matters most: your patients. 
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg shadow-blue-600/30 group relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  Book Free Demo
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>

              <Button
                variant="outline"
                className="border-2 border-gray-300 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 group transition-all"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Enhanced Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:block"
          >
            {/* Main Dashboard Card */}
          <motion.div
  whileHover={{ y: -8 }}
  transition={{ duration: 0.3 }}
  className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-900"
>
  <div className="relative aspect-[5/4]">
    <video
      ref={videoRef}
      className="w-full h-full object-cover opacity-80"
      preload="metadata"
      onEnded={() => setIsPlaying(false)}
    >
      <source src="/assets/Denstack_video.mp4" type="video/mp4" />
    </video>

    {/* Dull dark overlay always present */}
    <div className="absolute inset-0 bg-black/40" />

    {/* Play/Pause overlay */}
    <div
      onClick={handlePlayPause}
      className={`absolute inset-0 flex items-center justify-center transition-opacity cursor-pointer group ${
        isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
      }`}
    >
      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all">
        {isPlaying ? (
          <svg className="w-7 h-7 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </div>
    </div>

    {/* Testimonial overlay - bottom */}
    {!isPlaying && (
      <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <p className="text-white font-bold text-base leading-snug mb-1">
          "DentaStack helped us grow from a solo startup to a modern, efficient practice."
        </p>
        <p className="text-gray-300 text-sm font-semibold">Dr. Sarah Martinez</p>
        <p className="text-gray-400 text-xs">Owner, Martinez Dental Group</p>
      </div>
    )}
  </div>
</motion.div>

            {/* Floating Cards - Hidden on smaller screens */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [-2, 2, -2]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-200 hidden lg:block"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                <span className="text-sm font-semibold text-gray-900">Live Booking</span>
              </div>
              <div className="text-xs text-gray-600 mt-1">+12 today</div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [2, -2, 2]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl border border-gray-200 hidden lg:block"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  AI
                </div>
                <span className="text-sm font-semibold text-gray-900">Smart Assistant</span>
              </div>
            </motion.div>

            {/* Sparkle Effects - Hidden on mobile */}
            <motion.div
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-10 left-10 w-4 h-4 hidden lg:block"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </motion.div>

            <motion.div
              animate={{
                scale: [0, 1, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5,
              }}
              className="absolute bottom-20 right-20 w-4 h-4 hidden lg:block"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
