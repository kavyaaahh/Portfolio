import React from "react";

function Skills() {
  return (
    <section id="skills"className="min-h-screen bg-gradient-to-r from-zinc-950 via-orange to-orange-950  text-white px-6 md:px-16 py-20">

      {/* SECTION HEADER */}
      <div className="mb-14">
        <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">
          My Expertise
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold">
          Skills
        </h2>
      </div>

      {/* SKILLS CARD */}
      <div className="max-w-5xl bg-zinc-900/60 backdrop-blur-md border border-orange-500/20 rounded-3xl p-8 md:p-12 shadow-2xl hover:border-orange-500 transition duration-300">

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-lg leading-8 mb-10">
          I enjoy learning and working with modern technologies to build responsive, creative, and user-friendly web applications. Here are some of the technologies and tools I am currently exploring and improving.
        </p>

        {/* SKILL CHIPS */}
        <div className="flex flex-wrap gap-5">

          <span className="px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 font-medium hover:scale-105 transition">
            HTML
          </span>

          <span className="px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-200 font-medium hover:scale-105 transition">
            CSS
          </span>

          <span className="px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/30 text-yellow-300 font-medium hover:scale-105 transition">
            JavaScript
          </span>

          <span className="px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/30 text-cyan-300 font-medium hover:scale-105 transition">
            React
          </span>

          <span className="px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/30 text-green-300 font-medium hover:scale-105 transition">
            Python
          </span>

          <span className="px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/30 text-red-300 font-medium hover:scale-105 transition">
            Java
          </span>

        </div>

        {/* EXTRA HIGHLIGHTS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">

          <div className="bg-black/40 border border-orange-500/10 rounded-2xl p-5 hover:border-orange-500/40 hover:-translate-y-1 transition duration-300">
            <h3 className="text-white font-semibold mb-2">
              Frontend Development
            </h3>
            <p className="text-gray-400 text-sm">
              Building responsive and interactive web interfaces.
            </p>
          </div>

          <div className="bg-black/40 border border-orange-500/10 rounded-2xl p-5 hover:border-orange-500/40 hover:-translate-y-1 transition duration-300">
            <h3 className="text-white font-semibold mb-2">
              UI / UX Interest
            </h3>
            <p className="text-gray-400 text-sm">
              Passionate about clean layouts and user-friendly designs.
            </p>
          </div>

          <div className="bg-black/40 border border-orange-500/10 rounded-2xl p-5 hover:border-orange-500/40 hover:-translate-y-1 transition duration-300">
            <h3 className="text-white font-semibold mb-2">
              Problem Solving
            </h3>
            <p className="text-gray-400 text-sm">
              Enjoy learning through projects and practical coding.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;