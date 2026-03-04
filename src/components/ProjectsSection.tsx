import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Community Network Infrastructure Project',
    description: 'Planned and implemented community internet infrastructure using Starlink satellite technology with wireless access points.',
    technologies: ['Starlink', 'Network Design', 'Wireless AP', 'Router Configuration'],
    year: '2024 - Present',
    status: 'In Progress',
    highlights: ['Satellite Internet Implementation', 'Network Performance Monitoring', 'Community Connectivity'],
  },
  {
    id: 2,
    title: 'Electronic Voting Machine',
    description: 'Bachelor final project implementing a secure electronic voting system using embedded systems and C# programming.',
    technologies: ['Arduino', 'C#', 'Embedded Systems', 'Security'],
    year: '2022',
    status: 'Completed',
    highlights: ['Secure Voting Protocol', 'Hardware Integration', 'Data Encryption'],
  },
  {
    id: 3,
    title: 'Classic Car Automation System',
    description: 'Master\'s class project developing an intelligent automation system for classic vehicles using Python and JavaScript.',
    technologies: ['Python', 'JavaScript', 'MongoDB', 'IoT'],
    year: '2024',
    status: 'Completed',
    highlights: ['Real-time Control', 'Data Analytics', 'Mobile Integration'],
  },
  {
    id: 4,
    title: 'Shopping Mart Web Application',
    description: 'Full-stack e-commerce platform built with MERN stack featuring product catalog, shopping cart, and payment integration.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    year: '2023',
    status: 'Completed',
    highlights: ['E-commerce Features', 'User Authentication', 'Payment Processing'],
  },
  {
    id: 5,
    title: 'YesGlobal Website Development',
    description: 'Professional website development project showcasing modern web design and responsive layout principles.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    year: '2024',
    status: 'Completed',
    link: 'https://grand-concha-ac02ff.netlify.app/',
    highlights: ['Responsive Design', 'Modern UI/UX', 'Performance Optimized'],
  },
  {
    id: 6,
    title: 'Web Developer - Back-link Building Specialist',
    description: 'Created and maintained Web 2.0 back-links as part of SEO strategy with weekly progress reporting.',
    technologies: ['SEO', 'Link Building', 'Web 2.0', 'Digital Marketing'],
    year: '2025',
    status: 'Active',
    highlights: ['SEO Strategy', 'Link Outreach', 'Performance Tracking'],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            A showcase of key projects demonstrating expertise in networking, systems administration, and full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-card rounded-lg border border-border overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {/* Project Header */}
              <div className="p-6 space-y-4">
                {/* Title & Status */}
                <div className="space-y-2">
                  <h3 className="font-montserrat text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full">
                      {project.status}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-secondary-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-secondary text-foreground rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-secondary text-foreground rounded border border-border">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* View Details Link */}
                <button className="text-primary hover:text-blue-700 font-semibold text-sm flex items-center gap-2 group/link">
                  View Details
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-in fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h2 className="font-montserrat text-3xl font-bold text-foreground">
                      {selectedProject.title}
                    </h2>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full">
                      {selectedProject.status}
                    </span>
                    <span className="text-sm text-muted-foreground">{selectedProject.year}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-secondary-foreground leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Key Highlights</h3>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-3 text-secondary-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary text-foreground rounded border border-border text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Project
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 px-4 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
