import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import icon from "../images/rentame_icon.png";
import Footer from "../components/footer";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import Navbar from '../components/navbar';
import banerRenta from '../images/ventaMaquinaria.jpg';
export default function equipos_renta() {
      const [isOpen, setIsOpen] = useState(false);
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
      const [loadingImages2, setLoadingImages2] = useState(true);
      const [loadingImages3, setLoadingImages3] = useState(true);
      const [paginacion, setPaginacion] = useState();
      const [total_pages, setTotal_pages] = useState();
   
      const [current_page, setCurrent_page] = useState(() => {
        const savedPage = localStorage.getItem("products_current_page");
        return savedPage ? parseInt(savedPage, 10) : 1;
      });
      const [searchTerm, setSearchTerm] = useState();
      const [loading, setLoading] = useState(true); // Estado de carga
    
      const [id, setId] = useState(null);
    
      const handleImageLoad = () => {
        setLoadingImages(false); // Una vez que la imagen se haya cargado
      };
    
      async function get_all_products() {
        try {
          const { data } = await axios.get(
            "https://backrecordatoriorenta-production.up.railway.app/api/products/"
          );
          console.log(data.response);
          setAll_products(data.response);
          setLoading(false); // Datos cargados, actualizamos el estado de carga
        } catch (error) {
          console.error("Error fetching image data:", error);
          setLoading(false); // Si hay un error, dejamos de mostrar el estado de carga
        }
      }
      async function get_products_paginates(page = current_page) {
        try {
          const { data } = await axios.get(
            `https://backrecordatoriorenta-production.up.railway.app/api/products/read_pag?page=${page}`
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
        get_all_products();
        get_products_paginates();
      }, []);
    
      function buscar() {
        const filtered = all_products.filter((dat) =>
          dat.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredDatas(filtered);
      }
    
      function buscar_boton() {
        if (searchTerm) {
          setShow_paginados(false);
          setShow_filter_products(true);
    
          const filtered = all_products.filter((dat) =>
            dat.nombre.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFilteredDatas(filtered);
        } else {
          setShow_paginados(true);
          setShow_filter_products(false);
        }
      }
    
      //FUNCION CUANDO LIMPIAS EL BUSCADOR CON LA X
      function clear() {
        setSearchTerm("");
        setShow_paginados(true);
        setShow_filter_products(false);
      }
      //FUNCION CUANDO DAS ENTER EN EL BUSCADOR
      const handleKeyDown = (e) => {
        if (e.key === "Enter" && searchTerm) {
          setShow_paginados(false);
          setShow_filter_products(true);
          buscar();
        }
        if (e.key === "Enter" && !searchTerm) {
          setShow_paginados(true);
          setShow_filter_products(false);
        }
      };
      function handlePageChange(pageNumber) {
        setLoadingImages(true);
        // Guardamos la página seleccionada en localStorage
        setCurrent_page(pageNumber);
        localStorage.setItem("products_current_page", pageNumber);
    
        // Llamamos a la función para obtener los productos de la página seleccionada
        get_products_paginates(pageNumber);
      }
      const handleShowMore = () => {
        setVisibleCount((prev) => prev + 6); // Incrementa la cantidad visible en 6
      };
      const handleToggleMenu = () => setIsOpen(!isOpen);
    
      function nextPage() {
        if (current_page < total_pages) {
          window.scrollTo(0, 0);
          setLoadingImages(true);
          setCurrent_page(current_page + 1);
          get_products_paginates(current_page + 1);
          localStorage.setItem("products_current_page", current_page + 1);
        }
      }
      function prevPage() {
        if (current_page > 1) {
          window.scrollTo(0, 0);
          setLoadingImages(true);
          setCurrent_page(current_page - 1);
          get_products_paginates(current_page - 1);
          localStorage.setItem("products_current_page", current_page - 1);
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
          localStorage.setItem("products_current_page", page);
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
    <>
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
    {/* LOADER DE IMAGENES */}
    
    <div className='w-full flex flex-col relative items-center'>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='w-full flex z-0 justify-center items-center h-[60vh]'>
        <img
          loading='lazy'
          className='h-[60vh] object-cover object-center w-full relative'
          src={banerRenta}
          alt=''
        />
        <div className='w-full h-[60vh] opacity-60 bg-black absolute'></div>
        <div className='absolute z-40 w-full h-[60vh] flex justify-center items-center text-white flex-col text-center px-[15%]'>
          <h1 className='text-4xl font-bold relative'>Catálogo de Equipos en Renta</h1>
          <p className='mt-4 text-lg relative'>
            Conoce Nuestros Equipos Disponibles para Renta.
          </p>
        </div>
      </div>
      <div className="flex lg:w-[60%] w-[100%] lg:px-0 px-3 pt-[2rem] lg:pt-[2rem] justify-center">
              <div className="relative w-full flex items-center">
                <input
                  type="text"
                  placeholder="Que estas buscando?"
                  onKeyDown={handleKeyDown}
                  className="w-full lg:text-[1rem] text-[0.9rem] py-[0.7rem] px-4 border border-gray-300 rounded-l-[7px] focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el término de búsqueda
                />
                {searchTerm && (
                  <button
                    onClick={clear}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 transition duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </button>
                )}
              </div>
              <button
                className="px-[1.5rem] lg:px-[2.5rem] bg-[#4C63B6] text-white font-semibold rounded-r-[7px] shadow-lg hover:bg-[#3e53a0] transition duration-300 ease-in-out"
                onClick={buscar_boton}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-search w-4 lg:w-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </div>
           
            {/* TODO LOS PRODUCTOS PAGINADOS */}
            <div className="w-full   min-h-[50vh]  lg:px-[5rem] py-[2rem] gap-3 flex flex-col">
              {show_paginados === true && (
                <p className="font-bold text-[1.3rem] px-[1.5rem] lg:pb-4 lg:text-[1.7rem] text-secondary bg-gradient-to-r from-[#C70000] to-[#FF5733] text-transparent bg-clip-text drop-shadow-md">
                  Nuestros equipos :
                </p>
              )}
              {show_paginados === false && (
                <p className="font-bold text-[1rem] px-[1.5rem] lg:text-[1.7rem] text-secondary bg-gradient-to-r from-[#C70000] to-[#FF5733] text-transparent bg-clip-text drop-shadow-md">
                  Resultados ({filteredDatas.length})
                </p>
              )}
               {loadingImages && productos_paginados.length > 0 && (
        <div className=" w-full text-center gap-3 flex-col flex items-center justify-center">
          <div
            class="spinner-border text-[#222D72] w-[3rem] h-[3rem]"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
              {/* CONTENEDOR DE CARDS*/}
              <div className="flex flex-col w-full lg:w-[100%]">
                {/* MENSAJE POR SI NO HAY NINGUN PRODUCTO */}
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
                        En este momento no estan disponibles equipos para la
                        renta
                      </p>
                    </div>
                  )}
                {/* MENSAJE POR SI NO ENCUENTRA NINGUN PRODUCTO */}
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
                {/* TODOS LOS PRODUCTOS MOSTRADOS POR BUSQUEDA */}
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
                {/* TODOS LOS PRODUCTOS PAGINADOS */}
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
    </>
        
  );
}
