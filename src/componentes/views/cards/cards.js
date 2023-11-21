// App.js

import React, { useState } from 'react';
import '../cards/cards.css'; 

const App = () => {
  const [selectedRefresco, setSelectedRefresco] = useState(null);

  const refrescos = [
    {
      id: 1,
      image: 'https://acdn.mitiendanube.com/stores/001/504/560/products/e49b8abb-689c-4286-a642-0289b4b5403c1-0b40c5a9133a6f59fc16168963215294-640-0.jpeg',
      name: 'Coca-cola',
      type: 'Refresco familiar',
      description: 'Refresco cocacola perfecto para la familia y amigos',
    },
    {
        id: 2,
        image: 'https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750105537993L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        name: 'Fresca',
        type: 'Combinaciones',
        description: 'Perfecto para acompa;ar con tus preparados favoritos',
      },
    // Add more refrescos as needed
  ];

  const handleRefrescoClick = (refrescoId) => {
    setSelectedRefresco(refrescoId);
  };

  const renderRefrescos = () => {
    return refrescos.map((refresco) => (
      <div key={refresco.id} className={`card ${selectedRefresco === refresco.id ? 'selected' : ''}`} onClick={() => handleRefrescoClick(refresco.id)}>
        <img src={refresco.image} alt={refresco.name} />

        <div>
          <h2>{refresco.name}</h2>
          <h3>{refresco.type}</h3>
          <p>{refresco.description}</p>
          <button>Comprar</button>
        </div>
      </div>
    ));
  };

  return (
    <div className="mis-proyectos">
      {renderRefrescos()}
    </div>
  );
}

export default App;
