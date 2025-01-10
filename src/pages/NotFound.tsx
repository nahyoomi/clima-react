import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="-mt-12 flex flex-col items-center justify-center h-full text-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-white">Página No Encontrada</h1>
      <p className="mb-6 text-white">Lo sentimos, la página que buscas no existe.</p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;