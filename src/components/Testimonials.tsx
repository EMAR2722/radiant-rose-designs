import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Sarah Johnson", text: "Amazing service and friendly staff! I love my new hairstyle. The salon atmosphere is so relaxing.", rating: 5 },
  { name: "Emily Davis", text: "Best facial treatment I've ever had. My skin has never looked better. Highly recommend!", rating: 5 },
  { name: "Jessica Miller", text: "The makeup artist was incredible for my wedding day. I felt like a queen. Thank you BellaRosa!", rating: 5 },
  { name: "Amanda Wilson", text: "I've been coming here for years and the quality never disappoints. My go-to salon for everything!", rating: 5 },
  { name: "Rachel Thompson", text: "The eyelash extensions look so natural and beautiful. I get compliments everywhere I go!", rating: 5 },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-primary/30">
      <div className="salon-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-salon-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            What Our <span className="italic">Clients Say</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-md border border-border text-center"
          >
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} size={18} className="fill-salon-gold text-salon-gold" />
              ))}
            </div>
            <p className="text-foreground/80 font-body italic leading-relaxed mb-6 text-lg">
              "{testimonials[current].text}"
            </p>
            <p className="font-heading text-lg text-foreground">{testimonials[current].name}</p>
          </motion.div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-salon-gold hover:border-salon-gold transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-salon-gold" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-salon-gold hover:border-salon-gold transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
