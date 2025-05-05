import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { PlayCircle, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet";
import whatsapp from "../images/whatsapp.png";
import banner from "../images/banners/refacciones.jpg";
import img1 from "../images/refacciones/01.jpg";
import img2 from "../images/refacciones/02.jpg";
import img3 from "../images/refacciones/03.jpg";
import img4 from "../images/refacciones/04.jpg";
import img5 from "../images/refacciones/05.jpg";
import img6 from "../images/refacciones/06.jpg";
import img7 from "../images/refacciones/07.jpg";
import img8 from "../images/refacciones/08.jpg";
import img9 from "../images/refacciones/09.jpg";
import img10 from "../images/refacciones/10.jpg";

function RefaccionesPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Refacciones | Rentame Carmen</title>
        <meta
          name="keywords"
          content="refacciones, refacciones maquinaria, refacciones ciudad del carmen, refacciones para motobombas, refacciones para desbrozadoras, refacciones para podadoras, refacciones para compresores, refacciones para cortasetos, refacciones para maquinaria ligera"
        />
        <link
          rel="canonical"
          href="https://www.rentamecarmen.com.mx/refacciones"
        />
      </Helmet>

      <div className="w-full min-h-screen relative flex flex-col">
        {/* Botón de WhatsApp */}
        <a
          href="https://wa.link/gpu01d"
          target="_blank"
          className="fixed lg:top-[82%] top-[87%] right-5 z-50 shadow-xl bg-[#ffffff3d] rounded-full"
        >
          <img className="lg:w-[6rem] w-[4.5rem]" src={whatsapp} alt="WhatsApp" />
        </a>

        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Hero */}
        <div className="w-full flex z-0 justify-center items-center h-[60vh]">
          <img
            src={banner}
            alt="Refacciones"
            onLoad={() => setImageLoaded(true)}
            className={`h-[60vh] object-cover object-top w-full relative transition-opacity duration-1000 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="w-full h-[60vh] opacity-60 bg-black absolute"></div>
          <div className="absolute z-40 w-full h-[60vh] flex justify-center items-center text-white flex-col text-center px-[15%]">
            <h1 className="lg:text-[2.5rem] text-[2rem] font-bold">
              Refacciones para tus Equipos
            </h1>
          </div>
        </div>

        {/* Descripción */}
        <div className="w-full flex flex-col py-10 px-[1rem] lg:px-[4rem] text-gray-700">
          <p className="lg:text-3xl text-[1.5rem] font-semibold text-blue-900">
            <span className="text-red-700 font-bold">Refacciones:</span> Calidad
            y Variedad para Mantener tus Equipos en Óptimas Condiciones.
          </p>
          <section className="w-full lg:py-12 bg-white">
            <div className="bg-gray-100 rounded-2xl p-8 shadow-lg flex flex-col lg:flex-row gap-8 items-start justify-center">
              <div className="lg:w-1/2 w-full flex justify-center">
                <img
                  src='https://mercados.press/wp-content/uploads/2023/01/REFACCIONES.jpg'
                  alt="Refacciones"
                  className="shadow-xl lg:h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="lg:w-[90%] w-full text-gray-700">
                <p className="text-lg">
                  En <span className="text-red-700 font-bold">Rentame Carmen</span>, ofrecemos una amplia gama de refacciones para equipos eléctricos y de gasolina, como motobombas, desbrozadoras, podadoras, compresores de aire, cortasetos y más.
                </p>

                <p className="mt-4 text-lg">
                  Contamos con refacciones como carburadores, diafragmas, cebadores, filtros, mangueras, conexiones, chicotes, llaves de paso, empaques, pistones, anillos y muchas más.
                </p>

                <p className="mt-4 text-lg">
                  Llámanos y cotiza la refacción que necesitas para mantener tus equipos funcionando al máximo.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Galería */}
        <section className="w-full px-[1rem] lg:px-[4rem] lg:pb-12 bg-white">
          <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
              Galería de Refacciones
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Refacción ${index + 1}`}
                  className="w-full h-auto object-cover rounded-md shadow"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="py-12 px-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <MessageCircle className="mx-auto h-10 w-10 mb-4 text-white animate-bounce" />
            <h2 className="text-3xl font-bold">¿Te gustaría saber más?</h2>
            <p className="mt-4 text-lg">
              Contáctanos y descubre cómo podemos ayudarte con nuestras
              soluciones de maquinaria.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
              <a href="https://wa.link/gpu01d">Contáctanos</a>
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default RefaccionesPage;
