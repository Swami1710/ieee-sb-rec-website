import { motion } from "framer-motion";

export default function Chapters() {
  const chapters = [
    {
      title: "IEEE Core",
      desc: "Main technical branch promoting innovation, research, and engineering excellence.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      icon: "⚡",
    },
    {
      title: "Women in Engineering",
      desc: "Empowering diversity and supporting women in technology and leadership.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      icon: "👩‍💻",
    },
    {
      title: "Computer Society",
      desc: "Focused on AI, software development, computing, and data technologies.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
      icon: "💻",
    },
    {
      title: "Robotics & AI",
      desc: "Building the future through robotics, automation, AI, and embedded systems.",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80",
      icon: "🤖",
    },
    {
      title: "Signal Processing",
      desc: "Research in DSP, communication systems, and intelligent electronics.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
      icon: "📡",
    },
    {
      title: "Power & Energy",
      desc: "Driving innovation in electrical systems, power electronics, and energy tech.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
      icon: "🔋",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 blur-[180px] rounded-full" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <section className="relative max-w-7xl mx-auto px-8 md:px-16 pt-24 pb-14">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">Our Chapters</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Explore Our <span className="text-cyan-400">Technical Chapters</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl">
          Discover our diverse IEEE technical communities where students innovate,
          collaborate, and build future technologies.
        </p>
      </section>

      <section className="relative max-w-7xl mx-auto px-8 md:px-16 pb-24">
        <div className="grid md:grid-cols-3 gap-10">
          {chapters.map((chapter, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={chapter.image}
                  alt={chapter.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent" />
                <div className="absolute top-4 left-4 w-14 h-14 rounded-2xl bg-cyan-500/20 backdrop-blur-xl flex items-center justify-center text-2xl border border-cyan-400/20 shadow-lg shadow-cyan-500/20">
                  {chapter.icon}
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">{chapter.title}</h3>
                <p className="text-gray-300 mb-5">{chapter.desc}</p>
                <button className="text-cyan-400 font-medium hover:translate-x-2 transition">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-8 md:px-16 pb-24">
        <div className="rounded-[2rem] overflow-hidden border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-14 text-center shadow-[0_0_60px_rgba(0,255,255,0.06)]">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join a Chapter and Shape the Future</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Become part of a technical community that builds leaders, innovators, and future engineers.
          </p>
          <button className="px-10 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition hover:scale-105 text-lg font-semibold shadow-lg shadow-cyan-500/30">
            Start Innovating
          </button>
        </div>
      </section>
    </div>
  );
}
