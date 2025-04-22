import React from "react";

export default function beneficios() {
  return (
    <div className="w-[90%] max-w-6xl py-8 z-40 bg-[#222d72]  text-white shadow-xl rounded-2xl px-6 hidden lg:flex flex-col items-center justify-center mx-auto">
      <p className="text-center text-2xl font-bold mb-6">¿Por qué elegirnos?</p>

      <div className="flex justify-between items-stretch gap-6 w-full">
        {/* Calidad de Servicio */}
        <div className="flex flex-col items-center text-center w-1/3 px-4 py-4 bg-[#2b3aa0] rounded-xl hover:scale-105 transition-transform duration-300">
          <svg
            class="w-8 h-8 mb-3 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M11.644 3.066a1 1 0 0 1 .712 0l7 2.666A1 1 0 0 1 20 6.68a17.694 17.694 0 0 1-2.023 7.98 17.406 17.406 0 0 1-5.402 6.158 1 1 0 0 1-1.15 0 17.405 17.405 0 0 1-5.403-6.157A17.695 17.695 0 0 1 4 6.68a1 1 0 0 1 .644-.949l7-2.666Zm4.014 7.187a1 1 0 0 0-1.316-1.506l-3.296 2.884-.839-.838a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.366.046l4-3.5Z"
              clip-rule="evenodd"
            />
          </svg>

          <p className="text-base font-semibold mb-1">Calidad de Servicio</p>
          <p className="text-sm">
            Nos destacamos por ir más allá de las expectativas de nuestros
            clientes, siempre con total transparencia y sin sorpresas
            desagradables.
          </p>
        </div>

        {/* Experiencia */}
        <div className="flex flex-col items-center text-center w-1/3 px-4 py-4 bg-[#2b3aa0] rounded-xl hover:scale-105 transition-transform duration-300">
          <svg
            class="w-8 h-8 mb-3 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"
            />
          </svg>

          <p className="text-base font-semibold mb-1">Experiencia</p>
          <p className="text-sm">
            Poseemos la experiencia necesaria para rentar equipos sin
            sorpresas inesperadas, respaldados por nuestros técnicos del centro
            de servicio, quienes se actualizan continuamente.
          </p>
        </div>

        {/* Reputación */}
        <div className="flex flex-col items-center text-center w-1/3 px-4 py-4 bg-[#2b3aa0] rounded-xl hover:scale-105 transition-transform duration-300">
          <svg
            className="w-8 h-8 mb-3 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
            <path
              fillRule="evenodd"
              d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
              clipRule="evenodd"
            />
            <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
          </svg>
          <p className="text-base font-semibold mb-1">Reputación</p>
          <p className="text-sm">
            Nos destacamos por nuestra integridad y por preservar con esmero la
            reputación que nos respalda. En nuestro centro de servicio, es una
            norma devolver las piezas dañadas de sus equipos; de lo contrario,
            el servicio es completamente gratuito.
          </p>
        </div>
      </div>
    </div>
  );
}
