import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar2";
import { useLocation } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import axios from "axios";
import whatsapp from "../images/whatsapp.png";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import Ficha_tecnica from "./ficha_tecnica";
import FichaTecnica from "./PDF/ficha_tecnica.jsx";

export default function PageProduct() {
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    get_product();
  }, [productId]);

  return (
    <>
      {datas?.length > 0 && (
        <Helmet>
          <meta charSet="utf-8" />
          <title>{datas[0]?.nombre} - Rentame Carmen</title>
          <link
            rel="canonical"
            href={`https://www.rentamecarmen.com.mx/detalle-producto?id=${datas[0]?.id}`}
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
        className="fixed bottom-6 right-5 z-50 shadow-xl bg-white/50 rounded-full p-2 hover:scale-105 transition"
      >
        <img className="w-16 lg:w-24" src={whatsapp} alt="WhatsApp" />
      </a>

      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="h-[15vh]" />

      <main className="max-w-7xl mx-auto px-4">
        {loading ? (
          <div className="text-center py-10 text-gray-600 font-semibold text-lg">Cargando producto...</div>
        ) : (
          datas.map((dat, index) => (
            <section
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start justify-center my-10"
            >
              {/* Imagen */}
              <div className="flex-1 flex justify-center items-center">
                <img
                  src={dat.foto}
                  alt={dat.nombre}
                  className="w-full max-w-md bg-white p-4 object-contain shadow-xl rounded-lg"
                />
              </div>

              {/* Detalles */}
              <div className="flex-1 space-y-4">
                <nav className="text-sm text-gray-500 space-x-2">
                  <a href="/" className="hover:underline text-blue-600">Inicio</a>
                  <span>/</span>
                  <span className="text-gray-900 font-medium">Equipos</span>
                </nav>

                <h1 className="text-3xl font-bold text-[#323B75]">{dat.nombre}</h1>

                <div className="flex flex-col gap-2 items-start">
                <span
                  className={`text-lg font-semibold ${
                    dat.stock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {dat.stock > 0 ? "Disponible" : "Rentado"}
                </span>

                <PDFDownloadLink
                  document={<FichaTecnica _id={productId} />}
                  fileName={`Ficha_Tecnica-${dat.nombre}.pdf`}
                  className="inline-flex items-center gap-2 bg-[#323B75]  text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-[#1f2b5e] transition"
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
                <p className="text-gray-700 font-semibold text-lg">PRECIO A CONSULTAR</p>

                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-[#323B75] hover:underline"
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

                <div className="flex flex-wrap gap-4 mt-4">
                  {(dat.tipo_uso === "venta" || dat.tipo_uso === "renta") && (
                    <a
                      href={`https://api.whatsapp.com/send?phone=529381958284&text=Hola, estoy interesado en ${dat.tipo_uso === "venta" ? "comprar" : "rentar"} el siguiente equipo: ${dat.nombre}`}
                      className={`px-4 py-2 rounded-lg font-semibold text-white transition-colors ${
                        dat.stock > 0 ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"
                      }`}
                    >
                      Rentar equipo!
                    </a>
                  )}
                  {dat.tipo_uso === "venta" && (
                    <a
                      href={`https://api.whatsapp.com/send?phone=529381958284&text=Hola, estoy interesado en comprar el siguiente equipo: ${dat.nombre}`}
                      className="px-4 py-2 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors"
                    >
                      Comprar equipo!
                    </a>
                  )}
                </div>
              </div>
            </section>
          ))
        )}

        {datas.map((dat, index) => (
          <section
            key={`desc-${index}`}
            className="max-w-4xl mx-auto mt-8 space-y-2 pb-5"
          >
            <h2 className="text-xl font-bold text-[#323B75]">Descripción del equipo</h2>
            <p className="text-gray-700 text-justify leading-relaxed">
              {dat.descripcion?.toUpperCase()}
            </p>

            {dat.tags && dat.tags.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#323B75]">Tags</h3>
                <div className="flex flex-wrap gap-2 mt-2">
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
      </main>

      <Footer />
    </>
  );
}
