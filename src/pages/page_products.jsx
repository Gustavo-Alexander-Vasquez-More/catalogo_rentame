import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/navbar2";
import { useLocation } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import axios from "axios";
import whatsapp from "../images/whatsapp.png";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import Ficha_tecnica from "./ficha_tecnica";
import FichaTecnica from "./PDF/ficha_tecnica.jsx";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MiniCalculadoraRenta from "../components/miniCalculadora.jsx";

function CarouselSimilares({ productos }) {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1279 }, items: 5 },
    tablet: { breakpoint: { max: 1279, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 639, min: 0 }, items: 1 },
  };

  if (!productos.length) return null;

  return (
    <div className="my-12 w-full flex flex-col items-center">
      <h3 className="text-2xl font-bold text-[#323B75] mb-6 text-center w-full">
        También te puede interesar
      </h3>
      <CarouselMulti
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        arrows
        itemClass="lg:px-[1rem] px-[0rem]" // <-- Sin padding lateral en mobile
        className="w-full z-30"
      >
        {productos.map((prod) => (
          <a key={prod._id} href={`/detalle-producto?id=${prod._id}`}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-between p-4 w-full max-w-xs mx-auto h-[370px] relative">
              {/* Oferta por semana */}
              {(prod.precio_x_semana && Number(prod.precio_x_semana) > 0) && (
                <div className="absolute  left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow z-10 opacity-90">
                  ${prod.precio_x_semana} MXN x semana
                </div>
              )}
              <img
                loading="lazy"
                src={prod.foto}
                alt={prod.nombre}
                className="w-full h-36 object-contain mb-2 relative"
                style={{ background: "white" }}
              />
              <h3 className="font-semibold text-[#323B75] text-center text-base truncate w-full">
                {prod.nombre}
              </h3>
              {/* Estado de disponibilidad */}
              {prod.stock === 0 && (
                <p className="text-center text-[#D9534F] font-semibold rounded-[5px] text-[0.95rem] mt-1">
                  Rentado
                </p>
              )}
              {prod.stock > 0 && (
                <p className="text-center text-[#28A745] font-semibold rounded-[5px] text-[0.95rem] mt-1">
                  Disponible
                </p>
              )}
              {/* Precio de renta por día */}
              {(() => {
                const precioNum = Number(prod.precio_renta);
                if (!isNaN(precioNum) && precioNum > 0) {
                  return (
                    <p className="text-center text-[#323B75] font-bold text-[1rem] mt-1">
                      ${prod.precio_renta} <span className="font-normal text-gray-600 text-sm">MXN/día</span>
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
              <p className="mt-2 bg-[#323B75] text-white px-4 py-2 rounded-lg text-sm font-semibold text-center w-full">
                Ver equipo
              </p>
            </div>
          </a>
        ))}
      </CarouselMulti>
    </div>
  );
}

export default function PageProduct() {
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [similares, setSimilares] = useState([]);

  function closeModal() {
    setModal(false);
    document.body.style.overflow = "auto";
  }

  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");

  async function get_product() {
    try {
      const { data } = await axios.get(
        `https://backrecordatoriorenta-production.up.railway.app/api/products/read_especific?_id=${productId}`
      );
      setDatas(data.response);
    } catch (error) {
      console.error("Error fetching product data:", error);
    } finally {
      setLoading(false);
    }
  }

  // Traer todos los productos para el carousel de similares
  async function get_all_products() {
    try {
      const { data } = await axios.get(
        "https://backrecordatoriorenta-production.up.railway.app/api/products/"
      );
      setAllProducts(data.response);
    } catch (error) {
      setAllProducts([]);
    }
  }

  useEffect(() => {
    get_product();
    get_all_products();
  }, [productId]);

  // Buscar productos similares (por categorías)
  useEffect(() => {
    if (datas.length > 0 && allProducts.length > 0) {
      const equipo = datas[0];
      const categoriasEquipo = Array.isArray(equipo.categoria) ? equipo.categoria : [equipo.categoria];
      const similaresFiltrados = allProducts.filter(
        prod =>
          prod._id !== equipo._id &&
          (
            Array.isArray(prod.categoria)
              ? prod.categoria.some(cat => categoriasEquipo.includes(cat))
              : categoriasEquipo.includes(prod.categoria)
          )
      );
      setSimilares(similaresFiltrados);
    }
  }, [datas, allProducts]);

  return (
    <div className="min-h-screen w-full" style={{ background: "#F1F1F1" }}>
      {datas?.length > 0 && (
        <Helmet>
          <meta charSet="utf-8" />
          <title>{datas[0]?.nombre} - Rentame Carmen</title>
          <meta
            name="keywords"
            content={`${datas[0]?.nombre}, ${
              datas[0]?.descripcion
            }, renta de maquinaria, venta de maquinaria, ${
              datas[0]?.tipo_uso
            }, ${datas[0]?.tags?.join(", ")}`}
          />
          <link
            rel="canonical"
            href={`https://www.rentamecarmen.com.mx/detalle-producto?id=${datas[0]?._id}`}
          />
          <meta name="description" content={datas[0].descripcion} />
          <link rel="shortcut icon" href={datas[0]?.foto} type="image/png" />
        </Helmet>
      )}

      {modal && <Ficha_tecnica closeModal={closeModal} id={id} />}

      <a
        href="https://wa.link/gpu01d"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-5 z-30 shadow-xl bg-white/50 rounded-full p-2 hover:scale-105 transition"
      >
        <img className="w-16 lg:w-24" src={whatsapp} alt="WhatsApp" />
      </a>

      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* Espacio para que el navbar no tape el contenido */}
      <div className="w-full lg:h-[25vh] h-[15vh]" />

      <main className="w-full mx-auto lg:px-[4rem] px-[1rem] pb-5">
        {loading ? (
          <div className="text-center py-10 text-gray-600 font-semibold text-lg">
            Cargando producto...
          </div>
        ) : (
          datas.map((dat, index) => (
            <section
              key={index}
              className="flex flex-col lg:flex-row gap-8 items-stretch justify-center my-10 bg-white rounded-2xl shadow-lg py-8 px-4 sm:px-8 max-w-5xl mx-auto w-full"
            >
              {/* Imagen */}
              <div className="flex justify-center items-start w-full lg:w-[45%] mb-6 lg:mb-0">
                <div className="w-full max-w-[400px] aspect-square flex justify-center items-center  rounded-xl shadow-inner p-4">
                  <img
                    src={dat.foto}
                    alt={dat.nombre}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Detalles */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  
                  <h1 className="text-3xl font-bold text-[#323B75] mb-3">
                    {dat.nombre}
                  </h1>

                  {/* Categorías */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {Array.isArray(dat.categoria) ? dat.categoria.map((cat, idx) => (
                      <span
                        key={idx}
                        className="bg-[#e0e7ff] text-[#323B75] px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {cat}
                      </span>
                    )) : (
                      <span className="bg-[#e0e7ff] text-[#323B75] px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {dat.categoria}
                      </span>
                    )}
                  </div>

                  {/* Estado */}
                  <div className="mb-3">
                    <span
                      className={`text-base sm:text-lg font-semibold ${
                        dat.stock > 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {dat.stock > 0 ? "Disponible" : "Rentado"}
                    </span>
                  </div>

                  {/* Precios */}
                  {Array.isArray(dat.precios_visibles) && dat.precios_visibles.length > 0 && (
                    <div className="flex flex-col gap-1 mb-3">
                      {dat.precios_visibles.includes("renta") && (
                        <>
                          <span className="text-gray-800 font-semibold text-base">
                            Precio de Renta por día: <span className="text-[#323B75]">${dat.precio_renta}</span>
                          </span>
                          <MiniCalculadoraRenta precioDia={Number(dat.precio_renta)} />
                        </>
                      )}
                      {dat.precios_visibles.includes("semana") && dat.precio_x_semana && (
                        <span className="text-gray-800 font-semibold text-base">
                          Precio de Renta por semana: <span className="text-[#323B75]">${dat.precio_x_semana}</span>
                        </span>
                      )}
                      {dat.precios_visibles.includes("venta") && dat.precio_venta && (
                        <span className="text-gray-800 font-semibold text-base">
                          Precio de Venta: <span className="text-[#323B75]">${dat.precio_venta}</span>
                        </span>
                      )}
                    </div>
                  )}

                  {/* Si no hay precios visibles */}
                  {(dat.precios_visibles.length === 0) && (
                    <p className="text-gray-700 font-semibold text-lg mb-3">
                      PRECIO A CONSULTAR
                    </p>
                  )}

                  {/* Botones */}
                  <div className="flex flex-wrap gap-4 mt-4 mb-6">
                    {Array.isArray(dat.disponibilidad) && dat.disponibilidad.includes("renta") && (
                      <a
                        href={`https://api.whatsapp.com/send?phone=529381958284&text=Hola, estoy interesado en rentar el siguiente equipo: ${dat.nombre}`}
                        className="px-5 py-2 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors text-base shadow"
                      >
                        Rentar equipo!
                      </a>
                    )}
                    {Array.isArray(dat.disponibilidad) && dat.disponibilidad.includes("venta") && (
                      <a
                        href={`https://api.whatsapp.com/send?phone=529381958284&text=Hola, estoy interesado en comprar el siguiente equipo: ${dat.nombre}`}
                        className="px-5 py-2 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors text-base shadow"
                      >
                        Comprar equipo!
                      </a>
                    )}
                  </div>
                </div>

                <a
                  href={
                    localStorage.getItem("products_current_page")
                      ? `/renta-equipos?category=todos&page=${localStorage.getItem("products_current_page")}`
                      : "/renta-equipos?category=todos&page=1"
                  }
                  className="inline-flex items-center gap-2 text-[#323B75] hover:underline mt-2 text-base"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Regresar al catálogo
                </a>
              </div>
            </section>
          ))
        )}

        {/* Descripción y tags */}
        {datas.map((dat, index) => (
          <section
            key={`desc-${index}`}
            className="mx-auto mt-8 space-y-4 pb-5 bg-white rounded-xl shadow py-[2rem] px-[3rem]"
          >
            <h2 className="text-xl font-bold text-[#323B75]">
              Descripción del equipo
            </h2>
            <p className="text-gray-700 text-justify leading-relaxed">
              {dat.descripcion?.toUpperCase()}
            </p>

            {/* Botón de ficha técnica aquí */}
            <div>
              <PDFDownloadLink
                document={<FichaTecnica _id={productId} />}
                fileName={`Ficha_Tecnica-${dat.nombre}.pdf`}
                className="inline-flex items-center gap-2 bg-[#323B75] text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-[#1f2b5e] transition mt-2"
              >
                {({ loading }) =>
                  loading ? (
                    <span>Cargando ficha técnica...</span>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      Descargar Ficha Técnica
                    </>
                  )
                }
              </PDFDownloadLink>
            </div>

            {dat.tags && dat.tags.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#323B75] mb-2">Tags</h3>
                {/* Dropdown para mobile, lista normal en desktop */}
                <div className="block lg:hidden">
                  <details
                    className="bg-[#e0e7ff] rounded-lg overflow-hidden transition-all duration-300"
                    onToggle={e => {
                      const content = e.target.querySelector('.tags-content');
                      if (e.target.open) {
                        content.classList.remove('max-h-0', 'opacity-0');
                        content.classList.add('max-h-96', 'opacity-100');
                      } else {
                        content.classList.remove('max-h-96', 'opacity-100');
                        content.classList.add('max-h-0', 'opacity-0');
                      }
                    }}
                  >
                    <summary className="cursor-pointer px-4 py-2 text-[#323B75] font-medium select-none">
                      Ver tags ({dat.tags.length})
                    </summary>
                    <div
                      className="tags-content flex flex-wrap gap-2 p-4 transition-all duration-300 max-h-0 opacity-0"
                      style={{ willChange: "max-height, opacity" }}
                    >
                      {dat.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-white text-[#323B75] px-3 py-1 rounded-full text-sm font-medium border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </details>
                </div>
                <div className="hidden lg:flex flex-wrap gap-2 mt-2">
                  {dat.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#e0e7ff] text-[#323B75] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}

        {/* Carousel de productos similares */}
        {similares.length > 0 && datas.length > 0 && (
          <div className="flex justify-center w-full">
            <CarouselSimilares productos={similares} equipoActualId={datas[0]._id} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
