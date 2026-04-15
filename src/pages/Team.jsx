function Team() {
  const members = [
    {
      name: "Vaibhav Agarwal",
      role: "Chairperson",
      image: "#"
    },
    {
      name: "Pushpendra",
      role: "Vice Chair",
      image: "#"
    },
    {
      name: "Samriddhi",
      role: "Secatary",
      image: "#"
    },
    {
      name: "nobody",
      role: "Event Head",
      image: "#"
    },
    {
      name: "Keshav Agarwal",
      role: "Design Lead",
      image: "#"
    },
    {
      name: "unknown",
      role: "Web Team Lead",
      image: "#"
    }
  ]

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.12),transparent_35%)] pointer-events-none" />

      <section className="relative px-12 py-20 max-w-7xl mx-auto">

        {/* Page Header */}
        <p className="text-cyan-400 uppercase tracking-[0.25em] mb-4 text-sm">
          Leadership Team
        </p>

        <h1 className="text-5xl font-bold mb-4">
          Meet Our Team
        </h1>

        <p className="text-gray-300 mb-16 max-w-3xl">
          The mentors and leaders driving innovation, technical excellence,
          and community growth at IEEE Student Branch REC.
        </p>

        {/* FACULTY COUNSELOR FIRST */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">
            Faculty Counselor
          </h2>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8 backdrop-blur-xl shadow-xl">
            
            <img
              src="#"
              alt="Faculty Counselor"
              className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400"
            />

            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Prashant Pandey
              </h3>

              <p className="text-cyan-400 text-lg mb-4">
                Faculty Counselor, IEEE Student Branch REC
              </p>

              <p className="text-gray-300 max-w-3xl leading-relaxed">
                Guiding the IEEE Student Branch with academic excellence,
                mentorship, and visionary leadership to foster innovation
                and technical growth among students.
              </p>
            </div>

          </div>
        </div>

        {/* TEAM BELOW */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">
            Core Executive Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition duration-300 shadow-xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto mb-5 object-cover border-2 border-cyan-400"
                />

                <h3 className="text-2xl font-semibold text-white">
                  {member.name}
                </h3>

                <p className="text-cyan-400 mt-2">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  )
}

export default Team