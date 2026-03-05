export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <p className="font-montserrat font-bold text-foreground">Amuchin</p>
                <p className="text-xs text-muted-foreground">Professional Portfolio</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground leading-relaxed">
              IT &amp; Networking Professional with expertise in systems administration and full-stack development.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-secondary-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:feolytogba20@gmail.com" className="text-secondary-foreground hover:text-primary transition-colors">feolytogba20@gmail.com</a></li>
              <li><a href="tel:+231775940468" className="text-secondary-foreground hover:text-primary transition-colors">+231 775 940 468</a></li>
              <li className="text-secondary-foreground">Paynesville, Liberia</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border my-8"></div>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Amuchin Feoley Togba. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/amuchin-f-togba-4865b4220" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="mailto:feolytogba20@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
