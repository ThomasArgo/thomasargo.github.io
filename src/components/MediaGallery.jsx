import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MotionButton = motion.button;
const MotionImage = motion.img;

export default function MediaGallery({ title, media, compact = false }) {
  const [activeMedia, setActiveMedia] = useState(null);

  return (
    <>
      <div className={`media-grid${compact ? " media-grid--compact" : ""}`}>
        {media.map((source, index) => (
          <button
            className="media-frame"
            key={source}
            onClick={() => setActiveMedia(source)}
            type="button"
          >
            <img
              alt={`${title} preview ${index + 1}`}
              className="media-item"
              loading="lazy"
              src={source}
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeMedia ? (
          <MotionButton
            animate={{ opacity: 1 }}
            className="lightbox"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setActiveMedia(null)}
            type="button"
          >
            <MotionImage
              alt={`${title} expanded preview`}
              animate={{ scale: 1, y: 0 }}
              className="lightbox__image"
              initial={{ scale: 0.95, y: 16 }}
              src={activeMedia}
            />
          </MotionButton>
        ) : null}
      </AnimatePresence>
    </>
  );
}
