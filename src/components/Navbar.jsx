import React from "react";

function Navbar() {

  // SCROLL FUNCTION
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-orange-950 text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-4">

        <div className="flex items-center justify-between bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-4 rounded-2xl shadow-lg shadow-orange-500/10">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-xl font-bold">
              KS
            </div>

            <div>
              <h1 className="font-bold text-lg tracking-wide">
                Kavya
              </h1>

              <p className="text-xs text-gray-400">
                Frontend Learner
              </p>
            </div>
          </div>

          {/* MENU */}
          <div className="hidden md:flex gap-8 text-gray-300 font-medium">

            <button
              onClick={() => scrollToSection("about")}
              className="relative group hover:text-orange-400 transition"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("education")}
              className="relative group hover:text-orange-400 transition"
            >
              Education
            </button>

            <button
              onClick={() => scrollToSection("skills")}
              className="relative group hover:text-orange-400 transition"
            >
              Skills
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="relative group hover:text-orange-400 transition"
            >
              Contact
            </button>

          </div>

          {/* MOBILE ICON */}
          <div className="md:hidden text-3xl cursor-pointer">
            ☰
          </div>

        </div>
      </nav>

    </div>
  );
}

export default Navbar;