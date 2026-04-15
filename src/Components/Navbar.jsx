import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Sparkles, Shield } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const location = useLocation()
  const [showAdmin, setShowAdmin] = useState(false)

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Chapters', path: '/chapters' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="sticky top-0 z-50 backdrop-blur-2xl bg-[#020617]/70 border-b border-cyan-400/10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <motion.div
            whileHover={{ rotate: 8, scale: 1.08 }}className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg shadow-cyan-500/30">
              <img src="/LOGO.png" alt="IEEE Logo" className="w-full h-full object-contain"/>
            </motion.div>

            <div>
              <h1 className="text-cyan-400 font-bold text-xl tracking-wide">
                IEEE
              </h1>
              <p className="text-[10px] text-gray-400 -mt-1">
                Student Branch REC Sonbhadra
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-2xl backdrop-blur-xl">
            {links.map((link) => {
              const active = location.pathname === link.path

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative px-4 py-2 rounded-xl overflow-hidden"
                >
                  {active && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-xl bg-cyan-500/15 border border-cyan-400/20"
                    />
                  )}

                  <span
                    className={`relative z-10 ${
                      active
                        ? 'text-cyan-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              )
            })}
          </div>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30 hover:scale-105 transition"
          >
            Join IEEE
          </Link>
        </div>
      </motion.nav>

      {/* Hidden Secret Trigger */}
      <div
        onDoubleClick={() => setShowAdmin(!showAdmin)}
        className="fixed bottom-2 right-2 w-5 h-5 rounded-full opacity-0 hover:opacity-10 bg-cyan-400 cursor-pointer z-50"
      />

      {/* Secret Admin Dock */}
      {showAdmin && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-10 right-6 z-50 flex flex-col gap-3"
        >
          <Link
            to="/admin-dashboard"
            className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-purple-500/20 backdrop-blur-xl border border-purple-400/20 text-purple-300 hover:bg-purple-500/30 shadow-lg"
          >
            <Shield className="w-5 h-5" />
            Dashboard
          </Link>

          <Link
            to="/admin/registrations"
            className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-cyan-500/20 backdrop-blur-xl border border-cyan-400/20 text-cyan-300 hover:bg-cyan-500/30 shadow-lg"
          >
            <Shield className="w-5 h-5" />
            Registrations
          </Link>
        </motion.div>
      )}
    </>
  )
}

export default Navbar