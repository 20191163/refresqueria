// Navbar.js
import React, { useState } from 'react';
import './navbar.css';
import LoginModal from '../login/login';
import logos from '../../../componentes/img/logo.jpeg';

const Navbar = () => {
  const [menuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);



  const handleLoginClick = () => {
    setLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <header className={`menu__wrapper ${menuOpen ? 'menu__wrapper--open' : ''}`}>
      <div className="menu__bar">
        <div className="logo">
          <img src={logos} alt="" className="logo-image" />
        </div>
        
        <div class="temas-var">
            <ul class="nav-var">
                <li><a href="#">Sobre mí</a></li>
                <li><a href="#">Proyectos</a></li>
                <li><a href="#">Testimonios</a></li>
                <li><a href="#">Contactos</a></li>
            </ul>
        </div>
        <div className={`action-buttons ${menuOpen ? 'hide' : ''}`}>
          <button onClick={handleLoginClick} title="Log in" className="primary" style={{ backgroundColor: '#e3413f' }}>
            Log In
          </button>
        </div>
      </div>
      {loginModalOpen && <LoginModal onClose={handleCloseLoginModal} />}
    </header>
  );
};

export default Navbar;
