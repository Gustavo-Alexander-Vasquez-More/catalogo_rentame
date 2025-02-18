import React from 'react';
import compramos from "../images/compramos.jpg";
import google from "../images/google.png";
import facebook from "../images/facebook.png";
import icons from "../images/icons.png";

export default function Footer() {
  return (
    <>
      {/* FOOTER */}
      <div className="w-full flex flex-col overflow-x-hidden">
        {/* Sección Principal */}
        <div className="bg-[#C70000] flex items-center px-[2rem] py-[2.5rem] h-auto lg:gap-0 gap-6 lg:flex-row flex-col justify-between  ">
          <a href="https://wa.link/w31sh7" target="_blank">
            <img
              className="w-full lg:w-[35rem] h-auto object-cover rounded-lg "
              src={compramos}
              alt={`Compramos herramientas dañadas, vender tu herramienta dañada nos favorece y también a ti ya que somos expertos en reparación de herramientas para la construcción.`}
            />
          </a>
          <div className="flex lg:flex-row flex-col justify-between items-center text-center lg:items-end w-full lg:px-[4rem] gap-6 lg:gap-10 text-white">
            {/* Redes Sociales */}
            <a
              href="https://www.facebook.com/p/Rentame-Carmen-100094870352555/"
              target="_blank"
              className="flex flex-col items-center hover:opacity-80 transition-all duration-300"
            >
              <img
                className="object-contain lg:w-[3rem] w-[2.5rem] h-[2.5rem] mb-2"
                src={facebook}
                alt="Facebook de Rentame Carmen"
              />
              <p className="text-[1rem] hover:underline font-semibold">
                Síguenos en Facebook
              </p>
            </a>
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJUSFC42up8YURtPF2RUOE55o"
              target="_blank"
              className="flex flex-col items-center hover:opacity-80 transition-all duration-300"
            >
              <img
                className="object-contain lg:w-[4rem] w-[3.5rem] h-[2.5rem] mb-2"
                src={google}
                alt="Rentame Carmen, rentas Ciudad del Carmen"
              />
              <p className="text-[1rem] hover:underline font-semibold">
                Déjanos tu opinión en Google
              </p>
            </a>
            <a
              href="https://wa.link/fcsk88"
              target="_blank"
              className="text-white flex items-center lg:text-[1.1rem] font-semibold gap-2 hover:opacity-80 transition-all duration-300"
            >
              <p>Habla con nosotros</p>
              <img
                className="w-[3rem] lg:w-[4rem]"
                src={icons}
                alt="Consultanos y pide tu cotización"
              />
            </a>
          </div>
        </div>
        
        {/* Sección de Dirección y Horarios */}
        <div className="bg-[#C70000] text-white text-center py-4 px-6 lg:px-[4rem]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12">
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="font-semibold text-lg">Dirección</h3>
              <p className="text-[0.9rem]">
                Calle 38 No: 128 entre 35 y 37 Col. Tecolutla<br/>
                CP: 24100 Cd. Del Carmen Campeche
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="font-semibold text-lg">Horarios de Atención</h3>
              <p className="text-[0.9rem]">
                Lunes a Viernes: 9:00 AM - 6:00 PM<br/>
                Sábados: 9:00 AM - 3:00 PM
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="text-[0.8rem] bg-[#323B75] flex justify-center items-center text-center py-[1rem] text-white shadow-lg">
          <p>RentameCarmen.com.mx - Todos los derechos reservados. 2025 - 2026</p>
        </div>
      </div>
    </>
  );
}
