import React from 'react';
import './banner.css'; // Asegúrate de tener un archivo styles.css en el mismo directorio que este componente

const Banner = () => {
  return (
    <section className="banner">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        className="svg-wave"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="waves">
          {/* Cambié el color del fill en la siguiente línea */}
          <use xlinkHref="#gentle-wave" fill="#86ac9b" fillOpacity="0.2" />
          <use xlinkHref="#gentle-wave" y="3" fill="#e3413f" fillOpacity="0.5" />
          <use xlinkHref="#gentle-wave" y="6" fill="#dba124" fillOpacity="0.9" />
        </g>
      </svg>
    </section>
  );
}

export default Banner;
