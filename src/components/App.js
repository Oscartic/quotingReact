import React, { Component } from 'react';
import Header from './Header';
import QuotingForm from './QuotingForm';
import Summary from './Summary';
import Result from './Result';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper'

class App extends Component {

  state = {
    resultado : '',
    datos : {}
  }

  handleQuote = (datos) => {
  
    const {brand, year, plan} = datos;
    // Agregar una base de 2000, 
    let resultado = 2000;

    // obtener diferencia de años y 
    const diferencia = obtenerDiferenciaAnio(year);

    // por cada año restar 3% al valor del seguro
    resultado -= ((diferencia * 3) * resultado / 100);
  
    //americano 15%, asiatico 5%, europeo 30% de incremento al valor actual
    resultado = calcularMarca(brand) * resultado;

    // el plan del auto, el basico incrementa el valor 20% y full cobertura 50%
    let incrementoPlan = obtenerPlan(plan);

    // dependiendo del plan incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    // crear objeto para el resumen
    const datosAuto = {
      brand : brand,
      year : year,
      plan : plan
    }
    // ya tenemos el costo y podemos setear el state
   
    this.setState({
        resultado : resultado, 
        datos : datosAuto
    });
  }

  render() {
    return (
      <div className="contenedor">
        <Header 
        title="Cotizador de Autos" 
        />
        
        <div className="contenedor-formulario">
          <QuotingForm 
            handleQuote={this.handleQuote} 
          />

          <Summary 
            datos={this.state.datos} 
          />
          
          <Result 
            resultado={this.state.resultado} 
          />
        </div>


      </div>
    );
  }
}

export default App;
