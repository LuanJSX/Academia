import React from "react";
import { Link } from "react-scroll";
import { FaFacebookF, FaInstagram, FaTiktok,  } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white font-poppis">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* BrandSection */}
        <div>
          <h1 className="text-3xl text-transparent bg-clip-text bg-text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 font-extrabold tracking-wider">
            FitLife Gym
          </h1>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Transformando vidas através do fitness. Junte-se a nós nessa jornada
            para alcançar uma versão mais saudável e forte de você mesmo.
          </p>
        </div>
        {/* Navegation */}
        <div>
          <h2 className="text-2xl text-transparent bg-clip-text bg-text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 font-semibold">
            Links Rapidos
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                to="home"
                className="cursor-pointer hover:underline hover:text-gray-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="opinions"
                className="cursor-pointer hover:underline hover:text-gray-300"
              >
                Comentários
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="cursor-pointer hover:underline hover:text-gray-300"
              >
                Contato
              </Link>
            </li>
            <li>
              <Link
                to="treiner"
                className="cursor-pointer hover:underline hover:text-gray-300"
              >
                Treinos
              </Link>
            </li>
          </ul>
        </div>
        {/*  Social Links */}
        <div>
          <h2 className="text-2xl text-transparent bg-clip-text bg-text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 font-semibold">
            Siga-nos
          </h2>
          <div className="flex mt-4 space-x-4">
            <a
              href="#"
              className="p-3 bg-gray-700 rounded-full hover:bg-blue-700 transition"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-700 rounded-full hover:bg-blue-700 transition"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-700 rounded-full hover:bg-blue-700 transition"
            >
              <FaTiktok className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="bg-gray-900 text-gray-500 text-center py-4">
        <p>@ 2025 - Luan Batista - Todos os direitos reservados</p>
      </div>
    </footer>
  );
};
