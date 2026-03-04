import { useState } from 'react';

const skillsData = [
  {
    category: 'Networking & Infrastructure',
    icon: '🌐',
    skills: ['Network Design', 'Starlink Satellite Internet', 'Wireless Access Points', 'Router Configuration', 'IP Addressing'],
  },
  {
    category: 'Systems Administration',
    icon: '⚙️',
    skills: ['Tier 1 & 2 Support', 'Endpoint Management', 'User Access Control', 'Network Monitoring', 'Troubleshooting'],
  },
  {
    category: 'Programming & Development',
    icon: '💻',
    skills: ['JavaScript', 'Python', 'Java', 'C/C++', 'C#', 'SQL'],
  },
  {
    category: 'Web & Digital Technologies',
    icon: '🚀',
    skills: ['React.js', 'Node.js', 'HTML5', 'CSS3', 'Bootstrap', 'WordPress'],
  },
  {
    category: 'MERN Stack',
    icon: '⚛️',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Full-Stack Development'],
  },
  {
    category: 'Cloud & AI Tools',
    icon: '☁️',
    skills: ['Microsoft 365', 'ChatGPT', 'Manus AI', 'Deep-Seek', 'Emergent AI'],
  },
];

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            A comprehensive overview of expertise across networking, systems administration, programming, and modern web technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skillGroup, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredSkill(skillGroup.category)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`p-6 rounded-lg bg-background border-2 border-border transition-all duration-300 cursor-pointer ${
                hoveredSkill === skillGroup.category
                  ? 'border-primary shadow-lg scale-105 bg-card'
                  : 'hover:border-primary hover:shadow-md'
              }`}
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{skillGroup.icon}</div>
                <h3 className="font-montserrat text-lg font-bold text-foreground leading-tight">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-2">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Hover Tooltip */}
              {hoveredSkill === skillGroup.category && (
                <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground animate-in fade-in">
                  Click to learn more about this skill set
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary to-primary-dark rounded-lg text-primary-foreground">
          <h3 className="font-montserrat text-2xl font-bold mb-4">Certifications & Achievements</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span>Red Hat System Administration (RH124 & RH134)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span>Full Stack Web Development (MERN)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span>Fundamentals of Computer Networking</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span>Python Programming & Data Structures</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
