'use client';
import { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';

const denAlignHeroLogo = '/assets/denstackLogo.png';

export function HeroSection() {
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const demoVideoRef = useRef<HTMLVideoElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [userMutedPreference, setUserMutedPreference] = useState<boolean | null>(null); // Track user's mute preference

  // ─── Background video: load only after page is interactive ───
  useEffect(() => {
    const bg = bgVideoRef.current;
    if (!bg) return;

    const load = () => {
      if (bg.readyState === 0) {
        bg.load();
      }
      bg.play().catch(() => {});
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(load, { timeout: 2000 });
    } else {
      setTimeout(load, 500);
    }
  }, []);

  useEffect(() => {
    const wrapper = videoWrapperRef.current;
    const video = demoVideoRef.current;
    if (!wrapper || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!userPaused) {
            if (video.ended) video.load();
            
            // Apply user's mute preference when returning to viewport
            if (userMutedPreference !== null) {
              video.muted = userMutedPreference;
              setIsMuted(userMutedPreference);
            } else {
              // First time - start muted for autoplay policy
              video.muted = true;
              setIsMuted(true);
            }
            
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        } else {
          video.pause();
          setIsPlaying(false);
          // Don't change mute state when leaving viewport
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [userPaused, userMutedPreference]);

  useEffect(() => {
    const wrapper = videoWrapperRef.current;
    if (!wrapper) return;

    const resetObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // Video left viewport — reset userPaused so next entry auto-plays
          setUserPaused(false);
        }
      },
      { threshold: 0 }
    );

    resetObserver.observe(wrapper);
    return () => resetObserver.disconnect();
  }, []);

  useEffect(() => {
    const video = demoVideoRef.current;
    if (!video) return;
    video.muted = true; // start muted for autoplay
  }, []);

  const handleMuteToggle = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const video = demoVideoRef.current;
    if (!video) return;
    
    const newMuted = !isMuted;
    video.muted = newMuted;
    if (!newMuted) {
      video.volume = 1.0;
    }
    setIsMuted(newMuted);
    setUserMutedPreference(newMuted); // Save user's preference
  }, [isMuted]);

  const handlePlayPause = useCallback(() => {
    const video = demoVideoRef.current;
    if (!video) return;
    
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      setUserPaused(true);
    } else {
      if (video.ended) video.load();
      
      // When user manually plays, unmute and remember preference
      video.muted = false;
      video.volume = 1.0;
      setIsMuted(false);
      setUserMutedPreference(false); // Save preference - user wants sound
      
      video.play().then(() => {
        setIsPlaying(true);
        setUserPaused(false);
      }).catch((err) => {
        console.log('Play failed:', err);
        // Fallback: if autoplay with sound is blocked, try muted
        if (err.name === 'NotAllowedError') {
          video.muted = true;
          setIsMuted(true);
          video.play().then(() => {
            setIsPlaying(true);
            setUserPaused(false);
          }).catch(() => {});
        }
      });
    }
  }, [isPlaying]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <video
        ref={bgVideoRef}
        loop
        muted
        playsInline
        preload="none"
        onCanPlay={() => setBgLoaded(true)}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: bgLoaded ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      >
        <source src="/assets/DenStack_bg.webm" type="video/webm" />
        <source src="/assets/DenStack_bg.mp4" type="video/mp4" />
      </video>

      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.50)', zIndex: 1 }} />

      <section
        style={{ position: 'relative', zIndex: 2 }}
        className="pt-16 pb-10 sm:pt-24 sm:pb-16 lg:pt-40 lg:pb-32 overflow-visible"
      >
        <div className="max-w-[1280px] mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mb-6 sm:mb-8"
              >
                <div className="inline-block px-6 py-4 rounded-xl">
                  <img
                    src={denAlignHeroLogo}
                    alt="DenAlign"
                    className="max-h-32 sm:max-h-40 md:max-h-48 w-auto object-contain"
                    fetchPriority='high'
                  />
                </div>
              </motion.div>

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

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
                The Next Generation of{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                    Modern Dental
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute bottom-0.5 sm:bottom-1 left-0 h-1.5 sm:h-2 bg-gradient-to-r from-blue-200 to-cyan-200 -z-10 rounded"
                  />
                </span>{' '}
                Practice Software.
              </h1>

              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 leading-relaxed mb-6 sm:mb-8 max-w-xl font-medium">
                From seamless scheduling to automated billing, Denstack simplifies the complexities of
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
                  className="border-2 border-white/40 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl hover:border-blue-400 hover:text-blue-300 hover:bg-white/10 group transition-all"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <motion.div
                ref={videoWrapperRef}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-900"
              >
                <div className="relative aspect-[5/4]">
                  <video
                    ref={demoVideoRef}
                    className="w-full h-full object-cover opacity-80"
                    preload="none"
                    playsInline
                    onEnded={() => {
                      setIsPlaying(false);
                    }}
                  >
                    <source src="/assets/Denstack_video.webm" type="video/webm" />
                    <source src="/assets/Denstack_video.mp4" type="video/mp4" />
                  </video>

                  {/* MUTE/UNMUTE BUTTON */}
                  <button
                    onClick={handleMuteToggle}
                    className="absolute bottom-3 right-3 z-30 bg-black/60 border border-white/25 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-black/80 hover:scale-110 transition"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                        <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                      </svg>
                    )}
                  </button>

                  <div className="absolute inset-0 bg-black/40 pointer-events-none" />

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

              {/* Floating Cards remain the same */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
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
                animate={{ y: [0, 10, 0], rotate: [2, -2, 2] }}
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

              <motion.div
                animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 left-10 w-4 h-4 hidden lg:block"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </motion.div>

              <motion.div
                animate={{ scale: [0, 1, 0], rotate: [0, -180, -360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute bottom-20 right-20 w-4 h-4 hidden lg:block"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}