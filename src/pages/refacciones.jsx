import { useState, useEffect } from "react";
import {Helmet} from "react-helmet";
import Navbar from "../components/navbar";
import img1 from '../images/refacciones/IMG-20250217-WA0006.jpg';
import img2 from '../images/refacciones/IMG-20250217-WA0007.jpg';
import img3 from '../images/refacciones/IMG-20250217-WA0008.jpg';
import img4 from '../images/refacciones/IMG-20250217-WA0009.jpg';
import img5 from '../images/refacciones/IMG-20250217-WA0010.jpg';
import img6 from '../images/refacciones/IMG-20250217-WA0011.jpg';
import img7 from '../images/refacciones/IMG-20250217-WA0012.jpg';
import img8 from '../images/refacciones/IMG-20250217-WA0013.jpg';
import img9 from '../images/refacciones/IMG-20250217-WA0014.jpg';
import img10 from '../images/refacciones/IMG-20250217-WA0015.jpg';
import Footer from "../components/footer";

function RefaccionesPage() {
  // Estado para el carrusel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesPerSlide, setImagesPerSlide] = useState(1); // Número de imágenes por slide
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
  ];

  // Detectar el tamaño de la pantalla y ajustar las imágenes por slide
  useEffect(() => {
    const updateImagesPerSlide = () => {
      if (window.innerWidth >= 1024) { // lg
        setImagesPerSlide(5);
      } else if (window.innerWidth >= 768) { // md
        setImagesPerSlide(2);
      } else { // sm
        setImagesPerSlide(1);
      }
    };

    // Actualizar el número de imágenes por slide al cargar la página
    updateImagesPerSlide();

    // Escuchar cambios de tamaño de pantalla
    window.addEventListener("resize", updateImagesPerSlide);

    // Limpiar el evento al desmontar el componente
    return () => window.removeEventListener("resize", updateImagesPerSlide);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(images.length / imagesPerSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(images.length / imagesPerSlide)) % Math.ceil(images.length / imagesPerSlide));
  };

  // Función para dividir las imágenes en grupos dinámicos
  const getImagesForSlide = (index) => {
    const start = index * imagesPerSlide;
    const end = start + imagesPerSlide;
    return images.slice(start, end);
  };

  return (
    <>
    <Helmet>
          <meta charSet="utf-8" />
          <title>Refacciones | Rentame Carmen</title>
          <link rel="canonical" href={`https://www.rentamecarmen.com.mx/refacciones`} />
        </Helmet>
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      
      {/* Título y descripción */}
      <section className="bg-[#323B75] text-white px-4 lg:px-2  py-4 text-center">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Refacciones
        </h1>
        <p className="text-[0.8rem] lg:text-xl">
          Contamos con un extenso surtido en refacciones para sus máquinas
          eléctricas y a gasolina como son: Motobombas, Desbrozadoras, Podadoras,
          Compresores de Aire, Cortasetos y más!<br />
          Contamos con el refaccionamiento necesario para tus equipos eléctricos
          y carburados. Carburadores, Diafragmas, Cebadores, Filtros, Mangueras,
          Conexiones, Chicotes, Llaves de paso, Empaques, Pistones, Anillos y
          muchas refacciones más.<br />
          Llama y cotiza con nosotros la refacción requerida para tu equipo.
        </p>
      </section>

      {/* Carrusel de imágenes */}
      <section className="py-8 px-4 lg:px-32 bg-white">
        <div className="relative">
          {/* Imágenes del carrusel */}
          <div className="w-full h-[150px] md:h-[400px] lg:h-[280px] overflow-hidden rounded-md flex">
            {getImagesForSlide(currentSlide).map((image, index) => (
              <div key={index} className={`w-${12 / imagesPerSlide} flex-shrink-0 px-2`}>
                <img
                  src={image}
                  alt={`Refacción ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* Controles del carrusel */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-[#003366] rounded-full p-2 hover:bg-[#001f33]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-[#003366] rounded-full p-2 hover:bg-[#001f33]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          {/* Indicadores del carrusel */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {Array.from({ length: Math.ceil(images.length / imagesPerSlide) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-[#003366]" : "bg-gray-400"}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="bg-[#28a745] py-8 text-white text-center">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4">
          ¿Necesitas una refacción? ¡Llama y cotiza con nosotros!
        </h2>
        <a href="https://wa.link/w31sh7" target="_blank" className="mt-4 inline-block bg-[white] text-[#28a745] py-2 px-6 rounded-md hover:bg-[#28a745] hover:text-[white] transition duration-300">Contáctanos</a>
      </section>
      <Footer/>
    </div>
    </>
  );
}

export default RefaccionesPage;
