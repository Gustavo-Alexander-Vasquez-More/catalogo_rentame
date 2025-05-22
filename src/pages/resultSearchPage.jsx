import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar2";
import Footer from "../components/footer";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function ResultSearchPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(10);

  // Obtener el término de búsqueda desde la query (?q=...)
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchTerm = params.get("q")?.toLowerCase() || "";

  useEffect(() => {
    setLoading(true);
    setVisibleCount(10); // Reinicia el contador al buscar algo nuevo
    axios
      .get("https://backrecordatoriorenta-production.up.railway.app/api/products")
      .then((res) => {
        const filtrados = res.data.response.filter((item) => {
          const nombre = (item.nombre || "").toLowerCase();
          const descripcion = (item.descripcion || "").toLowerCase();
          const tags = Array.isArray(item.tags) ? item.tags.join(" ").toLowerCase() : "";
          const categoria = Array.isArray(item.categoria)
            ? item.categoria.join(" ").toLowerCase()
            : (item.categoria || "").toLowerCase();
          if (!searchTerm.trim()) return false;
          return (
            nombre.includes(searchTerm) ||
            descripcion.includes(searchTerm) ||
            tags.includes(searchTerm) ||
            categoria.includes(searchTerm)
          );
        });
        setResults(filtrados);
      })
      .catch(() => setResults([]))
      .finally(() => setLoading(false));
  }, [searchTerm]);

  // Mostrar solo los primeros "visibleCount" resultados
  const visibleResults = results.slice(0, visibleCount);

  return (
    <div className="min-h-screen w-full bg-[#F1F1F1] flex flex-col">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="h-[25vh]" />
      <main className="w-full max-w-7xl mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6 gap-2">
          <div>
            <h1 className="text-3xl font-bold text-[#323B75] mb-1">
              Resultados de búsqueda
            </h1>
            <p className="text-gray-600 text-base">
              {searchTerm
                ? `Resultados para: "${searchTerm}"`
                : "Introduce un término de búsqueda."}
            </p>
          </div>
          {!loading && (
            <div className="text-sm text-gray-700 font-semibold mt-2 sm:mt-0">
              {results.length === 1
                ? "1 resultado encontrado"
                : `${results.length} resultados encontrados`}
            </div>
          )}
        </div>
        {loading ? (
          <div className="text-center text-gray-500 py-10 text-lg font-medium">Buscando...</div>
        ) : results.length === 0 ? (
          <div className="text-center text-red-600 font-semibold py-10 text-lg">
            No se encontraron resultados.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {visibleResults.map((item) => (
                <a
                  key={item._id}
                  href={`/detalle-producto?id=${item._id}`}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-between p-4 min-w-[220px] max-w-[270px] h-[390px] relative border border-gray-100 hover:border-[#323B75]"
                  style={{ boxShadow: "0 2px 8px 0 #0001" }}
                >
                  {/* Precio por semana sobre la imagen */}
                  {item.precio_x_semana && Number(item.precio_x_semana) > 0 && (
                    <div className="absolute left-2 top-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow z-10 opacity-90">
                      ${item.precio_x_semana} MXN x semana
                    </div>
                  )}
                  <img
                    loading="lazy"
                    src={item.foto}
                    alt={item.nombre}
                    className="w-full h-36 object-contain mb-2 relative bg-white p-4 rounded"
                    style={{ background: "white" }}
                  />
                  <h3 className="font-semibold text-[#323B75] text-center text-base truncate w-full mt-1">
                    {item.nombre}
                  </h3>
                  {/* Precio por día debajo del nombre */}
                  {(!item.precio_renta || Number(item.precio_renta) === 0) ? (
                    <div className="text-gray-700 font-bold text-sm mt-1">
                      Precio a consultar
                    </div>
                  ) : (
                    <div className="text-[#323B75] font-bold text-sm mt-1">
                      ${item.precio_renta} MXN x día
                    </div>
                  )}
                  <div className="flex flex-col items-center mt-2">
                    {item.stock === 0 ? (
                      <span className="text-[#D9534F] font-semibold rounded-[5px] text-[0.95rem] mt-1 bg-red-100 px-2 py-1">
                        Rentado
                      </span>
                    ) : (
                      <span className="text-[#28A745] font-semibold rounded-[5px] text-[0.95rem] mt-1 bg-green-100 px-2 py-1">
                        Disponible
                      </span>
                    )}
                  </div>
                  <button
                    className="mt-4 bg-[#323B75] text-white px-4 py-2 rounded-lg text-sm font-semibold text-center w-full hover:bg-[#1f2b5e] transition"
                    tabIndex={-1}
                  >
                    Ver equipo
                  </button>
                </a>
              ))}
            </div>
            {/* Botón cargar más */}
            {results.length > visibleCount && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setVisibleCount(visibleCount + 10)}
                  className="bg-[#323B75] text-white px-8 py-3 rounded-lg font-semibold text-base hover:bg-[#1f2b5e] transition"
                >
                  Cargar más
                </button>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
