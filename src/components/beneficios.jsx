import React from "react";

export default function beneficios() {
  return (
    <div className="w-[90%] max-w-6xl py-8 z-40 bg-[#222d72]  text-white shadow-xl rounded-2xl px-6 hidden lg:flex flex-col items-center justify-center mx-auto">
      <p className="text-center text-2xl font-bold mb-6">¿Por qué elegirnos?</p>

      <div className="flex justify-between items-stretch gap-6 w-full">
        {/* Calidad de Servicio */}
        <div className="flex flex-col items-center text-center w-1/3 px-4 py-4 bg-[#2b3aa0] rounded-xl hover:scale-105 transition-transform duration-300">
          <svg
            className="w-8 h-8 mb-3 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
              clipRule="evenodd"
            />
            <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
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
          <p className="text-base font-semibold mb-1">Experiencia</p>
          <p className="text-sm">
            Contamos con la experiencia y el respaldo técnico necesarios para
            ofrecer alquileres sin sorpresas, gracias a nuestro equipo en
            constante actualización.
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
            <path
              fillRule="evenodd"
              d="M12 5a7 7 0 0 0-7 7v1.17c.313-.11.65-.17 1-.17h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-6a9 9 0 0 1 18 0v6a3 3 0 0 1-3 3h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2c.35 0 .687.06 1 .17V12a7 7 0 0 0-7-7Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-base font-semibold mb-1">Reputación</p>
          <p className="text-sm">
            Nos distinguimos por nuestra integridad y compromiso con la
            transparencia: siempre devolvemos las piezas dañadas de su equipo, o
            el servicio no tiene costo.
          </p>
        </div>
      </div>
    </div>
  );
}
