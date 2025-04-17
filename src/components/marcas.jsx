import React from 'react';
import vekcer from '../images/logos/vekcer-logo.png';
import husky from '../images/logos/husky-tools-logo.png';
import blackAndDecker from '../images/logos/black-decker-logo.png';
import dewalt from '../images/logos/dewalt-logo.png';
import bosh from '../images/logos/bosch-logo.png';
import craftsman from '../images/logos/craftsman-logo.png';
import stanley from '../images/logos/stanley-logo.png';
import makita from '../images/logos/makita-logo.png';
import truper from '../images/logos/truper-logo.png';
import milwaukee from '../images/logos/milwaukee-electric-tool-logo.png';
import CarouselMulti from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function marcas() {
    
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
  const marcas = [
    { nombre: 'Vekcer', logo: vekcer },
    { nombre: 'Husky', logo: husky },
    { nombre: 'Black & Decker', logo: blackAndDecker },
    { nombre: 'Bosh', logo: bosh },
    { nombre: 'Craftsman', logo: craftsman },
    { nombre: 'Stanley', logo: stanley },
    { nombre: 'Makita', logo: makita },
    { nombre: 'Truper', logo: truper },
    { nombre: 'Milwaukee', logo: milwaukee },
    { nombre: 'DeWalt', logo: dewalt },
  ];
  return (
    <div className="w-full bg-white rounded-4 px-4 py-6 text-center">
      <h2 className="font-bold text-[1.5rem] lg:text-[2rem] text-gray-600 mb-6">Trabajamos con las mejores marcas</h2>
      <CarouselMulti
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={2500}
        arrows={false}
        showDots={true}
        draggable
        swipeable
        containerClass="carousel-container"
        itemClass="px-4"
      >
        {marcas.map((marca, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              loading="lazy"
              src={marca.logo}
              alt={marca.nombre}
              className="lg:w-[7rem] w-[10rem] object-contain"
            />
          </div>
        ))}
      </CarouselMulti>
    </div>
  );
}
