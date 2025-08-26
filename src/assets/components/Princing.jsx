
import React, { useState } from "react";

export const Princing = () => {
  const [isYearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Plano Iniciante",
      monthly: 500,
      yearly: 5000,
      description: "Perfeito para quem está começando sua jornada fitness.",
      features: [
        { text: "Acesso aos equipamentos básicos", available: true },
        { text: "Uma sessão de treino personal", available: true },
        { text: "Consulta nutricional", available: false },
        { text: "Acesso a aulas premium", available: false },
      ],
    },
    {
      name: "Plano Premium",
      monthly: 800,
      yearly: 8500,
      description: "Ideal para praticantes avançados com benefícios extras.",
      features: [
        { text: "Acesso a todos os equipamentos", available: true },
        { text: "Treino personal semanal", available: true },
        { text: "Consulta nutricional", available: false },
        { text: "Acesso a aulas premium", available: true },
      ],
    },
    {
      name: "Plano Pro",
      monthly: 1000,
      yearly: 10800,
      description: "Indicado para profissionais que buscam alta performance.",
      features: [
        { text: "Acesso ilimitado à academia", available: true },
        { text: "Treino personal diário", available: true },
        { text: "Consulta nutricional avançada", available: true },
        { text: "Aulas premium exclusivas", available: true },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black py-12 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
          Planos e Preços
        </h2>
        <p className="text-lg text-gray-400 mt-3">
          Escolha o plano que combina melhor com você
        </p>
      </div>
      {/*  toggle Button */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          className={`px-6 py-3 rounded-full font-semibold text-lg ${
            !isYearly ? "bg-yellow-500 text-white" : "bg-gray-500 text-gray-300"
          }`}
          onClick={() => setYearly(false)}
        >
          {" "}
          Mensal
        </button>

        <button
          className={`px-6 py-3 rounded-full font-semibold text-lg ${
            !isYearly ? "bg-gray-500 text-white" : "bg-yellow-500 text-white"
          }`}
          onClick={() => setYearly(true)}
        >
          {" "}
          Anual
        </button>
      </div>
      {/* Pricing card */}
      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative border-4 hover:shadow-2xl hover:border-yellow-600 max-w-sm w-full bg-gray-800 p-8 rounded-2xl shadow-lg transform transition-all duration-500 ${
              index === 1
                ? "hover:scale-105 border-4 bg-gray-700 "
                : "border-2 border-gray-700"
            } hover:scale-105 hover:shadow-2xl hover:border-yellow-500 `}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
            <p className="text-lg text-gray-400 mb-6">{plan.description} </p>
            <p className="text-4xl font-extrabold text-white mb-4">
              ${isYearly ? plan.yearly : plan.monthly}{" "}
              <span className="text-lg font-medium text-gray-400">
                / {isYearly ? "Reais" : "Reais"}
              </span>
            </p>
            <ul className="space-y-3 mb-6">
              {plan.features.map((features, i) => (
                <li key={i} className="flex items-center gap-3">
                  {features.available ? (
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white ">
                      &#x2713;
                    </span>
                  ) : (
                    <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white">
                      &#x2717;
                    </span>
                  )}
                  <span className="text-gray-400">{features.text}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-yellow-500 text-white py-2 rounded-full font-semibold text-lg hover:bg-purple-700 transition duration-300 cursor-pointer">
            Escolha o Plano
            </button>    
          </div>
        ))}
      </div>
    </div>
  );
};
