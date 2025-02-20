import axios from "axios";
import React, { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Lightbox from "./ligthbox";
import Ficha from "../pages/PDF/ficha_tecnica";
import ficha_tecnica from "../images/ficha_tecnica.jpg";

export default function DetalleProducto({ closeModal, id }) {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nombre, setNombre] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  async function get() {
    try {
      const { data } = await axios.get(
        `https://backrecordatoriorenta-production.up.railway.app/api/products/read_especific?_id=${id}`
      );
      setDatas(data.response);
      setNombre(data?.response[0].nombre);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    get();
  }, []);

  const openLightbox = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Lightbox
          isOpen={isOpen}
          closeLightbox={closeLightbox}
          currentImage={currentImage}
        />
      )}

      <div className="w-full h-screen fixed top-0 left-0 bg-[#00000075] flex justify-center items-center">
        <div className="bg-white rounded-lg w-[90%] lg:w-[60%] overflow-y-auto max-h-[90vh] flex flex-col gap-4 pt-6 px-6">
          <div className="flex justify-between items-center mb-4">
            <PDFDownloadLink
              document={<Ficha _id={id} />}
              fileName={`Ficha_Tecnica-${nombre}.pdf`}
            >
              {({ loading }) =>
                loading ? (
                  <div className="w-full flex justify-center items-center">
                    <div className="flex flex-col gap-2 items-center">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p>Generando PDF...</p>
                    </div>
                  </div>
                ) : (
                  <button className="bg-[#004AAD] text-white px-4 py-2 rounded-lg hover:bg-[#4590f1] flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"
                      />
                    </svg>
                    Descargar Ficha Técnica
                  </button>
                )
              }
            </PDFDownloadLink>
            <button
              onClick={closeModal}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
              </svg>
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-32">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {datas.map((dat) => (
                <div key={dat._id} className="flex flex-col gap-6 text-sm">
                  <div className="relative">
                    <img
                      src={ficha_tecnica}
                      alt={`Renta de ${dat.nombre} en Ciudad del Carmen`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-6 text-white font-semibold text-lg">
                      {dat.nombre.toUpperCase()}
                    </div>

                    <div className="absolute top-24 left-6 text-white text-sm bg-opacity-70 bg-black p-2 rounded-lg">
                      <p className="font-bold">Código del Producto:</p>
                      <p>{dat.codigo}</p>
                      <p className="font-bold mt-2">Precio del Producto:</p>
                      <p>${dat.precio} MXN</p>
                    </div>
                  </div>

                  <div className="text-sm text-gray-700 bg-gray-100 p-4 rounded-lg shadow-md">
                    <p>{dat.descripcion}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
