import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar2";
import Footer from "../components/footer";
import AllProducts from "../components/modales/allProducts";
import PaginacionCategoria from "../components/modales/paginacion_x_categoria";
import { Helmet } from "react-helmet";
import banerRenta from "../images/ventaMaquinaria.jpg";
import whatsapp from "../images/whatsapp.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function equipos_renta() {
  const location = useLocation();
  const navigate = useNavigate();
  const param = new URLSearchParams(location.search).get("category");
  const [isOpen, setIsOpen] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [categoriasCount, setCategoriasCount] = useState({});
  const [showCategorias, setShowCategorias] = useState(false);
  const [selectedCategorias, setSelectedCategorias] = useState([]);

  // Trae todas las categorías
  async function get_categorias() {
    try {
      const { data } = await axios.get(
        "https://backrecordatoriorenta-production.up.railway.app/api/categorias/"
      );
      setCategorias(data.response);
    } catch (error) {
      console.error("Error fetching categorias:", error);
    }
  }

  // Trae todos los productos solo una vez
  async function get_all_products() {
    try {
      const { data } = await axios.get(
        "https://backrecordatoriorenta-production.up.railway.app/api/products/"
      );
      setProductos(data.response);
      setTotalProducts(data.response.length);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  // Solo una vez al montar
  useEffect(() => {
    get_all_products();
    get_categorias();
  }, []);

  // Calcula los conteos por categoría cada vez que cambian productos o categorías
  useEffect(() => {
    if (productos.length > 0 && categorias.length > 0) {
      const counts = {};
      categorias.forEach(cat => {
        counts[cat.nombre] = productos.filter(p => p.categoria === cat.nombre).length;
      });
      setCategoriasCount(counts);
    }
  }, [productos, categorias]);

  // Filtrar productos según categorías seleccionadas
  const productosFiltrados =
    selectedCategorias.length === 0
      ? productos
      : productos.filter(p =>
          selectedCategorias.includes(p.categoria)
        );

  // Manejar selección de categorías (checkbox)
  const handleCategoriaChange = (cat) => {
    setSelectedCategorias(prev =>
      prev.includes(cat)
        ? prev.filter(c => c !== cat)
        : [...prev, cat]
    );
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Equipos en Renta | RentameCarmen</title>
        <link rel="canonical" href="https://www.rentamecarmen.com.mx/renta-equipos" />
        <link rel="preload" as="image" href={banerRenta} />
      </Helmet>
      <div className="w-full flex flex-col relative items-center">
        <a
          href="https://wa.link/gpu01d"
          target="_blank"
          className="fixed lg:top-[82%] top-[87%] right-5 z-50 shadow-xl bg-[#ffffff3d] rounded-full"
        >
          <img className="lg:w-[6rem] w-[4.5rem]" src={whatsapp} alt="WhatsApp" />
        </a>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="w-full h-[25vh]"></div>

        {/* Banner con imagen y título principal */}
        <div className="w-full flex z-0 justify-center items-center h-[35vh] relative ">
          <img
            src={banerRenta}
            alt="Equipos en renta"
            className="h-[35vh] object-cover object-center w-full relative transition-opacity duration-1000"
            style={{ opacity: 0.85 }}
          />
          <div className="w-full h-[35vh] opacity-60 bg-black absolute top-0 left-0"></div>
          <div className="absolute z-40 w-full h-[35vh] flex justify-center items-center text-white flex-col text-center px-[15%]">
            <h1 className="lg:text-6xl text-4xl font-bold drop-shadow-lg">
              Equipos en Renta
            </h1>
            <p className="mt-4 text-lg max-w-2xl lg:flex hidden">
              Encuentra la mejor maquinaria y herramientas para tu proyecto, disponibles para renta inmediata.
            </p>
          </div>
        </div>

        <div className="w-full flex lg:flex-row flex-col bg-[#F5F5F5] z-0 gap-4 min-h-[60vh] px-[2rem] py-4">
          <div className="lg:w-[30%] w-full flex flex-col h-full gap-2 lg:px-5 px-3 bg-white rounded-lg py-3 shadow-lg">
            {/* Título lateral */}
            <p className="text-base font-semibold text-gray-700 mb-1 tracking-wide">
              Nuestros equipos
            </p>
            <a
              href={`?category=todos&page=${localStorage.getItem("products_current_page") || 1}`}
              onClick={e => {
                e.preventDefault();
                setSelectedCategorias([]); // <-- Limpia los checkboxes
                const lastPage = localStorage.getItem("products_current_page");
                navigate(`?category=todos&page=${lastPage ? lastPage : 1}`);
              }}
              className="text-base text-blue-950 underline"
            >
              Mirar todos los equipos
            </a>
            <div className="flex flex-col gap-1 mt-4">
              <button
                className="text-base font-semibold mb-3 flex items-center gap-2 lg:cursor-default cursor-pointer focus:outline-none w-full"
                onClick={() => setShowCategorias((v) => !v)}
                type="button"
              >
                <svg className="w-5 h-5 text-[#0D6EFD]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8" />
                </svg>
                Filtrar por categorías
                <span className="lg:hidden transition-transform duration-300" style={{ transform: showCategorias ? "rotate(180deg)" : "rotate(0deg)" }}>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`
                  flex-col gap-2
                  ${showCategorias ? "flex" : "hidden"}
                  lg:flex lg:gap-2 lg:mt-0
                  transition-all duration-300
                `}
              >
                {categorias.map((cat, idx) => (
                  <label key={idx} className="flex items-center gap-2 cursor-pointer text-gray-800 text-base">
                    <input
                      type="checkbox"
                      checked={selectedCategorias.includes(cat.nombre)}
                      onChange={() => handleCategoriaChange(cat.nombre)}
                      className="accent-[#0D6EFD] w-4 h-4"
                    />
                    {cat.nombre}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full">
            {/* Mostrar paginación por categoría si hay filtros activos */}
            {selectedCategorias.length > 0 ? (
              <PaginacionCategoria categorias={selectedCategorias} productos={productos} />
            ) : (
              <AllProducts productos={productosFiltrados} />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
