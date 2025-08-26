import React from "react";
import { FaQuoteLeft,FaQuoteRight,FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import { CircleChevronLeft,CircleChevronRight  } from 'lucide-react';



export const YourOpinions = () => {
  return (
    <div
      id="opinions"
      className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen py-12 px-6"
    >
      {/*  Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
          {" "}
          Opiniões da Comunidade{" "}
        </h2>
        <p className="text-gray-400 text-lg mt-2">O que dizem sobre nós</p>
      </div>
      {/*  Reviews Section */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Review */}
        {[
          {
            name: "Lucas",
            text: "Suporte e qualidade excepcionais! A equipe foi além do esperado para garantir que tudo estivesse perfeito. Altamente recomendado para quem busca um serviço de alto nível.",
            stars: 4.5,
            color: "text-blue-500",
          },
          {
            name: "Luana",
            text: "Experiência incrível! Recomendo fortemente a todos. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            stars: 4,
            color: "text-purple-500",
          },
          {
            name: "Sophia",
            text: "Ótima plataforma, embora haja espaço para melhorias. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            stars: 3.5,
            color: "text-green-500",
          },
          {
            name: "Natan",
            text: "Instalações e treinadores incríveis. Eles realmente se importam com sua jornada de fitness.",
            stars: 5,
            color: "text-yellow-500",
          },
          {
            name: "Felipe",
            text: "Sistema de suporte fantástico e equipamentos modernos. Não poderia pedir mais!",
            stars: 4.5,
            color: "text-red-500",
          },
          {
            name: "Diego",
            text: "O ambiente comunitário é verdadeiramente inspirador! Um lugar perfeito para crescer.",
            stars: 4.8,
            color: "text-indigo-500",
          },
        ].map((review, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          >
            <FaQuoteLeft className={`${review.color} text-3xl`} />
            <h3 className="text-xl font-semibold text-white mt-4">
              {review.name}
            </h3>
            <div className="flex items-center mt-2 mb-4 text-yellow-500 text-xl">
              {Array.from({ length: Math.floor(review.stars) }).map((_, i) => (
                <FaStar />
              ))}
              {review.stars % 1 !== 0 && <FaStarHalfAlt />}
            </div>
            <p className="text-gray-400 text-sm italic">{review.text}</p>
            <FaQuoteRight
              className={`${review.color} text-3xl float-right mt-4`}
            />
          </div>
        ))}
      </div>
      {/* Navegation add Opition */}
      <div className="mt-10 flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-4">
          <button className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full shadow hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 transition-transform duration-300 transform hover:scale-110">
            <CircleChevronLeft />
          </button>
          <button className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full shadow hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 transition-transform duration-300 transform hover:scale-110">
            <CircleChevronRight />
          </button>
        </div>
        {/* {Add Option} */}
        <button className="bg-gradient-to-r from-gray-700 to-yellow-500 text-white px-10 py-4 rounded-full shadow-xl hover:from-gray-700 hover:to-yellow-500 hover:scale-110 transition transform duration-300">
          Adicionar Opinião
        </button>
      </div>
    </div>
  );
};
