import { motion } from "framer-motion";
import heroImage from "@/assets/hero-salon.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury beauty salon interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-salon-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          Welcome to BellaRosa
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl text-background leading-tight mb-6"
        >
          Enhance Your{" "}
          <span className="italic text-salon-gold">Natural Beauty</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-background/80 font-body text-base md:text-lg max-w-2xl mx-auto mb-10 font-light"
        >
          Professional beauty services designed to make you feel confident and beautiful.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="gold-gradient px-8 py-3.5 rounded-full font-semibold text-accent-foreground hover:opacity-90 transition-all duration-300 shadow-lg text-sm tracking-wide"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 rounded-full font-semibold border-2 border-background/60 text-background hover:bg-background/10 transition-all duration-300 text-sm tracking-wide"
          >
            View Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-background/40 flex items-start justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-background/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
