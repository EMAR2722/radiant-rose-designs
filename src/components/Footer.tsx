const navLinks = ["Home", "About", "Services", "Gallery", "Book Appointment", "Contact"];

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="salon-container px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <a href="#home" className="font-heading text-2xl text-background">
              Bella<span className="text-salon-gold">Rosa</span>
            </a>
            <p className="text-background/50 font-body text-sm mt-4 leading-relaxed">
              Premium beauty services in a luxurious and welcoming environment. Your beauty, our passion.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg text-background mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, "")}`}
                  className="text-background/50 font-body text-sm hover:text-salon-gold transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg text-background mb-4">Contact Info</h4>
            <div className="flex flex-col gap-2 text-background/50 font-body text-sm">
              <p>123 Beauty Lane, New York, NY 10001</p>
              <p>+1 (555) 123-4567</p>
              <p>hello@bellarosa.com</p>
            </div>
            <div className="flex gap-3 mt-4">
              {["Instagram", "Facebook", "TikTok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-background/40 text-xs hover:text-salon-gold transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/40 font-body text-sm">
            © 2026 BellaRosa. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
