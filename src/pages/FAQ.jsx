import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer";
import faq from "../images/faq.jpg";
import { Helmet } from "react-helmet";
import whatsapp from "../images/whatsapp.png";
import { ChevronDown, ChevronUp } from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";
export default function FAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const questionRefs = useRef([]);
  function renderToPlainText(jsx) {
    const htmlString = renderToStaticMarkup(jsx);
    const temp = document.createElement("div");
    temp.innerHTML = htmlString;
    return temp.textContent || temp.innerText || "";
  }
  const questions = [
    {
      question: "¿Cuales son los requisitos para rentar un equipo en RM?",
      answer: (
        <>
        <p className="mb-2">
          Para comenzar el proceso de renta, es necesario cumplir con los siguientes requisitos:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Comprobante de domicilio.</li>
          <li>INE del responsable.</li>
          <li>Pagaré firmado por el monto de la garantía del equipo.</li>
          <li>Pago inicial de la renta. (Mas I.V.A en caso de requerir factura)</li>
        </ul>
        </>
      ),
    },
    {
      question: "¿Cuál es el horario de atención al cliente?",
      answer: (
        <>
       
        <ul className="list-disc pl-5 space-y-1">
          <li>Lunes a Viernes: 9:00 AM - 7:00 PM</li>
          <li>Sábados: 9:00 AM - 3:00 PM</li>
          <li>Domingos: Cerrado</li>
        </ul>
        </>
      ),
    },
    {
      question: "¿Como me puedo contactar con RentameCarmen?",
      answer: (
        <>
        <p className="mb-2 ">
        En RentameCarmen, estamos para ayudarte. Puedes comunicarte con nosotros por cualquiera de nuestros medios oficiales
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><span className="font-semibold text-[#1D4ED8]">WhatsApp:</span> <a className="underline hover:text-[#C70000] transition-colors duration-500" href="tel:+529381958284">+52 938 195 8284</a></li>
          <li><span className="text-[#1D4ED8] font-semibold">Correo electrónico:</span> <a className="underline hover:text-[#C70000] transition-colors duration-500" href="mailto:contacto@rentamecarmen.com.mx">contacto@rentamecarmen.com.mx</a></li>
          <li><span className="text-[#1D4ED8] font-semibold">Redes sociales:</span> <a className="underline hover:text-[#C70000] transition-colors duration-500" href="mailto:contacto@rentamecarmen.com.mx">Facebook</a></li>
          <li><span className="text-[#1D4ED8] font-semibold">Formulario de contacto:</span> <a className="underline hover:text-[#C70000] transition-colors duration-500" href="/contactanos">Contacto RM</a></li>
        </ul>
        </>
      ),
    },
    {
      question: "¿Que es el centro de servicio RM, donde se ubica y que soluciones ofrecen?",
      answer: (
        <div className="flex flex-col gap-2">
        <p>RM CENTRO DE SERVICIO es nuestro taller especializado en reparación, mantenimiento y renovación de herramientas eléctricas y de combustión.</p>
        <p className="text-[#1D4ED8] font-bold">NUESTROS SERVICIOS:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Reparaciones.</li>
          <li>Mantenimiento Preventivo y Correctivo.</li>
          <li>Renovación de Equipos.</li>
          <li>Refacciones para reparaciones dentro de nuestro centro de servicio.</li>
          <li>Póliza de Servicio.</li>
          <li>Renta de equipos y maquinaria en general.</li>
        </ul>
        <a className="text-[#1D4ED8] hover:text-[#C70000] transition-colors duration-500 font-semibold underline" href="/centro_servicio">Mas información</a>
        <p className="text-[#1D4ED8] font-bold underline">¿Donde nos ubicamos?</p>
        <p>Puedes visitarnos en: Calle 38 No: 128 entre 35 y 37 Col. Tecolutla CP: 24100 Cd. Del Carmen, Campeche.</p>
        <iframe
        className="rounded shadow-lg w-full h-40"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.803206025143!2d-91.8251201240032!3d18.650348365792486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85fbc946a6e2b8ff%3A0x7a45d4c239fd8d0f!2sCalle%2038%20128%2C%20Tecolutla%2C%2024100%20Cd%20del%20Carmen%2C%20Camp.!5e0!3m2!1ses!2smx!4v1708200000000"
      ></iframe>
        </div>
      ),
    },
   
  ];

  const toggleQuestion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  useEffect(() => {
    if (activeIndex !== null && questionRefs.current[activeIndex]) {
      const element = questionRefs.current[activeIndex];
      const navbarOffset = window.innerHeight * 0.15; // 15vh en píxeles
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
  
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [activeIndex]);

  return (
    <>
    <Helmet>
    <meta name="description" content="Resuelve tus dudas sobre la renta de maquinaria. Consulta requisitos, contacto y servicios técnicos en rentamecarmen.com.mx." />
    <meta name="keywords" content="preguntas frecuentes, renta de maquinaria, renta maquinaria ligera ciudad del Carmen, renta maquinaria ligera, Rentame Carmen, contacto, centro de servicio, requisitos para rentar" />
  <title>Preguntas Frecuentes | Rentame Carmen</title>
  <meta name="description" content="Resuelve tus dudas sobre la renta de equipos en Ciudad del Carmen. Consulta los requisitos, contacto y soluciones del centro de servicio RM." />
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": questions.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": typeof item.answer === "string"
            ? item.answer
            : renderToPlainText(item.answer)
        }
      }))
    })}
  </script>
</Helmet>
      <div className="w-full flex flex-col relative items-center">
        <a
          href="https://wa.link/gpu01d"
          target="_blank"
          className="fixed lg:top-[82%] top-[87%] right-5 z-50 shadow-xl bg-[#ffffff3d] rounded-full"
        >
          <img className="lg:w-[6rem] w-[4.5rem]" src={whatsapp} alt="whatsapp" />
        </a>

        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Banner */}
        <div className="w-full flex z-0 justify-center items-center h-[50vh] relative">
          <img
            src={faq}
            alt="FAQ"
            onLoad={() => setImageLoaded(true)}
            className={`h-[50vh] object-cover object-top w-full relative transition-opacity duration-1000 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="w-full h-[50vh] opacity-60 bg-black absolute" />
          <div className="absolute z-40 w-full h-[50vh] flex justify-center items-center text-white flex-col text-center px-[15%]">
            <h1 className="lg:text-6xl text-5xl font-bold">Preguntas Frecuentes</h1>
            <p className="mt-4 text-lg">
              Todo lo que necesitas saber sobre Rentame Carmen.
            </p>
          </div>
        </div>

        {/* Contenido FAQ */}
        <div className="w-full bg-gray-100 py-20 px-6 lg:px-20 flex flex-col lg:flex-row gap-12 relative">
          {/* Imagen decorativa */}
          <div className="lg:w-[25%] w-full relative">
            <div className="lg:sticky top-32 flex justify-center">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/faq-illustration-download-in-svg-png-gif-file-formats--customer-questions-and-answers-helpful-information-maggy-pack-design-development-illustrations-4097184.png?f=webp"
                alt="Ilustración preguntas frecuentes"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>

          {/* Dropdowns */}
          <div  className="lg:w-[75%] w-full">
            {questions.map((item, index) => (
              <div
                key={index}
                ref={(el) => (questionRefs.current[index] = el)}
                className="bg-white shadow-md rounded-xl mb-6 overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full flex justify-between items-center px-3 lg:px-5 py-4 text-left text-[0.9rem] lg:text-lg font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                  onClick={() => toggleQuestion(index)}
                >
                  {item.question}
                  <div  className="w-5 h-5 flex-shrink-0 ml-4">
  {activeIndex === index ? <ChevronUp className="w-full h-full" /> : <ChevronDown className="w-full h-full" />}
</div>
                </button>
                <div
                  className={`lg:px-5 px-3 text-gray-600 text-sm border-t border-gray-200 overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index ? " py-4" : "max-h-0"
                  }`}
                >
                  <div className="opacity-100 ">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
