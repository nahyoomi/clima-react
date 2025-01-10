import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-4 text-center">
      © {new Date().getFullYear()} WeatherApp. Todos los derechos reservados.
    </footer>
  );
};

export default Footer;