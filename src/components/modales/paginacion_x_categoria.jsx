import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PaginacionCategoria({ productos, categorias }) {
  const [visibleCount, setVisibleCount] = useState(9);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filtrar productos donde su array categoria incluya alguno de los nombres seleccionados
  const productosFiltrados = categorias && categorias.length > 0
    ? productos.filter(prod =>
        Array.isArray(prod.categoria)
          ? prod.categoria.some(cat => categorias.includes(cat))
          : categorias.includes(prod.categoria)
      )
    : productos;

  const handleVerMas = () => setVisibleCount(prev => prev + 9);

  return (
    <div className="w-full">
      {productosFiltrados.length === 0 ? (
        <div className="w-full flex justify-center items-center py-10 text-gray-500">
          No hay productos en estas categorías.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productosFiltrados.slice(0, visibleCount).map((dat, index) => (
              <div
                key={index}
                className="bg-white w-full px-3 py-4 rounded-lg flex flex-col gap-2 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <a
                  href={`/detalle-producto?id=${dat._id}`}
                  className="group relative"
                >
                  {/* Oferta por semana */}
                  {(dat.precio_x_semana && Number(dat.precio_x_semana) > 0) && (
                    <div className="absolute bottom-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow z-10 opacity-90">
                      ${dat.precio_x_semana} MXN x semana
                    </div>
                  )}
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
                  {dat.nombre?.toUpperCase()}
                </p>
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
          {visibleCount < productosFiltrados.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleVerMas}
                className="bg-[#0D6EFD] hover:bg-[#0b5ed7] text-white px-6 py-2 rounded-lg shadow transition"
              >
                Ver más equipos
              </button>
            </div>
          )}
        </>
      )}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 left-8 z-50 bg-[#0D6EFD] text-white p-3 rounded-full shadow-lg hover:bg-[#0b5ed7] transition"
          aria-label="Volver arriba"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
