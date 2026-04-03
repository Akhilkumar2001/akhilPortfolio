import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Cyberbells',
    role: 'Senior Software Engineer / MERN Stack Developer',
    location: 'Chandigarh, India',
    period: 'Apr 2024 – Present',
    type: 'Full-time',
    color: '#6c63ff',
    current: true,
    highlights: [
      'Worked on 2 web + 3 mobile applications from scratch',
      'Built full-stack applications using MERN stack',
      'Handled client communication and requirement analysis',
      'Mentored junior developers and ensured code quality',
      'Delivered scalable and production-ready solutions',
    ],
    projects: ['Mobile App (React Native) ×3', 'Web App (MERN) ×2'],
  },
  {
    company: 'Techgrow Software Pvt. Ltd',
    role: 'React Developer',
    location: 'Mohali, India',
    period: 'May 2023 – Apr 2024',
    type: 'Full-time',
    color: '#9c88ff',
    current: false,
    highlights: [
      'Delivered 4–5 real-world client projects end-to-end',
      'Adopted Next.js, Tailwind CSS, and AI tools into workflow',
      'Improved development speed and codebase scalability',
      'Collaborated with cross-functional teams',
    ],
    projects: ['React Apps ×2', 'Mobile App (React Native) ×1'],
  },
  {
    company: 'WebGarh Solutions',
    role: 'React Developer',
    location: 'Punjab, India',
    period: 'Dec 2022 – May 2023',
    type: 'Full-time',
    color: '#ff6584',
    current: false,
    highlights: [
      'Built reusable, responsive UI components',
      'Worked on client-facing web applications',
      'Improved component architecture patterns',
    ],
    projects: [],
  },
  {
    company: 'Omninos Solutions',
    role: 'React.js Intern',
    location: 'Mohali, India',
    period: 'Aug 2022 – Dec 2022',
    type: 'Internship',
    color: '#43e97b',
    current: false,
    highlights: [
      'Learned frontend architecture and React fundamentals',
      'Built interactive UI components and interfaces',
      'Gained real-world development experience',
    ],
    projects: [],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Where I've worked</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6c63ff, #ff6584)' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, #6c63ff, #9c88ff, #ff6584, #43e97b)' }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="relative sm:pl-16"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              >
                {/* Dot */}
                <div
                  className="absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 border-[#0a0a0f] hidden sm:flex items-center justify-center"
                  style={{ backgroundColor: exp.color, boxShadow: `0 0 16px ${exp.color}80` }}
                >
                  {exp.current && (
                    <span className="w-2 h-2 rounded-full bg-white pulse-glow" />
                  )}
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-6 border border-white/5 card-hover">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                        {exp.current && (
                          <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                            style={{ background: `${exp.color}20`, color: exp.color }}>
                            Current
                          </span>
                        )}
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/40">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase size={13} className="text-white/40" />
                        <span className="font-semibold text-sm" style={{ color: exp.color }}>{exp.company}</span>
                      </div>
                    </div>

                    <div className="text-right text-xs text-white/40 space-y-1">
                      <div className="flex items-center gap-1 justify-end">
                        <Calendar size={11} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        <MapPin size={11} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/5 mb-5" />

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-white/55">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: exp.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Projects */}
                  {exp.projects.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.projects.map((p) => (
                        <span
                          key={p}
                          className="text-xs px-3 py-1 rounded-full border"
                          style={{ borderColor: `${exp.color}40`, color: exp.color, background: `${exp.color}10` }}
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
