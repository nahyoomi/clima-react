import React from 'react';
import profileImage from '../assets/react.svg'; // Importa tu imagen local

const About: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-4">
      <h1 className="text-2xl font-bold mb-4">Acerca de Mí</h1>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={profileImage}
          alt="Tu Nombre"
          className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-6"
        />
        <p className="text-justify">
          Hola, soy [Tu Nombre], un desarrollador de software apasionado por crear aplicaciones web intuitivas y eficientes. Con experiencia en tecnologías como React, TypeScript y Auth0, me enfoco en brindar soluciones que mejoren la experiencia del usuario. En este proyecto, he creado una aplicación de clima que permite a los usuarios buscar condiciones meteorológicas en diferentes ciudades, gestionar sus favoritos y sincronizar sus preferencias mediante autenticación segura.
        </p>
      </div>
    </div>
  );
};

export default About;