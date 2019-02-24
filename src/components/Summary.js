import React, { Component } from 'react';
import { primeraMayuscula } from '../helper';  


class Summary extends Component {

    mostrarResumen = () => {

        const {brand, year, plan} = this.props.datos;

        if(!brand || !year || !plan) return null;

        return (
            <div className="resumen">
                <h2>resumen de cotización</h2>
                <li>Marca: { primeraMayuscula(brand) }</li>
                <li>Plan: { primeraMayuscula(plan) }</li>
                <li>Año del auto: { year }</li>
            </div>
        )
    }

    render() {

        return (
            <div>
                { this.mostrarResumen() }
            </div>
        )
    }
}

export default Summary;