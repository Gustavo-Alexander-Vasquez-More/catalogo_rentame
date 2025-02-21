import { useState, useEffect } from "react";
import "../carrousel.css";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import img1 from "../images/refacciones/01.jpg";
import img2 from "../images/refacciones/02.jpg";
import img3 from "../images/refacciones/03.jpg";
import img4 from "../images/refacciones/04.jpg";
import img5 from "../images/refacciones/05.jpg";
import img6 from "../images/refacciones/06.jpg";
import img7 from "../images/refacciones/07.jpg";
import img8 from "../images/refacciones/08.jpg";
import img9 from "../images/refacciones/09.jpg";
import img10 from "../images/refacciones/10.jpg";
import Footer from "../components/footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import banner from '../images/banners/refacciones.jpg'
function RefaccionesPage() {
  const [isOpen, setIsOpen] = useState(false);
  // Definir las imágenes
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  console.log(images);
  const responsive = {
    superLargeDesktop: {
      // Desktops grandes
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      // Desktops
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      // Tablets
      breakpoint: { max: 768, min: 480 },
      items: 1,
    },
    mobile: {
      // Móviles
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Refacciones | Rentame Carmen</title>
        <link
          rel="canonical"
          href={`https://www.rentamecarmen.com.mx/refacciones`}
        />
      </Helmet>
      <div className="bg-[#323B75] min-h-screen">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Título y descripción */}
        <section
          className={`relative flex justify-center flex-col h-auto text-white px-4 lg:px-2 py-4 text-center bg-no-repeat bg-cover bg-bottom transition-all duration-500 ${
            isOpen ? "mt-[20px]" : "mt-0" // Animación para mover el main hacia abajo con duración de 500ms
          }`}
          style={{
            backgroundImage: `url(${banner})`, // Asegúrate de poner `url()` correctamente
          }}
        >
          {/* Overlay para oscurecer el fondo */}
          <div className="absolute inset-0"></div>

          {/* Contenido con mejor contraste */}
          <div className="relative z-10 ">
            <h1 className="text-3xl lg:text-5xl font-bold mb-3">Refacciones</h1>
            <p className="text-[0.8rem] lg:text-[1.1rem]  lg:px-[7rem]">
              Contamos con un extenso surtido en refacciones para sus máquinas
              eléctricas y a gasolina como son: Motobombas, Desbrozadoras,
              Podadoras, Compresores de Aire, Cortasetos y más!
              <br />
              <br />
              Tenemos las refacciones para tus equipos eléctricos y a gasolina
              como son: Carburadores, Diafragmas, Cebadores, Filtros, Mangueras,
              Conexiones, Chicotes, Llaves de paso, Empaques, Pistones, Anillos
              y muchas refacciones más.
              <br />
              <br />
              Llama y cotiza con nosotros la refacción requerida para tu equipo.
            </p>
          </div>
        </section>

        {/* Carrusel con react-multi-carousel */}
        <section className="py-[5rem] px-4 lg:px-32 bg-[#EFEEEE]">
          <Carousel
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={3000}
            transitionDuration={500}
            loop={true} // Asegura que el carrusel sea infinito
            keyBoardControl={true} // Agregado para controlar mejor el carrusel con las teclas
            rewind={true} // Esto asegura que el carrusel vuelva al inicio correctamente
            className="flex justify-center"
          >
            {images.map((image, index) => (
              <div key={index + 1} className="px-2">
                <img
                  src={image}
                  alt={`Refacción ${index + 1}`}
                  className="w-full h-auto object-cover rounded-md carousel-image"
                />
              </div>
            ))}
          </Carousel>
        </section>

        {/* Contacto */}
        <section className="py-8 bg-[#28a745] text-white text-center">
          <h2 className="text-2xl font-semibold">¿Te gustaría saber más?</h2>
          <p className="mt-4 text-lg">
            Contáctanos y descubre cómo podemos ayudarte con nuestras soluciones
            de maquinaria.
          </p>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default RefaccionesPage;
