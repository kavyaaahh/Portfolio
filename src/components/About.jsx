import React from "react";

function About() {
  return (
    <section id="about"className="min-h-screen bg-gradient-to-r from-zinc-950 via-orange to-orange-950 text-white px-6 md:px-16 py-20">
      
      {/* SECTION TITLE */}
      <div className="mb-12">
        <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">
          Get To Know Me
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold">
          About Me
        </h2>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl bg-zinc-900/60 backdrop-blur-md border border-orange-500/20 rounded-3xl p-8 md:p-12 shadow-2xl hover:border-orange-500 transition duration-300">

        {/* ABOUT TEXT */}
        <p className="text-lg md:text-xl leading-9 text-gray-300">
          I am a passionate and creative person who enjoys learning
          new technologies and building beautiful digital experiences.
          I love frontend development, UI design, and solving problems
          creatively.
        </p>

        {/* EXTRA INFO */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

          {/* FRONTEND */}
          <div className="bg-black/40 border border-orange-500/10 rounded-2xl p-5 hover:border-orange-500/40 hover:-translate-y-1 transition duration-300">
            <h3 className="text-white font-semibold mb-2">
              Frontend
            </h3>
            <p className="text-gray-400 text-sm">
              Exploring React, Tailwind CSS & modern UI design.
            </p>
          </div>

          {/* CREATIVITY */}
          <div className="bg-black/40 border border-orange-500/10 rounded-2xl p-5 hover:border-orange-500/40 hover:-translate-y-1 transition duration-300">
            <h3 className="text-white font-semibold mb-2">
              Creativity
            </h3>
            <p className="text-gray-400 text-sm">
              Interested in creating clean and aesthetic interfaces.
            </p>
          </div>

          {/* LEARNING */}
          <div className="bg-black/40 border border-orange-500/10 rounded-2xl p-5 hover:border-orange-500/40 hover:-translate-y-1 transition duration-300">
            <h3 className="text-white font-semibold mb-2">
              Learning
            </h3>
            <p className="text-gray-400 text-sm">
              Always curious to learn new tools and technologies.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;