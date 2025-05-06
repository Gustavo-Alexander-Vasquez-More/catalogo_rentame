import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import {
  FaUserShield,
  FaInfoCircle,
  FaLock,
  FaExchangeAlt,
  FaEnvelope,
} from "react-icons/fa";

function PoliticaPrivacidadPage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Política de Privacidad | Rentame Carmen</title>
        <meta
          name="description"
          content="Conoce nuestra política de privacidad y cómo protegemos tus datos personales en Rentame Carmen. Descubre cómo recopilamos, usamos y protegemos tu información."
        />
        <meta
          name="keywords"
          content="política de privacidad, protección de datos, Rentame Carmen, datos personales, privacidad en línea, seguridad de datos"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.rentamecarmen.com.mx/politica-privacidad"
        />

        {/* Open Graph para redes sociales */}
        <meta
          property="og:title"
          content="Política de Privacidad | Rentame Carmen"
        />
        <meta
          property="og:description"
          content="Conoce nuestra política de privacidad y cómo protegemos tus datos personales en Rentame Carmen."
        />
        <meta
          property="og:url"
          content="https://www.rentamecarmen.com.mx/politica-privacidad"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.rentamecarmen.com.mx/politica-privacidad"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Política de Privacidad | Rentame Carmen"
        />
        <meta
          name="twitter:description"
          content="Conoce nuestra política de privacidad y cómo protegemos tus datos personales en Rentame Carmen."
        />
        <meta
          name="twitter:image"
          content="https://www.rentamecarmen.com.mx/politica-privacidad"
        />
      </Helmet>

      <div className="w-full min-h-screen relative flex flex-col">
        <Navbar />

        {/* Hero */}
        <div className="w-full flex z-0 justify-center items-center h-[60vh]">
          <img
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`h-[60vh] object-cover object-center w-full relative transition-opacity duration-1000 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            src="https://www.clavesdigital.com.ar/vistas/fotos_noticias/10057-construccin.jpg"
            alt="Política de Privacidad"
          />
          <div className="w-full h-[60vh] opacity-60 bg-black absolute"></div>
          <div className="text-center px-6 absolute text-white">
            <h1 className="text-4xl font-bold">Política de Privacidad</h1>
            <p className="mt-4 text-lg">
              Tu privacidad es importante para nosotros. Aquí te explicamos cómo
              manejamos tus datos.
            </p>
          </div>
        </div>
        {/* Contenido de la Política */}
        <div className="w-full flex flex-col py-10 px-[1rem] lg:px-[4rem] text-gray-700 space-y-12">
          {/* Sección 1 */}
          <section className="flex flex-col lg:flex-row items-center gap-6 bg-gray-100 p-6 rounded-lg shadow-md">
            <FaInfoCircle className="text-blue-900 text-5xl" />
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                1. Información que Recopilamos
              </h2>
              <p className="text-lg leading-relaxed">
                Recopilamos información personal que nos proporcionas al
                utilizar el formulario de contacto en nuestro sitio web. Esto
                incluye tu nombre, correo electrónico y número de teléfono.
                También recopilamos datos automáticamente, como tu dirección IP
                y el tipo de navegador que utilizas.
              </p>
            </div>
          </section>

          {/* Sección 2 */}
          <section className="flex flex-col lg:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-md">
            <FaUserShield className="text-blue-900 text-5xl" />
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                2. Uso de la Información
              </h2>
              <p className="text-lg leading-relaxed">
                Utilizamos tu información para comunicarnos contigo en relación
                a tus consultas, solicitudes o comentarios. También podemos usar
                tus datos para enviarte ofertas, novedades y promociones
                relacionadas con nuestros servicios.
              </p>
            </div>
          </section>

          {/* Sección 3 */}
          <section className="flex flex-col lg:flex-row items-center gap-6 bg-gray-100 p-6 rounded-lg shadow-md">
            <FaExchangeAlt className="text-blue-900 text-5xl" />
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                3. Compartir tu Información
              </h2>
              <p className="text-lg leading-relaxed">
                No compartimos tu información personal con terceros, excepto
                cuando sea necesario para cumplir con la ley, proteger nuestros
                derechos o proporcionarte servicios específicos a través de
                socios de confianza.
              </p>
            </div>
          </section>

          {/* Sección 4 */}
          <section className="flex flex-col lg:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-md">
            <FaLock className="text-blue-900 text-4xl" />
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                4. Seguridad de tus Datos
              </h2>
              <p className="text-lg leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas para
                proteger tu información personal contra accesos no autorizados,
                pérdida o alteración.
              </p>
            </div>
          </section>

          {/* Sección 5 */}
          <section className="flex flex-col lg:flex-row items-center gap-6 bg-gray-100 p-6 rounded-lg shadow-md">
            <FaEnvelope className="text-blue-900 text-4xl" />
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                5. Contacto
              </h2>
              <p className="text-lg leading-relaxed">
                Si tienes preguntas o inquietudes sobre nuestra política de
                privacidad, contáctanos en{" "}
                <a
                  href="mailto:contacto@rentamecarmen.com"
                  className="text-blue-600 underline"
                >
                  contacto@rentamecarmen.com
                </a>
                .
              </p>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default PoliticaPrivacidadPage;
