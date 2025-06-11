import React, { useEffect, useRef, useState } from "react";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CarouselProductos() {
 
  const [all_products, setAll_products] = useState([]);

  async function get_all_products() {
    try {
      const { data } = await axios.get(
        "https://backrecordatoriorenta-production.up.railway.app/api/products/"
      );
      setAll_products(data.response);
    } catch (error) {
      console.error("Error fetching image data:", error);
    }
  }

  useEffect(() => {
    get_all_products();
  }, []);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1279 }, items: 5 },
    laptop: { breakpoint: { max: 1279, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1023, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 463, min: 0 }, items: 1 },
  };

  return (
    <div className="w-full lg:h-[90vh] h-auto bg-white flex flex-col rounded-xl gap-6 py-8 px-[0.5rem] lg:px-[2rem]">
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-2 text-center justify-between items-center space-x-4">
        <p className="lg:text-[1.5rem] text-[1.2rem] px-2 text-gray-600 font-semibold montserrat">
          Renta de Equipos para cada desafío
        </p>
      </div>

      <CarouselMulti
        responsive={responsive}
        className="z-10"
        infinite={true}
        autoPlaySpeed={2500}
        itemClass="lg:px-2 flex justify-center items-center"
        autoPlay={true}
        loop={true}
      >
        {all_products?.map((product, index) => (
          <a key={index} href={`/detalle-producto?id=${product._id}`}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-between p-4 min-w-[250px] max-w-[250px] h-[370px] relative">
              <img
                loading="lazy"
                src={product.foto}
                alt={product.nombre}
                className="w-full h-[150px] object-contain mb-4 bg-white rounded"
              />
              <h3 className="font-semibold text-gray-700 text-[0.9rem] text-center truncate w-full">
                {product.nombre.toUpperCase()}
              </h3>
              {/* Estado de disponibilidad */}
              {product.stock === 0 && (
                <p className="text-center text-[#D9534F] font-semibold rounded-[5px] text-[0.95rem] mt-1">
                  Rentado
                </p>
              )}
              {product.stock > 0 && (
                <p className="text-center text-[#28A745] font-semibold rounded-[5px] text-[0.95rem] mt-1">
                  Disponible
                </p>
              )}
              {/* Precio de renta por día */}
              {(() => {
                const precioNum = Number(product.precio_renta);
                if (!isNaN(precioNum) && precioNum > 0) {
                  return (
                    <p className="text-center text-[#323B75] font-bold text-[1rem] mt-1">
                      ${product.precio_renta} <span className="font-normal text-gray-600 text-sm">MXN/día</span>
                    </p>
                  );
                } else {
                  return (
                    <p className="text-center text-gray-500 font-semibold text-[0.95rem] mt-1">
                      Consultar precio
                    </p>
                  );
                }
              })()}
              <p className="mt-2 bg-[#323B75] text-white px-4 py-2 rounded-lg text-sm font-semibold text-center w-full">
                Ver equipo
              </p>
            </div>
          </a>
        ))}
      </CarouselMulti>
    </div>
  );
}
