import React, { useState } from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer";
import faq from "../images/faq.jpg";
import { Helmet } from "react-helmet";
import whatsapp from "../images/whatsapp.png";
export default function FAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 text-center">
        <div className="max-w-xl">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5953/5953763.png"
            alt="Página en construcción"
            className="w-80 mx-auto mb-8 rounded-xl shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
            ¡Estamos trabajando en ello!
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Esta sección aún está en desarrollo. Muy pronto tendrás acceso al contenido.
            ¡Gracias por tu paciencia!
          </p>
          <a
            href="/"
            className="inline-block bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 rounded-full text-white font-semibold"
          >
            Volver al inicio
          </a>
        </div>
      </div>
      {/* <div className="w-full flex flex-col relative items-center">
        <a
          href="https://wa.link/gpu01d"
          target="_blank"
          className="fixed lg:top-[82%] top-[87%] right-5 z-50 shadow-xl bg-[#ffffff3d] rounded-full"
        >
          <img className="lg:w-[6rem] w-[4.5rem]" src={whatsapp} alt="sds" />
        </a>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="w-full flex z-0 justify-center items-center h-[50vh]">
          <img
            src={faq}
            alt=""
            onLoad={() => setImageLoaded(true)}
            className={`h-[50vh] object-cover object-top w-full relative transition-opacity duration-1000 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="w-full h-[50vh] opacity-60 bg-black absolute"></div>
          <div className="absolute z-40 w-full h-[50vh] flex justify-center items-center text-white flex-col text-center px-[15%]">
            <h1 className="lg:text-6xl text-5xl font-bold relative">
              Preguntas Frecuentes
            </h1>
            <p className="mt-4 text-lg relative">
            Todo lo que necesitas saber sobre Rentame Carmen.
            </p>
          </div>
        </div>
        <div className="flex flex-col min-h-[50vh]"></div>
        <Footer />
      </div> */}
    </>
  );
}
