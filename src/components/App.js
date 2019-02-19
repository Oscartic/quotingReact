import React, { Component } from 'react';
import Header from './Header';
import QuotingForm from './QuotingForm';

class App extends Component {

  handleQuote= (data) => {
    console.log(data);
  }

  render() {
    return (
      <div className="contenedor">
        <Header title="Cotizador de Autos"/>
        <div className="contenedor-formulario">
          <QuotingForm handleQuote={this.handleQuote}/>
        </div>

      </div>
    );
  }
}

export default App;
