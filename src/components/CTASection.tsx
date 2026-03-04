import { Mail, Phone, MapPin, Download } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="mb-16 p-12 bg-gradient-to-r from-primary to-primary-dark rounded-lg text-primary-foreground text-center space-y-6">
          <h2 className="font-montserrat text-4xl sm:text-5xl font-bold">
            Let's Work Together
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or discuss how I can help with your technical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="mailto:feolytogba20@gmail.com"
              className="px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/amuchin-f-togba-4865b4220"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground hover:text-primary transition-all duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="p-6 bg-card rounded-lg border border-border text-center hover:border-primary hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <a
              href="mailto:feolytogba20@gmail.com"
              className="text-primary hover:text-blue-700 transition-colors"
            >
              feolytogba20@gmail.com
            </a>
            <p className="text-xs text-muted-foreground mt-2">Primary contact</p>
          </div>

          {/* Phone */}
          <div className="p-6 bg-card rounded-lg border border-border text-center hover:border-primary hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <a
              href="tel:+231775940468"
              className="text-primary hover:text-blue-700 transition-colors"
            >
              +231 775 940 468
            </a>
            <p className="text-xs text-muted-foreground mt-2">Mobile (WhatsApp available)</p>
          </div>

          {/* Location */}
          <div className="p-6 bg-card rounded-lg border border-border text-center hover:border-primary hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-secondary-foreground">Paynesville, Liberia</p>
            <p className="text-xs text-muted-foreground mt-2">Available for remote work</p>
          </div>
        </div>

        {/* Resume Download */}
        <div className="p-8 bg-secondary rounded-lg border-2 border-dashed border-primary text-center space-y-4">
          <h3 className="font-montserrat text-2xl font-bold text-foreground">
            Download My Resume
          </h3>
          <p className="text-secondary-foreground max-w-2xl mx-auto">
            Get a comprehensive overview of my professional experience, skills, and achievements. The resume includes detailed information about my technical expertise and project portfolio.
          </p>
          <button
            onClick={() => {
              // In a real scenario, this would trigger a resume download
              alert('Resume download will be available soon. Please contact me directly for a copy.');
            }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download Resume (PDF)
          </button>
        </div>

        {/* Social Links */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <h3 className="font-semibold text-foreground mb-6">Connect With Me</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/amuchin-f-togba-4865b4220"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:feolytogba20@gmail.com"
              className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
            <a
              href="https://grand-concha-ac02ff.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Portfolio"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
