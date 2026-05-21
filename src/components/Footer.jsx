import React from "react";

function Footer() {
  return (
    <footer className=" text-white px-6 md:px-16 py-8 border-t border-orange-500/20">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT SIDE NAVIGATION */}
        <nav>
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-300 font-medium">

            <li>
              <a
                href="#home"
                className="hover:text-orange-400 transition duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-orange-400 transition duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#education"
                className="hover:text-orange-400 transition duration-300"
              >
                Education
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="hover:text-orange-400 transition duration-300"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-orange-400 transition duration-300"
              >
                Contact
              </a>
            </li>

          </ul>
        </nav>

        {/* RIGHT SIDE NAME */}
        <div className="text-center md:text-right">

          <h2 className="text-3xl font-extrabold text-orange-400">
            Kavya S R
          </h2>

          <p className="text-gray-400 mt-2 max-w-md">
        Dedicated to building clean, elegant, and responsive websites
        that combine creativity with functionality.
        </p>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-orange-500/10 mt-6 pt-4 text-center text-gray-500 text-sm">
        © 2026 Kavya S R. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;