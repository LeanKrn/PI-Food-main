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
import { getRecipes,getRecipesByName } from "./redux/actions";
import {OrderPages} from "./Funcs"
import { useDispatch } from "react-redux";
import DetailRecipe from "./Components/detalles";



function App() {
  getRecipes()
  const dispatch = useDispatch();
  const [OrderPage,setOrderPage]= useState("-")
  const location = useLocation();
  const allRecipes = useSelector((state)=> state.recipes) 
  const [valueInput,setValueInput]= useState("")
  
  const [currentPage,setCurrentPage]= useState(1)
  const [postPerPage,setPostPerPage]= useState(9)
  const lastPostIndex= currentPage * postPerPage;
  const firtsPostIndex= lastPostIndex - postPerPage;
  const currentPost = () => {
    if (OrderPage!=="-" ) {
      return OrderPages(OrderPage,allRecipes).slice(firtsPostIndex,lastPostIndex);
    }else{
     return allRecipes.slice(firtsPostIndex,lastPostIndex);}
    }
  
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  
  const cambFilter= (value) =>{
    var select = document.getElementById('AscDesc');
    var option = select.options[select.selectedIndex];
    setOrderPage(option.value)
  }

  const cambBusq =(value)=>{
    dispatch(getRecipesByName(value))
    setValueInput(value)
  }

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar></NavBar>}
      <Route exact path="/" component={firtsPag}></Route>
      {location.pathname === "/home" && 
      <div className="inicio">
        <div className="filters">
                    <h3>Filters</h3>
                    <input onChange={(e)=>cambBusq(e.target.value)} placeholder="Buscar recetas"></input>
                    {/* <label onClick={cambBusq}>Buscar</label> */}
                    <div className="custom-select">
                    <select id="AscDesc" onChange={cambFilter}>
                      <option value="-">Ordenar por</option>
                      <option value="asc">Ascendente</option>
                      <option value="desc">descendente</option>
                      <option value="dietasasc">Menor dietas</option>
                      <option value="dietasdesc">Mayor dietas</option>
                    </select>
                    </div>
                </div>
                <div className="cards">
                    <TarjetaRecipe currentPost={currentPost()} />
                    <Paginado 
                    postPerPage={postPerPage} 
                    allRecipes={allRecipes.length} 
                    paginado={paginado}
                    />
                </div>
      </div> 
      }
      <Route exact path="/CreateRecipe" component={CreateRecipe}></Route>
      <Route exact path="/DetailRecipe" component={DetailRecipe}></Route>
      <Route exact path="/about" component={aboutMe}></Route>
      <Route path='/recipe/:recipeId' element="xd" />
    </div>
  );
}

export default App;
