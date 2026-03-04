import { useState } from 'react';
import { Award } from 'lucide-react';

interface TimelineEntry {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  highlights: string[];
  gpa?: string;
}

const timelineData: TimelineEntry[] = [
  {
    id: 1,
    degree: 'Master of Science in Information Technology',
    institution: 'Lovely Professional University, India',
    duration: '2022 - 2024',
    description: 'Advanced studies in information technology with focus on network infrastructure, systems administration, and emerging technologies.',
    highlights: [
      'Specialized in Networking & Systems Architecture',
      'Completed Red Hat System Administration certification',
      'Final project: Classic Car Automation System',
    ],
    gpa: '3.8/4.0',
  },
  {
    id: 2,
    degree: 'Bachelor of Science in Electronics Engineering',
    institution: 'Stella Maris University, Liberia',
    duration: '2017 - 2022',
    description: 'Comprehensive education in electronics engineering with practical experience in embedded systems and circuit design.',
    highlights: [
      'Final Project: Electronic Voting Machine',
      'Practical experience with Arduino & embedded systems',
      'Focus on hardware-software integration',
    ],
    gpa: '3.7/4.0',
  },
  {
    id: 3,
    degree: 'Associate of Science in Electronics Engineering',
    institution: 'Stella Maris Polytechnic, Liberia',
    duration: '2013 - 2017',
    description: 'Foundation-level studies in electronics engineering with hands-on laboratory experience.',
    highlights: [
      'Completed foundational electronics courses',
      'Laboratory experience with circuit design',
      'Introduction to programming concepts',
    ],
  },
];

export default function AcademicTimelineSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="font-montserrat text-4xl sm:text-5xl font-bold text-foreground">
              Academic Timeline
            </h2>
          </div>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            A chronological journey through my educational progression and academic achievements.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent transform -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((entry, index) => (
              <div key={entry.id} className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10 items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full"></div>
                </div>

                {/* Card */}
                <div
                  className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}
                >
                  <div
                    onClick={() => setExpandedId(expandedId === entry.id ? null : entry.id)}
                    className="p-6 bg-card rounded-lg border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  >
                    {/* Header */}
                    <div className="space-y-2 mb-4">
                      <h3 className="font-montserrat text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {entry.degree}
                      </h3>
                      <p className="text-primary font-semibold">{entry.institution}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{entry.duration}</span>
                        {entry.gpa && <span className="text-xs font-semibold px-2 py-1 bg-primary bg-opacity-20 text-primary rounded">GPA: {entry.gpa}</span>}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-secondary-foreground text-sm mb-4">{entry.description}</p>

                    {/* Highlights - Expandable */}
                    <div className={`overflow-hidden transition-all duration-300 ${expandedId === entry.id ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="space-y-2 pt-4 border-t border-border">
                        <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Highlights</p>
                        {entry.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                            <span className="text-sm text-secondary-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expand Button */}
                    <button className="text-primary hover:text-blue-700 font-semibold text-sm mt-3 flex items-center gap-1 transition-colors">
                      {expandedId === entry.id ? 'Show Less' : 'Show More'}
                      <span className={`transition-transform duration-300 ${expandedId === entry.id ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline Note */}
        <div className="md:hidden mt-12 p-4 bg-secondary rounded-lg border border-border text-center">
          <p className="text-sm text-secondary-foreground">
            Click on each education entry to view highlights and additional details.
          </p>
        </div>
      </div>
    </section>
  );
}
