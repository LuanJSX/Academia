import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaCommentDots, FaHome, FaUserTie, FaEnvelope } from "react-icons/fa";

import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
      {/*   <img src="./logo.jpg" alt="" /> */}
        <div className="cursor-pointer text-2xl font-bold text-white font-[Caveat]">
          Academia
        </div>

        {/* Desktop Navegation */}
        <div className="hidden md:flex gap-8 items-center text-white font-semibold">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items center gap-2 hover:text-yellow-300 cursor-pointer"
          >
            <FaHome />
            Home
          </Link>

          <Link
            to="treiner"
            smooth={true}
            duration={500}
            className="flex items center gap-2 hover:text-yellow-300 cursor-pointer"
          >
            <FaUserTie />
            Treinos
          </Link>

          <Link
            to="opinions"
            smooth={true}
            duration={500}
            className="flex items center gap-2 hover:text-yellow-300 cursor-pointer"
          >
            <FaCommentDots />
            Comentários
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="flex items center gap-2 hover:text-yellow-300 cursor-pointer"
          >
            <FaEnvelope />
            Contato
          </Link>
        </div>

        {/* {Mobile togle} */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
            
        >
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
        </div>
        {/* Mobile Navegation */}
        {menuOpen && (
          <div className="md:hidden bg-gray-800 text-white flex flex-col items-center gap-4 py-4">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-amber-300 transition-colors duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="treiner"
              smooth={true}
              duration={500}
              className="hover:text-amber-300 transition-colors duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}
            >
              Treinos
            </Link>

            <Link
              to="opinions"
              smooth={true}
              duration={500}
              className="hover:text-amber-300 transition-colors duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}
            >
              Comentários
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-amber-300 transition-colors duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        )}
      
    </nav>
  );
}

export default Navbar;
