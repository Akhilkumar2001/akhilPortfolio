import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Smartphone, Globe } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Mobile App',
    type: 'Mobile',
    icon: Smartphone,
    description: 'Full-featured e-commerce app built with React Native. Features product catalog, cart, orders, and Razorpay payment integration.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Redux Toolkit', 'Razorpay'],
    color: '#6c63ff',
    gradient: 'from-purple-600/20 to-purple-900/5',
  },
  {
    title: 'Real-time Chat Application',
    type: 'Web',
    icon: Globe,
    description: 'Full-stack chat platform with real-time messaging using Socket.IO. Supports rooms, typing indicators, and message history.',
    tech: ['React.js', 'Node.js', 'Socket.IO', 'MongoDB', 'Express'],
    color: '#ff6584',
    gradient: 'from-pink-600/20 to-pink-900/5',
  },
  {
    title: 'Healthcare Management System',
    type: 'Web',
    icon: Globe,
    description: 'Complete hospital management dashboard for appointments, patient records, and doctor scheduling built with MERN stack.',
    tech: ['React.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Tailwind'],
    color: '#43e97b',
    gradient: 'from-emerald-600/20 to-emerald-900/5',
  },
  {
    title: 'Service Booking App',
    type: 'Mobile',
    icon: Smartphone,
    description: 'On-demand service booking app with provider matching, real-time tracking, and in-app payment via Stripe.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Stripe', 'Socket.IO'],
    color: '#f59e0b',
    gradient: 'from-amber-600/20 to-amber-900/5',
  },
  {
    title: 'Next.js SaaS Dashboard',
    type: 'Web',
    icon: Globe,
    description: 'Multi-tenant SaaS admin dashboard with role-based access, analytics, and subscription management.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Stripe'],
    color: '#9c88ff',
    gradient: 'from-violet-600/20 to-violet-900/5',
  },
  {
    title: 'Social Networking App',
    type: 'Mobile',
    icon: Smartphone,
    description: 'Feature-rich social networking app with posts, stories, follow system, and real-time notifications.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Redis', 'Socket.IO'],
    color: '#06b6d4',
    gradient: 'from-cyan-600/20 to-cyan-900/5',
  },
];

function ProjectCard({ project, index, inView }) {
  const TypeIcon = project.type === 'Mobile' ? Smartphone : Globe;

  return (
    <motion.div
      className="glass rounded-2xl border border-white/5 overflow-hidden card-hover group"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.15 + index * 0.1, duration: 0.6 }}
    >
      {/* Top gradient bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient.replace('/20', '').replace('/5', '')}`}
        style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}44)` }}
      />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `${project.color}18` }}
            >
              <TypeIcon size={18} style={{ color: project.color }} />
            </div>
            <div>
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ background: `${project.color}15`, color: project.color }}
              >
                {project.type}
              </span>
            </div>
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-purple-500/40 transition-all">
              <ExternalLink size={14} />
            </button>
          </div>
        </div>

        <h3 className="text-white font-bold text-lg mb-2 leading-snug">{project.title}</h3>
        <p className="text-white/45 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-white/40 font-medium border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <p className="section-label mb-3">What I've built</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6c63ff, #ff6584)' }} />
          <p className="text-white/40 text-sm mt-4 max-w-xl mx-auto">
            A selection of projects across web and mobile platforms. More details available on request.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* Freelance callout */}
        <motion.div
          className="mt-10 glass rounded-2xl border border-dashed border-purple-500/30 p-6 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-white/40 text-sm">
            Also completed <span className="text-purple-400 font-semibold">freelance projects</span> — reach out to learn more
          </p>
        </motion.div>
      </div>
    </section>
  );
}
