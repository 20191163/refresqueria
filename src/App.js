// App.js
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './componentes/views/navbar/Navbar';

import Footer from './componentes/views/footer/footer';
import Card from './componentes/views/cards/cards'

function App() {
  useEffect(() => {
    document.title = 'Refresqueria';
  }, []); 

  return (
    <>
      <Helmet>
      <link rel="icon" type="image/png" href="../src/componentes/img/logo.jpeg" />

      </Helmet>
      <Navbar />

      
      <Card />
    </>
  );
}

export default App;
