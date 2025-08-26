import React from "react";
import wch1 from "../../../public/image/wcu1.jpg";
import wch2 from "../../../public/image/wcu2.jpg";
import wch3 from "../../../public/image/wcu3.jpg";
export const Wcu = () => {
  return (
    <div id="" className="bg-gradient-to-b from-black via-gray-800 to-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-indigo-300 to-yellow-300 text-transparent bg-clip-text">
            O motivo para escolher nossa equipe
          </h2>
          <p className="mt-4 text-gray-300 text-sm sm:text-base lg:text-lg font-light">
            Descubra por que nos destacamos em qualidade, comprometimento e
            resultados.
          </p>
        </div>
        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* left Section */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 -ml-2 sm:-ml-4 lg:ml-6 xl:-ml-8">
              {[
                {
                  title: "Treinador Especializado",
                  text: "Profissionais altamente qualificados para ajudar você a alcançar seus objetivos.",
                },
                {
                  title: "Planos Personalizados",
                  text: "Treinos feitos sob medida de acordo com o seu nível e metas.",
                },
                {
                  title: "Acompanhamento Constante",
                  text: "Orientação passo a passo para garantir evolução e resultados.",
                },
                {
                  title: "Resultados Reais",
                  text: "Metodologia prática e eficiente para transformar sua rotina e corpo.",
                },
              ].map((box, index) => (
                <div
                  key={index}
                  className="relative flex flex-col justify-center items-center space-x-4 p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-yellow-100 text-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <h4 className="font-extrabold text-lg sm:text-xl text-center">
                    {box.title}
                  </h4>
                  <p className="text-sm sm:text-md font-light text-center">
                    {box.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/*  right section */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/*  {two vertical img} */}
              <div className="grid grid-rows-2 gap-6">
                <img
                  src={wch1}
                  alt="img1"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
                />
                <img
                  src={wch2}
                  alt="img2"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/*  horiziontal Img */}
              <div className="w-full">
                <img src={wch3} alt="img3" loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
