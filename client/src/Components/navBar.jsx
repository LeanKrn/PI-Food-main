import React from "react"
import { Link } from "react-router-dom";
import kerans from "./img/kerans.png"
import './navBar.css';


class NavBar extends React.Component {
    render() {
        return (
            <div className="nav">
              
                    <img src={kerans} ></img>
                    
                    <Link to="/" className="link">home</Link>
                    
                    <Link to="/CreateRecipe" className="link">create recipe</Link>
                    

                    <Link to="about" className="link">about me</Link>
                    
               
            </div>
        )
    }
}

// keran's

export default NavBar;