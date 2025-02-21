import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useLocation } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import axios from "axios";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import Ficha_tecnica from "./ficha_tecnica";
import FichaTecnica from "./PDF/ficha_tecnica.jsx";
export default function PageProduct() {
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState();
  const [datas, setDatas] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    window.scrollTo(0, 0);
    setModal(true);
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    setModal(false);
    document.body.style.overflow = "auto";
  }
  // Obtenemos el valor de los parámetros de la URL
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");

  // Suponiendo que tienes una función o API que obtiene el producto por su ID
  const product = {
    id: productId,
    name: "Taladro Eléctrico",
    description:
      "Este es un potente taladro eléctrico ideal para trabajos en casa o profesionales. Ligero, duradero y fácil de usar.",
    price: 3500,
    image: "https://via.placeholder.com/300",
  };
  async function get_product() {
    try {
      const { data } = await axios.get(
        `https://backrecordatoriorenta-production.up.railway.app/api/products/read_especific?_id=${productId}`
      );
      setDatas(data.response);
      setLoading(false); // Datos cargados, actualizamos el estado de carga
    } catch (error) {
      console.error("Error fetching image data:", error);
      setLoading(false); // Si hay un error, dejamos de mostrar el estado de carga
    }
  }

  //   async function productos_relacionados() {
  //    try {
  //     const { data } = await axios.get(
  //         `https://backrecordatoriorenta-production.up.railway.app/api/products/read_especific?_id=${productId}`
  //       );
  //     const producto = data?.response[0].nombre  // Nombre del producto actual
  //     console.log(producto);

  //     if (data.length > 0) {
  //       // Dividir el nombre del producto en palabras individuales
  //       const palabrasProducto = producto.toLowerCase().split(/\s+/);

  //       // Filtrar productos cuyo nombre contenga alguna de las palabras del producto actual
  //       const encontrar_productos_relacionados = datas_full.filter(dat => {
  //         // Dividir el nombre del producto en palabras
  //         const palabrasProductoRelacionado = dat.nombre.toLowerCase().split(/\s+/);

  //         // Verificar si alguna palabra del producto actual está en el nombre del producto relacionado
  //         return palabrasProducto.some(palabra =>
  //           palabrasProductoRelacionado.some(palabraRelacionado =>
  //             palabraRelacionado.includes(palabra)
  //           )
  //         );
  //       });

  //       setRelacionados(encontrar_productos_relacionados)
  //     }
  //    } catch (error) {
  //     console.log(error);
  //    }
  //   }

  useEffect(() => {
    get_product();
    // productos_relacionados()
  }, [productId]);

  const descriptionLimit = 250;

  // Limitar la descripción
  const descriptionPreview =
    datas[0]?.descripcion.length > descriptionLimit
      ? datas[0]?.descripcion.slice(0, descriptionLimit) + "..."
      : datas[0]?.descripcion;

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
          <link
            rel="shortcut icon"
            href={datas[0]?.foto}
            type="../images/logo.png"
          />
        </Helmet>
      )}
      {modal && <Ficha_tecnica closeModal={closeModal} id={id} />}
      <div className="flex flex-col w-full h-auto bg-[#e3e2e2]">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div
          className={`flex flex-col items-center w-full h-auto bg-[#e3e2e2] transition-transform duration-500 ${
            isOpen ? "transform translate-y-[30px]" : "transform translate-y-0"
          }`}
        >
          <div className="flex flex-col md:flex-row mt-10 lg:min-h-[50vh] w-full justify-center items-center px-[1.5rem] lg:px-4 ">
            {datas.map(
              (dat) =>
                dat && (
                  <>
                    {/* Columna de imagen */}
                    <div className="w-full  mb-6 max-h-[60vh]  md:mb-0 flex justify-center">
                      <img
                        src={dat.foto}
                        alt={dat.name}
                        className="w-full md:w-[60%] bg-[white] p-5 object-contain  shadow-lg"
                      />
                    </div>

                    {/* Columna de detalles del producto */}
                    <div className="w-full   lg:pr-[8rem] lg:pl-6 flex flex-col justify-center items-start">
                      <div className="flex items-center gap-1 text-gray-700 text-[0.9rem] font-semibold">
                        <svg
                          className="w-6 h-6 text-[#323B75]"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <a
                          href="/"
                          className="hover:text-blue-600 transition-colors underline"
                        >
                          Inicio
                        </a>
                        <span className="text-gray-500">/</span>
                        <p className="text-gray-900">Equipos</p>
                      </div>

                      <h1 className="lg:text-3xl text-xl font-bold text-[#323B75] mt-2 mb-2">
                        {dat.nombre}
                      </h1>
                      {dat.stock === 0 && (
                        <p className="text-center text-[#D9534F] font-semibold rounded-[5px] lg:text-[1.2rem] text-[1rem]">
                          Rentado
                        </p>
                      )}
                      {dat.stock > 0 && (
                        <p className="text-center text-[#28A745] font-semibold rounded-[5px]  lg:text-[1.2rem] text-[1rem]">
                          Disponible
                        </p>
                      )}

                      <PDFDownloadLink
                        className="py-2 mb-3 px-3 rounded-[5px]  lg:text-[1rem] font-semibold mt-3 text-white bg-[#323B75] transition duration-300 ease-in-out text-[0.8rem] flex gap-2 items-center justify-center"
                        document={<FichaTecnica _id={productId} />}
                        fileName={`Ficha_Tecnica-${dat.nombre}.pdf`}
                      >
                        {({ loading }) =>
                          loading ? (
                            <div className="w-full flex justify-center items-center">
                              <div className="flex gap-2 items-center">
                                <div
                                  className="spinner-border w-4 h-4 text-[white]"
                                  role="status"
                                >
                                  <span className="visually-hidden">
                                    Loading...
                                  </span>
                                </div>
                                <p>Generando Ficha técnica...</p>
                              </div>
                            </div>
                          ) : (
                            <button className="flex items-center gap-2">
                              <svg
                                className="w-5 h-5"
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
                      {/* Mostrar la descripción limitada */}

                      {/* Mostrar el botón "Ver más" si la descripción excede el límite */}
                      {dat.tipo_uso === "renta" && (
                        <>
                          {dat.precio != "0" && (
                            <p className="text-xl font-semibold text-[black] mb-4">
                              ${dat.precio} MXN
                            </p>
                          )}
                          {dat.precio === "0" && (
                            <p className="text-md font-semibold text-[black] mb-4">
                              CONSULTAR PRECIO
                            </p>
                          )}
                        </>
                      )}
                      {dat.tipo_uso === "venta" && (
                        <>
                          <div className="flex flex-col  py-2">
                            <p className="text-lg font-semibold text-[black] underline">
                              Precio de renta:
                            </p>
                            <p className="text-xl font-semibold text-[black]">
                              ${product.price} MXN
                            </p>
                          </div>
                          <div className="flex flex-col  py-2">
                            <p className="text-lg font-semibold text-[black] underline">
                              Precio de venta:
                            </p>
                            {dat.precio_venta != "0" && (
                              <p className="text-xl font-semibold text-[black]">
                                ${dat.precio_venta} MXN
                              </p>
                            )}
                            {dat.precio_venta === "0" && (
                              <p className="text-md font-semibold text-[black]">
                                CONSULTAR PRECIO
                              </p>
                            )}
                          </div>
                        </>
                      )}
                      <a
                        href="/"
                        className="text-[1rem] font-semibold text-secondary mb-4 underline flex gap-2 items-center"
                      >
                        <svg
                          class="w-5 h-5 "
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
                            d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                          />
                        </svg>
                        Regresar al catálogo
                      </a>
                      {dat.tipo_uso === "venta" && (
                        <div className="flex gap-4 mt-2">
                          {dat.stock > 0 && (
                            <a
                              href={`https://api.whatsapp.com/send?phone=529381958284&text=Hola, estoy interesado en rentar el siguiente equipo: ${dat.nombre}`}
                              className="bg-[#323B75] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#2a2e56] transition-colors"
                            >
                              Rentar equipo
                            </a>
                          )}
                          {dat.stock === 0 && (
                            <a
                              href={`https://api.whatsapp.com/send?phone=529381958284&text=Hola, estoy interesado en rentar el siguiente equipo: ${dat.nombre}`}
                              disabled
                              className="bg-[#a7a7a7] text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                            >
                              Rentar equipo
                            </a>
                          )}
                          <a
                            href={`https://api.whatsapp.com/send?phone=529381958284&text=Hola, estoy interesado en comprar el siguiente equipo: ${dat.nombre}`}
                            className="bg-[#C70000] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#b12c2c] transition-colors"
                          >
                            Comprar equipo
                          </a>
                        </div>
                      )}
                      {dat.tipo_uso === "renta" && (
                        <div className="flex gap-4 mt-2">
                          {dat.stock > 0 && (
                            <button className="bg-[#323B75] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#2a2e56] transition-colors">
                              Rentar equipo
                            </button>
                          )}
                          {dat.stock === 0 && (
                            <button
                              disabled
                              className="bg-[#a7a7a7] text-white px-4 py-2 rounded-lg font-semibold  transition-colors"
                            >
                              Rentar equipo
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </>
                )
            )}
          </div>
          <div className=" w-full lg:pl-[10.5rem] pl-[1.5rem] pr-[1.5rem] lg:pr-[21rem] mt-3 flex flex-col gap-2">
            <p className="font-bold text-[1.25rem] lg:no-underline underline lg:text-[1.5rem] text-[#323B75]">
              Descripción del equipo
            </p>
            {datas.map(
              (dat) =>
                dat && (
                  <p className="lg:text-[1rem] text-[0.9rem] text-[black] ">
                    {dat.descripcion.toUpperCase()}
                  </p>
                )
            )}
          </div>
          {datas.map(dat => dat && (
  <div className="w-full lg:pl-[10.5rem] pl-[1.5rem] pr-[1.5rem] lg:pr-[21rem] mt-3 flex flex-col ">
    {/* Solo mostrar si 'dat.tags' existe */}
    {dat.tags.length > 0 && (
  <>
    <p className="font-bold text-[1.25rem] lg:no-underline underline lg:text-[1.2rem] text-[#323B75]">
      Tags
    </p>
    <p>
      {dat.tags.map((tag, index) => (
        <span key={index} className="underline text-blue-500 text-[0.9rem]">
          {tag}{index < dat.tags.length - 1 && ', '}
        </span>
      ))}
    </p>
  </>
)}


  </div>
))}


        </div>

        <div className="w-full pt-[5rem]">
          <Footer />
        </div>
      </div>
    </>
  );
}
