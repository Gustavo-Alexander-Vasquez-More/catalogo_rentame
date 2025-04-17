import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import rentaMaquinaria from "../images/rentaMaquinaria.jpg";
import ventaMaquinaria from "../images/ventaMaquinaria.jpg";
import reparacionMaquinaria from "../images/reparacionEquipos.jpg";
import CarouselProductos from "../components/productosCarousel";
import Marcas from "../components/marcas";
import "notyf/notyf.min.css";
import Footer from "../components/footer";
import Reseñas from "../components/reseñas";
import Beneficios from "../components/beneficios";
import icon from "../images/rentame_icon.png";
export default function index() {
  const [isOpen, setIsOpen] = useState(false);
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
      <div className="w-full flex flex-col relative items-center">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="w-full flex z-0 justify-center items-center h-[100vh]">
          <img
            loading="lazy"
            className="h-[100vh] object-cover w-full relative"
            src="https://wallpapers.com/images/hd/civil-engineering-construction-site-blueprint-0x148xb5hbkabmqu.jpg"
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
            <a href="/renta-equipos" className="bg-[#222d72] hover:bg-[#11283D] transition-colors duration-500 py-3 px-4 rounded-3">
              Ver Equipos en Renta
            </a>
            <a href="/venta-equipos" className="bg-[#222d72] hover:bg-[#11283D] transition-colors duration-500 py-3 px-4 rounded-3">
              Ver Equipos en Venta
            </a>
          </div>
        </div>
        {/* DEFINICION VENTA , RENTA Y REPARACION DE MAQUINARIAS */}
        <div className="w-full flex flex-col min-h-screen px-[1rem] lg:px-[3rem] bg-gray-200 pb-[5%] pt-[10%] lg:pt-[2.5%] gap-[2rem]">
          <Beneficios />
          <CarouselProductos />
          {/* Renta de maquinaria */}
          <div className="flex lg:flex-row flex-col-reverse w-full items-start lg:gap-0 gap-4 bg-white py-[1rem] lg:py-[2.5rem] px-[1rem] lg:px-[2.5rem]">
            <div className="lg:w-[50%] w-full lg:pr-[3rem]">
              <img
                loading="lazy"
                src={rentaMaquinaria}
                alt="Renta de maquinaria"
                className=" shadow-md w-full lg:h-[60vh]"
              />
            </div>
            <div className="lg:w-[50%] w-full">
              <h1 className="lg:text-[1.6rem] text-[1.4rem] font-bold mb-2">
                Renta de Maquinaria
              </h1>
              <p className="lg:text-[1.1rem] text-[0.9rem] font-semibold mb-2">
                En RentameCarmen, nos enorgullece ofrecer una extensa variedad
                de herramientas para la construcción y diferentes oficios. Si no
                contamos con la herramienta específica que buscas, estamos
                seguros de que podremos ofrecerte una solución adecuada a tus
                necesidades.
              </p>
              <p className="lg:text-[1.1rem] text-[0.9rem] font-semibold mb-2">
                Trabajamos con las mejores marcas para una amplia gama de
                oficios, incorporando tecnología de vanguardia como Starlink. Te
                invitamos a explorar nuestro catálogo de herramientas y equipos
                disponibles para todos tus proyectos. Siempre estamos
                comprometidos a encontrar una solución a tus requerimientos.
              </p>
              <p className="lg:text-[1.1rem] text-[0.9rem] font-semibold mb-2">
                Manejamos marcas reconocidas como Bosch, Dewalt, Makita, Truper,
                Milwaukee, Ingersoll Rand, Sullivan Palatek, Stanley, Craftsman,
                entre otras.
              </p>
              <a
                href="/renta-equipos"
                className="underline text-[#222D72] lg:text-[1.1rem] text-[0.9rem] font-semibold"
              >
                Mira nuestro catalogo de equipos en renta.
              </a>
            </div>
          </div>

          {/* Venta de maquinaria */}
          <div className="flex flex-col-reverse w-full items-start lg:flex-row-reverse lg:gap-0 gap-4 bg-white lg:py-[2.5rem] py-[1rem] px-[1rem] lg:px-[2.5rem]">
            <div className="lg:w-[50%] w-full  lg:pl-[3rem]">
              <img
                loading="lazy"
                src={ventaMaquinaria}
                alt="Venta de maquinaria"
                className=" shadow-md w-full  lg:h-[60vh]"
              />
            </div>
            <div className="lg:w-[50%] w-full">
              <h1 className="lg:text-[1.6rem] text-[1.4rem] font-bold mb-2">
                Venta de Herramientas
              </h1>
              <p className="lg:text-[1.1rem] text-[0.9rem] font-semibold mb-2">
                Si buscas adquirir herramientas nuevas o usadas estas en el
                mejor lugar, En RentameCarmen tenemos la opción de que puedan
                adquirir herramientas usadas a un excelente precio a su vez
                puedes encontrar herramientas nuevas en un precio competitivo.
              </p>
              <p className="lg:text-[1.1rem] text-[0.9rem] font-semibold mb-2">
                Te podemos suministrar desde un taladro hasta una maquinaria
                pesada o los accesorios que requieras, Nos especializamos en
                ofrecerte en bases a tus requerimientos lo mas conveniente.
              </p>
              <a
                href="/venta-equipos"
                className="underline text-[#222D72] lg:text-[1.1rem] text-[0.9rem] font-semibold"
              >
                Mira nuestro catalogo de equipos en venta.
              </a>
            </div>
          </div>

          {/* Reparación de equipos */}
          <div className="flex lg:flex-row flex-col-reverse w-full items-start lg:gap-0 gap-4 bg-white lg:py-[2.5rem] py-[1rem] px-[1rem] lg:px-[2.5rem]">
            <div className="lg:w-[50%] w-full lg:pr-[3rem] ">
              <img
                loading="lazy"
                src={reparacionMaquinaria}
                alt="Reparación de equipos"
                className=" shadow-md w-full lg:h-[60vh]"
              />
            </div>
            <div className="lg:w-[50%] w-full">
              <h1 className="lg:text-[1.6rem] text-[1.4rem] font-bold mb-2">Centro de Servicio</h1>
              <p className="lg:text-[1.1rem] text-[0.9rem] font-semibold mb-2">
                Contamos con un centro de servicio especializado en las marcas
                más reconocidas del mercado, asegurando que los mantenimientos
                de nuestros equipos y las reparaciones de las herramientas de
                nuestros clientes se realicen de manera oportuna y eficiente.
                Mantenemos un stock de refacciones para garantizar este
                servicio.
              </p>
              <p className="lg:text-[1.1rem] text-[0.9rem] font-semibold mb-2">
                Para que tu proyecto no se detenga mientras reparamos tus
                herramientas, ofrecemos la opción de renta durante el período de
                reparación. Además, si tienes herramientas que ya no planeas
                reparar, estamos interesados en comprarlas.
              </p>
              <p className="lg:text-[1.1rem] text-[0.9rem] font-semibold mb-2">
                Contamos no solo con refacciones nuevas, sino también con un
                deshuesadero de maquinaria y equipos en general, lo que te
                permite elegir entre refacciones nuevas o usadas. Acércate a
                nosotros para descubrir cómo podemos ofrecerte soluciones a tus
                necesidades y requerimientos.
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
