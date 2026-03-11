import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import serviceHair from "@/assets/service-hair.jpg";
import serviceColor from "@/assets/service-color.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceMakeup from "@/assets/service-makeup.jpg";
import serviceNails from "@/assets/service-nails.jpg";
import serviceLashes from "@/assets/service-lashes.jpg";

const services = [
  { image: serviceHair, title: "Hair Styling", description: "From classic cuts to modern styles, our expert stylists create the perfect look.", price: "From $45" },
  { image: serviceColor, title: "Hair Coloring", description: "Balayage, highlights, full color — vibrant, long-lasting color transformations.", price: "From $80" },
  { image: serviceFacial, title: "Facial Treatment", description: "Rejuvenating facials tailored to your skin type for a radiant, glowing complexion.", price: "From $60" },
  { image: serviceMakeup, title: "Makeup", description: "Professional makeup for weddings, events, or everyday glam that enhances your features.", price: "From $55" },
  { image: serviceNails, title: "Manicure & Pedicure", description: "Pamper your hands and feet with our luxurious nail care and artistic designs.", price: "From $35" },
  { image: serviceLashes, title: "Eyelash Extensions", description: "Beautiful, natural-looking lash extensions for effortless everyday glamour.", price: "From $70" },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border"
    >
      <div className="overflow-hidden aspect-[4/3]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading text-xl text-foreground">{service.title}</h3>
          <span className="text-salon-gold font-body text-sm font-semibold">{service.price}</span>
        </div>
        <p className="text-muted-foreground text-sm font-body leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background">
      <div className="salon-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-salon-gold font-body text-sm tracking-[0.2em] uppercase mb-3">What We Offer</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Our <span className="italic">Services</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
