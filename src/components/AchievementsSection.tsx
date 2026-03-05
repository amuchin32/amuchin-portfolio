import { useEffect, useState } from 'react';

interface Counter { label: string; value: number; suffix: string; }

const counters: Counter[] = [
  { label: 'Years of Experience', value: 8, suffix: '+' },
  { label: 'Projects Completed', value: 15, suffix: '+' },
  { label: 'Certifications', value: 6, suffix: '' },
  { label: 'Technologies', value: 20, suffix: '+' },
];

const achievements = [
  { title: 'Electoral Commission Chairman', organization: 'African Students Union, Lovely Professional University', description: 'Led election process for over 5,000 students with transparent and secure voting procedures.', year: '2023-2024', icon: '??' },
  { title: 'Humanitarian Leadership Award', organization: 'African Students Union', description: 'Recognized for outstanding leadership and humanitarian contributions to the student community.', year: '2024', icon: '??' },
  { title: 'Master of Science in Information Technology', organization: 'Lovely Professional University, India', description: 'Completed advanced studies in IT with focus on networking and systems architecture.', year: '2022-2024', icon: '??' },
  { title: 'Bachelor of Science in Electronics Engineering', organization: 'Stella Maris University, Liberia', description: 'Comprehensive education in electronics and engineering principles.', year: '2013-2022', icon: '??' },
];

export default function AchievementsSection() {
  const [displayedCounters, setDisplayedCounters] = useState<Counter[]>(counters.map((c) => ({ ...c, value: 0 })));
  useEffect(() => {
    const observers = counters.map((counter, index) => {
      const interval = setInterval(() => {
        setDisplayedCounters((prev) => { const updated = [...prev]; if (updated[index].value < counter.value) { updated[index].value += Math.ceil(counter.value / 30); } return updated; });
      }, 50);
      return () => clearInterval(interval);
    });
    return () => observers.forEach((obs) => obs);
  }, []);
  return (
    <section id="achievements" className="py-20 bg-secondary">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl sm:text-5xl font-bold text-foreground mb-4">Achievements & Milestones</h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">Recognition of professional accomplishments and educational milestones throughout my career.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {displayedCounters.map((counter, index) => (
            <div key={index} className="p-6 bg-background rounded-lg border border-border text-center hover:border-primary hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">{Math.min(counter.value, counter.value)}{counter.suffix}</div>
              <p className="text-sm text-secondary-foreground font-medium">{counter.label}</p>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <h3 className="font-montserrat text-2xl font-bold text-foreground mb-8">Professional Highlights</h3>
          {achievements.map((achievement, index) => (
            <div key={index} className="p-6 bg-background rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group">
              <div className="flex gap-6">
                <div className="text-4xl flex-shrink-0">{achievement.icon}</div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-montserrat text-lg font-bold text-foreground group-hover:text-primary transition-colors">{achievement.title}</h4>
                      <p className="text-sm text-primary font-semibold">{achievement.organization}</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full flex-shrink-0 w-24 text-center">{achievement.year}</span>
                  </div>
                  <p className="text-secondary-foreground text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 p-8 bg-primary rounded-lg text-white">
          <h3 className="font-montserrat text-2xl font-bold mb-6">Education & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-lg">Degrees</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3"><span className="text-xl">??</span><div><p className="font-semibold">Master of Science in Information Technology</p><p className="text-sm opacity-90">Lovely Professional University, India (2022-2024)</p></div></li>
                <li className="flex items-start gap-3"><span className="text-xl">??</span><div><p className="font-semibold">Bachelor of Science in Electronics Engineering</p><p className="text-sm opacity-90">Stella Maris University, Liberia (2013-2022)</p></div></li>
                <li className="flex items-start gap-3"><span className="text-xl">??</span><div><p className="font-semibold">Associate of Science in Electronics Engineering</p><p className="text-sm opacity-90">Stella Maris Polytechnic, Liberia (2013-2017)</p></div></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-lg">Professional Certifications</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><span>?</span><span>Red Hat System Administration (RH124 & RH134)</span></li>
                <li className="flex items-center gap-2"><span>?</span><span>Full Stack Web Development (MERN)</span></li>
                <li className="flex items-center gap-2"><span>?</span><span>Fundamentals of Computer Networking</span></li>
                <li className="flex items-center gap-2"><span>?</span><span>Industry 4.0</span></li>
                <li className="flex items-center gap-2"><span>?</span><span>Python Programming (Basic)</span></li>
                <li className="flex items-center gap-2"><span>?</span><span>Generative Engine Optimization (GEO)</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




