import React from 'react';
import "../footer/footer.css"
function footer() {
  return (
    <section>
      {/* Primer Footer */}
      <footer className="top">
        <img src="logo.svg" alt="Logo" />
        <div className="links">
          {/* Primera columna de enlaces */}
          <div className="links-column">
            <h2>Get Started</h2>
            <a>Introduction</a>
            {/* Agrega más enlaces aquí según sea necesario */}
          </div>
          {/* Segunda columna de enlaces, por ejemplo, redes sociales */}
          <div className="links-column socials-column">
            <h2>Social Media</h2>
            <p>Follow us</p>
            <div className="socials">
              <a className="fa-brands fa-facebook"></a>
              {/* Agrega más enlaces de redes sociales aquí */}
            </div>
          </div>
        </div>
      </footer>

      {/* Segundo Footer */}
      <footer className="bottom">
        <p className="copyright"> 2023 ...</p>
        <div className="legal">
          <a>License</a>
          {/* Agrega más enlaces legales aquí */}
        </div>
      </footer>
    </section>
  );
}

export default footer;