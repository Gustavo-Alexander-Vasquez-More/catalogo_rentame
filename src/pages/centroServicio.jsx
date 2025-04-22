import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import taller from "../images/reparacionEquipos.jpg";
import rmVideo from "../images/rmvideo.mp4";
import centroImagen2 from "../images/centroBaner.jpg";
import { PlayCircle, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet";
import whatsapp from "../images/whatsapp.png";
import icon from "../images/rentame_icon.png";
export default function centroServicio() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    document.title = "Centro de Servicio | RentameCarmen";
    // Encontrar el link con rel="icon" y cambiar su href
    const favicon = document.querySelector("link[rel='icon']");

    // Si el favicon existe, cambiamos el href
    if (favicon) {
      favicon.href = icon; // Actualizamos el favicon con la nueva imagen
    }
  }, []);
  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Centro de Servicio | RentameCarmen</title>
        <link
          rel="canonical"
          href="https://www.rentamecarmen.com.mx/centro_servicio"
        />
        <link rel="preload" as="image" href={centroImagen2} />
      </Helmet>
      <div className="w-full min-h-screen relative flex flex-col">
        <a
          href="https://wa.link/gpu01d"
          target="_blank"
          className="fixed lg:top-[82%] top-[87%] right-5 z-50 shadow-xl bg-[#ffffff3d] rounded-full"
        >
          <img className="lg:w-[6rem] w-[4.5rem]" src={whatsapp} alt="sds" />
        </a>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* Hero */}
        <div className="w-full flex z-0 justify-center items-center h-[60vh]">
          <img
            src={centroImagen2}
            alt=""
            onLoad={() => setImageLoaded(true)}
            className={`h-[60vh] object-cover object-top w-full relative transition-opacity duration-1000 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="w-full h-[60vh] opacity-60 bg-black absolute"></div>
          <div className="absolute z-40 w-full h-[60vh] flex justify-center items-center text-white flex-col text-center px-[15%]">
            <h1 className="lg:text-[2.5rem] text-[2rem] font-bold">
              Taller Especializado en Mantenimiento y Reparación.
            </h1>
          </div>
        </div>

        {/* Texto descriptivo WEB largo*/}
        <div className="w-full flex flex-col py-10 px-[1rem] lg:px-[4rem] text-gray-700">
          <p className="lg:text-3xl text-[1.5rem] font-semibold text-blue-900">
            <span className="text-red-700 font-bold">
              RM Centro de Servicio:
            </span>{" "}
            Soluciones Técnicas que Mantienen tu Negocio en Marcha.
          </p>
          <section className="w-full  lg:py-12 bg-white">
            <div className="bg-gray-100 rounded-2xl p-8 shadow-lg flex flex-col lg:flex-row gap-8 items-start justify-center">
              <div className="lg:w-1/2 w-full flex justify-center">
                <img
                  src={taller}
                  alt="Taller de reparación"
                  className=" shadow-xl  lg:h-[350px] object-cover "
                  loading="lazy"
                />
              </div>
              <div className="lg:w-[90%] w-full text-gray-700">
                <p className="text-lg">
                  En{" "}
                  <span className="text-red-700 font-bold">
                    RM CENTRO DE SERVICIO
                  </span>{" "}
                  nos especializamos en la reparación, mantenimiento y
                  renovación de herramientas eléctricas y de combustión.
                </p>

                <p className="mt-4 text-lg">
                  Ubicados en{" "}
                  <span className="font-bold">Ciudad del Carmen</span>,{" "}
                  <span className="font-bold">Campeche</span>, contamos con
                  técnicos altamente capacitados para mantener tu maquinaria
                  ligera en óptimas condiciones, ya sea para la construcción u
                  otros oficios.
                </p>

                <p className="mt-4 text-lg">
                  Ofrecemos servicio con altos estándares de calidad, un amplio
                  surtido de refacciones nuevas y usadas, y atención rápida y
                  eficaz.
                </p>

                <p className="mt-4 text-lg">
                  Además, para evitar tiempos muertos, te ofrecemos la opción de
                  rentar la misma herramienta que traigas a nuestro taller,
                  asegurando que tu trabajo nunca se detenga.
                </p>
              </div>
            </div>
          </section>
        </div>
        <section className="w-full px-[1rem] lg:px-[4rem] lg:pb-12 bg-white">
          <div className="bg-gray-100 rounded-2xl p-8 shadow-lg flex flex-col lg:flex-row gap-8 items-start justify-center">
            {/* Texto de servicios */}
            <div className="lg:w-1/2 w-full text-gray-700 lg:px-[0rem] px-[1rem]">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                Nuestros Servicios
              </h2>
              <ul className="list-disc text-lg lg:pl-5 space-y-2">
                <li>Reparaciones.</li>
                <li>Mantenimiento Preventivo y Correctivo.</li>
                <li>Renovación de Equipos.</li>
                <li>
                  Refacciones para reparaciones dentro de nuestro centro de
                  servicio.
                </li>
                <li>Póliza de Servicio.</li>
                <li>Renta de equipos y maquinaria en general.</li>
              </ul>
            </div>

            {/* Imagen decorativa */}
            <div className="h-[350px] relative">
              <video
                ref={videoRef}
                src={rmVideo}
                className="w-full h-[350px]"
                controls={isPlaying}
                onPause={() => setIsPlaying(false)}
              />

              {!isPlaying && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <PlayCircle className="text-white w-20 h-20" />
                </button>
              )}
            </div>
          </div>
        </section>
        <section className="py-12 px-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <MessageCircle className="mx-auto h-10 w-10 mb-4 text-white animate-bounce" />
            <h2 className="text-3xl font-bold">¿Te gustaría saber más?</h2>
            <p className="mt-4 text-lg">
              Contáctanos y descubre cómo podemos ayudarte con nuestras
              soluciones de maquinaria.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
              <a href="https://wa.link/gpu01d">Contáctanos</a>
            </button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
