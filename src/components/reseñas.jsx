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
    <div className="w-full  h-auto bg-[#E5E7EB] flex flex-col justify-between gap-4 lg:gap-0 py-[1rem] px-[1rem] lg:px-[4rem]">
      <div className="text-[1.3rem] lg:text-[1.8rem] text-gray-600 font-semibold montserrat ">
        <p>En RentameCarmen, la satisfacción de nuestros clientes es</p>
        <p>nuestra mejor recomendación.</p>
      </div>
      <CarouselMulti
        responsive={responsive}
        className="flex items-center z-10 "
        autoPlay
        infinite={true}
        arrows={false}
        autoPlaySpeed={3000}
      >
        {reseñas_map.map((dat, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={dat.url_opinion}
            className="text-start"
          >
            <div className="flex flex-col justify-between items-start lg:gap-2 shadow-xl bg-[white] lg:mx-3 py-4 px-3 lg:px-4 lg:w-[320px] h-[160px]  hover:shadow-2xl transition-all duration-300">
              {/* Header: Foto + Nombre */}
              <div className="flex w-full gap-2 items-center">
                <img
                  loading="lazy"
                  src={dat.url}
                  alt={dat.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex flex-col text-[0.7rem]">
                  <p className="font-semibold text-[0.8rem] montserrat">
                    {dat.name}
                  </p>
                  {dat.tipo === "Local Guide" && (
                    <p className="montserrat">{dat.tipo}</p>
                  )}
                </div>
              </div>

              {/* Estrellas */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <img
                    loading="lazy"
                    key={i}
                    className="w-[0.7rem] h-[0.7rem]"
                    src={star}
                    alt={`Star ${i + 1}`}
                  />
                ))}
              </div>

              {/* Reseña */}
              <div className="w-full text-[0.85rem] text-gray-700 leading-tight line-clamp-4 montserrat">
                {dat.message}
              </div>
            </div>
          </a>
        ))}
      </CarouselMulti>
      <a
        target="_blank"
        href="https://search.google.com/local/writereview?placeid=ChIJUSFC42up8YURtPF2RUOE55o"
        className="text-center underline text-blue-800 font-semibold text-[1.1rem]"
      >
        Déjanos tu reseña aquí ✅
      </a>
    </div>
  );
}
