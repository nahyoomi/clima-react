import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">WeatherApp</div>
      <nav className="space-x-4">
        <Link to="/about">Acerca de</Link>
        <Link to="/manual">Manual</Link>
        <FaUser />
      </nav>
    </header>
  );
};

export default Header;