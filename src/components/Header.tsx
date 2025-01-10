import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center border-b border-gray-500">
      <Link to="/">
        <h1 className="font-bold cursor-pointer">WeatherApp</h1>
      </Link>
      <nav className="hidden md:flex space-x-4 font-bold items-center">
        <Link to="/manual" className="hover:text-[#646cff]">
          Manual
        </Link>
        <Link
          to="/auth"
          className="hover:text-[#646cff] border border-gray-500 rounded-full p-2"
        >
          <FaUser />
        </Link>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <nav className="flex flex-col absolute top-16 right-4 bg-black rounded text-center space-y-2 p-4">
          <Link to="/manual" onClick={toggleMenu}>
            Manual
          </Link>
          <Link to="/auth" onClick={toggleMenu}>
            Perfil
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
