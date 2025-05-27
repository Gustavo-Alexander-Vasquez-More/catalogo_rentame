import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

export default function AllProducts() {
  const location = useLocation();
  const navigate = useNavigate();

  // Leer params de la URL
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("category");
  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const [current_page, setCurrent_page] = useState(pageParam);

  const [loading, setLoading] = useState(true);
  const [loadingImages, setLoadingImages] = useState(true);
  const [productos_paginados, setProductos_paginados] = useState([]);
  const [total_pages, setTotal_pages] = useState(0);
  const [copied, setCopied] = useState(false);

  async function get_products_paginates(page = current_page) {
    setLoadingImages(true); // <-- Activa el loader antes de la petición
    try {
      const { data } = await axios.get(
        `https://backrecordatoriorenta-production.up.railway.app/api/products/read_pag?page=${page}`
      );
      setTotal_pages(data?.totalPages);
      setProductos_paginados(data.response);
      setLoading(false);
      setLoadingImages(false); // <-- Desactiva el loader después de cargar
    } catch (error) {
      if (
        error.response?.data?.message ===
        "No hay productos disponibles para 'venta'."
      ) {
        setLoadingImages(false);
      }
      if (
        error.response?.data?.message ===
        "Página fuera de rango. Por favor, selecciona una página válida."
      ) {
        // No guardes la página inválida en localStorage
        navigate("?category=todos&page=1", { replace: true });
        return;
      }
      setLoading(false);
      setLoadingImages(false); // <-- Desactiva el loader también en error
    }
  }

  // Actualiza la página cuando cambia el parámetro en la URL
  useEffect(() => {
    if (categoryParam === "todos") {
      setCurrent_page(pageParam);
      get_products_paginates(pageParam);
      // Solo guarda en localStorage si la página es válida
      if (!isNaN(pageParam) && pageParam > 0) {
        localStorage.setItem("products_current_page", pageParam);
      }
    }
    // eslint-disable-next-line
  }, [categoryParam, pageParam]);

  function goToPage(page) {
    if (categoryParam === "todos") {
      navigate(`?category=todos&page=${page}`);
      // El useEffect se encargará de actualizar el resto
    }
  }

  function nextPage() {
    if (current_page < total_pages && categoryParam === "todos") {
      goToPage(current_page + 1);
    }
  }
  function prevPage() {
    if (current_page > 1 && categoryParam === "todos") {
      goToPage(current_page - 1);
    }
  }

  function generatePageNumbers(currentPage, totalPages, maxPagesToShow = 7) {
    const pages = [];
    const halfRange = Math.floor(maxPagesToShow / 2);
    let start = Math.max(currentPage - halfRange, 1);
    let end = Math.min(start + maxPagesToShow - 1, totalPages);
    if (end - start + 1 < maxPagesToShow) {
      start = Math.max(end - maxPagesToShow + 1, 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  const handleCopy = (_id) => {
    const url = `/detalle-producto?id=${_id}`;
    navigator.clipboard.writeText(window.location.origin + url);
    setCopied(true);
    // notyf.success("Enlace copiado"); // Si tienes notyf, descomenta esta línea
  };

  return (
    <div className=''>
      {loadingImages ? (
        <div className="w-full flex justify-center items-center py-10">
          {/* Loader simple, puedes cambiarlo por un spinner animado */}
          <svg className="animate-spin h-10 w-10 text-[#0D6EFD]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
          </svg>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos_paginados.map((dat, index) => (
            <div
              key={index}
              className="bg-white w-full px-3 py-4 rounded-lg flex flex-col gap-2 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <a
                href={`/detalle-producto?id=${dat._id}`}
                className="group relative"
              >
                {/* Oferta por semana */}
                {(dat.precio_x_semana && dat.precio_x_semana !== '0') && (
                  <div className="absolute bottom-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow z-10 opacity-90">
                    ${dat.precio_x_semana} MXN x semana!
                  </div>
                )}
                <img
                  className="w-full h-[20vh] lg:h-[20vh] object-contain rounded-lg transition-all duration-300 group-hover:opacity-60"
                  src={dat.foto}
                  alt={`Renta de ${dat.nombre} en Ciudad del Carmen, Campeche`}
                />
              </a>
              <p className="lg:text-[1rem] text-[0.8rem] text-center font-semibold text-gray-800 h-auto line-clamp-2 lg:line-clamp-1">
                {dat.nombre.toUpperCase()}
              </p>
              <button
                onClick={() => {
                  handleCopy(dat._id);
                }}
                className="mt-2 text-blue-600 hover:text-blue-800 transition-colors flex justify-center items-center w-full text-[0.8rem] underline"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
               {/* Precio de renta por día */}
              {(() => {
                const precioNum = Number(dat.precio_renta);
                if (!isNaN(precioNum) && precioNum > 0) {
                  return (
                    <p className="text-center text-[#323B75] font-bold text-[1rem] mt-1">
                      ${dat.precio_renta} <span className="font-normal text-gray-600 text-sm">MXN/día</span>
                    </p>
                  );
                } else {
                  return (
                    <p className="text-center text-gray-500 font-semibold text-[0.95rem] mt-1">
                      Consultar precio
                    </p>
                  );
                }
              })()}
              <a
                href={`/detalle-producto?id=${dat._id}`}
                className="bg-[#323B75] text-white py-[0.3rem] lg:py-[0.5rem] mt-2 px-4 rounded-[5px] lg:text-[0.9rem] text-[0.7rem] text-center hover:bg-[#5F75B8] transition duration-300 ease-in-out"
              >
                Ver equipo
              </a>
            </div>
          ))}
        </div>
      )}
      {categoryParam === "todos" && (
        <div className="w-full py-4 flex items-center justify-center">
          <nav className="flex items-center gap-2 select-none">
            {/* Botón "Anterior" */}
            <button
              onClick={prevPage}
              disabled={current_page === 1}
              className="p-2 text-[#0D6EFD] hover:text-[#2563eb] disabled:text-gray-300 bg-transparent"
              aria-label="Anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {/* Números de página */}
            <div className="flex gap-1">
              {generatePageNumbers(current_page, total_pages).map(page => (
                <button
                  key={page}
                  disabled={current_page === page}
                  onClick={() => goToPage(page)}
                  className={`
                    px-2 py-1 bg-transparent border-none rounded
                    ${current_page === page
                      ? "text-[#0D6EFD] underline font-bold"
                      : "text-gray-700 hover:text-[#0D6EFD]"}
                    transition
                  `}
                  style={{ minWidth: "2rem" }}
                >
                  {page}
                </button>
              ))}
            </div>
            {/* Botón "Siguiente" */}
            <button
              onClick={nextPage}
              disabled={current_page >= total_pages}
              className="p-2 text-[#0D6EFD] hover:text-[#2563eb] disabled:text-gray-300 bg-transparent"
              aria-label="Siguiente"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}
