import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import about from "../images/about.jpg";
import icon from "../images/rentame_icon.png";
export default function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.title = "Sobre Nosotros | RentameCarmen";
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
        <title>Sobre Nosotros - Rentame Carmen</title>
        <link
          rel="canonical"
          href="https://www.rentamecarmen.com.mx/about_us"
        />
      </Helmet>

      <div className="w-full flex flex-col relative items-center">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="w-full flex z-0 justify-center items-center h-[60vh]">
          <img
            loading="lazy"
            className="h-[60vh] object-cover object-top w-full relative"
            src={about}
            alt=""
          />
          <div className="w-full h-[60vh] opacity-60 bg-black absolute"></div>
          <div className="absolute z-40 w-full h-[60vh] flex justify-center items-center text-white flex-col text-center px-[15%]">
            <h1 className="text-4xl font-bold relative">Sobre Nosotros</h1>
            <p className="mt-4 text-lg relative">
              Conoce Quiénes Somos y Cómo Trabajamos.
            </p>
          </div>
        </div>
        <div className="w-full  bg-gray-50">
          {/* Sección de Introducción */}

          <section className="lg:py-[4rem] py-[2rem] w-full">
            <div className="w-full lg:px-[4rem] px-[1rem]">
              <p className="lg:text-3xl text-[1.5rem] font-semibold text-blue-900">
                RentameCarmen.com.mx: Impulsando Oficios y Emprendimientos.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                <a
                  href="https://www.rentamecarmen.com.mx"
                  className="text-blue-600 font-bold hover:underline"
                >
                  Rentamecarmen.com.mx
                </a>{" "}
                surgió para cubrir la necesidad de un espacio en Ciudad del
                Carmen donde profesionales y emprendedores de diversos oficios
                puedan acceder a las herramientas necesarias para satisfacer las
                demandas de sus clientes. Nuestro compromiso es facilitarte
                equipos de alta calidad que impulsen tus proyectos y
                emprendimientos al éxito.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                Ya sea que busques herramientas para construcción, jardinería,
                carpintería, o cualquier otro sector, estamos aquí para
                proporcionarte las soluciones que necesitas para llevar tu
                trabajo al siguiente nivel.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                Con el tiempo, nació{" "}
                <a href="" className="hover:underline text-[#2563EB] font-bold">
                  RM CENTRO DE SERVICIO
                </a>
                , un proyecto que surgió cuando el fundador de{" "}
                <span className="font-bold">RentameCarmen</span> necesitó un
                técnico de confianza para el mantenimiento de sus equipos. Al no
                encontrar un mecánico de maquinaria honesto y formal, decidió
                crear su propio centro de servicio, tanto para sus equipos como
                para los del público en general. Este centro es supervisado
                personalmente por él y su esposa, asegurando que los mecánicos
                estén capacitados y que las operaciones se rijan por la
                formalidad y la honestidad.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                En{" "}
                <a className="hover:underline text-[#2563EB] font-bold" href="">
                  RM Centro de Servicio
                </a>
                , nuestras reglas son claras: no solicitamos anticipos en
                reparaciones ni refacciones. Solo cobramos una vez que el equipo
                está listo y el cliente está satisfecho. Además, entregamos
                todas las refacciones dañadas del equipo, o el trabajo es
                completamente gratis.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                Nos especializamos en la renta, venta y reparación de equipos
                para diversas áreas, incluyendo construcción, jardinería,
                carpintería, soldadura, aluminio, pintura, fumigación y
                tecnología. Si no encuentras lo que buscas en nuestro catálogo,
                contáctanos; seguramente encontraremos la solución perfecta para
                ti.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                Nos dedicamos a proporcionar soluciones en arrendamiento y
                reparación de maquinaria eléctrica y de combustión, asegurando
                que nuestros clientes siempre cuenten con equipos de calidad
                para cada proyecto. Ofrecemos una extensa variedad de
                herramientas y refacciones a tu disposición. Si necesitas algo
                específico, no dudes en comunicarte con nosotros.
              </p>
              <div>
                <p className="mt-4 text-lg text-gray-900 font-bold">
                  Horarios de Atención:
                </p>
                <ul className="mt-2 text-gray-700 list-disc list-inside space-y-1">
                  <li>Lunes a Viernes: 9:00 AM - 7:00 PM</li>
                  <li>Sábado: 9:00 AM - 3:00 PM</li>
                  <li>Domingo: Cerrado</li>
                </ul>
              </div>
              <p className="mt-4 text-lg text-gray-700">
                Estamos aquí para ofrecerte soluciones integrales y confiables
                para todas tus necesidades de equipos y maquinaria.
              </p>
            </div>
          </section>
          {/* Sección de Valores */}
          <section className="py-[2rem] bg-gray-100">
            <div className="max-w-7xl mx-auto text-center">
              <div className="lg:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-12">
                <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                  <h3 className="text-xl font-bold text-blue-800">
                    Nuestra Misión
                  </h3>
                  <p className="mt-4 text-gray-600">
                    Nuestra misión es ser el socio de confianza para
                    profesionales y emprendedores, ofreciéndoles soluciones
                    integrales y personalizadas para sus necesidades de
                    maquinaria.
                  </p>
                </div>

                <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                  <h3 className="text-xl font-bold text-blue-800">
                    Compromiso en Renta
                  </h3>
                  <ul className="mt-2 text-gray-700 list-disc list-inside text-start space-y-1">
                    <li>
                      <span className="font-bold">
                        Disponibilidad y Variedad:
                      </span>{" "}
                      Te ofrecemos una amplia selección de herramientas y
                      maquinaria para satisfacer las diversas necesidades de tu
                      industria o proyecto personal.
                    </li>
                    <li>
                      <span className="font-bold">Flexibilidad:</span> Adaptamos
                      nuestros términos de alquiler para que se ajusten a tus
                      requerimientos específicos, ya sea para proyectos a corto
                      o largo plazo.
                    </li>
                    <li>
                      <span className="font-bold">Calidad:</span> Mantenemos
                      nuestros equipos en condiciones óptimas, realizando
                      inspecciones y mantenimientos regulares para garantizar su
                      funcionamiento impecable.
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                  <h3 className="text-xl font-bold text-blue-800">
                    Compromiso en Reparación
                  </h3>
                  <ul className="mt-2 text-gray-700 list-disc list-inside text-start space-y-1">
                    <li>
                      <span className="font-bold">Profesionalismo:</span>{" "}
                      Nuestro equipo de técnicos capacitados está listo para
                      diagnosticar y reparar tus equipos con precisión y
                      cuidado.
                    </li>
                    <li>
                      <span className="font-bold">Transparencia:</span> No
                      solicitamos anticipos para reparaciones ni refacciones.
                      Solo cobramos cuando el trabajo está completado y el
                      cliente está satisfecho.
                    </li>
                    <li>
                      <span className="font-bold">Garantía de Servicio:</span>{" "}
                      Entregamos todas las refacciones dañadas de tu equipo o,
                      de lo contrario, el trabajo es completamente gratis,
                      asegurando así tu tranquilidad y confianza en nuestro
                      servicio.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-8 px-2 lg:px-0 bg-[#28a745] text-white text-center">
            <h2 className="text-2xl font-semibold">¿Te gustaría saber más?</h2>
            <p className="mt-4 text-lg">
              Contáctanos y descubre cómo podemos ayudarte con nuestras
              soluciones de maquinaria.
            </p>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
