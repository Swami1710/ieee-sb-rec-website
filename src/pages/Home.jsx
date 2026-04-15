import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const stats = [
    { value: "65+", label: "Active Members" },
    { value: "15+", label: "Events Conducted" },
    { value: "3+", label: "Technical Chapters" },
    { value: "5+", label: "Awards Won" },
  ];

  const galleryPreview = [
    {
      title: "AI Workshop",
      date: "March 2026",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
    {
      title: "Hackathon",
      date: "February 2026",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "Robo Challenge",
      date: "January 2026",
      img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#020617] text-white cursor-default">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 border border-cyan-400/5 rounded-full"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2 border border-purple-400/5 rounded-full"
        />
      </div>

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-8 md:px-16 py-28 grid md:grid-cols-2 gap-16 items-center overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none rounded-[3rem] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="https://cdn.coverr.co/videos/coverr-earth-from-space-1560089642472?download=1080p"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10"
        >
          <p className="text-cyan-400 uppercase tracking-[0.35em] mb-4 text-sm">
            IEEE Student Branch REC Sonbhadra
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Innovating Beyond
            <span className="block text-cyan-400">Boundaries</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
            Empowering future engineers through technology, innovation,
            research, and leadership.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all hover:scale-105 shadow-lg shadow-cyan-500/30">
              Join IEEE
            </button>

            <button className="px-8 py-4 rounded-2xl border border-cyan-400 hover:bg-cyan-400/10 transition-all hover:scale-105">
              Explore Events
            </button>
          </div>
        </motion.div>

        <div className="relative z-10 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="absolute w-[340px] h-[340px] rounded-full border border-cyan-400/20"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="absolute w-[260px] h-[260px] rounded-full border border-purple-400/20"
          />

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-10 left-12 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
          />

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute bottom-12 right-8 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.8)]"
          />

          <motion.div
            animate={{
              rotate: 360,
              y: [0, -10, 0],
            }}
            transition={{
              rotate: {
                repeat: Infinity,
                duration: 14,
                ease: "linear",
              },
              y: {
                repeat: Infinity,
                duration: 4,
              },
            }}
            className="relative w-52 h-52 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_90px_rgba(34,211,238,0.35)]"
          >
            <div className="absolute inset-4 rounded-full border border-white/20" />
            <div className="absolute inset-10 rounded-full border border-cyan-200/20" />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      {/* STATS */}
<section className="relative max-w-7xl mx-auto px-8 md:px-16 pb-20">
  <div className="mb-10">
    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
      Our Impact
    </p>
    <h2 className="text-4xl md:text-5xl font-bold">
      Numbers That Define Us
    </h2>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {[
      { value: "65+", label: "Active Members", icon: "👥" },
      { value: "15+", label: "Events Conducted", icon: "🎯" },
      { value: "3+", label: "Technical Chapters", icon: "🧠" },
      { value: "5+", label: "Awards Won", icon: "🏆" },
    ].map((stat, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -10, scale: 1.04 }}
        transition={{ duration: 0.25 }}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-9 shadow-xl"
      >
        {/* Glow Accent */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-400/10 blur-3xl rounded-full group-hover:bg-cyan-400/20 transition" />

        {/* Icon */}
        <div className="text-3xl mb-4">{stat.icon}</div>

        {/* Number */}
        <h3 className="text-4xl font-bold text-cyan-400 mb-2">
          {stat.value}
        </h3>

        {/* Label */}
        <p className="text-gray-300">
          {stat.label}
        </p>

        {/* Bottom Accent Bar */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />
      </motion.div>
    ))}
  </div>
</section>

      {/* INFO CARDS */}
      <section className="relative max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="mb-12">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
            Why IEEE REC?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Building Future Tech Leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="md:col-span-2 rounded-3xl p-10 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-400/20 backdrop-blur-xl"
          >
            <div className="text-5xl mb-6">🌍</div>
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              About IEEE
            </h3>
            <p className="text-gray-300 text-lg max-w-xl">
              IEEE is the world's largest technical professional organization,
              advancing technology for humanity through innovation,
              research, and collaboration.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                About Us
              </h3>
              <p className="text-gray-300">
                REC IEEE Student Branch fosters innovation and leadership.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                Technical Chapters
              </h3>
              <p className="text-gray-300">
                Specialized communities for domain expertise and growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ELITE CHAPTERS */}
      <section className="relative max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="mb-14">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
            Technical Communities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Chapters
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Explore specialized IEEE chapters designed to help students grow in
            technical domains, leadership, and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 auto-rows-fr">
          <motion.div
            whileHover={{ y: -10 }}
            className="md:col-span-2 rounded-3xl p-10 bg-gradient-to-br from-cyan-500/15 to-blue-500/5 border border-cyan-400/20 backdrop-blur-xl shadow-xl"
          >
            <div className="text-5xl mb-6">⚡</div>
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              IEEE Core
            </h3>
            <p className="text-gray-300 text-lg max-w-xl mb-6">
              The central body managing flagship events, collaborations,
              operations, and innovation initiatives.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl p-8 bg-pink-500/5 border border-pink-400/20 backdrop-blur-xl shadow-xl"
          >
            <div className="text-4xl mb-4">👩‍💻</div>
            <h3 className="text-2xl font-semibold mb-3">WIE</h3>
            <p className="text-gray-400">
              Empowering women in engineering and technology.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl p-8 bg-blue-500/5 border border-blue-400/20 backdrop-blur-xl shadow-xl"
          >
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-2xl font-semibold mb-3">
              Computer Society
            </h3>
            <p className="text-gray-400">
              Explore software, AI, development, and computing.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="md:col-span-2 rounded-3xl p-8 bg-purple-500/5 border border-purple-400/20 backdrop-blur-xl shadow-xl"
          >
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-semibold mb-3">
              Robotics & Automation Society
            </h3>
            <p className="text-gray-400">
              Build and innovate in robotics, automation, embedded systems,
              and intelligent machines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="text-center mb-14">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
            Our Legacy
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Memories That Define Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A glimpse into the innovation, collaboration, and impact created by IEEE REC Sonbhadra through our past events.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {galleryPreview.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-0 p-6">
                <p className="text-cyan-400 text-sm mb-2">{item.date}</p>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-block px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all hover:scale-105 shadow-lg shadow-cyan-500/30"
          >
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative max-w-7xl mx-auto px-8 md:px-16 py-20">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border border-cyan-400/20 p-14 text-center shadow-[0_0_70px_rgba(0,255,255,0.08)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)]" />

          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Join IEEE Student Branch REC Today
            </h2>

            <p className="text-gray-300 mb-8 text-lg">
              Connect. Innovate. Lead the Future.
            </p>

            <button className="px-10 py-4 bg-cyan-500 rounded-2xl hover:bg-cyan-400 transition-all hover:scale-105 shadow-lg shadow-cyan-500/30">
              Become a Member
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}