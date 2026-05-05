'use client'

import { motion } from 'motion/react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
const logo1 = '/assets/a233ad39301204f2324138cc0b7a91d95fcd2d99.png';
const logo2 = '/assets/197b8ba16f9cad7ee60d1ccb1501ec15a984b25f.png';
const logo3 = '/assets/3933feea24c603247c8fd26daef4f8d96b9f89f5.png';

export function SocialProofSection() {
  // Six logos in total
  const logos = [
    { src: logo1, alt: 'Lay\'s logo', isFigma: true },
    { src: logo2, alt: 'Coca-Cola logo', isFigma: true },
    { src: logo3, alt: 'Pepsi logo', isFigma: true },
    { src: 'https://images.unsplash.com/photo-1617611413968-537a2ba4986d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWtlJTIwbG9nbyUyMHN3b29zaHxlbnwxfHx8fDE3NzAyMDMxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Nike logo', isFigma: false },
    { src: 'https://images.unsplash.com/photo-1760037028517-e5cc6e3ebd3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcHBsZSUyMGxvZ28lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3MDEzNDQ1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Apple logo', isFigma: false },
    { src: 'https://images.unsplash.com/photo-1547494784-d143dea885b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNY0RvbmFsZCUyN3MlMjBsb2dvJTIwZ29sZGVuJTIwYXJjaGVzfGVufDF8fHx8MTc3MDIwMzEyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'McDonald\'s logo', isFigma: false }
  ]

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos]

  return (
    <section className="relative w-full bg-white py-8 md:py-10 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header Text Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 py-6 px-8 max-w-fit mx-auto">
            <p 
              className="text-[14px] md:text-[16px] text-[#8A8A8A] font-['Inter',sans-serif]"
              style={{ letterSpacing: '0.05em' }}
            >
              Trusted by 3000+ Dental Practices
            </p>
          </div>
        </motion.div>

        {/* Scrolling Logo Container */}
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className="flex items-center"
              animate={{
                x: [0, '-50%']
              }}
              transition={{
                x: {
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear'
                }
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-shrink-0 px-8 md:px-12"
                >
                  {/* Logo Image */}
                  <div 
                    className="h-[48px] md:h-[56px] flex items-center justify-center select-none opacity-60 hover:opacity-100 transition-opacity duration-300"
                  >
                    {logo.isFigma ? (
                      <img 
                        src={logo.src} 
                        alt={logo.alt}
                        className="h-full w-auto object-contain grayscale"
                        style={{ filter: 'grayscale(100%)' }}
                      />
                    ) : (
                      <ImageWithFallback 
                        src={logo.src} 
                        alt={logo.alt}
                        className="h-full w-auto object-contain grayscale"
                        style={{ filter: 'grayscale(100%)' }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white py-4 shadow-lg">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">
            © 2026 DenStack. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  )
}