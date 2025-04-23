import React, { useEffect, useRef, useState } from "react";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CarouselProductos() {
  const navigate = useNavigate();
  const [all_products, setAll_products] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const input_term = useRef();

  function captureTerm(e) {
    setSearchTerm(e.target.value);
  }

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

  function searchButton() {
    if (searchTerm.trim()) {
      window.location.href = `/renta-equipos?search=${searchTerm}`;
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      searchButton();
    }
  }

  return (
    <div className="w-full lg:h-[90vh] h-auto bg-white flex flex-col rounded-xl gap-6 py-8 px-[0.5rem] lg:px-[2rem]">
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-2 text-center justify-between items-center space-x-4">
        <p className="text-[1.5rem] text-gray-600 font-semibold montserrat">
          Renta de Equipos para cada desafío
        </p>
        <div className="flex items-center rounded-lg lg:px-3 py-2 w-full max-w-lg">
          <input
            ref={input_term}
            onChange={captureTerm}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="¿Qué estás buscando?"
            className="outline-none text-gray-700 placeholder:text-gray-600 bg-[#ebebeb] text-sm w-full focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] rounded-lg px-4 py-[0.5rem] lg:py-[0.7rem] shadow-md transition duration-200 ease-in-out"
          />
          <button
            onClick={searchButton}
            className="bg-[#1D4ED8] text-white px-4 py-2 rounded-lg ml-2 mr-4 lg:mr-0 hover:bg-[#1a3a91] transition-colors duration-300"
          >
            <Search className="w-5 h-5 lg:h-7" />
          </button>
        </div>
      </div>

      <CarouselMulti
        responsive={responsive}
        className="z-10"
        infinite={true}
        autoPlaySpeed={2500}
        itemClass="px-2"
        autoPlay={true}
        loop={true}
      >
        {all_products?.map((product, index) => (
          <a key={index} href={`/detalle-producto?id=${product._id}`}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-between p-4">
              <img
                loading="lazy"
                src={product.foto}
                alt={product.nombre}
                className="w-full h-[150px] object-contain mb-4"
              />
              <h3 className="font-semibold text-gray-700 text-[0.9rem] text-center truncate w-full">
                {product.nombre.toUpperCase()}
              </h3>
              <p className="mt-2 text-primary transition-colors duration-300 px-4 py-2 rounded-lg text-sm font-semibold">
                Ver equipo
              </p>
            </div>
          </a>
        ))}
      </CarouselMulti>
    </div>
  );
}
