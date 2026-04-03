import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Mail, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Profile3D from './Profile3D';

const socialLinks = [
  { icon: Mail, href: 'mailto:akhilkumar@email.com', label: 'Email' },
];

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '4', label: 'Companies' },
  { value: '100%', label: 'Dedication' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 25% 50%, rgba(108,99,255,0.12) 0%, transparent 55%), radial-gradient(ellipse at 75% 20%, rgba(255,101,132,0.09) 0%, transparent 55%), #0a0a0f',
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(108,99,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-purple-600/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-pink-500/6 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left content */}
          <motion.div
            className="flex-1 max-w-2xl text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-sm text-purple-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-glow" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p variants={item} className="section-label mb-3">
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-4"
            >
              <span className="text-white">Akhil</span>{' '}
              <span className="gradient-text">Kumar</span>
            </motion.h1>

            {/* Typed roles */}
            <motion.div variants={item} className="text-xl sm:text-2xl font-medium text-white/60 mb-6 h-10">
              <TypeAnimation
                sequence={[
                  'MERN Stack Developer',
                  2500,
                  'React & React Native Specialist',
                  2500,
                  'Full Stack Developer',
                  2500,
                  'Senior Software Engineer',
                  2500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-purple-400"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-white/50 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
            >
              Passionate Software Developer with <span className="text-white/80 font-medium">3+ years</span> building
              modern, scalable web & mobile applications. Specialized in React, React Native, and full-stack
              MERN development — turning ideas into impactful products.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(108,99,255,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm"
                  style={{ background: 'linear-gradient(135deg, #6c63ff, #9c88ff)' }}
                >
                  Let's Connect
                  <Mail size={16} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm glass border border-white/10 hover:border-purple-500/40 text-white/80 hover:text-white transition-all"
                >
                  View Projects
                  <ArrowDown size={16} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white/50 hover:text-purple-400 hover:border-purple-500/40 transition-all"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  title={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
              <div className="h-px flex-1 max-w-16 bg-white/10" />
              <span className="text-white/30 text-xs">@devakhilkumar</span>
            </motion.div>
          </motion.div>

          {/* Right — 3D Profile */}
          <motion.div
            className="relative w-full lg:w-[480px] h-[420px] lg:h-[520px] flex-shrink-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          >
            {/* Decorative corner labels */}
            <div className="absolute top-4 left-4 z-10">
              <div className="text-xs font-mono text-purple-400/60">[ 3D_PROFILE ]</div>
            </div>
            <div className="absolute bottom-4 right-4 z-10">
              <div className="text-xs font-mono text-purple-400/60">[ INTERACTIVE ]</div>
            </div>

            <Profile3D />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              className="glass rounded-2xl p-5 text-center card-hover border border-white/5"
              whileHover={{ borderColor: 'rgba(108,99,255,0.4)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
            >
              <div className="text-3xl font-black gradient-text mb-1">{value}</div>
              <div className="text-white/40 text-xs font-medium">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
}
