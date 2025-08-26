import React from 'react'
import Mot1 from "../../../public/image/1.jpg"
import Mot2 from "../../../public/image/2.jpg"
import Mot3 from "../../../public/image/3.jpg"
import Mot4 from "../../../public/image/4.jpg"
import Mot5 from "../../../public/image/5.jpg"
import Mot6 from "../../../public/image/6.jpg"


const trainers = [Mot1, Mot2, Mot3, Mot4, Mot5, Mot6];
export const Mt = () => {
  return (
    <div
      className="bg-gradient-to-b from-black via-gray-900 to-black py-12"
      id="treiner"
    >
      {/* Heading Section  */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl mb:text-5xl font-extrabold tracking-tight text-gray-500">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
            Conheça Nossos Treinadores
          </span>
        </h2>
        <p className="text-sm mb:text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          Nossos treinadores profissionais estão prontos para inspirar e guiar
          você em sua jornada fitness, garantindo resultados com confiança e
          cuidado.
        </p>
      </div>
      {/* image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 lg:px-20">
        {trainers.map((imgSrc, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {/* lazy Loading */}
            <img
              src={imgSrc}
              alt={`Trainer ${index + 1}`}
              className="w-full aspect-[3/2] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />

            {/*  {overlay Content} */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Trainer {index + 1}
              </h3>
              <p className="text-xs md:text-sm text-gray-300">
                Certificação em Treinador de Fitness e Bem-Estar
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
