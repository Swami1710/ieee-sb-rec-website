import { motion } from 'framer-motion'

export default function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/YOUR-LINKEDIN-PAGE/',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/YOUR-INSTAGRAM',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/YOUR-GITHUB',
    },
    {
      name: 'IEEE Global',
      url: 'https://www.ieee.org/',
    },
  ]

  return (
    <footer className="relative overflow-hidden mt-24 border-t border-cyan-400/10 bg-[#020617] text-white">
      {/* HOLOGRAPHIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Animated Glow Orbs */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute left-10 top-10 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute right-10 bottom-0 w-96 h-96 rounded-full bg-purple-500/10 blur-[140px]"
        />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

        {/* IEEE Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] text-[220px] font-bold text-cyan-400 select-none">
          IEEE
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">

        {/* GLASS PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] border border-cyan-400/10 bg-white/[0.03] backdrop-blur-3xl p-10 md:p-14 overflow-hidden shadow-[0_0_80px_rgba(0,255,255,0.06)]"
        >
          {/* Gradient Spotlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />

          <div className="relative grid md:grid-cols-3 gap-12">

            {/* BRAND */}
            <div>
              <motion.h2
                whileHover={{ scale: 1.03 }}
                className="text-4xl font-bold text-cyan-400 mb-4 tracking-wide"
              >
                IEEE REC
              </motion.h2>

              <p className="text-gray-300 leading-relaxed mb-6 max-w-sm">
                Advancing Technology for Humanity through innovation,
                leadership, research, and engineering excellence.
              </p>

              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -5,
                      scale: 1.06,
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-sm hover:border-cyan-400/40 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 shadow-lg"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-xl font-semibold mb-5 text-white">
                Contact
              </h3>

              <div className="space-y-4 text-gray-400">
                <p>Rajkiya Engineering College, Sonbhadra</p>
                <p>ieeerecsstb@recsonbhadra.ac.in</p>
                <p>+91 XXXXX XXXXX</p>
              </div>
            </div>

            {/* CTA */}
            <div>
              <h3 className="text-xl font-semibold mb-5 text-white">
                Become a Member
              </h3>

              <p className="text-gray-400 mb-6">
                Join India’s most futuristic student tech community and build
                your future with IEEE.
              </p>

              <motion.a
                href="https://www.ieee.org/membership/join/index.html"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.07,
                  boxShadow: '0 0 40px rgba(34,211,238,0.45)',
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all duration-300"
              >
                Join IEEE Now
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM BAR */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 IEEE Student Branch REC. All Rights Reserved.</p>

          <motion.p
            whileHover={{ scale: 1.05 }}
            className="cursor-default"
          >
            Designed & Developed by{' '}
            <span className="text-cyan-400 font-medium">
              Vaibhav Agarwal
            </span>
          </motion.p>
        </div>
      </div>
    </footer>
  )
}