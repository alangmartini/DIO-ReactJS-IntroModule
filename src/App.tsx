import React from 'react';
import Botao from './Components/Botao';
function App() {

  const renderButton = () => (
    <button>This is a button</button>
  );

  const renderCloseButton = () => (
    <button>This is a close ubtton</button>
  );

  let isButton = true;

  return (
  <div className="App">

        <p>Algo</p>
          {isButton ? <Botao /> : renderCloseButton()}
        <h3 className="">Olá!</h3>
      
  </div>
  );
}

export default App;
