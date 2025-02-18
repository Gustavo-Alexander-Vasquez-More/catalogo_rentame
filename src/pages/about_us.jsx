import React, { useRef, useState } from 'react';
import { Helmet } from "react-helmet";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
export default function AboutUs() {
     const [formulario, setFormulario] = useState(false);
      const [nombre, setNombre] = useState();
      const [telefono, setTelefono] = useState();
      const [mensaje, setMensaje] = useState();
      const input_nombre = useRef();
      const input_mensaje = useRef();
      const input_telefono = useRef();
      function captureNombre() {
        setNombre(input_nombre.current.value);
      }
      function captureTelefono() {
        setTelefono(input_telefono.current.value);
      }
      function captureMensaje() {
        setMensaje(input_mensaje.current.value);
      }
      function openFormulario() {
        window.scrollTo(0, 0);
        setFormulario(true);
        document.body.style.overflow = "hidden";
      }
      function closeFormulario() {
        setFormulario(false);
        document.body.style.overflow = "auto";
      }
    
      async function enviar() {
        try {
          if (!nombre || !telefono || !mensaje) {
            alert(
              "Por favor, complete todos los campos del formulario para enviar su consulta."
            );
          } else {
            const encodedMessage = encodeURIComponent(
              `${mensaje}\n\nDatos del cliente:\nNombre: ${nombre}\nTeléfono: ${telefono}`
            );
    
            const whatsappUrl = `https://api.whatsapp.com/send?phone=529381958284&text=${encodedMessage}`;
            window.open(whatsappUrl, "_blank");
          }
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <>
    {formulario && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex  justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[500px]">
            <h2 className="text-2xl font-bold mb-2 text-center pb-4">
              Formulario de contacto
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 pb-2">
                  Nombre completo
                </label>
                <input
                  ref={input_nombre}
                  onChange={captureNombre}
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 pb-2">
                  Telefono o WhatsApp
                </label>
                <input
                  ref={input_telefono}
                  onChange={captureTelefono}
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 pb-2">
                  Mensaje
                </label>
                <textarea
                  ref={input_mensaje}
                  onChange={captureMensaje}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                  name=""
                  id=""
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={enviar}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Enviar
                </button>
                <button
                  type="button"
                  onClick={() => closeFormulario()}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Cerrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sobre Nosotros - Rentame Carmen</title>
        <link rel="canonical" href="https://www.rentamecarmen.com.mx/about_us" />
      </Helmet>

      <div className="w-full h-auto bg-gray-50">
        <Navbar />

        {/* Sección de Introducción */}
        <section className="text-center flex flex-col items-center h-[40vh] py-16 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center relative text-white">
  {/* Capa de fondo con opacidad */}
  <div className="absolute inset-0 bg-black opacity-50"></div>
  
  <h1 className="text-4xl font-bold relative">Sobre Nosotros</h1>
  <p className="mt-4 text-lg relative">Conoce quiénes somos y cómo trabajamos para ofrecerte la mejor experiencia en renta de maquinaria.</p>
</section>


<section className="py-16 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-semibold text-blue-900">Sobre Rentame Carmen</h2>
    <p className="mt-4 text-lg text-gray-700">
      <a href="https://www.rentamecarmen.com.mx" className="text-blue-600 hover:underline">
        Rentamecarmen.com.mx
      </a> es una empresa especializada en la renta y venta de equipos en general. Para el área de Construcción, Jardinería, Carpintería, Soldadura, Aluminio, Pintura, Fumigación, Tecnología. 
      Contamos con más rubros, si no ves en nuestro catálogo lo que necesitas, contáctanos, seguramente tendremos una solución para ti.
    </p>
    <p className="mt-4 text-lg text-gray-700">
      Nos dedicamos a ofrecer a nuestros clientes soluciones en maquinaria y equipos de calidad a precios altamente competitivos. Si no contamos con el equipo, tenemos la posibilidad de adquirirlo para arrendártelo.
    </p>
    <p className="mt-4 text-lg text-gray-700">
      Manejamos una extensa variedad de herramientas a su disposición. Si no encuentras lo que buscas, puedes contactarnos.
    </p>
    <p className="mt-4 text-lg text-gray-700">
      Laboramos de lunes a viernes de 9:00 AM a 6:00 PM y los sábados de 9:00 AM a 3:00 PM.
    </p>
  </div>
</section>
{/* Sección de Valores */}
<section className="py-16 bg-gray-100">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-semibold text-blue-900">Nuestros Valores</h2>
    <p className="mt-4 text-lg text-gray-700">Lo que nos impulsa a ser cada vez mejores.</p>

    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h3 className="text-xl font-bold text-blue-800">Compromiso</h3>
        <p className="mt-4 text-gray-600">Nos aseguramos de que todos nuestros equipos y maquinaria cumplan con los más altos estándares de calidad para garantizar la satisfacción y seguridad de nuestros clientes.</p>
      </div>

      <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h3 className="text-xl font-bold text-blue-800">Servicio al Cliente</h3>
        <p className="mt-4 text-gray-600">Nos enfocamos en ofrecer un servicio personalizado y ágil para ayudar a nuestros clientes en todo momento, asegurándonos de que encuentren la mejor solución para sus necesidades.</p>
      </div>

      <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h3 className="text-xl font-bold text-blue-800">Confianza</h3>
        <p className="mt-4 text-gray-600">Nos enorgullece ser una empresa confiable, con la capacidad de ofrecer soluciones rápidas y efectivas. Nuestros clientes confían en nosotros para llevar a cabo sus proyectos de manera exitosa.</p>
      </div>
    </div>
  </div>
</section>

        <section className="py-8 bg-[#28a745] text-white text-center">
    <h2 className="text-2xl font-semibold">¿Te gustaría saber más?</h2>
    <p className="mt-4 text-lg">Contáctanos y descubre cómo podemos ayudarte con nuestras soluciones de maquinaria.</p>
    <button onClick={openFormulario} className="mt-4 inline-block bg-[white] text-[#28a745] py-2 px-6 rounded-md hover:bg-[#28a745] hover:text-[white] transition duration-300">Contáctanos</button>
</section>

        <Footer/>
      </div>
    </>
  );
}
