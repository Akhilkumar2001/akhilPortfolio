import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            className="text-center sm:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="gradient-text font-black text-xl">AK</span>
            <span className="text-white/30 text-xs ml-1">— Akhil Kumar</span>
            <p className="text-white/20 text-xs mt-1">MERN Stack Developer · India</p>
          </motion.div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Mail, href: 'mailto:akhilkumar@email.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full glass border border-white/8 flex items-center justify-center text-white/30 hover:text-purple-400 hover:border-purple-500/30 transition-all"
                whileHover={{ scale: 1.15 }}
                title={label}
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-white/20 text-xs text-center sm:text-right">
            <p>© 2026 Akhil Kumar</p>
            <p className="flex items-center gap-1 justify-center sm:justify-end mt-0.5">
              Built with <Heart size={10} className="text-pink-500" fill="currentColor" /> & React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
