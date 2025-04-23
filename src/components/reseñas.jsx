import React from "react";
import { Star } from "lucide-react";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reseñas_api from "../reseñas.js";

export default function Reseñas() {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1279 }, items: 3 },
    laptop: { breakpoint: { max: 1279, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1023, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 463, min: 0 }, items: 1 },
  };

  const reseñas_map = Array.isArray(reseñas_api) ? reseñas_api : [];

  return (
    <section className="w-full bg-white rounded-xl py-5 lg:py-16 px-4 lg:px-20">
      <div className="text-center mb-2 lg:mb-10">
        <h2 className="text-2xl lg:text-4xl font-semibold text-gray-800">Lo que nuestros clientes dicen</h2>
        <p className="lg:text-lg text-gray-500 mt-2">Tu satisfacción, nuestra mejor recomendación</p>
      </div>

      <CarouselMulti
        responsive={responsive}
        autoPlay
        infinite
        arrows={true}
        autoPlaySpeed={5000}
        className="z-10"
      >
        {reseñas_map.map((dat, index) => (
          <a
            key={index}
            href={dat.url_opinion}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4"
          >
            <div className="bg-[#ECEFF1] rounded-lg p-4 flex flex-col justify-between h-full transition-all duration-300 mx-2"> {/* Añadido mx-2 para margen horizontal */}
              {/* Usuario */}
              <div className="flex items-center gap-3">
                <img
                  loading="lazy"
                  src={dat.url}
                  alt={dat.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <p className="font-semibold text-gray-800 lg:text-lg">{dat.name}</p>
                  {dat.tipo && <span className="text-sm text-gray-500">{dat.tipo}</span>}
                </div>
              </div>

              {/* Estrellas */}
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={1} />
                ))}
              </div>

              {/* Mensaje */}
              <p className="text-sm text-gray-700 mb-5">{dat.message}</p>
            </div>
          </a>
        ))}
      </CarouselMulti>

      <div className="text-center mt-10">
        <a
          target="_blank"
          href="https://search.google.com/local/writereview?placeid=ChIJUSFC42up8YURtPF2RUOE55o"
          className="text-blue-600 font-semibold lg:text-lg underline hover:text-blue-700"
        >
          ¿Ya nos visitaste? Déjanos tu reseña aquí
        </a>
      </div>
    </section>
  );
}
