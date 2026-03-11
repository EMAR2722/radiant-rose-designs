import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: Mail, label: "Email", value: "hello@bellarosa.com" },
  { icon: MapPin, label: "Address", value: "123 Beauty Lane, New York, NY 10001" },
  { icon: Clock, label: "Hours", value: "Mon-Sat: 9AM - 7PM" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="salon-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-salon-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Contact <span className="italic">Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full pink-gradient flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-foreground" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">{label}</p>
                  <p className="font-body font-medium text-foreground">{value}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              {["Instagram", "Facebook", "TikTok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-salon-gold hover:border-salon-gold transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-md border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076904379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1586000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salon location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
