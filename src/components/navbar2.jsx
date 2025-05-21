import React, { useRef, useState } from "react";
import logo from "../images/logo_blanco.png";
import { Search } from "lucide-react";
export default function navbar2({ isOpen, setIsOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [soluciones, setSoluciones] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
   const input_term = useRef();
   function searchButton() {
     if (searchTerm.trim()) {
       window.location.href = `/renta-equipos?search=${searchTerm}`;
     }
   }
   function captureTerm(e) {
     setSearchTerm(e.target.value);
   }
    function handleKeyDown(e) {
    if (e.key === "Enter") {
      searchButton();
    }
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
      <div className="w-full flex flex-col">
        <nav className="w-full py-4 h-[25vh] fixed top-0 lg:px-[3rem]  sm:flex sm:items-center z-50 sm:justify-between items-center bg-[#c70000]">
          {/* EN PANTALLA GRANDE */}
          <section className="lg:flex flex-col hidden items-center gap-4 w-full">
            <div className="flex w-full justify-between">
              <a href="/">
                <img src={logo} className="w-[8rem]" alt="Tailwind Play" />
              </a>
              {/* INPUT SEARCH */}
              <div className="flex items-center rounded-lg lg:px-3 py-2 w-[65%]">
                <input
                  ref={input_term}
                  onChange={captureTerm}
                  onKeyDown={handleKeyDown}
                  type="text"
                  placeholder="¿Qué estás buscando?"
                  className="outline-none text-gray-700 placeholder:text-gray-600 bg-[#ebebeb] text-sm w-full focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] rounded-lg px-4 py-[0.5rem] lg:py-[0.7rem] shadow-md transition duration-200 ease-in-out"
                />
                <button
                  onClick={searchButton}
                  className="bg-[#1D4ED8] text-white px-4 py-2 rounded-lg ml-2 mr-4 lg:mr-0 hover:bg-[#1a3a91] transition-colors duration-300"
                >
                  <Search className="w-5 h-5 lg:h-7" />
                </button>
              </div>
              {/* telefono navbar */}
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
            </div>
            <div className="flex items-center gap-2 justify-center w-full ">
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
              <div class="lg:flex hidden flex-col items-center lg:text-[1rem]  gap-1 sm:flex-row sm:m-0">
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
                  <div
                  className="relative px-3 py-2"
                  onMouseEnter={() => setSoluciones(true)}
                  onMouseLeave={() => setSoluciones(false)}
                >
                  <p
                    className="text-white flex items-center gap-1"
                    type="button"
                  >
                    Catálogo de equipos
                    <svg
                      class="w-4 h-4 text-gray-800 dark:text-white"
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
                        d="m19 9-7 7-7-7"
                      />
                    </svg>
                  </p>
                  {soluciones && (
                    <ul className="absolute left-0 top-full py-4 bg-gray-800 flex flex-col shadow-lg rounded z-50 min-w-max">
 <li>
                    <a  className="px-4 py-1 text-[1rem] hover:bg-[#0D6EFD] text-white w-full break-words flex justify-between items-center" href={`/renta-equipos?category=${localStorage.getItem("products_current_page") ? "todos&page=" + localStorage.getItem("products_current_page") : "todos"}`}>
                      Equipos en renta
                    </a>
                  </li>
                  <li>
                    <a  className="px-4 py-1 text-[1rem] hover:bg-[#0D6EFD] text-white w-full break-words flex justify-between items-center" href="/venta-equipos">
                      Equipos en venta
                    </a>
                  </li>
                    </ul>
                  )}
                  </div>
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
                  href="/faq-preguntas-frecuentes"
                  className={`px-3 py-2 rounded transition-colors duration-500 text-left ${
                    location.pathname === "/faq-preguntas-frecuentes"
                      ? "bg-gray-200 text-gray-900"
                      : "text-[white] hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  Preguntas frecuentes
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
            </div>
          </section>

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

          {/* Overlay oscuro cuando el menú está abierto */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300"
              onClick={toggleMenu}
            />
          )}

          {/* Sidebar animado */}
          <div
            className={`
              fixed top-0 right-0 h-screen w-[95vw] max-w-[500px] bg-[#c70000] z-50 flex items-end flex-col pt-2 pb-4 px-4
              transition-transform duration-300 ease-in-out
              ${isOpen ? "translate-x-0" : "translate-x-full"}
            `}
            style={{ transitionProperty: "transform" }}
          >
            {/* Cerrar */}
            <button
              className=" text-white text-5xl px-2 py-2 z-50 mb-2"
              onClick={toggleMenu}
              aria-label="Cerrar menú"
            >
              &times;
            </button>
            {/* Buscador móvil */}
            <div className="w-full flex justify-end mb-4">
              <input
                ref={input_term}
                onChange={captureTerm}
                onKeyDown={handleKeyDown}
                type="text"
                placeholder="¿Qué estás buscando?"
                className="outline-none text-gray-700 placeholder:text-gray-600 bg-[#ebebeb] text-sm w-full focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] rounded-lg px-4 py-2 shadow-md transition duration-200 ease-in-out"
              />
              <button
                onClick={searchButton}
                className="bg-[#1D4ED8] text-white px-3 py-2 rounded-lg ml-2 hover:bg-[#1a3a91] transition-colors duration-300"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
            {/* Enlaces */}
            <a href="/" className="text-white hover:bg-gray-200 hover:text-gray-900 w-full text-left px-4 py-2 rounded transition-colors duration-500">
              Inicio
            </a>
            <a href={`/renta-equipos?category=${localStorage.getItem("products_current_page") ? "todos&page=" + localStorage.getItem("products_current_page") : "todos"}`} className="text-white hover:bg-gray-200 hover:text-gray-900 w-full text-left px-4 py-2 rounded transition-colors duration-500">
              Equipos en renta
            </a>
            <a href="/venta-equipos" className="text-white hover:bg-gray-200 hover:text-gray-900 w-full text-left px-4 py-2 rounded transition-colors duration-500">
              Equipos en venta
            </a>
            <a href="/centro_servicio" className="text-white hover:bg-gray-200 hover:text-gray-900 w-full text-left px-4 py-2 rounded transition-colors duration-500">
              Centro de Servicio
            </a>
            <a href="/about_us" className="text-white hover:bg-gray-200 hover:text-gray-900 w-full text-left px-4 py-2 rounded transition-colors duration-500">
              Sobre nosotros
            </a>
            <a href="/faq-preguntas-frecuentes" className="text-white hover:bg-gray-200 hover:text-gray-900 w-full text-left px-4 py-2 rounded transition-colors duration-500">
              Preguntas Frecuentes
            </a>
            <a href="/contactanos" className="text-white hover:bg-gray-200 hover:text-gray-900 w-full text-left px-4 py-2 rounded transition-colors duration-500">
              Contáctanos
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
