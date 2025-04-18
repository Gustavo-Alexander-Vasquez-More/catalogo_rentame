import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import whatsapp from "../images/whatsapp.png";
import about from "../images/about.jpg";
import icon from "../images/rentame_icon.png";
import { Eye, Target, ShieldCheck, MessageCircle } from "lucide-react";
export default function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
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
        <title>Sobre Nosotros | RentameCarmen</title>
        <link
          rel="canonical"
          href="https://www.rentamecarmen.com.mx/about_us"
        />
        <link rel="preload" as="image" href={about} />
      </Helmet>

      <div className="w-full flex flex-col relative items-center">
         <a href="https://wa.link/gpu01d" target="_blank" className="fixed lg:top-[82%] top-[87%] right-5 z-50 shadow-xl bg-[#ffffff3d] rounded-full"><img className="lg:w-[6rem] w-[4.5rem]" src={whatsapp} alt="sds" /></a>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="w-full flex z-0 justify-center items-center h-[60vh]">
          <img
            src={about}
            alt=""
            onLoad={() => setImageLoaded(true)}
            className={`h-[60vh] object-cover object-top w-full relative transition-opacity duration-1000 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="w-full h-[60vh] opacity-60 bg-black absolute"></div>
          <div className="absolute z-40 w-full h-[60vh] flex justify-center items-center text-white flex-col text-center px-[15%]">
            <h1 className="lg:text-6xl text-5xl font-bold relative">
              Sobre Nosotros
            </h1>
            <p className="mt-4 text-lg relative">
              Conoce Quiénes Somos y Cómo Trabajamos.
            </p>
          </div>
        </div>
        <div className="w-full  bg-gray-50">
          {/* Sección de Introducción PARA MOBILE Texto corto*/}
          <section className="lg:py-[4rem] lg:hidden py-[2rem] w-full">
            <div className="w-full lg:px-[4rem] px-[1rem]">
              <p className="lg:text-3xl text-[1.5rem] font-semibold text-blue-900">
                RentameCarmen.com.mx: Impulsando Oficios y Emprendimientos
              </p>

              <p className="mt-4 text-base lg:text-lg text-gray-700">
                <span className="font-bold text-red-700">RentameCarmen</span>{" "}
                nació para facilitar herramientas y equipos a profesionales de
                Ciudad del Carmen en áreas como construcción, jardinería,
                carpintería y diversos oficios.
              </p>

              <p className="mt-4 text-base lg:text-lg text-gray-700">
                Creamos el{" "}
                <span className="font-bold text-red-700">
                  RM Centro de Servicio
                </span>{" "}
                ante la falta de técnicos confiables. Reparamos sin pedir
                anticipos y devolvemos refacciones dañadas como garantía.
              </p>

              <p className="mt-4 text-base lg:text-lg text-gray-700">
                Ofrecemos renta, venta y reparación de equipos eléctricos y de
                combustión. Si necesitas ayuda, ¡contáctanos!
              </p>

              <div>
                <p className="mt-4 text-base lg:text-lg text-gray-900 font-bold">
                  Horarios:
                </p>
                <ul className="mt-2 text-gray-700 list-disc list-inside space-y-1 text-base">
                  <li>Lun a Vie: 9:00 AM - 7:00 PM</li>
                  <li>Sáb: 9:00 AM - 3:00 PM</li>
                  <li>Domingo: Cerrado</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección de Introducción PARA WEB Texto largo*/}
          <section className="lg:py-[4rem] lg:flex hidden py-[2rem] w-full">
            <div className="w-full lg:px-[4rem] px-[1rem]">
              <p className="lg:text-3xl text-[1.5rem] font-semibold text-blue-900">
                RentameCarmen.com.mx: Impulsando Oficios y Emprendimientos.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                <span className="text-red-700 font-bold ">RentameCarmen</span>{" "}
                nació para cubrir la necesidad de un espacio en Ciudad del
                Carmen donde profesionales y emprendedores puedan acceder a
                herramientas y equipos de calidad que impulsen sus proyectos en
                áreas como construcción, jardinería, carpintería y diversos oficios.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                Con el tiempo, surgió{" "}
                <span className="text-red-700 font-bold ">
                  RM Centro de Servicio
                </span>
                , fundado ante la falta de técnicos confiables en la zona. Este
                centro, supervisado personalmente y por circuito cerrado, se
                rige por principios de formalidad y honestidad. No pedimos
                anticipos; cobramos solo cuando el equipo está reparado y
                entregamos todas las refacciones dañadas como garantía del
                trabajo.
              </p>

              <p className="mt-4 text-lg text-gray-700">
                Nos especializamos en la renta, venta y reparación de equipos
                eléctricos y de combustión, ofreciendo soluciones para múltiples
                oficios. Además, contamos con una amplia variedad de refacciones
                nuevas y usadas. Si no encuentras lo que necesitas, contáctanos:
                estamos comprometidos en ayudarte a encontrar la mejor solución
                para tu proyecto.
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
            </div>
          </section>
          {/* Sección de Valores */}
          <section className="py-[2rem] bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-7xl mx-auto text-center">
              <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-12">
                {/* Visión */}
                <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                  <Eye className="mx-auto mb-2 h-8 w-8 text-blue-800" />
                  <h3 className="text-xl font-bold text-blue-800">
                    Nuestra Visión
                  </h3>
                  <p className="mt-4 text-gray-600 text-start">
                    Ser el referente en soluciones integrales de maquinaria,
                    proporcionando herramientas de calidad y un servicio
                    confiable que permita a nuestros clientes alcanzar sus
                    objetivos con éxito a largo plazo.
                  </p>
                </div>
                {/* Misión */}
                <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                  <Target className="mx-auto mb-2 h-8 w-8 text-blue-800" />
                  <h3 className="text-xl font-bold text-blue-800">
                    Nuestra Misión
                  </h3>
                  <p className="mt-4 text-gray-600 text-start">
                    En <span className="font-bold text-red-700">RentameCarmen</span>, nuestra
                    misión es proporcionar soluciones confiables y accesibles en
                    la renta, venta y reparación de maquinaria. Buscamos ser el
                    aliado ideal para profesionales y emprendedores, ofreciendo
                    herramientas y equipos de alta calidad, acompañados de un
                    servicio personalizado que facilite el éxito de sus
                    proyectos y emprendimientos.
                  </p>
                </div>

                {/* Valores */}
                <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                  <ShieldCheck className="mx-auto mb-2 h-8 w-8 text-blue-800" />
                  <h3 className="text-xl font-bold text-blue-800">
                    Nuestros Valores
                  </h3>
                  <ul className="mt-2 text-gray-700 list-disc list-inside text-start space-y-1">
                    <li>
                      <span className="font-bold">Compromiso en Renta: </span>
                      Ofrecemos variedad, flexibilidad y equipos en óptimas
                      condiciones, adaptándonos a las necesidades de cada
                      proyecto.
                    </li>
                    <li>
                      <span className="font-bold">
                        Compromiso en Reparación:{" "}
                      </span>
                      Brindamos un servicio técnico honesto y profesional, sin
                      anticipos y con garantía total de satisfacción.
                    </li>
                  </ul>
                </div>
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
      </div>
    </>
  );
}
