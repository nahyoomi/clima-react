import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black  text-white p-4 flex justify-between items-center">
      <Link to="/">
        <h1 className="text-2xl font-bold cursor-pointer">WeatherApp</h1>
      </Link>
      <nav className="hidden md:flex space-x-4">
        <Link to="/about">Acerca de</Link>
        <Link to="/manual">Manual</Link>
        <Link to="/auth"><FaUser /></Link>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <nav className="absolute top-16 right-4 bg-primary rounded text-center space-y-2 p-4 md:hidden">
          <Link to="/about" onClick={toggleMenu}>Acerca de</Link>
          <Link to="/manual" onClick={toggleMenu}>Manual</Link>
          <Link to="/auth" onClick={toggleMenu}><FaUser /> Usuario</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;