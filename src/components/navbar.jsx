import React, { useRef, useState } from "react";
import logo from "../images/logo_blanco.png";
export default function navbar({ isOpen, setIsOpen }) {
  const [formulario, setFormulario] = useState(false);
  const [nombre, setNombre] = useState();
  const [telefono, setTelefono] = useState();
  const [mensaje, setMensaje] = useState();
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
      {formulario && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex  justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[500px]">
            <h2 className="text-2xl font-bold mb-2 text-center pb-4">
              Formulario de contacto
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 pb-2">
                  Nombre completo
                </label>
                <input
                  ref={input_nombre}
                  onChange={captureNombre}
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 pb-2">
                  Telefono o WhatsApp
                </label>
                <input
                  ref={input_telefono}
                  onChange={captureTelefono}
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 pb-2">
                  Mensaje
                </label>
                <textarea
                  ref={input_mensaje}
                  onChange={captureMensaje}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                  name=""
                  id=""
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={enviar}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Enviar
                </button>
                <button
                  type="button"
                  onClick={() => closeFormulario()}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Cerrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="w-full flex flex-col">
        <div className="bg-gradient-to-r from-[#323B75] via-[#4a5b9f] to-[#1f2b57] w-full flex lg:flex-row flex-col lg:gap-0 gap-1 items-center  text-white justify-between lg:px-[5rem] py-[0.5rem]">
          <div className="flex gap-1">
            <svg
              class="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
              <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
            </svg>
            <a
              href="mailto:info@RentameCarmen.com.mx"
              className="font-semibold  hover:underline"
            >
              info@RentameCarmen.com.mx
            </a>
          </div>
          <div className="flex gap-1">
            <svg
              class="w-6 h-6 lg:flex hidden text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                clip-rule="evenodd"
              />
            </svg>
            <a
              href="https://www.google.com/maps/place/Rentame+Carmen/@18.6457946,-91.8356274,17z/data=!3m1!4b1!4m6!3m5!1s0x85f1a96be3422151:0x9ae784434576f1b4!8m2!3d18.6457895!4d-91.8330525!16s%2Fg%2F11x1bzgm_3?hl=es&entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
              className="hover:underline lg:flex hidden"
            >
              Calle 38 No: 128 entre 35 y 37 Col. Tecolutla CP: 24100 Cd. Del
              Carmen Campeche.
            </a>
          </div>
          <div className="flex gap-1">
            <svg
              class="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
            </svg>

            <a
              href="tel:+529381958284"
              className="font-semibold hover:underline"
            >
              938-195-8284
            </a>
          </div>
        </div>
        <div className="w-full bg-[#C70000] lg:py-3  lg:px-[5rem]">
          {/* Navbar para pantallas grandes */}

          <div className="flex lg:flex-row flex-col  lg:gap-0  justify-between  items-center">
            {/* Logo */}
            <button
              onClick={() => {
                localStorage.setItem("products_current_page", 1),
                  (window.location.href = "/");
              }}
            >
              <img
                className="lg:w-[10rem] w-[5rem] lg:h-[8vh] lg:flex hidden "
                src={logo}
                alt="Rentame Carmen tu solución para la renta de equipos en ciudad del carmen campeche, rentamos maquinaria como taladros, plantas de luz, sierras, motosierras, equipos para la construccion y más."
              />
            </button>
            <div className="lg:hidden flex  flex-col gap-2 justify-between w-full items-center">
              {/* Botón de menú */}

              <button
                onClick={() => {
                  localStorage.setItem("products_current_page", 1),
                    (window.location.href = "/");
                }}
              >
                <img
                  className="lg:w-[10rem] pt-4 w-[5rem] lg:h-[8vh] lg:hidden"
                  src={logo}
                  alt="Rentame Carmen tu solución para la renta de equipos en ciudad del carmen campeche, rentamos maquinaria como taladros, plantas de luz, sierras, motosierras, equipos para la construccion y más."
                />
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-3xl py-2 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Menú desplegable */}
              <div
                className={`${
                  isOpen ? "block" : "hidden"
                } mt-1 w-full bg-[#323B75] text-white py-3  transform transition-all duration-300 ease-in-out`}
              >
                <ul className="space-y-2 px-4">
                  <li>
                    <a href="/" className="hover:text-[#28a745]">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a href="/venta-equipos" className="hover:text-[#28a745]">
                      Equipos en venta
                    </a>
                  </li>
                  <li>
                    <a href="/refacciones" className="hover:text-[#28a745]">
                      Refacciones
                    </a>
                  </li>
                  <li>
                    <a href="/about_us" className="hover:text-[#28a745]">
                      Sobre GrupoRM
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={openFormulario}
                      className="hover:text-[#28a745]"
                    >
                      Contacto
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* Enlaces de navegación */}
            <div className="w-full justify-end lg:flex gap-2 hidden">
              <div className="lg:flex items-center hidden">
                <a
                  href="/"
                  className="text-white  text-[1rem] flex items-center gap-1 px-4 py-2 rounded-md  hover:shadow-lg hover:bg-[#A50000] transition-all duration-300 "
                >
                  Inicio
                </a>
              </div>
              <div className="lg:flex items-center hidden">
                <a
                  href="/venta-equipos"
                  className="text-white  text-[1rem] flex items-center gap-1 px-4 py-2 rounded-md  hover:shadow-lg hover:bg-[#A50000] transition-all duration-300 "
                >
                  Equipos en venta
                </a>
              </div>
              <div className="lg:flex items-center hidden">
                <a
                  href="/refacciones"
                  className="text-white  text-[1rem] flex items-center gap-1 px-4 py-2 rounded-md  hover:shadow-lg hover:bg-[#A50000] transition-all duration-300 "
                >
                  Refaciones
                </a>
              </div>
              <div className="lg:flex items-center gap-4 hidden">
                <a
                  href="/about_us"
                  className="text-white  text-[1rem] flex items-center gap-1 px-4 py-2 rounded-md  hover:shadow-lg hover:bg-[#A50000] transition-all duration-300 "
                >
                  Sobre GrupoRM
                </a>
              </div>
              <div className="lg:flex items-center gap-4 hidden">
                <button
                  onClick={openFormulario}
                  className="text-white  text-[1rem] flex items-center gap-1 px-4 py-2 rounded-md  hover:shadow-lg hover:bg-[#A50000] transition-all duration-300 "
                >
                  Contacto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
