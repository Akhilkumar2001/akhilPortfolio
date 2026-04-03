import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'akhilkumar@email.com', href: 'mailto:akhilkumar@email.com', color: '#6c63ff' },
  { icon: MapPin, label: 'Location', value: 'India', href: null, color: '#ff6584' },
  { icon: Mail, label: 'LinkedIn', value: '/in/akhilkumar', href: 'https://linkedin.com', color: '#0a66c2' },
  { icon: Mail, label: 'GitHub', value: '/devakhilkumar', href: 'https://github.com', color: '#43e97b' },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Let's work together</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6c63ff, #ff6584)' }} />
          <p className="text-white/40 text-sm mt-4 max-w-lg mx-auto">
            Open to full-time roles, freelance work, and interesting collaborations. Drop me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Ready to build something great?</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Whether it's a new product, a challenging feature, or an existing project that needs help —
                I'm here. Reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href, color }, i) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 card-hover"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs font-medium">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 text-sm hover:text-white transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white/80 text-sm">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability badge */}
            <motion.div
              className="glass rounded-xl p-4 border border-emerald-500/20"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-glow" />
                <div>
                  <p className="text-white/80 text-sm font-semibold">Currently Available</p>
                  <p className="text-white/35 text-xs">Open to new opportunities & freelance projects</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="glass rounded-2xl p-8 border border-white/5">
              {sent ? (
                <motion.div
                  className="flex flex-col items-center justify-center h-full py-12 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={48} className="text-emerald-400 mb-4" />
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-white/50 text-sm">I'll get back to you within 24 hours.</p>
                  <button
                    className="mt-6 text-purple-400 text-sm hover:text-white transition-colors"
                    onClick={() => setSent(false)}
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-white/40 text-xs font-semibold tracking-wider uppercase mb-2 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 focus:bg-white/5 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs font-semibold tracking-wider uppercase mb-2 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 focus:bg-white/5 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs font-semibold tracking-wider uppercase mb-2 block">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 focus:bg-white/5 transition-all resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-semibold text-white text-sm flex items-center justify-center gap-2 relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #6c63ff, #9c88ff)' }}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(108,99,255,0.5)' }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
