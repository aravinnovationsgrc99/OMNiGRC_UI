"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle?: string;
  videoUrl?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoTitle = "Arav'sGRC Platform Demo",
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ", // fallback placeholder embed
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-[95vw] max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-brand-teal/40 bg-brand-dark-card shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between border-b border-slate-800 px-4 sm:px-6 py-3 sm:py-4">
              <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-brand-teal/20 text-brand-cyan">
                  <Play className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-brand-cyan" />
                </div>
                <h3 className="font-semibold text-xs sm:text-sm text-slate-100 truncate max-w-[200px] sm:max-w-md">{videoTitle}</h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`${videoUrl}?autoplay=1`}
                title={videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
