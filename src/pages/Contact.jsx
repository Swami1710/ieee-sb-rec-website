function Contact() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.12),transparent_35%)] pointer-events-none" />

      <section className="relative px-12 py-20 max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-[0.25em] mb-4 text-sm">
          Contact Us
        </p>

        <h1 className="text-5xl font-bold mb-4">
          Get In Touch
        </h1>

        <p className="text-gray-300 mb-14 max-w-3xl">
          Have questions, ideas, or want to join IEEE Student Branch REC?
          Reach out to us anytime.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                Email
              </h3>
              <p className="text-gray-300">
                ieee@rec.ac.in
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                Phone
              </h3>
              <p className="text-gray-300">
                +91 9876543210
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                Address
              </h3>
              <p className="text-gray-300">
                Rajkiya Engineering College, Sonbhadra, Uttar Pradesh
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Send Us A Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
              ></textarea>

              <button
                className="w-full bg-cyan-500 hover:bg-cyan-400 transition rounded-xl py-3 font-semibold"
              >
                Send Message
              </button>
            </form>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Contact