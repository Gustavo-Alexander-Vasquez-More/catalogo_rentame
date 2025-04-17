import React, { useEffect, useState } from 'react';
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
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
const responsive ={
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
}};

  return (
    <div className='w-full lg:h-[90vh] h-auto bg-[white] flex flex-col justify-between gap-4 lg:gap-0 py-[2rem] lg:py-[2rem] px-[1rem] lg:px-[2rem]'>
        <div className='text-[1.5rem] lg:text-[1.4rem] text-gray-600 font-semibold montserrat '>
            <p>Equipos confiables para cada desafío</p>
        </div>
        
        <CarouselMulti 
  responsive={responsive} 
  className="flex items-center z-10"
  infinite={true}
  autoPlaySpeed={3000}
>
  {all_products?.map((product, index) => (
    <div
    key={index}
    className="bg-white p-3  mx-2 flex flex-col items-center w-full  hover:shadow-2xl transition duration-300"
  >
    <img  loading="lazy"
      src={product.foto} 
      alt={product.nombre} 
      className="w-full h-[140px] object-contain mb-4"
    />
    
    <div className="flex items-center justify-center px-2 text-center w-full">
    <h3 className="font-semibold text-gray-700 text-[0.9rem] truncate w-full">
      {product.nombre.toUpperCase()}
    </h3>
  </div>
    
    <div className="">
      <a  href='' className="text-success font-semibold shadow-xl underline">
        Ver equipo
      </a>
    </div>
  </div>
  
  ))}
</CarouselMulti>



        
    </div>
  );
}
// API_KKEY=AIzaSyCJ1BOW_UGMTCbqO4VkVVbKK0WqotldVe8