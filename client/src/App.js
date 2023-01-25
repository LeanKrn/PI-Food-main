import { Route,useLocation } from "react-router-dom";
import './App.css';
import NavBar from "./Components/navBar";
import CreateRecipe from "./Components/Creacion";
import aboutMe from "./Components/AboutMe";
import firtsPag from "./Components/principal";
import { useState } from "react";
import { useSelector } from "react-redux";
import Paginado from "./paginado";
import TarjetaRecipe from "./Components/tarjetas"
import { getRecipes } from "./redux/actions";


function App() {
  getRecipes()
  const location = useLocation();
  const allRecipes = useSelector((state)=> state.recipes)
  const [currentPage,setCurrentPage]= useState(1)
  const [postPerPage,setPostPerPage]= useState(9)
  const lastPostIndex= currentPage * postPerPage;
  const firtsPostIndex= lastPostIndex - postPerPage;
  const currentPost = allRecipes.slice(firtsPostIndex,lastPostIndex);
  
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar></NavBar>}
      <Route exact path="/" component={firtsPag}></Route>
      {location.pathname === "/home" && 
      <div className="inicio">
        <div className="filters">
                    <h3>Filters</h3>
                    <input placeholder="Buscar recetas"></input>
                    <div className="custom-select">
                    <select>
                      <option value="-">---</option>
                      <option value="asc">Ascendente</option>
                      <option value="desc">descendente</option>
                    </select>
                    <select>
                      <option value="-">---</option>
                      <option value="asc">Ascendente</option>
                      <option value="desc">descendente</option>
                    </select>
                    </div>
                </div>
                <div className="cards">
                    <TarjetaRecipe currentPost={currentPost} />
                    <Paginado 
                    postPerPage={postPerPage} 
                    allRecipes={allRecipes.length} 
                    paginado={paginado}
                    />
                </div>
      </div> 
      }
      <Route exact path="/CreateRecipe" component={CreateRecipe}></Route>
      <Route exact path="/about" component={aboutMe}></Route>
      <Route path='/recipe/:recipeId' element="xd" />
    </div>
  );
}

export default App;
