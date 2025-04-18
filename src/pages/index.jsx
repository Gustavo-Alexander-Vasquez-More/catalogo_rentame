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
          <div className="flex lg:flex-row flex-col justify-center gap-[2rem] lg:gap-[5rem] text-[1rem] lg:text-[1.2rem] font-semibold">
            <a
              href="/renta-equipos"
              className="bg-[#222d72] hover:bg-[#11283D] transition-colors duration-500 py-3 px-4 rounded-3"
            >
              Ver Equipos en Renta
            </a>
            <a
              href="/venta-equipos"
              className="bg-[#222d72] hover:bg-[#11283D] transition-colors duration-500 py-3 px-4 rounded-3"
            >
              Ver Equipos en Venta
            </a>
          </div>
        </div>
        {/* DEFINICION VENTA , RENTA Y REPARACION DE MAQUINARIAS */}
        <div className="w-full flex flex-col min-h-screen px-[1rem] lg:px-[3rem] bg-gray-200 pb-[5%] pt-[10%] lg:pt-[2.5%] gap-[2rem]">
          <Beneficios />
          <CarouselProductos />
          {/* Renta de maquinaria */}
          <div className="flex lg:flex-row flex-col-reverse w-full rounded-xl items-start lg:gap-0 gap-4 bg-white py-[1rem] lg:py-[2.5rem] px-[1rem] lg:px-[2.5rem]">
            <div className="lg:w-[50%] w-full flex justify-center lg:pr-[3rem]">
              <img
                loading="lazy"
                src={rentaMaquinaria}
                alt="Renta de maquinaria"
                className="shadow-md w-full lg:w-[90%] object-cover lg:h-[50vh]"
              />
            </div>
            <div className="lg:w-[50%] w-full text-gray-700">
              <h1 className="lg:text-[1.6rem] text-[1.4rem] font-bold mb-2">
                Renta de Maquinaria
              </h1>
              <p className="lg:text-[1.1rem] text-[0.9rem] mb-2">
                Ofrecemos herramientas, equipos para construcción y diversos oficios,
                con opciones para cada necesidad. Si no tenemos lo que buscas,
                estaremos encantados de brindarte una alternativa para que puedas continuar con tu proyecto.
              </p>
              <p className="lg:text-[1.1rem] text-[0.9rem] mb-2">
              Trabajamos con marcas líderes en herramientas y maquinaria ligera para ofrecerte equipos confiables y de alto rendimiento. Además, contamos con equipos tecnológicos y de otros oficios para proyectos que lo requieran.
</p>
              <p className="lg:text-[1.1rem] text-[0.9rem] mb-2">
                Marcas como Bosch, Dewalt, Makita, Milwaukee, entre otras,
                respaldan la calidad de nuestro catálogo.
              </p>
              <a
                href="/renta-equipos"
                className="underline text-[#222D72] lg:text-[1.1rem] text-[0.9rem] font-semibold"
              >
                Ver equipos en renta.
              </a>
            </div>
          </div>

          {/* Venta de maquinaria */}
          <div className="flex flex-col-reverse w-full rounded-xl items-start lg:flex-row-reverse lg:gap-0 gap-4 bg-white lg:py-[2.5rem] py-[1rem] px-[1rem] lg:px-[2.5rem]">
            <div className="lg:w-[50%] w-full flex justify-center lg:pl-[3rem]">
              <img
                loading="lazy"
                src={ventaMaquinaria}
                alt="Venta de maquinaria"
                className=" shadow-md w-full lg:w-[90%] object-cover lg:h-[50vh]"
              />
            </div>
            <div className="lg:w-[50%] w-full text-gray-700">
              <h1 className="lg:text-[1.6rem] text-[1.4rem] font-bold mb-2">
                Venta de Herramientas
              </h1>
              <p className="lg:text-[1.1rem] text-[0.9rem] mb-2">
                ¿Buscas herramientas nuevas o usadas a buen precio? En
                <span className="text-red-700 font-bold"> RentameCarmen</span> contamos con opciones accesibles y confiables para
                distintos oficios y necesidades.
              </p>
              <p className="lg:text-[1.1rem] text-[0.9rem] mb-2">
                Desde equipos ligeros hasta maquinaria especializada, te
                ayudamos a encontrar lo que necesitas con atención personalizada
                y disponibilidad inmediata.
              </p>
              <a
                href="/venta-equipos"
                className="underline text-[#222D72] lg:text-[1.1rem] text-[0.9rem] font-semibold"
              >
                Ver equipos en venta.
              </a>
            </div>
          </div>

          {/* Reparación de equipos */}
          <div className="flex lg:flex-row flex-col-reverse w-full rounded-xl items-start lg:gap-0 gap-4 bg-white lg:py-[2.5rem] py-[1rem] px-[1rem] lg:px-[2.5rem]">
            <div className="lg:w-[50%] w-full flex justify-center lg:pr-[3rem] ">
              <img
                loading="lazy"
                src={tallerDescriptivo}
                alt="Reparación de equipos"
                className=" shadow-md w-full lg:w-[90%] object-cover lg:h-[50vh]"
              />
            </div>
            <div className="lg:w-[50%] w-full text-gray-700">
              <h1 className="lg:text-[1.6rem] text-[1.4rem] font-bold mb-2">
                Centro de Servicio
              </h1>
              <p className="lg:text-[1.1rem] text-[0.9rem] mb-2">
                Nuestro centro especializado brinda mantenimiento y reparación
                para herramientas y equipos de marcas reconocidas, con stock de
                refacciones siempre disponible.
              </p>
              <p className="lg:text-[1.1rem] text-[0.9rem] mb-2">
                Mientras reparamos tus herramientas, puedes rentar equipo con
                nosotros. También compramos herramientas que ya no planeas usar.
              </p>
              <p className="lg:text-[1.1rem] text-[0.9rem] mb-2">
                Contamos con refacciones nuevas y usadas gracias a nuestro
                deshuesadero. Acércate y encuentra soluciones a medida para tus
                proyectos.
              </p>
              <a
                href="/centro_servicio"
                className="underline text-[#222D72] lg:text-[1.1rem] text-[0.9rem] font-semibold"
              >
                Conoce más de nosotros.
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
