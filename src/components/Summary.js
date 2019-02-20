import React, { Component } from 'react';

class Summary extends Component {
    render() {

        const {brand, year, plan} = this.props.datos;

        return (
            <div className="resumen">
                <h2>resumen de cotización</h2>
                <li>Marca: {brand}</li>
                <li>Plan: {plan}</li>
                <li>Año del auto: {year}</li>
            </div>
        )
    }
}

export default Summary;