import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import icon from "../images/rentame_icon.png";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
export default function equipos_venta() {
  useEffect(() => {
    // Encontrar el link con rel="icon" y cambiar su href
    const favicon = document.querySelector("link[rel='icon']");

    // Si el favicon existe, cambiamos el href
    if (favicon) {
      favicon.href = icon; // Actualizamos el favicon con la nueva imagen
    }
  }, []);
  const notyf = new Notyf({
    position: {
      x: "center",
      y: "top",
    },
    duration: 3500,
  });
  const [productos_paginados, setProductos_paginados] = useState([]);
  const [all_products, setAll_products] = useState([]);
  const [show_paginados, setShow_paginados] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);
  const [show_filter_products, setShow_filter_products] = useState(false);
  const [filteredDatas, setFilteredDatas] = useState([]);
  const [loadingImages, setLoadingImages] = useState(true);
  const [paginacion, setPaginacion] = useState();
  const [total_pages, setTotal_pages] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const [current_page, setCurrent_page] = useState(() => {
    const savedPage = localStorage.getItem("products_current_page_venta");
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const [searchTerm, setSearchTerm] = useState();
  const [loading, setLoading] = useState(true); // Estado de carga

  const [id, setId] = useState(null);

  const handleImageLoad = () => {
    setLoadingImages(false); // Una vez que la imagen se haya cargado
  };

  async function get_products_paginates(page = current_page) {
    try {
      const { data } = await axios.get(
        `https://backrecordatoriorenta-production.up.railway.app/api/products/read_pag_venta?page=${page}`
      );
      setPaginacion(data);
      setTotal_pages(data?.totalPages);
      setProductos_paginados(data.response); // Al principio mostramos todos los datos
      setLoading(false); // Datos cargados, actualizamos el estado de carga
    } catch (error) {
      if (
        error.response.data.message ===
        "No hay productos disponibles para 'venta'."
      ) {
        setLoadingImages(false);
      }
      if (
        error.response.data.message ===
        "Página fuera de rango. Por favor, selecciona una página válida."
      ) {
        localStorage.setItem("products_venta_current_page", 1);
        window.location.reload();
      }
      setLoading(false); // Si hay un error, dejamos de mostrar el estado de carga
    }
  }

  useEffect(() => {
    get_products_paginates();
  }, []);

  function nextPage() {
    if (current_page < total_pages) {
      window.scrollTo(0, 0);
      setLoadingImages(true);
      setCurrent_page(current_page + 1);
      get_products_paginates(current_page + 1);
      localStorage.setItem("products_current_page_venta", current_page + 1);
    }
  }
  function prevPage() {
    if (current_page > 1) {
      window.scrollTo(0, 0);
      setLoadingImages(true);
      setCurrent_page(current_page - 1);
      get_products_paginates(current_page - 1);
      localStorage.setItem("products_current_page_venta", current_page - 1);
    }
  }

  function generatePageNumbers(currentPage, totalPages, maxPagesToShow = 7) {
    const pages = [];
    const halfRange = Math.floor(maxPagesToShow / 2);

    // Determinar inicio y fin del rango
    let start = Math.max(currentPage - halfRange, 1);
    let end = Math.min(start + maxPagesToShow - 1, totalPages);

    // Ajustar el rango si está al final
    if (end - start + 1 < maxPagesToShow) {
      start = Math.max(end - maxPagesToShow + 1, 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }
  function goToPage(page) {
    if (page >= 1 && page <= total_pages) {
      window.scrollTo(0, 0);
      setLoadingImages(true);
      setCurrent_page(page);
      get_products_paginates(page);
      localStorage.setItem("products_current_page_venta", page);
    }
  }
  const [copied, setCopied] = useState(false);

  const handleCopy = (_id) => {
    const url = `/detalle-producto?id=${_id}`;
    navigator.clipboard.writeText(window.location.origin + url);
    setCopied(true);
    notyf.success("Enlace copiado");
  };
  return (
    <div className="bg-[#323B75]">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`flex flex-col items-center w-full h-auto bg-[#e3e2e2] transition-transform duration-500 ${
          isOpen ? "transform translate-y-[30px]" : "transform translate-y-0"
        }`}
      >
        {/* ESTO ES EL BODY */}
        <div className="w-full   min-h-[80vh]  lg:px-[5rem] py-[2rem] gap-3 flex flex-col">
          <p className="font-bold text-[1.3rem] px-[1.5rem] lg:pb-4 lg:text-[1.7rem] text-secondary bg-gradient-to-r from-[#C70000] to-[#FF5733] text-transparent bg-clip-text drop-shadow-md">
            Equipos en venta
          </p>
          <div className="flex flex-col w-full lg:w-[100%]">
            {loadingImages && productos_paginados.length > 0 && (
              <div className=" w-full text-center  h-[50vh] gap-3 flex-col flex items-center justify-center">
                {" "}
                {/* Aquí iría el loader, por ejemplo un spinner */}
                <div
                  class="spinner-border text-primary w-[3rem] h-[3rem]"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                <p className="text-primary font-semibold">Cargando productos</p>
              </div>
            )}
            {show_filter_products === false &&
              show_paginados === true &&
              loadingImages === false &&
              productos_paginados.length === 0 && (
                <div className=" w-full text-center h-[50vh] gap-3 flex-col flex items-center justify-center">
                  <svg
                    class="w-10 h-10 text-gray-800"
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
                      d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <p>
                    En este momento no estan disponibles equipos para la renta
                  </p>
                </div>
              )}
            {show_filter_products === true &&
              searchTerm &&
              filteredDatas.length === 0 && (
                <div className=" w-full text-center h-[50vh] gap-3 flex-col flex items-center justify-center">
                  <svg
                    class="w-10 h-10 text-gray-800"
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
                      d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <p>
                    No se han encontrado resultados relacionados con su
                    busqueda,por favor intentelo nuevamente
                  </p>
                </div>
              )}
            <div className="grid grid-cols-1 px-[1.5rem] lg:px-0 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-items-center ">
              {show_filter_products === true &&
                filteredDatas.map((dat, index) => (
                  <div
                    key={index}
                    className="bg-white w-full px-3 py-4 rounded-lg flex flex-col gap-2 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    <a
                      href={`/detalle-producto?id=${dat._id}`}
                      className="group relative"
                    >
                      <img
                        className="w-full h-[20vh] lg:h-[20vh] object-contain rounded-lg transition-all duration-300 group-hover:opacity-60"
                        src={dat.foto}
                        alt={`Renta de ${dat.nombre} en Ciudad del Carmen, Campeche`}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-8 h-8 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.07 12.93a10 10 0 1113.86 0 10 10 0 01-13.86 0zM12 8a4 4 0 100 8 4 4 0 000-8z"
                          />
                        </svg>
                      </div>
                    </a>

                    <p className="lg:text-[1rem] text-[0.8rem] text-center font-semibold text-gray-800 h-auto line-clamp-2 lg:line-clamp-1">
                      {dat.nombre.toUpperCase()}
                    </p>
                    <button
                      onClick={() => {
                        setId(dat._id), handleCopy(dat._id);
                      }}
                      className="mt-2 text-blue-600 hover:text-blue-800 transition-colors flex justify-center items-center w-full text-[0.8rem] underline"
                    >
                      <svg
                        class="w-4 h-4 "
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
                          d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                        />
                      </svg>
                      Copy URL
                    </button>
                    {dat.visibilidad_precio_venta === "VISIBLE" && (
                      <p className="text-center text-[#1E3A8A] lg:text-[1rem] text-[0.9rem] font-semibold">
                        ${dat.precio_venta} MXN
                      </p>
                    )}
                    {dat.visibilidad_precio_venta === "NO VISIBLE" && (
                      <p className="text-center text-gray-400 font-semibold lg:text-[1rem] text-[0.9rem]">
                        Precio a consultar
                      </p>
                    )}
                    {dat.stock === 0 && (
                      <p className="text-center text-[#D9534F] font-semibold rounded-[5px] lg:text-[1rem] text-[0.9rem]">
                        Rentado
                      </p>
                    )}
                    {dat.stock > 0 && (
                      <p className="text-center text-[#28A745] font-semibold rounded-[5px]  lg:text-[0.9rem] text-[0.9rem]">
                        Disponible
                      </p>
                    )}

                    <a
                      href={`/detalle-producto?id=${dat._id}`}
                      className="bg-[#323B75] text-white py-[0.3rem] lg:py-[0.5rem] mt-2 px-4 rounded-[5px] lg:text-[0.9rem] text-[0.7rem] text-center hover:bg-[#5F75B8] transition duration-300 ease-in-out"
                    >
                      Ver equipo
                    </a>
                  </div>
                ))}

              {productos_paginados.map((dat, index) => (
                <img
                  className="w-full h-[35vh] object-contain hidden"
                  src={dat.foto}
                  alt={`Renta de ${dat.nombre} en ciudad del carmen campeche`}
                  onLoad={() => {
                    setLoadingImages(false);
                  }}
                />
              ))}

              {show_paginados === true &&
                loadingImages === false &&
                productos_paginados.map((dat, index) => (
                  <div
                    key={index}
                    className="bg-white w-full px-3 py-4 rounded-lg flex flex-col gap-2 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    <a
                      href={`/detalle-producto?id=${dat._id}`}
                      className="group relative"
                    >
                      <img
                        className="w-full h-[20vh] lg:h-[20vh] object-contain rounded-lg transition-all duration-300 group-hover:opacity-60"
                        src={dat.foto}
                        alt={`Renta de ${dat.nombre} en Ciudad del Carmen, Campeche`}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-8 h-8 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.07 12.93a10 10 0 1113.86 0 10 10 0 01-13.86 0zM12 8a4 4 0 100 8 4 4 0 000-8z"
                          />
                        </svg>
                      </div>
                    </a>

                    <p className="lg:text-[1rem] text-[0.8rem] text-center font-semibold text-gray-800 h-auto line-clamp-2 lg:line-clamp-1">
                      {dat.nombre.toUpperCase()}
                    </p>
                    <button
                      onClick={() => {
                        setId(dat._id), handleCopy(dat._id);
                      }}
                      className="mt-2 text-blue-600 hover:text-blue-800 transition-colors flex justify-center items-center w-full text-[0.8rem] underline"
                    >
                      <svg
                        class="w-4 h-4 "
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
                          d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                        />
                      </svg>
                      Copy URL
                    </button>
                    {dat.visibilidad_precio_venta === "VISIBLE" && (
                      <p className="text-center text-[#1E3A8A] lg:text-[1rem] text-[0.9rem] font-semibold">
                        ${dat.precio_venta} MXN
                      </p>
                    )}
                    {dat.visibilidad_precio_venta === "NO VISIBLE" && (
                      <p className="text-center text-gray-400 font-semibold lg:text-[1rem] text-[0.9rem]">
                        Precio a consultar
                      </p>
                    )}
                    {dat.stock === 0 && (
                      <p className="text-center text-[#D9534F] font-semibold rounded-[5px] lg:text-[1rem] text-[0.9rem]">
                        Rentado
                      </p>
                    )}
                    {dat.stock > 0 && (
                      <p className="text-center text-[#28A745] font-semibold rounded-[5px]  lg:text-[0.9rem] text-[0.9rem]">
                        Disponible
                      </p>
                    )}

                    <a
                      href={`/detalle-producto?id=${dat._id}`}
                      className="bg-[#323B75] text-white py-[0.3rem] lg:py-[0.5rem] mt-2 px-4 rounded-[5px] lg:text-[0.9rem] text-[0.7rem] text-center hover:bg-[#5F75B8] transition duration-300 ease-in-out"
                    >
                      Ver equipo
                    </a>
                  </div>
                ))}
            </div>
            {show_paginados === true && loadingImages === false && (
              <div className="w-full py-[2rem] flex items-center justify-center gap-2">
                <div className="flex gap-3 items-center">
                  {/* Botón "Anterior" */}
                  <button
                    onClick={prevPage}
                    disabled={current_page === 1}
                    className="bg-[#0D6EFD] disabled:bg-[gray] text-white px-[1rem] py-[0.3rem] lg:text-[1rem] text-[0.8rem] rounded-[5px]"
                  >
                    <svg
                      class="w-4 h-4 lg:w-6 lg:h-6 text-white"
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
                        d="M5 12h14M5 12l4-4m-4 4 4 4"
                      />
                    </svg>
                  </button>

                  {/* Números de página dinámicos */}
                  <div className="flex gap-2">
                    {generatePageNumbers(current_page, total_pages).map(
                      (page) => (
                        <button
                          key={page}
                          disabled={current_page === page}
                          onClick={() => goToPage(page)}
                          className={`lg:px-3 lg:text-[1rem] text-[0.8rem]  py-1 rounded-lg ${
                            current_page === page
                              ? "lg:bg-[#0D6EFD] text-[blue] font-bold underline lg:text-[white]"
                              : "lg:bg-white text-black lg:border lg:border-gray-300"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  {/* Botón "Siguiente" */}
                  <button
                    onClick={nextPage}
                    disabled={current_page >= total_pages}
                    className="bg-[#0D6EFD] disabled:bg-[gray] text-white px-[1rem] py-[0.3rem] lg:text-[1rem] text-[0.8rem] rounded-[5px]"
                  >
                    <svg
                      class="w-4 h-4 lg:w-6 lg:h-6 text-white"
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
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
