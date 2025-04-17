import React from "react";
import compramos from "../images/compramos.jpg";
import facebook from "../images/facebook.png";

export default function Footer() {
  return (
    <footer className="bg-[#222d72] text-white w-full py-8">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 items-center">
        {/* Sección del Logo */}
        <div className="flex flex-col items-center w-full lg:w-[80%]">
          <a
            href="https://wa.link/w31sh7"
            target="_blank"
            className="flex items-center w-full"
          >
            <img
              src={compramos}
              alt="Logo"
              className="w-[100%] shadow-2xl rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            />
          </a>
        </div>

        {/* Sección Redes & Opiniones */}
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-2">Síguenos en facebook</p>
          <div className="flex gap-4 items-center">
            <a
              href="https://www.facebook.com/p/Rentame-Carmen-100094870352555/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="h-8 w-8 transition-transform hover:scale-110"
              />
            </a>
          </div>
        </div>

        {/* Horarios de Atención */}
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold">Horarios de Atención</p>
          <p className="text-gray-300 text-sm">
            Lunes a Viernes: 9:00 AM - 7:00 PM
          </p>
          <p className="text-gray-300 text-sm">Sábados: 9:00 AM - 3:00 PM</p>
          <p className="text-gray-300 text-sm">Domingos: Cerrado</p>
        </div>
      </div>

      {/* Sección Dirección y Mapa */}
      <div className="mt-8 flex flex-col items-center text-center">
        <p className="text-lg font-semibold mb-2">¿Donde nos encontramos?</p>
        <p className="text-gray-300 text-sm mb-4">
          Calle 38 No: 128 entre 35 y 37 Col. Tecolutla CP: 24100 Cd. Del Carmen
          Campeche.
        </p>
        <div className="w-[80%] md:w-[50%] h-40 md:h-48">
          <iframe
            title="Ubicación"
            className="w-full h-full rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.803206025143!2d-91.8251201240032!3d18.650348365792486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85fbc946a6e2b8ff%3A0x7a45d4c239fd8d0f!2sCalle%2038%20128%2C%20Tecolutla%2C%2024100%20Cd%20del%20Carmen%2C%20Camp.!5e0!3m2!1ses!2smx!4v1708200000000"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Línea divisoria y derechos reservados */}
      <div className="border-t border-gray-600 mt-6 pt-4 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} RentameCarmen. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
