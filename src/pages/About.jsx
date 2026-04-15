import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      title: "Mission",
      desc: "To inspire students through technology, innovation, and professional development.",
    },
    {
      title: "Vision",
      desc: "To become the most impactful student technical community in the region.",
    },
    {
      title: "Values",
      desc: "Innovation, Leadership, Collaboration, Excellence, and Integrity.",
    },
  ];

  const stats = [
    ["200+", "Active Members"],
    ["15+", "Annual Events"],
    ["5", "Technical Chapters"],
    ["10+", "Awards Won"],
  ];

  const benefits = [
    "Technical Workshops & Hackathons",
    "Research & Project Opportunities",
    "Leadership & Team Management",
    "Industry Networking",
    "Internship / Career Guidance",
    "National Level Exposure",
  ];

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 blur-[180px] rounded-full" />

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-8 md:px-16 py-24 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cyan-400 uppercase tracking-[0.25em] mb-4 text-sm">
            About IEEE
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Advancing Technology
            <span className="text-cyan-400"> for Humanity</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            IEEE is the world's largest technical professional organization
            dedicated to advancing technology for humanity. Our student branch
            fosters innovation, leadership, research, and collaboration among
            engineering students.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ rotateY: 5, rotateX: 5 }}
          className="perspective-1000"
        >
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
            alt="IEEE"
            className="rounded-3xl border border-cyan-400/20 shadow-2xl shadow-cyan-500/10"
          />
        </motion.div>
      </section>

      {/* Mission Vision Values */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:shadow-[0_20px_50px_rgba(0,255,255,0.12)] transition-all duration-500"
            >
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent my-12" />

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-16">
        <h2 className="text-4xl font-bold mb-10 text-center">
          IEEE REC in Numbers
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map(([num, label], i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/10 rounded-3xl p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">{num}</h3>
              <p className="text-gray-400">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Join IEEE */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              className="rounded-3xl border border-white/10 shadow-xl"
              alt="IEEE Team"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Join <span className="text-cyan-400">IEEE?</span>
            </h2>

            <div className="grid gap-4">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 hover:border-cyan-400/30 transition"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border border-cyan-400/20 p-14 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Become Part of Something Bigger
          </h2>

          <p className="text-gray-300 mb-6 text-lg">
            Join the most innovative technical community of REC.
          </p>

          <button className="px-10 py-4 bg-cyan-500 rounded-2xl hover:bg-cyan-400 transition-all hover:scale-105 shadow-lg shadow-cyan-500/30">
            Join IEEE Now
          </button>
        </div>
      </section>
    </div>
  );
}