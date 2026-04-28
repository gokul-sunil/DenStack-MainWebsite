'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/app/components/ui/button';

export function RegionSelectorModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already selected a region
    const hasSelectedRegion = localStorage.getItem('dentacare-region-selected');
    
    if (!hasSelectedRegion) {
      // Small delay before showing modal for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleContinue = () => {
    localStorage.setItem('dentacare-region-selected', 'UAE');
    setIsOpen(false);
  };

  const handleRegionSelect = (region: string) => {
    localStorage.setItem('dentacare-region-selected', region);
    setIsOpen(false);
    // In a real app, you might redirect to different regional sites here
    // For now, we'll just close the modal
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={handleContinue}
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 sm:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Content */}
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 leading-relaxed">
                  You will be viewing DentaCare's website for the UAE region
                </h2>

                {/* Primary CTA */}
                <Button
                  onClick={handleContinue}
                  className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-gray-900 font-semibold py-6 px-6 rounded-xl text-base shadow-lg shadow-green-500/30 mb-6 transition-all"
                >
                  Continue with DentaCare UAE
                </Button>

                {/* Divider */}
                <div className="mb-5">
                  <p className="text-sm text-gray-500 font-medium">Or Go To</p>
                </div>

                {/* Region Links */}
                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={() => handleRegionSelect('India')}
                    className="text-gray-400 hover:text-gray-600 font-medium text-sm transition-colors"
                  >
                    DentaCare India
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
