import React from "react";

function Education() {
  return (
    <section id="education" className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-orange-950 text-white px-6 md:px-16 py-20">

      {/* SECTION HEADER */}
      <div className="mb-14">
        <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">
          Academic Journey
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold">
          Education
        </h2>
      </div>

      {/* EDUCATION CARD */}
      <div className="max-w-4xl bg-zinc-900/60 backdrop-blur-md border border-orange-500/20 rounded-3xl p-8 md:p-12 shadow-2xl hover:border-orange-500 transition duration-300">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Diploma in Computer Engineering
            </h3>

            <p className="text-gray-400 text-lg">
              Govt Women's Polytechnic College, Trivandrum
            </p>
          </div>

          {/* YEAR BADGE */}
          <span className="w-fit px-5 py-2 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/30 text-sm font-medium">
            2024 - Present
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-300 leading-8 text-lg">
          Currently pursuing a Diploma in Computer Engineering with a strong interest in frontend development, UI/UX design, and modern web technologies. Actively learning React, Tailwind CSS, and building creative projects to improve practical skills.
        </p>

        {/* EXTRA HIGHLIGHTS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

          <div className="bg-black/40 border border-orange-500/10 rounded-2xl p-5 hover:border-orange-500/40 hover:-translate-y-1 transition duration-300">
            <h4 className="text-white font-semibold mb-2">
              Web Development
            </h4>
            <p className="text-gray-400 text-sm">
              Learning modern frontend technologies and responsive design.
            </p>
          </div>

          <div className="bg-black/40 border border-orange-500/10 rounded-2xl p-5 hover:border-orange-500/40 hover:-translate-y-1 transition duration-300">
            <h4 className="text-white font-semibold mb-2">
              UI Design
            </h4>
            <p className="text-gray-400 text-sm">
              Interested in creating aesthetic and user-friendly interfaces.
            </p>
          </div>

          <div className="bg-black/40 border border-orange-500/10 rounded-2xl p-5 hover:border-orange-500/40 hover:-translate-y-1 transition duration-300">
            <h4 className="text-white font-semibold mb-2">
              Continuous Learning
            </h4>
            <p className="text-gray-400 text-sm">
              Exploring new tools, frameworks, and creative technologies.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;