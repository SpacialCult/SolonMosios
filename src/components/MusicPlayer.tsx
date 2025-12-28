import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.2;
      audio.loop = true;
      if (isPlaying) audio.play().catch(() => {});
      else audio.pause();
    }
  }, [isPlaying]);

  const toggleMusic = () => setIsPlaying(!isPlaying);

  const pulseColor = isPlaying ? "bg-green-400" : "bg-red-400";

  return (
    <>
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}audio/dearly-beloved.mp3`}
      />
      <div className="fixed bottom-4 right-4 z-50">
        <div className="relative flex items-center justify-center">
          {/* Pulsing circle */}
          <AnimatePresence>
            <motion.div
              key="pulse"
              className={`absolute w-14 h-14 rounded-full opacity-50 ${pulseColor}`}
              initial={{ scale: 0.8, opacity: 0.3 }}
              animate={{ scale: 1.2, opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.2,
              }}
            />
          </AnimatePresence>

          <motion.button
            onClick={toggleMusic}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-700 transition"
            title={isPlaying ? "Pause Music" : "Play Music"}
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.span
                  key="playing"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="text-green-400 font-semibold"
                >
                  Playing
                </motion.span>
              ) : (
                <motion.span
                  key="paused"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="text-red-400 font-semibold"
                >
                  Paused
                </motion.span>
              )}
            </AnimatePresence>
            🎵
          </motion.button>
        </div>
      </div>
    </>
  );
}
