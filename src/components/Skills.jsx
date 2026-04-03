import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Frontend',
    color: '#6c63ff',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'React Native', level: 92 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'TypeScript', level: 72 },
    ],
  },
  {
    title: 'Backend',
    color: '#ff6584',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 82 },
      { name: 'REST APIs', level: 90 },
      { name: 'Socket.IO', level: 68 },
      { name: '.NET Core', level: 55 },
    ],
  },
  {
    title: 'Database & Tools',
    color: '#43e97b',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'Redux Toolkit', level: 88 },
      { name: 'Redis', level: 60 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Stripe/Razorpay', level: 65 },
    ],
  },
];

const techIcons = [
  { name: 'React', emoji: '⚛️' },
  { name: 'Node.js', emoji: '🟢' },
  { name: 'MongoDB', emoji: '🍃' },
  { name: 'TypeScript', emoji: '🔷' },
  { name: 'Next.js', emoji: '▲' },
  { name: 'Redux', emoji: '🔴' },
  { name: 'Tailwind', emoji: '💨' },
  { name: 'Socket.IO', emoji: '🔌' },
  { name: 'Redis', emoji: '🔧' },
  { name: 'GitHub', emoji: '🐙' },
  { name: 'Express', emoji: '🚂' },
  { name: 'Stripe', emoji: '💳' },
];

function SkillBar({ name, level, color, delay, inView }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-white/70 text-sm font-medium">{name}</span>
        <span className="text-xs font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">What I work with</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6c63ff, #ff6584)' }} />
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map(({ title, color, skills }, ci) => (
            <motion.div
              key={title}
              className="glass rounded-2xl p-6 border border-white/5 card-hover"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + ci * 0.15 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-2 h-8 rounded-full"
                  style={{ background: color }}
                />
                <h3 className="text-white font-bold text-lg">{title}</h3>
              </div>

              {skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  color={color}
                  delay={0.3 + ci * 0.1 + si * 0.08}
                  inView={inView}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="section-label mb-6">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techIcons.map(({ name, emoji }, i) => (
              <motion.div
                key={name}
                className="glass border border-white/5 rounded-xl px-4 py-2.5 flex items-center gap-2 card-hover cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.05 }}
                whileHover={{ scale: 1.08, borderColor: 'rgba(108,99,255,0.5)' }}
              >
                <span className="text-base">{emoji}</span>
                <span className="text-white/60 text-xs font-semibold">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
