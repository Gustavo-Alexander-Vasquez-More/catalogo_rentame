import React, { useEffect, useState } from "react";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
export default function carouselProductos() {
  const [all_products, setAll_products] = useState([]);
  console.log(all_products);
  async function get_all_products() {
    try {
      const { data } = await axios.get(
        "https://backrecordatoriorenta-production.up.railway.app/api/products/"
      );
      setAll_products(data.response);
    } catch (error) {
      console.error("Error fetching image data:", error);
      setLoading(false); // Si hay un error, dejamos de mostrar el estado de carga
    }
  }
  useEffect(() => {
    get_all_products();
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1279 },
      items: 5,
    },
    laptop: {
      breakpoint: { max: 1279, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 463, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full lg:h-[90vh] h-auto bg-white flex flex-col rounded-xl gap-6 py-8 px-4 lg:px-8">
      <div className="text-[1.8rem] text-gray-800 font-bold montserrat text-center">
        Equipos confiables para cada desafío
      </div>

      <CarouselMulti
        responsive={responsive}
        className="z-10"
        infinite={true}
        autoPlaySpeed={3000}
        itemClass="px-2"
      >
        {all_products?.map((product, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-between p-4"
          >
            <img
              loading="lazy"
              src={product.foto}
              alt={product.nombre}
              className="w-full h-[150px] object-contain mb-4"
            />

            <h3 className="font-semibold text-gray-700 text-[0.9rem] text-center truncate w-full">
              {product.nombre.toUpperCase()}
            </h3>

            <a
              href={`/detalle-producto?id=${product._id}`}
              className="mt-2 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 px-4 py-2 rounded-lg text-sm font-semibold shadow"
            >
              Ver equipo
            </a>
          </div>
        ))}
      </CarouselMulti>
    </div>
  );
}
