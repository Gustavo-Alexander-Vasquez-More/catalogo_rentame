import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar2";
import Footer from "../components/footer";
import whatsapp from "../images/whatsapp.png";
import about from "../images/banerSobreNosotros.jpg";
import icon from "../images/rentame_icon.png";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contacto() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [formulario, setFormulario] = useState(false);
  const [nombre, setNombre] = useState();
  const [telefono, setTelefono] = useState();
  const [mensaje, setMensaje] = useState();
  const [soluciones, setSoluciones] = useState(false);
  const input_nombre = useRef();
  const input_mensaje = useRef();
  const input_telefono = useRef();
  function captureNombre() {
    setNombre(input_nombre.current.value);
  }
  function captureTelefono() {
    setTelefono(input_telefono.current.value);
  }
  function captureMensaje() {
    setMensaje(input_mensaje.current.value);
  }
  useEffect(() => {
    document.title = "Sobre Nosotros | RentameCarmen";
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = icon;
    }
  }, []);

  function openFormulario() {
    window.scrollTo(0, 0);
    setFormulario(true);
    document.body.style.overflow = "hidden";
  }
  function closeFormulario() {
    setFormulario(false);
    document.body.style.overflow = "auto";
  }

  async function enviar() {
    try {
      if (!nombre || !telefono || !mensaje) {
        alert(
          "Por favor, complete todos los campos del formulario para enviar su consulta."
        );
      } else {
        const encodedMessage = encodeURIComponent(
          `${mensaje}\n\nDatos del cliente:\nNombre: ${nombre}\nTeléfono: ${telefono}`
        );

        const whatsappUrl = `https://api.whatsapp.com/send?phone=529381958284&text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
      }
    } catch (error) {
      console.log(error);
    }
  }

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
        <a
          href="https://wa.link/gpu01d"
          target="_blank"
          className="fixed lg:top-[82%] top-[87%] right-5 z-50 shadow-xl bg-[#ffffff3d] rounded-full"
        >
          <img
            className="lg:w-[6rem] w-[4.5rem]"
            src={whatsapp}
            alt="WhatsApp"
          />
        </a>

        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Banner */}
        <div className="w-full h-[15vh]"></div>

        {/* Contact Section */}
        <div className="w-full bg-gray-50 px-[1.5rem] lg:pr-[0rem] lg:pl-[4rem] h-[85vh] flex flex-col-reverse lg:flex-row justify-between gap-10">
          {/* Formulario */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              ¿Tienes dudas o necesitas más información?
            </h2>
            <p className="py-2 text-md text-gray-600">
              Déjanos tus datos y comentarios. Con gusto te atenderemos y
              resolveremos cualquier inquietud que tengas.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">
                  Nombre completo
                </label>
                <input
                  ref={input_nombre}
                  onChange={captureNombre}
                  type="text"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-red-700"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">
                  Telefono o whatsapp
                </label>
                <input
                  ref={input_telefono}
                  onChange={captureTelefono}
                  type="email"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-red-700"
                  placeholder="+52 938 123 4567"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Mensaje</label>
                <textarea
                  ref={input_mensaje}
                  onChange={captureMensaje}
                  rows="4"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-red-700"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>
              <button
                onClick={(e) => {
                  enviar(e);
                  e.preventDefault();
                }}
                className="bg-red-700 text-white py-2 px-6 rounded hover:bg-red-800 transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Imagen al costado */}
          <div className="w-full hidden lg:flex h-[85vh] lg:w-1/2">
            <img
              src="https://cdn.prod.website-files.com/61a96fd30879375cde8cf1b0/62f18e7a1ca43fa92b21f48a_1N5A2511.png"
              alt="Contacto Rentame Carmen"
              className="w-full h-[85vh] object-cover"
            />
          </div>
        </div>
        {/* Información adicional de contacto */}
        <div className="w-full bg-[#F9FAFB] py-16 px-[1.5rem] lg:px-[4rem] flex flex-col lg:flex-row items-start justify-between gap-10 ">
          {/* Información */}
          <div className="lg:w-1/2 w-full space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Nuestra información
            </h3>

            <p className="flex items-center gap-2 text-gray-700">
              <Phone className="text-red-700" size={20} />
              <a className="hover:underline" href="tel:+529381958284">
                +52 938 195 8284
              </a>
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <Mail className="text-red-700" size={20} />
              <a
                href="mailto:info@rentamecarmen.com.mx"
                className="hover:underline"
              >
                info@rentamecarmen.com.mx
              </a>
            </p>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-1">
                Horarios de atención
              </h4>
              <p className="text-gray-700">
                Lunes a Viernes: 9:00 AM – 7:00 PM
              </p>
              <p className="text-gray-700">Sábados: 9:00 AM – 3:00 PM</p>
              <p className="text-gray-700">Domingos: Cerrado</p>
            </div>
          </div>

          {/* Mapa de Google */}
          <div className="lg:w-1/2 w-full h-[300px] rounded overflow-hidden shadow-lg">
            <iframe
              title="Ubicación Rentame Carmen"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.803206025143!2d-91.8251201240032!3d18.650348365792486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85fbc946a6e2b8ff%3A0x7a45d4c239fd8d0f!2sCalle%2038%20128%2C%20Tecolutla%2C%2024100%20Cd%20del%20Carmen%2C%20Camp.!5e0!3m2!1ses!2smx!4v1708200000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
