import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Users, Star } from 'lucide-react';

const traits = [
  { icon: Code2, title: 'Clean Code', desc: 'Maintainable, scalable architecture with best practices.' },
  { icon: Rocket, title: 'Fast Delivery', desc: 'Production-ready solutions delivered efficiently.' },
  { icon: Users, title: 'Team Player', desc: 'Mentored junior devs, strong client communication.' },
  { icon: Star, title: 'Continuous Learner', desc: 'Always upgrading skills with modern tech trends.' },
];

const journey = [
  { year: '2022', color: '#43e97b', label: 'Foundation Phase' },
  { year: '2023', color: '#6c63ff', label: 'Industry Exposure' },
  { year: '2024', color: '#9c88ff', label: 'Full Stack Growth' },
  { year: '2025', color: '#f59e0b', label: 'Advanced Responsibilities' },
  { year: '2026', color: '#ff6584', label: 'Scalability & Backend Mastery' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Get to know me</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6c63ff, #ff6584)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              A Developer who <span className="gradient-text-purple">loves building things</span>
            </h3>
            <div className="space-y-4 text-white/55 leading-relaxed">
              <p>
                I'm <span className="text-white font-semibold">Akhil Kumar</span>, a passionate MERN Stack Developer
                based in India with <span className="text-white font-semibold">3+ years</span> of hands-on experience
                building modern web and mobile applications.
              </p>
              <p>
                I started my journey in 2022 as a React.js intern and have grown into a Senior Software Engineer,
                handling full project ownership — from architecture decisions to client delivery. Currently at
                <span className="text-purple-400 font-semibold"> Cyberbells, Chandigarh</span>, I lead development
                across 2 web apps and 3 mobile applications.
              </p>
              <p>
                My current focus is on <span className="text-white font-semibold">scalable backend systems</span> —
                Redis caching, real-time Socket.IO apps, payment integrations, and TypeScript architecture.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['MERN Stack', 'React Native', 'TypeScript', 'Node.js', 'Problem Solver'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold glass border border-purple-500/20 text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Growth timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-white/40 tracking-widest uppercase mb-6">
              Growth Timeline
            </h3>
            <div className="relative pl-8">
              {/* Vertical line */}
              <div
                className="absolute left-3 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, #6c63ff, #ff6584, #43e97b)' }}
              />
              <div className="space-y-6">
                {journey.map(({ year, color, label }, i) => (
                  <motion.div
                    key={year}
                    className="relative flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    {/* Dot */}
                    <div
                      className="absolute -left-[21px] w-4 h-4 rounded-full border-2 border-[#0a0a0f] flex-shrink-0"
                      style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}80` }}
                    />
                    <div className="glass rounded-xl px-4 py-3 border border-white/5 flex-1 card-hover">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xs font-black px-2 py-0.5 rounded-md"
                          style={{ color, backgroundColor: `${color}18` }}
                        >
                          {year}
                        </span>
                        <span className="text-white/70 text-sm font-medium">{label}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trait cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {traits.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="glass rounded-2xl p-6 border border-white/5 card-hover text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(255,101,132,0.1))' }}>
                <Icon size={22} className="text-purple-400" />
              </div>
              <h4 className="text-white font-bold text-sm mb-2">{title}</h4>
              <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
