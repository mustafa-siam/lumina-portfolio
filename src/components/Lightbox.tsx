import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox = ({ images, index, onClose, onPrev, onNext }: Props) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/80 hover:text-white"
          aria-label="Close"
        >
          <X className="w-8 h-8" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-6 text-white/80 hover:text-white"
          aria-label="Previous"
        >
          <ChevronLeft className="w-10 h-10" />
        </button>
        <motion.img
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          src={images[index]}
          alt=""
          className="max-h-[90vh] max-w-[90vw] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-6 text-white/80 hover:text-white"
          aria-label="Next"
        >
          <ChevronRight className="w-10 h-10" />
        </button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-mono">
          {index + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
