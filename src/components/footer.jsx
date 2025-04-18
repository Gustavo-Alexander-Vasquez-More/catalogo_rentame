import React from "react";
import compramos from "../images/compramos.jpg";
import facebook from "../images/facebook.png";
import google from '../images/google.png';
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#222d72] to-[#1a2458] text-white w-full py-10">
  <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 items-start">
    {/* Logo */}
    <div className="flex flex-col items-center">
      <a href="https://wa.link/w31sh7" target="_blank" rel="noopener noreferrer">
        <img
          src={compramos}
          alt="Logo"
          className="w-[100%] max-w-[280px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </a>
    </div>

    {/* Redes sociales */}
    <div className="flex flex-col items-center">
      <p className="text-lg font-bold mb-3">Síguenos en Nuestras Redes</p>
      <div className="flex items-center gap-4">
      <a
        href="https://www.facebook.com/p/Rentame-Carmen-100094870352555/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={facebook}
          alt="Facebook"
          className="h-10 w-10 hover:scale-110 transition-transform"
        />
      </a>
      <a
        href="https://search.google.com/local/writereview?placeid=ChIJUSFC42up8YURtPF2RUOE55o"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src='https://www.cdnlogo.com/logos/g/35/google-icon.svg'
          alt="Google"
          className="h-8 w-8 hover:scale-110 transition-transform"
        />
      </a>
      </div>
      
    </div>

    {/* Horarios */}
    <div className="text-center">
      <p className="text-lg font-bold mb-2">🕒 Horarios de Atención</p>
      <p className="text-gray-300 text-sm">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
      <p className="text-gray-300 text-sm">Sábados: 9:00 AM - 3:00 PM</p>
      <p className="text-gray-300 text-sm">Domingos: Cerrado</p>
    </div>
  </div>

  {/* Dirección */}
  <div className="mt-10 text-center px-4">
    <p className="text-lg font-bold mb-1">📍 ¿Dónde nos encontramos?</p>
    <p className="text-gray-300 text-sm mb-4">
      Calle 38 No: 128 entre 35 y 37 Col. Tecolutla CP: 24100 Cd. Del Carmen, Campeche.
    </p>
    <div className="w-full md:w-[50%] h-40 md:h-56 mx-auto rounded-lg overflow-hidden shadow-md">
      <iframe
        title="Ubicación"
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.803206025143!2d-91.8251201240032!3d18.650348365792486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85fbc946a6e2b8ff%3A0x7a45d4c239fd8d0f!2sCalle%2038%20128%2C%20Tecolutla%2C%2024100%20Cd%20del%20Carmen%2C%20Camp.!5e0!3m2!1ses!2smx!4v1708200000000"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>

  {/* Línea inferior */}
  <div className="border-t border-gray-600 mt-8 pt-4 text-center text-gray-400 text-sm">
    &copy; {new Date().getFullYear()} RentameCarmen. Todos los derechos reservados.
  </div>
</footer>

  );
}
