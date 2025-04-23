import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import rentaMaquinaria from "../images/rentaMaquinaria.jpg";
import ventaMaquinaria from "../images/ventaMaquinaria.jpg";
import { Helmet } from "react-helmet";
import CarouselProductos from "../components/productosCarousel";
import banerPrincipal from "../images/banerPrincipal.jpg";
import tallerDescriptivo from "../images/tallerDescriptivo.jpg";
import Marcas from "../components/marcas";
import "notyf/notyf.min.css";
import whatsapp from "../images/whatsapp.png";
import Footer from "../components/footer";
import Reseñas from "../components/reseñas";
import Beneficios from "../components/beneficios";
import icon from "../images/rentame_icon.png";
export default function index() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    // Encontrar el link con rel="icon" y cambiar su href
    const favicon = document.querySelector("link[rel='icon']");

    // Si el favicon existe, cambiamos el href
    if (favicon) {
      favicon.href = icon; // Actualizamos el favicon con la nueva imagen
    }
  }, []);
  return (
    <>
      
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rentame Carmen | Tu mejor Aliado</title>
        <link rel="canonical" href="https://www.rentamecarmen.com.mx" />
        <link rel="preload" as="image" href={banerPrincipal} />
      </Helmet>
      <div className="w-full flex flex-col z-40 relative items-center">
      <a href="https://wa.link/gpu01d" target="_blank" className="fixed lg:top-[82%] top-[87%] right-5 z-50 shadow-xl bg-[#ffffff3d] rounded-full"><img className="lg:w-[6rem] w-[4.5rem]" src={whatsapp} alt="sds" /></a>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="w-full flex z-0 justify-center items-center h-[100vh]">
          <img
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`h-[100vh] object-cover object-top w-full relative transition-opacity duration-1000 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={banerPrincipal}
            alt=""
          />
          <div className="w-full h-[100vh] opacity-60 bg-black absolute"></div>
        </div>
        <div className="absolute z-40 w-full h-[100vh] flex justify-center gap-5 items-center text-white flex-col text-center px-[7%] lg:px-[15%]">
          <h1 className="lg:text-[2.5rem] text-[1.7rem] font-bold ">
            TU MEJOR ALIADO EN LA RENTA Y VENTA DE MAQUINARIA
          </h1>
          <h3 className="lg:text-[1.5rem] text-[1.2rem] font-semibold">
            No esperes más!. Tenemos equipos de Calidad para Todos Tus Proyectos
            en Ciudad del Carmen.
          </h3>
            <a
              href="https://wa.link/8h0g6r" target="_blank"
              className="bg-[#222d72] hover:bg-[#11283D] lg:text-[1.3rem] transition-colors duration-500 py-3 px-4 rounded-3"
            >
              Cotiza con nosotros
            </a>
        </div>
        {/* DEFINICION VENTA , RENTA Y REPARACION DE MAQUINARIAS */}
        <div className="w-full flex flex-col min-h-screen px-[1rem] lg:px-[3rem] bg-gray-200 pb-[5%] pt-[10%] lg:pt-[2.5%] gap-[2rem]">
          <Beneficios />
          <CarouselProductos />
          {/* Renta de maquinaria */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Renta de Maquinaria */}
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl flex flex-col justify-between transition-all">
    <img src={rentaMaquinaria} alt="Renta de maquinaria" className="w-full h-40 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-bold text-gray-800 mb-2">Renta de Maquinaria</h3>
    <p className="text-gray-600 mb-4 text-sm">Ofrecemos equipos para construcción, carpintería, jardinería y diversos oficios. Si no encuentras lo que buscas, ¡te ayudamos a conseguirlo!</p>
    <a href="/renta-equipos" className="text-[#222D72] font-semibold text-sm hover:text-blue-600">
      Ver equipos en renta
    </a>
  </div>

  {/* Venta de Herramientas */}
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl flex flex-col justify-between transition-all">
    <img src={ventaMaquinaria} alt="Venta de maquinaria" className="w-full h-40 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-bold text-gray-800 mb-2">Venta de Herramientas</h3>
    <p className="text-gray-600 mb-4 text-sm">Desde herramientas ligeras hasta maquinaria especializada. ¡Encuentra lo que necesitas a buen precio!</p>
    <a href="/venta-equipos" className="text-[#222D72] font-semibold text-sm hover:text-blue-600">
      Ver equipos en venta
    </a>
  </div>

  {/* Reparación de Equipos */}
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl flex flex-col justify-between transition-all">
    <img src={tallerDescriptivo} alt="Reparación de equipos" className="w-full h-40 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-bold text-gray-800 mb-2">RM Centro de Servicio</h3>
    <p className="text-gray-600 mb-4 text-sm">Reparamos tus herramientas y maquinaria en nuestro taller especializado. ¡Mientras tanto, puedes rentar un equipo para continuar con tu proyecto!</p>
    <a href="/centro_servicio" className="text-[#222D72] font-semibold text-sm hover:text-blue-600">
      Conoce más de nosotros
    </a>
  </div>
</div>

          <Marcas />
          <Reseñas />
        </div>
        <Footer />
      </div>
    </>
  );
}
