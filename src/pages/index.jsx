import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import icons from '../images/icons.png'
import Ficha_tecnica from './ficha_tecnica';
import logo from '../images/logo_blanco.png'
export default function index() {
  const [productos_paginados, setProductos_paginados] = useState([]);
  const [all_products, setAll_products] = useState([]);
  const [show_paginados, setShow_paginados]=useState(true)
  const [show_filter_products,setShow_filter_products]=useState(false)
  const [filteredDatas, setFilteredDatas] = useState([]);
  const [loadingImages, setLoadingImages] = useState(true);
  const [paginacion, setPaginacion]=useState()
  const [total_pages, setTotal_pages]=useState()
  const [current_page, setCurrent_page] = useState(() => {
  const savedPage = localStorage.getItem('products_current_page');
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const [searchTerm, setSearchTerm] = useState();
  const [loading, setLoading] = useState(true); // Estado de carga
  const [modal, setModal]=useState(false)
  const [formulario, setFormulario]=useState(false)
  const [id, setId]=useState(null)
  const [nombre, setNombre]=useState()
  const [select_product, setSelect_product]=useState()
  const [telefono, setTelefono]=useState()
  const [mensaje, setMensaje]=useState()
  const input_nombre=useRef()
  const input_mensaje=useRef()
  const input_telefono=useRef()
  const handleImageLoad = () => {
    setLoadingImages(false);  // Una vez que la imagen se haya cargado
  };
function captureNombre(){
setNombre(input_nombre.current.value)
}
function captureTelefono(){
  setTelefono(input_telefono.current.value)
}
function captureMensaje(){
  setMensaje(input_mensaje.current.value)
}
function openModal(){
  window.scrollTo(0,0)
  setModal(true)
  document.body.style.overflow = "hidden";
}
function closeModal(){
  setModal(false)
  document.body.style.overflow = "auto";
}

function openFormulario(){
  window.scrollTo(0,0)
  setFormulario(true)
  document.body.style.overflow = "hidden";
}
function closeFormulario(){
  setFormulario(false)
  document.body.style.overflow = "auto";
}

async function enviar(){
  try {
  if(!nombre || !telefono || !mensaje){
  alert('Por favor, complete todos los campos del formulario para enviar su consulta.')
  }else{
    const encodedMessage = encodeURIComponent(`${mensaje}\n\nDatos del cliente:\nNombre: ${nombre}\nTeléfono: ${telefono}`);
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=529381958284&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }
  } catch (error) {
    console.log(error);
  }
  }
  
  async function get_all_products() {
    try {
      const { data } = await axios.get('https://backrecordatoriorenta-production.up.railway.app/api/products/');
      setAll_products(data.response)
      setLoading(false); // Datos cargados, actualizamos el estado de carga
    } catch (error) {
      console.error('Error fetching image data:', error);
      setLoading(false); // Si hay un error, dejamos de mostrar el estado de carga
    }
  }
  async function get_products_paginates(page = current_page) {
    try {
      const { data } = await axios.get(`https://backrecordatoriorenta-production.up.railway.app/api/products/read_pag?page=${page}`);
      setPaginacion(data)
      setTotal_pages(data?.totalPages)
      setProductos_paginados(data.response);// Al principio mostramos todos los datos
      setLoading(false); // Datos cargados, actualizamos el estado de carga
    } catch (error) {
      console.error('Error fetching image data:', error);
      setLoading(false); // Si hay un error, dejamos de mostrar el estado de carga
    }
  }

  useEffect(() => {
    get_all_products();
    get_products_paginates()
  }, []);

function buscar(){
  const filtered = all_products.filter((dat) =>
    dat.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredDatas(filtered)
}


function buscar_boton(){
if(searchTerm){
  setShow_paginados(false)
  setShow_filter_products(true)

const filtered = all_products.filter((dat) =>
dat.nombre.toLowerCase().includes(searchTerm.toLowerCase())
);
setFilteredDatas(filtered)
}
else{
  
  setShow_paginados(true)
      setShow_filter_products(false)
}
}

//FUNCION CUANDO LIMPIAS EL BUSCADOR CON LA X
function clear() {
  setSearchTerm('');
  setShow_paginados(true)
  setShow_filter_products(false)
}
//FUNCION CUANDO DAS ENTER EN EL BUSCADOR
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchTerm) {
      setShow_paginados(false)
      setShow_filter_products(true)
      buscar()
    }
    if (e.key === 'Enter' && !searchTerm) {
      setShow_paginados(true)
      setShow_filter_products(false)
    }
  };
  function handlePageChange(pageNumber) {
    setLoadingImages(true)
    // Guardamos la página seleccionada en localStorage
    setCurrent_page(pageNumber);
    localStorage.setItem('products_current_page', pageNumber);
  
    // Llamamos a la función para obtener los productos de la página seleccionada
    get_products_paginates(pageNumber);
  }
    
  return (
   <>
   
   {formulario && (
<div className="fixed inset-0 bg-black bg-opacity-75 flex  justify-center items-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[500px]">
        <h2 className="text-2xl font-bold mb-2 text-center pb-4">Formulario de contacto</h2>
        <form >
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 pb-2">Nombre completo</label>
                <input ref={input_nombre} onChange={captureNombre} type="text" className="w-full border border-gray-300 rounded px-3 py-2" required/>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 pb-2">Telefono o WhatsApp</label>
                <input ref={input_telefono} onChange={captureTelefono} type="text" className="w-full border border-gray-300 rounded px-3 py-2" required/>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 pb-2">Mensaje</label>
                <textarea ref={input_mensaje} onChange={captureMensaje} className="w-full border border-gray-300 rounded px-3 py-2" required name="" id=""></textarea>
            </div>
            <div className="flex justify-between">
                <button onClick={enviar} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Enviar</button>
                <button type="button" onClick={() => closeFormulario()} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Cerrar</button>
            </div>
        </form>
    </div>
</div>
)}
    {modal && (
      <Ficha_tecnica closeModal={closeModal} id={id}/>
    )}
    <div className='flex flex-col w-full h-auto'>
      <div className='w-full flex flex-col'>
        <div className='bg-[#0000DB] w-full flex lg:flex-row flex-col lg:gap-0 gap-1 items-center  text-white justify-between lg:px-[5rem] py-[0.5rem]'>
          <div className='flex gap-1'>
            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
              <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
            </svg>
            <a href='mailto:info@RentameCarmen.com' target='_blank' className='font-semibold  hover:underline'>info@RentameCarmen.com</a>
          </div>
          <div className='flex gap-1'>
            <svg class="w-6 h-6 lg:flex hidden text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
            </svg>
            <a target='_blank' href='https://www.google.com/maps/place/C.+38+128,+Tecolutla,+24178+Cdad.+del+Carmen,+Camp./@18.6431141,-91.8326058,19z/data=!3m1!4b1!4m6!3m5!1s0x85f1a827f4354cff:0x2e862782e8f54cd4!8m2!3d18.6431128!4d-91.8319621!16s%2Fg%2F11c0_k4w5y?hl=es&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D' className='hover:underline lg:flex hidden'>Calle 38 No: 128 entre 35 y 37 Col. Tecolutla CP: 24100 Cd. Del Carmen Campeche.</a>
          </div>
          <div className='flex gap-1'>
          <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
</svg>

            <a href='tel:+529381958284' className='font-semibold hover:underline'>938-195-8284</a>
          </div>
        </div>
        <div className='w-full bg-[#C70000] py-[1rem] lg:gap-0 gap-2 px-[0.5rem] lg:px-[5rem] hidden lg:flex justify-between items-center'>
          <button onClick={()=>{localStorage.setItem('products_current_page',1), window.location.reload()}}><img className='lg:w-[10rem] w-[5rem] lg:h-[8vh]' src={logo} alt="" /></button>
          
          <div className="flex lg:w-[50%] w-[90%] lg:h-[5.5vh]">
              <div className="relative w-full flex justify-center items-center">
                <input
                  type="text"
                  placeholder="Buscar producto ..."
                  className="w-full lg:text-[1rem] text-[0.8rem] py-2 px-[1rem] border border-gray-300 rounded-l-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el término de búsqueda
                  onKeyDown={handleKeyDown} // Detectar presionar Enter
                />
                {searchTerm && (
                  <button onClick={clear} className="absolute right-2 top-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </button>
                )}
              </div>
              <button
                className="px-[1rem] lg:px-[2rem] bg-[#0000DB] text-white font-semibold rounded-r-[10px]"
                onClick={buscar_boton} // Ejecutar la búsqueda al hacer clic
              >
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-search w-3 lg:w-5" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </div>
            <a 
  onClick={openFormulario} 
  className="text-white font-bold text-[1.2rem] flex  items-center gap-1 px-4 py-2 rounded-md shadow-md hover:shadow-lg hover:bg-[#A50000] transition-all duration-300 border border-white"
>
<svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clip-rule="evenodd"/>
</svg>

  Contacto
</a>
        </div>
        {/* navbar en celu */}
        <div className='w-full bg-[#C70000] py-[1rem] lg:gap-0 gap-3 px-[0.5rem]  lg:hidden flex flex-col  justify-between items-center'>
          <div className='flex gap-4'>
          <img className='w-[8rem] ' src={logo} alt="" />
          <a 
  onClick={openFormulario} 
  className="text-white font-bold text-[0.8rem] flex  items-center gap-1 px-3 rounded-md shadow-md hover:shadow-lg hover:bg-[#A50000] transition-all duration-300 border border-white"
>
<svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clip-rule="evenodd"/>
</svg>

  Contacto
</a>
          </div>
          
          <div className="flex lg:w-[50%] w-[90%] lg:h-[5.5vh]">
              <div className="relative w-full flex justify-center items-center">
                <input
                  type="text"
                  placeholder="Buscar producto ..."
                  className="w-full lg:text-[1rem] text-[0.8rem] py-2 px-[1rem] border border-gray-300 rounded-l-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el término de búsqueda
                  onKeyDown={handleKeyDown} // Detectar presionar Enter
                />
                {searchTerm && (
                  <button onClick={clear} className="absolute right-2 top-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </button>
                )}
              </div>
              <button
                className="px-[1rem] lg:px-[2rem] bg-[#0000DB] text-white font-semibold rounded-r-[10px]"
                onClick={buscar} // Ejecutar la búsqueda al hacer clic
              >
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-search w-3 lg:w-5" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </div>
        </div>

      </div>
      {/* ESTO ES EL BODY */}
      <div className='w-full bg-[#e3e2e294] px-[0.5rem] lg:px-[5rem] py-[2rem] gap-3 flex flex-col'>
      <p className='font-bold text-[1.3rem] lg:text-[2rem] text-secondary bg-gradient-to-r from-[#C70000] to-[#FF5733] text-transparent bg-clip-text drop-shadow-md'>
  Catálogo de productos
</p>
        <div className="flex flex-col w-full lg:w-[100%]">
        {loadingImages && (
    <div className=" w-full text-center  h-[50vh] gap-3 flex-col flex items-center justify-center"> {/* Aquí iría el loader, por ejemplo un spinner */}
      <div class="spinner-border text-primary w-[3rem] h-[3rem]" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<p className='text-primary font-semibold'>Cargando productos</p>
    </div>)}
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-items-center">
    {show_filter_products === true && filteredDatas.map((dat, index) => (
        <div key={index} className="bg-white w-full px-2 py-2 rounded-lg flex flex-col gap-2">
        <img className='w-full h-[10vh] lg:h-[35vh]  object-contain' src={dat.foto} alt="" />
        <p className='lg:text-[1rem] text-[0.7rem] text-center font-semibold text-danger'>{dat.nombre.toUpperCase()}</p>
        {dat.visibilidad_precio === 'VISIBLE' && (
  <p className="text-center text-secondary font-semibold">${dat.precio} MXN</p>
)}
{dat.visibilidad_precio === 'NO VISIBLE' && (
  <p className="text-center text-danger font-semibold  bg-[#e3e3e3a9] lg:text-[1rem] text-[0.5rem]">PRECIO NO DISPONIBLE</p>
)}
        {dat.stock === 0 && (
          <p className='text-center text-danger font-semibold  rounded-[5px] py-1 lg:text-[1rem] text-[0.7rem]'>Rentado</p>
        )}
        {dat.stock > 0 && (
          <p className='text-center text-primary font-semibold  rounded-[5px] py-1 lg:text-[1rem] text-[0.7rem]'>Disponible</p>
        )}
        {dat.stock === 0 && (
          <button onClick={()=>{openModal(), setId(dat._id)}} disabled className='bg-[#a5a5a5] text-white py-1 rounded-[5px] lg:text-[1rem] text-danger text-[0.7rem]'>Rentar equipo</button>
        )}
        {dat.stock > 0 && (
          <a href={`https://api.whatsapp.com/send?phone=529381958284&text=Hola, estoy interesado en rentar el siguiente equipo: ${dat.nombre}`} target='_blank' className='bg-[#C70000] text-white text-center py-1 rounded-[5px] lg:text-[1rem] text-[0.7rem]'>Rentar equipo</a>
        )}
        <button onClick={()=>{openModal(), setId(dat._id)}} className='bg-[#0000DB] text-white py-1 rounded-[5px] lg:text-[1rem] text-[0.7rem]'>Ficha técnica</button>
      </div>
    ))}
    {productos_paginados.map((dat, index) => (
       <img className='w-full h-[35vh] object-contain hidden' src={dat.foto} alt="" onLoad={()=>{setLoadingImages(false)}}/>
    ))}
    
    {show_paginados === true && loadingImages === false  && productos_paginados.map((dat, index) => (
      <div key={index} className="bg-white w-full px-2 py-2 rounded-lg flex flex-col gap-2">
        <img className='w-full h-[10vh] lg:h-[35vh] object-contain' src={dat.foto} alt="" onLoad={handleImageLoad}/>
        <p className='lg:text-[1rem] text-[0.7rem] text-center font-semibold text-danger'>{dat.nombre.toUpperCase()}</p>
        {dat.visibilidad_precio === 'VISIBLE' && (
  <p className="text-center text-secondary font-semibold">${dat.precio} MXN</p>
)}
{dat.visibilidad_precio === 'NO VISIBLE' && (
  <p className="text-center text-danger font-semibold lg:text-[1rem] text-[0.5rem] bg-[#e3e3e3a9]">PRECIO NO DISPONIBLE</p>
)}
        {dat.stock === 0 && (
          <p className='text-center text-danger font-semibold  rounded-[5px] py-1 lg:text-[1rem] text-[0.7rem]'>Rentado</p>
        )}
        {dat.stock > 0 && (
          <p className='text-center text-primary font-semibold  rounded-[5px] py-1 lg:text-[1rem] text-[0.7rem]'>Disponible</p>
        )}
        {dat.stock === 0 && (
          <button onClick={()=>{openModal(), setId(dat._id)}} disabled className='bg-[#a5a5a5] text-white py-1 rounded-[5px] lg:text-[1rem] text-danger text-[0.7rem]'>Rentar equipo</button>
        )}
        {dat.stock > 0 && (
          <a href={`https://api.whatsapp.com/send?phone=529381958284&text=Hola, estoy interesado en rentar el siguiente equipo: ${dat.nombre}`} target='_blank' className='bg-[#C70000] text-white text-center py-1 rounded-[5px] lg:text-[1rem] text-[0.7rem]'>Rentar equipo</a>
        )}
        <button onClick={()=>{openModal(), setId(dat._id)}} className='bg-[#0000DB] text-white py-1 rounded-[5px] lg:text-[1rem] text-[0.7rem]'>Ficha técnica</button>
      </div>
    ))}
  </div>
  {show_paginados === true && loadingImages === false && (
    <div className="w-full py-[2rem] flex items-center justify-center gap-2">
  <nav aria-label="Page navigation example">
    <ul className="pagination">
      {/* Botón para ir a la página anterior */}
      {current_page > 1 && (
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={() => handlePageChange(current_page - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
      )}

      {/* Primera página */}
      {current_page > 3 && (
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            onClick={() => handlePageChange(1)}
          >
            1
          </a>
        </li>
      )}

      {/* Puntos suspensivos si hay un salto entre páginas */}
      {current_page > 4 && <li className="page-item disabled"><span className="page-link">...</span></li>}

      {/* Mostrar páginas cercanas a la actual */}
      {Array.from({ length: 5 }, (_, i) => {
        const pageNumber = current_page - 2 + i; // Crea el rango de páginas alrededor de la actual
        if (pageNumber >= 1 && pageNumber <= total_pages) {
          return (
            <li
              key={pageNumber}
              className={`page-item ${current_page === pageNumber ? 'active' : ''}`}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </a>
            </li>
          );
        }
        return null;
      })}

      {/* Puntos suspensivos si hay un salto entre páginas */}
      {current_page < total_pages - 2 && <li className="page-item disabled"><span className="page-link">...</span></li>}

      {/* Última página */}
      {current_page < total_pages - 2 && (
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            onClick={() => handlePageChange(total_pages)}
          >
            {total_pages}
          </a>
        </li>
      )}

      {/* Botón para ir a la página siguiente */}
      {current_page < total_pages && (
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Next"
            onClick={() => handlePageChange(current_page + 1)}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      )}
    </ul>
  </nav>
</div>
  )}
  



</div>
    </div>
    {/* FOOTER */}
    <div className='w-full flex flex-col'>
      <div className='bg-[#C70000] py-[2rem] flex items-center px-[0.5rem] lg:gap-0 gap-2 lg:flex-row flex-col lg:px-[4rem] justify-between'>
        <button onClick={()=>{localStorage.setItem('products_current_page',1), window.location.reload()}}><img className='w-[10rem]' src={logo} alt="" /></button>
        <a href={'https://wa.link/fcsk88'} target='_blank' className='text-white flex items-end lg:text-[1.2rem] font-semibold gap-2'>
          <p>Habla con nosotros</p>
          <img className='w-[2rem] lg:w-[4rem]' src={icons} alt="" />
        </a>
      </div>
      <div className='text-[0.5rem] lg:text-[0.8rem] bg-[#0000DB] flex justify-center items-center text-center py-[0.5rem] text-white'>
      RentameCarmen.com.mx - Todos Los Derechos Reservados. 2025 - 2026
      </div>
    </div>
    </div>
   </>
  );
}
