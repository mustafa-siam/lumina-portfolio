import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating?: number;
}

interface Props {
  testimonials: Testimonial[];
  autoPlay?: boolean;
}

const TestimonialSlider = ({ testimonials, autoPlay = true }: Props) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay]);

  const current = testimonials[index];

  return (
    <div className="relative max-w-4xl mx-auto">
      <Quote className="w-12 h-12 text-accent/30 mx-auto mb-6" />
      <div className="min-h-[260px] md:min-h-[220px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="heading-md text-foreground font-light leading-snug">
              "{current.quote}"
            </p>
            <div className="mt-8">
              <p className="font-heading font-medium text-foreground">{current.author}</p>
              <p className="label-sm mt-1">{current.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 transition-all duration-300 ${
                i === index ? "w-8 bg-accent" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
