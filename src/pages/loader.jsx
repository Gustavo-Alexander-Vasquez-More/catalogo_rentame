import React from "react";

const Loader = () => (
  <div className="inset-0 absolute bg-opacity-70 flex justify-center items-center z-50">
    <div className="loader flex flex-col items-center gap-2">
      {/* Aquí puedes usar cualquier tipo de spinner */}
      <div className="spinner"></div>
      <p>Cargando ....</p>
    </div>
    <style jsx>{`
      .spinner {
        border: 16px solid #f3f3f3; /* Gris claro */
        border-top: 16px solid #e7ecef; /* Azul */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

export default Loader;
