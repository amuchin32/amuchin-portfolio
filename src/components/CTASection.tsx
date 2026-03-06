import { Mail, Phone, MapPin, Download, Globe } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 p-12 bg-primary rounded-lg text-white text-center space-y-6">
          <h2 className="font-montserrat text-4xl sm:text-5xl font-bold">
            Let's Work Together
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or discuss how I can help with your technical needs.
          </p>
          <div className="overflow-hidden w-full pt-6">
            <div className="flex gap-4 animate-marquee whitespace-nowrap">
            <a href="mailto:feolytogba20@gmail.com" className="w-full sm:w-auto px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground hover:text-primary transition-all duration-300 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a href="https://linkedin.com/in/amuchin-f-togba-4865b4220" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground hover:text-primary transition-all duration-300 flex items-center justify-center gap-2">
              Connect on LinkedIn
            </a>
            <a href="https://www.facebook.com/amuchinf.togba.1" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground hover:text-primary transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
            <a href="https://wa.me/231775940468" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground hover:text-primary transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-card rounded-xl border border-border text-center hover:border-primary hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-blue-50 border-2 border-blue-200 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <Mail className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-lg">Email</h3>
            <a href="mailto:feolytogba20@gmail.com" className="text-primary hover:text-blue-700 transition-colors text-sm">feolytogba20@gmail.com</a>
            <p className="text-xs text-muted-foreground mt-2">Primary contact</p>
          </div>

          <div className="p-6 bg-card rounded-xl border border-border text-center hover:border-primary hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-green-50 border-2 border-green-200 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <Phone className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-lg">Phone</h3>
            <a href="tel:+231775940468" className="text-primary hover:text-blue-700 transition-colors text-sm">+231 775 940 468</a>
            <p className="text-xs text-muted-foreground mt-2">Mobile (WhatsApp available)</p>
          </div>

          <div className="p-6 bg-card rounded-xl border border-border text-center hover:border-primary hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-orange-50 border-2 border-orange-200 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <MapPin className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-lg">Location</h3>
            <p className="text-secondary-foreground text-sm">Paynesville, Liberia</p>
            <p className="text-xs text-muted-foreground mt-2">Available for remote work</p>
          </div>
        </div>

        <div className="p-8 bg-secondary rounded-lg border-2 border-dashed border-primary text-center space-y-4">
          <h3 className="font-montserrat text-2xl font-bold text-foreground">Download My Resume</h3>
          <p className="text-secondary-foreground max-w-2xl mx-auto">Get a comprehensive overview of my professional experience, skills, and achievements. The resume includes detailed information about my technical expertise and project portfolio.</p>
          <button onClick={() => { alert("Resume download will be available soon. Please contact me directly for a copy."); }} className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
            <Download className="w-5 h-5" />
            Download Resume (PDF)
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <h3 className="font-semibold text-foreground mb-6">Connect With Me</h3>
          <div className="flex justify-center gap-6">
            <a href="https://www.facebook.com/amuchinf.togba.1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://linkedin.com/in/amuchin-f-togba-4865b4220" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="mailto:feolytogba20@gmail.com" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="Email">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
            <a href="https://wa.me/231775940468" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300" aria-label="WhatsApp">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}










