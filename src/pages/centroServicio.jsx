import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import taller from "../images/reparacionEquipos.jpg";
import centroImagen from "../images/centroIMAGEN.jpg";
import centroImagen2 from "../images/centroBaner.jpg";
import { Helmet } from "react-helmet";
import whatsapp from "../images/whatsapp.png";
import icon from "../images/rentame_icon.png";
export default function centroServicio() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    document.title = "Centro de Servicio | RentameCarmen";
    // Encontrar el link con rel="icon" y cambiar su href
    const favicon = document.querySelector("link[rel='icon']");

    // Si el favicon existe, cambiamos el href
    if (favicon) {
      favicon.href = icon; // Actualizamos el favicon con la nueva imagen
    }
  }, []);
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
      <a href="https://wa.link/gpu01d" target="_blank" className="fixed lg:top-[82%] top-[87%] right-5 z-50 shadow-xl bg-[#ffffff3d] rounded-full"><img className="lg:w-[6rem] w-[4.5rem]" src={whatsapp} alt="sds" /></a>
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
      {/* Texto descriptivo MOBILE corto*/}
      <div className="w-full flex lg:hidden flex-col py-10 px-[1rem] lg:px-[4rem] text-gray-700">
  <p className="lg:text-3xl text-[1.5rem] font-semibold text-blue-900">
    <span className="text-red-700 font-bold">RM Centro de Servicio:</span> Soluciones Técnicas para tu Negocio
  </p>

  <p className="text-base lg:text-lg mt-5">
    En <span className="font-bold text-red-700">RM CENTRO DE SERVICIO</span> reparamos, mantenemos y renovamos herramientas eléctricas y de combustión.
  </p>

  <p className="mt-4 text-base lg:text-lg">
    Estamos en Ciudad del Carmen, con técnicos capacitados listos para ayudarte con maquinaria ligera de construcción y diversos oficios.
  </p>

  <p className="mt-4 text-base lg:text-lg">
    Manten tus equipos en óptimas condiciones, los dejamos como nuevos.
  </p>

  <p className="mt-4 text-base lg:text-lg">
    Contamos con refacciones para una atención rápida y eficaz.
  </p>

  <p className="mt-4 text-base lg:text-lg">
    Y si nos traes tu equipo a reparar, puedes rentar uno igual con nosotros para que tu trabajo no se detenga.
  </p>
</div>

      {/* Texto descriptivo WEB largo*/}
      <div className="w-full lg:flex hidden flex-col py-10 px-[1rem] lg:px-[4rem] text-gray-700">
        <p className="lg:text-3xl text-[1.5rem] font-semibold text-blue-900">
          <span  className="text-red-700 font-bold">RM Centro de Servicio:</span> Soluciones Técnicas que Mantienen tu Negocio en
          Marcha.
        </p>
        <p className="text-lg mt-5">
          En <span className="text-red-700 font-bold">RM CENTRO DE SERVICIO</span>
          , nos especializamos en la reparación, mantenimiento y renovación de
          herramientas eléctricas y de combustión.
        </p>

        <p className="mt-4 text-lg">
        Ubicados en Ciudad del Carmen, Campeche, proporcionamos todo lo necesario para garantizar que tus equipos se mantengan en condiciones óptimas. Nuestro equipo de técnicos altamente capacitados están a tu disposición para asesorarte y resolver cualquier inconveniente que pueda surgir con tu maquinaria ligera, ya sea para la construcción u otros oficios.
        </p>
        <p className="mt-4 text-lg">
        Confía en nosotros para mantener tus herramientas en un estado excelente y asegurarte de que tus equipos estén siempre listos para cualquier proyecto que se presente. En nuestro taller, puedes reparar y dar mantenimiento a una amplia gama de equipos de combustión y eléctricos, Con los mejores estándares de calidad.
        </p>

        <p className="mt-4 text-lg">
        Contamos con un extenso surtido de refacciones nuevas y usadas para ofrecerte una atención y reparación rápidas y eficaces
        </p>

        <p className="mt-4 text-lg">
          Además, para que tu trabajo no se detenga, te ofrecemos la opción de
          renta de la misma herramienta que nos traigas a nuestro centro de
          servicio, reduciendo a cero los tiempos perdidos y manteniendo tu
          empresa operando al 100%.
        </p>
      </div>
      <section className="w-full px-[1rem] lg:px-[4rem] lg:py-12 bg-white">
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
          <div className=" ">
            <img
              src={centroImagen}
              alt="Servicios de mantenimiento y reparación"
              className="rounded-xl shadow-xl w-full lg:h-[350px] object-contain object-center"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Imagen del taller profesional */}
      <section className="w-full px-[1rem] lg:px-[4rem] pb-16 mt-[2rem] lg:mt-0">
        <div className="bg-[#F3F4F6] rounded-2xl p-8 shadow-lg flex flex-col lg:flex-row gap-8 items-start justify-center">
          <div className="lg:w-1/2 w-full flex justify-center">
            <img
              src={taller}
              alt="Taller de reparación"
              className="rounded-xl shadow-xl w-full lg:w-[60%] lg:h-auto h-[350px] object-cover "
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2 w-full text-gray-700">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              Nuestro taller
            </h2>
            <p className="text-lg">
              Contamos con instalaciones completamente equipadas para brindar un
              servicio de calidad y rapidez. Nuestro taller está diseñado para
              atender maquinaria eléctrica y de combustión con eficiencia y
              precisión.
            </p>
            <p className="text-lg mt-3">
              Visítanos y conoce cómo cuidamos de tus equipos en un entorno
              profesional.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
