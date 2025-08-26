import React from 'react'
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ durtion: 1 }}
        className="w-full max-w-3xl lg:max-w-5xl grid lg:grid-cols-2 gap-8"
      >
        {/*  {Andress Section} */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-text-trasparent bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6">
            Entre Em Contato
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-yellow-500" />
              <p className="text-lg font-medium">Rua da Amora, 123</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-yellow-500" />
              <p className="text-lg font-medium">32 23456789</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-yellow-500" />
              <p className="text-lg font-medium">luantrabalho49@gmail.com</p>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ durtion: 1 }}
          className="bg-gray-900 p-6 rounded-2xl space-y-6"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-blue-400 mb-4">
            Entre em Contato
          </h2>
          <div>
            <label className="block text-sm font-medium mb-2">Seu Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus-ring-2 focus-ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Digite seu Email"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus-ring-2 focus-ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows="4"
              type="text"
              placeholder="Message"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus-ring-2 focus-ring-yellow-500"
            />
          </div>
          <button type='submit' className='w-full p-3 bg-gradient-to-r from-yellow-500 top-6 rounded-lg text-lg font-semibold hover:opacity-90 transition cursor-pointer'>
          Enviar mensagem

          </button>
        </motion.form>
      </motion.div>
    </div>
  );
}
