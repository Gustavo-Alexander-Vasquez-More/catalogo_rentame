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
    <section className="w-full bg-gray-100 py-16 px-4 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Opiniones de nuestros clientes</h2>
        <p className="text-lg text-gray-600 mt-2">Tu satisfacción es nuestra prioridad</p>
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
            className="px-2"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full transition-all hover:shadow-2xl duration-300">
              {/* Usuario */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  loading="lazy"
                  src={dat.url}
                  alt={dat.name}
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div>
                  <p className="font-semibold text-gray-800">{dat.name}</p>
                  {dat.tipo && <span className="text-sm text-gray-500">{dat.tipo}</span>}
                </div>
              </div>

              {/* Estrellas */}
              <div className="flex items-center gap-1 text-yellow-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={1} />
                ))}
              </div>

              {/* Mensaje */}
              <p className="text-sm text-gray-700 line-clamp-4">{dat.message}</p>
            </div>
          </a>
        ))}
      </CarouselMulti>

      <div className="text-center mt-10">
        <a
          target="_blank"
          href="https://search.google.com/local/writereview?placeid=ChIJUSFC42up8YURtPF2RUOE55o"
          className="text-red-700 font-semibold text-lg underline hover:text-red-800"
        >
          ¿Ya nos visitaste? Déjanos tu reseña aquí
        </a>
      </div>
    </section>
  );
}
