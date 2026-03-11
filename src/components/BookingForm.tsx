import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";

const services = [
  "Hair Styling",
  "Hair Coloring",
  "Facial Treatment",
  "Makeup",
  "Manicure & Pedicure",
  "Eyelash Extensions",
];

const BookingForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Appointment request sent! We'll confirm shortly.");
    setForm({ name: "", phone: "", email: "", service: "", date: "", time: "", message: "" });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-salon-gold/50 focus:border-salon-gold transition-all";

  return (
    <section id="booking" className="section-padding bg-background">
      <div className="salon-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-salon-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Reserve Your Spot</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Book an <span className="italic">Appointment</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card p-8 md:p-10 rounded-2xl shadow-lg border border-border"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input
              required
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            <input
              required
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClass}
            />
          </div>
          <input
            required
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`${inputClass} mb-4`}
          />
          <select
            required
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={`${inputClass} mb-4`}
          >
            <option value="">Select Service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input
              required
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className={inputClass}
            />
            <input
              required
              type="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className={inputClass}
            />
          </div>
          <textarea
            placeholder="Additional message (optional)"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={3}
            className={`${inputClass} mb-6 resize-none`}
          />
          <button
            type="submit"
            className="w-full gold-gradient py-3.5 rounded-full font-semibold text-accent-foreground hover:opacity-90 transition-opacity duration-300 shadow-md text-sm tracking-wide"
          >
            Book Appointment
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;
