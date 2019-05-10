import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recomendador de Campañas</h1>
      </header>
      <nav>
        <li>Configuracion</li>
        <li>Analitica</li>
        <li>Cuentas</li>
      </nav>
      <article>
        <ButtonToolbar>
        <Button>Campaña 1</Button>
        <Button>Campaña 2</Button>
        <Button>Campaña 3</Button>
        </ButtonToolbar>
      <p className="Elemento">Stadium, Arena & Sports Venue</p>
        <p>Beauty, Cosmetic & Personal Care</p>
        <p>Food & Beverage Company</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </article>
    </div>
  );
}

export default App;
