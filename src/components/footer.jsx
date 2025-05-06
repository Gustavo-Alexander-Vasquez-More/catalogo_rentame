import React from "react";
import compramos from "../images/compramos.jpg";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#222d72] to-[#1a2458] text-white pt-16 pb-10 px-6 lg:px-20 w-full">
      <div className="grid lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {/* Logo y descripción */}
        <div className="col-span-1 flex flex-col items-start">
          <a
            href="https://wa.link/w31sh7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={compramos} alt="Rentame Carmen" className="w-full" />
          </a>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navegación</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:text-red-500">
                Inicio
              </a>
            </li>
            <li>
              <a href="/renta-equipos" className="hover:text-red-500">
                Equipos en renta
              </a>
            </li>
            <li>
              <a href="/venta-equipos" className="hover:text-red-500">
                Equipos en venta
              </a>
            </li>
            <li>
              <a href="/about_us" className="hover:text-red-500">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="/centro_servicio" className="hover:text-red-500">
                RM Centro de Servicio
              </a>
            </li>
            <li>
              <a href="/contactanos" className="hover:text-red-500">
                Contáctanos
              </a>
            </li>
            <li>
              <a
                href="/faq-preguntas-frecuentes"
                className="hover:text-red-500"
              >
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a href="/politica-privacidad" className="hover:text-red-500">
                Política de privacidad
              </a>
            </li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contacto</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <strong>Dirección:</strong> Calle 38 No: 128 entre 35 y 37 Col.
              Tecolutla CP: 24100 Cd. Del Carmen, Campeche.
            </li>
            <li>
              <strong>Teléfono:</strong>{" "}
              <a
                className="hover:text-red-500 hover:underline"
                href="tel:+529381958284"
              >
                +52 938 195 8284
              </a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                className="hover:text-red-500 hover:underline"
                href="mailto:contacto@rentamecarmen.com.mx"
              >
                contacto@rentamecarmen.com.mx
              </a>
            </li>
            <li>
              <strong>Horario:</strong> Lun - Vie: 9am - 7pm | Sáb: 9am - 3pm
            </li>
          </ul>
        </div>

        {/* Mapa y redes sociales */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-4">Ubicación</h4>
          <iframe
            className="rounded shadow-lg w-full h-40"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.803206025143!2d-91.8251201240032!3d18.650348365792486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85fbc946a6e2b8ff%3A0x7a45d4c239fd8d0f!2sCalle%2038%20128%2C%20Tecolutla%2C%2024100%20Cd%20del%20Carmen%2C%20Camp.!5e0!3m2!1ses!2smx!4v1708200000000"
          ></iframe>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.facebook.com/p/Rentame-Carmen-100094870352555/"
              target="_blank"
              className="hover:text-red-500 flex flex-col items-center"
            >
              <i className="fab fa-facebook-f"></i> Facebook
              <svg
                class="w-8 h-8 text-white bg-primary border-[3px] rounded-full"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJUSFC42up8YURtPF2RUOE55o"
              target="_blank"
              className="hover:text-red-500 flex flex-col items-center"
            >
              <i className="fab fa-instagram"></i> Google Reviews
              <svg
                class="w-8 h-8 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Divider y copyright */}
      <div className="border-t  mt-10 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Rentame Carmen. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
