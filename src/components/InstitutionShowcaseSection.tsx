import { Building2 } from 'lucide-react';

interface Institution {
  id: number;
  name: string;
  logo: string;
  program: string;
  duration: string;
  location: string;
  website?: string;
}

const institutions: Institution[] = [
  {
    id: 1,
    name: 'Lovely Professional University',
    logo: '🎓',
    program: 'Master of Science (Information Technology)',
    duration: '2022 - 2024',
    location: 'Punjab, India',
    website: 'https://www.lpu.in',
  },
  {
    id: 2,
    name: 'Stella Maris University',
    logo: '🏫',
    program: 'Bachelor of Science (Electronics Engineering)',
    duration: '2017 - 2022',
    location: 'Monrovia, Liberia',
    website: 'https://www.stellamaris.edu.lr',
  },
  {
    id: 3,
    name: 'Stella Maris Polytechnic',
    logo: '⚙️',
    program: 'Associate of Science (Electronics Engineering)',
    duration: '2013 - 2017',
    location: 'Monrovia, Liberia',
    website: 'https://www.stellamaris.edu.lr',
  },
];

export default function InstitutionShowcaseSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Building2 className="w-6 h-6 text-primary" />
            <h2 className="font-montserrat text-4xl sm:text-5xl font-bold text-foreground">
              Institutions
            </h2>
          </div>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            Academic institutions that shaped my professional development and technical expertise.
          </p>
        </div>

        {/* Institution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutions.map((institution) => (
            <div
              key={institution.id}
              className="group relative p-6 bg-background rounded-lg border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

              <div className="relative z-10 space-y-4">
                {/* Logo */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {institution.logo}
                </div>

                {/* Institution Name */}
                <h3 className="font-montserrat text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {institution.name}
                </h3>

                {/* Program */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary">{institution.program}</p>
                  <p className="text-sm text-secondary-foreground">{institution.duration}</p>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>📍</span>
                  <span>{institution.location}</span>
                </div>

                {/* Visit Website Link */}
                {institution.website && (
                  <a
                    href={institution.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-blue-700 font-semibold text-sm mt-4 transition-colors"
                  >
                    Visit Website
                    <span>→</span>
                  </a>
                )}
              </div>

              {/* Tooltip */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-foreground text-background text-xs rounded px-2 py-1 whitespace-nowrap">
                  {institution.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
