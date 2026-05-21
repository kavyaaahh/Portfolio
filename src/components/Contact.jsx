import React from "react";

function Contact() {
  return (
    <section id="contact"className="min-h-screen bg-gradient-to-r from-zinc-950 via-orange to-orange-950 text-white px-6 md:px-16 py-20">

      {/* SECTION HEADER */}
      <div className="mb-14">
        <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">
          Get In Touch
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold">
          Contact
        </h2>
      </div>

      {/* CONTACT CARD */}
      <div className="max-w-4xl bg-zinc-900/60 backdrop-blur-md border border-orange-500/20 rounded-3xl p-8 md:p-12 shadow-2xl hover:border-orange-500 transition duration-300">

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-lg leading-8 mb-10">
          Feel free to connect with me for learning opportunities, collaborations, or frontend development projects. I’m always excited to learn new things and meet creative people.
        </p>

        {/* CONTACT INFO */}
        <div className="space-y-6">

          {/* EMAIL */}
          <div className="flex items-center gap-4 bg-black/40 border border-orange-500/10 rounded-2xl p-5 hover:border-orange-500/40 transition duration-300">

            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-2xl">
              📧
            </div>

            <div>
              <h3 className="text-white font-semibold">
                Email
              </h3>

              <a
                href="mailto:ponnuk08@gmail.com"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                ponnuk08@gmail.com
              </a>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-4 bg-black/40 border border-orange-500/10 rounded-2xl p-5 hover:border-orange-500/40 transition duration-300">

            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-2xl">
              📱
            </div>

            <div>
              <h3 className="text-white font-semibold">
                Phone
              </h3>

              <p className="text-gray-400">
                +91 12345 67890
              </p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-4 bg-black/40 border border-orange-500/10 rounded-2xl p-5 hover:border-orange-500/40 transition duration-300">

            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-2xl">
              📍
            </div>

            <div>
              <h3 className="text-white font-semibold">
                Location
              </h3>

              <p className="text-gray-400">
                Kerala, India
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;