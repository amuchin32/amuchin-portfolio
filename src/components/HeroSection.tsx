import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const roles = [
  'IT & Networking Professional',
  'Systems Administrator',
  'Full-Stack Developer',
  'Technical Support Specialist',
];

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setDisplayedText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-background overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent opacity-10 rounded-full blur-3xl"></div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-montserrat text-5xl sm:text-6xl font-bold text-foreground leading-tight">
                Amuchin Feoley Togba
              </h1>
              <div className="h-20 flex items-center">
                <p className="text-2xl sm:text-3xl font-semibold text-primary">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
              <p className="text-lg text-secondary-foreground leading-relaxed max-w-lg">
                Master's degree holder in Information Technology with expertise in network infrastructure, systems administration, and full-stack development. Passionate about building scalable solutions and leading technical initiatives.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com/in/amuchin-f-togba-4865b4220"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:feolytogba20@gmail.com"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image Area */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Animated Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-full opacity-20 blur-2xl animate-pulse"></div>
              
              {/* Profile Image Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-full p-1">
                <div className="w-full h-full bg-background rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663349287982/ntRYwtFZJMKBjUUf.jpg"
                    alt="Amuchin Feoley Togba"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-lg opacity-20 blur-lg animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-lg opacity-10 blur-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#skills" className="flex flex-col items-center text-primary hover:text-blue-700 transition-colors">
          <span className="text-sm font-semibold mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
