import React, { useEffect } from "react";
import star from "../images/star.png";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reseñas_api from "../reseñas.js";
export default function reseñas() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1279 },
      items: 4,
    },
    laptop: {
      breakpoint: { max: 1279, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 463, min: 0 },
      items: 1,
    },
  };
  const reseñas_map = Array.isArray(reseñas_api)
    ? reseñas_api.map((dat) => dat)
    : [];

  return (
    <div className="w-full h-auto bg-[#E5E7EB] flex flex-col gap-6 py-8 px-4 lg:px-20">
      <div className="text-center">
        <h2 className="text-[1.5rem] lg:text-[2rem] font-bold text-gray-800 montserrat">
          Opiniones de nuestros clientes
        </h2>
        <p className="text-[1rem] lg:text-[1.2rem] text-gray-600 font-medium">
          En RentameCarmen, tu satisfacción es nuestra mejor recomendación
        </p>
      </div>

      <CarouselMulti
        responsive={responsive}
        autoPlay
        infinite
        arrows={false}
        autoPlaySpeed={4000}
        className="z-10"
      >
        {reseñas_map.map((dat, index) => (
          <a
            key={index}
            href={dat.url_opinion}
            target="_blank"
            rel="noopener noreferrer"
            className="text-start"
          >
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 lg:w-[320px] min-h-[180px] flex flex-col justify-between">
              {/* Header: Foto + Nombre */}
              <div className="flex items-center gap-3">
                <img
                  loading="lazy"
                  src={dat.url}
                  alt={dat.name}
                  className="w-9 h-9 rounded-full object-cover border"
                />
                <div>
                  <p className="font-semibold text-[0.85rem]">{dat.name}</p>
                  {dat.tipo === "Local Guide" && (
                    <p className="text-[0.75rem] text-gray-500">{dat.tipo}</p>
                  )}
                </div>
              </div>

              {/* Estrellas */}
              <div className="flex gap-[2px] mt-1">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={star}
                    alt={`Estrella ${i + 1}`}
                    className="w-4 h-4"
                  />
                ))}
              </div>

              {/* Reseña */}
              <p className="text-[0.85rem] text-gray-700 mt-2 line-clamp-4 leading-snug">
                {dat.message}
              </p>
            </div>
          </a>
        ))}
      </CarouselMulti>

      <div className="text-center">
        <a
          target="_blank"
          href="https://search.google.com/local/writereview?placeid=ChIJUSFC42up8YURtPF2RUOE55o"
          className="inline-block mt-4 underline text-blue-800 font-semibold text-[1rem] hover:underline hover:text-blue-900 transition-colors duration-200"
        >
          Comparte tu opinión sobre nuestro servicio en Google Reviews.
        </a>
      </div>
    </div>
  );
}
