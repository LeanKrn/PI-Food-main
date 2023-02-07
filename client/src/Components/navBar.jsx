import React from "react"
import { Link } from "react-router-dom";
import kerans from "./img/kerans.png"
import './navBar.css';
import git from "./img/git.png"
import linkedin from "./img/Lkdin.png"



class NavBar extends React.Component {
    render() {
        return (
            <div className="nav">
              
                    <img src={kerans} className="logo"></img>
                    
                    <Link to="/home" className="link">Home</Link>
                    
                    <Link to="/CreateRecipe" className="link">Create recipe</Link>
                    

                    <a href="https://github.com/LeanKrn" target="_blank" className="linkgit"> <img src={git}></img> </a>
                    <a href="https://www.linkedin.com/in/leankrn/" target="_blank" className="linkgit"> <img src={linkedin}></img> </a>
                    
               
            </div>
        )
    }
}

// keran's

export default NavBar;