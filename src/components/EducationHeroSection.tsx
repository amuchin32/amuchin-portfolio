import { BookOpen } from 'lucide-react';

export default function EducationHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-background overflow-hidden pt-16">
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent opacity-10 rounded-full blur-3xl"></div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Education & Learning</span>
              </div>

              <h1 className="font-montserrat text-5xl sm:text-6xl font-bold text-foreground leading-tight">
                Educational Background & Academic Growth
              </h1>

              <p className="text-lg text-secondary-foreground leading-relaxed max-w-lg">
                My academic journey reflects a commitment to continuous learning and professional development. With advanced degrees in Information Technology and Electronics Engineering, combined with industry certifications, I've built a strong foundation in both theoretical knowledge and practical expertise.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#timeline"
                  className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Explore Timeline
                </a>
                <a
                  href="#documents"
                  className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  View Documents
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-1">3</div>
                <p className="text-xs text-muted-foreground">Degrees</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-1">6+</div>
                <p className="text-xs text-muted-foreground">Certifications</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <p className="text-xs text-muted-foreground">Courses</p>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Animated Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-full opacity-20 blur-2xl animate-pulse"></div>

              {/* Icon Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-full p-1">
                <div className="w-full h-full bg-background rounded-full flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">🎓</div>
                      <p className="text-foreground font-semibold text-lg">Master's Degree</p>
                      <p className="text-muted-foreground text-sm">Information Technology</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-lg opacity-20 blur-lg animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-lg opacity-10 blur-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

