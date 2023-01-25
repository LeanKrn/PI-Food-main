import React from "react";
// import { Link } from "react-router-dom";
import './inicio.css';
import TarjetaRecipe from "./tarjetas"

class inicioRoute extends React.Component {
    
    render() {
        return (
            <div className="inicio">
                <div className="filters">
                    <h3>Filters</h3>
                    <input placeholder="Buscar recetas"></input>
                    <label className="buscar">buscar</label>
                </div>
                <div className="cards">
                    <TarjetaRecipe />
                  
                </div>
            </div>
        )
    }
}

export default inicioRoute;