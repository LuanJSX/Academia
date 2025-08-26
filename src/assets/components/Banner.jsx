import React from "react";
import {
  FaCertificate,
  FaDumbbell,
  FaFacebook,
  FaHeartbeat,
  FaInstagram,
  FaMedal,
  FaRunning,
  FaThumbsUp,
  FaTiktok,
  FaUsers,
  FaPlay,
} from "react-icons/fa";

import bgimage from "../../../public/image/bannertop.png";

export const Banner = () => {
  return (
    <div>
      {/*  Banner Section */}
      <div
        id="home"
        className="relative h-screen bg-black overflow-hidden flex flex-col lg:flex-row items-center justify-center lg:justify-between"
      >
        {/*  Content Section */}
        <div className="relative z-10 flex flex-col justify-center items-start px-6 sm:px-10 lg:px-20 text-white bg-gradient-to-r from-black via-transparent h-full w-full lg:w-1/2">
          <h1 className="text-3xl sm-text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-slideInLeft text-center lg:text-left">
            Eleve seu <span className="text-yellow-500">Treino</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-8 lg:-text-xl animate-slideInLeft delay-200 text-center lg:text-left">
            Transforme sua jornada fitness com orientação profissional e
            técnicas avançadas.
          </p>
          {/* icons Section */}
          <div className="flex flex-wrap sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fadeIn delay-400">
            <div className="flex items-center gap-3 group">
              <FaDumbbell className="text-yellow-500 text-2xl sm:test-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110" />
              <span className="text-sm sm:text-lg font-medium">
                Treinamento
              </span>
            </div>
            <div className="flex items-center gap-3 group">
              <FaHeartbeat className="text-yellow-500 text-2xl sm:test-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110" />
              <span className="text-sm sm:text-lg font-medium">
                Cadio Fitness
              </span>
            </div>
            <div className="flex items-center gap-3 group">
              <FaRunning className="text-yellow-500 text-2xl sm:test-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110" />
              <span className="text-sm sm:text-lg font-medium">Resistir</span>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105 delay-600 cursor-pointer">
              Vamos Começar?
            </button>
            <button className="px-4 sm:px-6 sm:py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105 delay-1000 flex items-center gap-2 cursor-pointer">
              <FaPlay className="text-black text-xl" /> Video Demon
            </button>
          </div>

          {/*  social media */}
          <div className="flex gap-6 mt-4 animate-fadeIn delay-800 justify-center lg:justify-start">
            <a
              href="#"
              aria-label="Facebook"
              className="text-White text-2xl sm:text-3xl transition-transform transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-yellow-500 text-2xl sm:text-3xl transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="tiktok"
              className="text-white text-2xl sm:text-3xl transition-transform transform hover:scale-110"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
        {/*  Bg Image */}
        <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 flex justify-center">
          <img
            src={bgimage}
            alt=""
            className="h-full w-full object-contain opacity-80 animate-zoomInSlow"
          />
        </div>
      </div>

      {/* New Section */}
      <div className="bg-black py-12 sm:py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            <div className="flex flex-col items-center gap-4 animate-fadeIn delay-800">
              <FaMedal className="text-yellow-500 text-3xl sm:text-4xl" />
              <span className="text-sm sm:text-lg md:text-xl font-semibold">
                Mais de 5 anos de Serviços
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 animate-fadeIn delay-800">
              <FaCertificate className="text-yellow-500 text-3xl sm:text-4xl" />
              <span className="text-sm sm:text-lg md:text-xl font-semibold">
                50+ Certificados de Treinamento
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 animate-fadeIn delay-800">
              <FaUsers className="text-yellow-500 text-3xl sm:text-4xl" />
              <span className="text-sm sm:text-lg md:text-xl font-semibold">
                1000+ Clientes Atendidos
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 animate-fadeIn delay-800">
              <FaThumbsUp className="text-yellow-500 text-3xl sm:text-4xl" />
              <span className="text-sm sm:text-lg md:text-xl font-semibold">
                95% de Clientes Satisfeitos
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
