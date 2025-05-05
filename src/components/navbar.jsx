import React, { useRef, useState } from "react";
import logo from "../images/logo_blanco.png";
import { useLocation } from "react-router-dom";
export default function navbar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [formulario, setFormulario] = useState(false);
  const [nombre, setNombre] = useState();
  const [telefono, setTelefono] = useState();
  const [mensaje, setMensaje] = useState();
  const [soluciones, setSoluciones] = useState(false);
  const toggleSoluciones = () => {
    setSoluciones((prev) => !prev);
  };
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
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <nav
          className={`w-full h-[15vh] fixed top-0 lg:px-[3rem]  sm:flex sm:items-center z-50 sm:justify-between items-center  ${
            scrolled || isOpen ? "bg-[#c70000]" : "bg-transparent"
          }`}
        >
          {/* EN PANTALLA GRANDE */}
          <section className="lg:flex hidden items-center gap-2 h-[10vh] ">
            <a href="/">
              <img src={logo} className="w-[8rem]" alt="Tailwind Play" />
            </a>
            <button className="text-gray-700 sm:hidden" onClick={toggleMenu}>
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
              >
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
              </svg>
            </button>
            <div class="lg:flex hidden flex-col items-center lg:text-[1.15rem]  gap-1 sm:flex-row sm:m-0">
              <a
                href="/"
                className={`px-3 py-2 rounded transition-colors duration-500 text-left ${
                  location.pathname === "/"
                    ? "bg-gray-200 text-gray-900"
                    : "text-[white] hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                Inicio
              </a>
              <button
                onClick={toggleSoluciones}
                className={`py-2 px-3 rounded dropdown-toggle text-[white] text-[1.15rem] transition-colors duration-500 hover:bg-gray-200 hover:text-gray-900 ${
                  soluciones ? "bg-gray-200 text-gray-900" : ""
                }`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Nuestro Menú
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/renta-equipos">
                    Equipos en renta
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/venta-equipos">
                    Equipos en venta
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/faq-preguntas-frecuentes">
                    Preguntas Frecuentes
                  </a>
                </li>
              </ul>
              <a
                href="/about_us"
                className={`px-3 py-2 rounded transition-colors duration-500 text-left ${
                  location.pathname === "/about_us"
                    ? "bg-gray-200 text-gray-900"
                    : "text-[white] hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                Sobre nosotros
              </a>
              <a
                href="/centro_servicio"
                className={`px-3 py-2 rounded transition-colors duration-500 text-left ${
                  location.pathname === "/centro_servicio"
                    ? "bg-gray-200 text-gray-900"
                    : "text-[white] hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                Centro de servicio
              </a>
              <a
                href="/contactanos"
                className={`px-3 py-2 rounded transition-colors duration-500 text-left ${
                  location.pathname === "/contactanos"
                    ? "bg-gray-200 text-gray-900"
                    : "text-[white] hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                Contáctanos
              </a>
             
            </div>
          </section>
          <a
            href="tel:+529381958284"
            className="border-white border-[2px] hidden lg:flex items-center gap-1 rounded-2 px-3 text-white text-[1.2rem] py-3 hover:bg-[#11283D] transition-colors duration-500"
          >
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
            <p>938-195-8284</p>
          </a>

          {/* EN PANTALLA PEQUEÑA */}
          <section className="flex lg:hidden px-[1.5rem] justify-between items-center h-[15vh]">
            <a href="/">
              <img src={logo} className="w-[7rem]" alt="Tailwind Play" />
            </a>
            <button className="text-white " onClick={toggleMenu}>
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
              >
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
              </svg>
            </button>
          </section>

          {/* Menú: Mostrar si isOpen es verdadero */}
          <div
            className={`flex lg:hidden flex-col bg-[#c70000] items-start pb-[1rem] z-50 lg:text-[1.2rem] gap-2 sm:flex-row sm:m-0 ${
              isOpen ? "block transition-all duration-500 " : "hidden"
            } `}
          >
            <a
              href="/"
              className="text-[white] hover:bg-gray-200 transition-colors duration-500 w-full text-left px-4 py-2 rounded hover:text-gray-900"
            >
              Inicio
            </a>

            <a
              href="/renta-equipos"
              className="text-[white] hover:bg-gray-200 w-full text-left transition-colors duration-500 rounded px-4 py-2 hover:text-gray-900"
            >
              Equipos en renta
            </a>
            <a
              href="/venta-equipos"
              className="text-[white] hover:bg-gray-200 w-full text-left transition-colors duration-500 rounded px-4 py-2 hover:text-gray-900"
            >
              Equipos en venta
            </a>
            <a
              href="/centro_servicio"
              className="text-[white] hover:bg-gray-200 w-full text-left transition-colors duration-500 rounded px-4 py-2 hover:text-gray-900"
            >
              Centro de Servicio
            </a>
            <a
              href="/about_us"
              className="text-[white] hover:bg-gray-200 w-full text-left transition-colors duration-500 rounded px-4 py-2 hover:text-gray-900"
            >
              Sobre nosotros
            </a>
            <a
              href="/faq-preguntas-frecuentes"
              className="text-[white] hover:bg-gray-200 w-full text-left transition-colors duration-500 rounded px-4 py-2 hover:text-gray-900"
            >
              Preguntas Frecuentes
            </a>
            <a
              href="/contactanos"
              className="text-[white] hover:bg-gray-200 w-full text-left transition-colors duration-500 rounded px-4 py-2 hover:text-gray-900"
            >
              Contáctanos
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
