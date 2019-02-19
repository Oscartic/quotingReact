import React, {Component} from 'react';

class QuotingForm extends Component {
    
    // 1.refs son para leer los valores de los campos de un formulario
    brandRef = React.createRef();
    yearRef = React.createRef();
    basicPlanRef = React.createRef();
    fullPlanRef= React.createRef();
 
    // 2.handleQuote es el metodo que recibe lo que se envia desde el formulario
    handleQuote= (e) => {
        e.preventDefault();
        // leer el plan 
        const plan = this.basicPlanRef.current.checked ? 'basico' : 'completo';

        // 2.1 obtener los datos 
        //console.log(this.brandRef.current.value);

        // 2.2 crear el objeto 
        const carInfo = {
            brand: this.brandRef.current.value,
            year: this.yearRef.current.value,
            plan: plan
        }
        // console.log(carInfo);
        // 2.3 enviarlo al componente principal 
        this.props.handleQuote(carInfo);

        // 2.4 resetear el formulario (opcional)
        e.currentTarget.reset()

    }
      
    render() {
        return (
            <form className="cotizar-auto" onSubmit={this.handleQuote}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.brandRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" name="plan" value="basico" ref={this.basicPlanRef}/> Básico
                    <input type="radio" name="plan" value="completo" ref={this.fullPlanRef}/> Completo
                </div>

                <button type="submit" className="boton">Cotizar</button>
            </form>
        );
    }
}

export default QuotingForm;