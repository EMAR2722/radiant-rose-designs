import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-salon.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-salon-cream">
      <div className="salon-container" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="Our salon team"
              className="rounded-2xl shadow-xl w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-salon-gold/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-primary/30 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-salon-gold font-body text-sm tracking-[0.2em] uppercase mb-3">
              About Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              About Our <span className="italic">Salon</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Our salon provides high-quality beauty services including hair styling, skincare
              treatments, makeup, and nail care in a relaxing and professional environment. We
              believe every woman deserves to feel pampered and beautiful.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              With over a decade of experience and a team of passionate stylists, we combine
              the latest trends with timeless techniques to deliver results that exceed
              expectations.
            </p>
            <div className="flex gap-12">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "5K+", label: "Happy Clients" },
                { number: "20+", label: "Expert Stylists" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl text-salon-gold">{stat.number}</p>
                  <p className="text-xs text-muted-foreground tracking-wide mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
