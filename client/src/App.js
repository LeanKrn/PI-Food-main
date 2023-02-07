import { Route, useLocation } from "react-router-dom";
import './App.css';
import NavBar from "./Components/navBar";
import CreateRecipe from "./Components/Creacion";
import firtsPag from "./Components/principal";
import { useState } from "react";
import { useSelector } from "react-redux";
import Paginado from "./paginado";
import TarjetaRecipe from "./Components/tarjetas"
import { getRecipes, getRecipesByName } from "./redux/actions";
import { OrderPages } from "./Funcs";
import { useDispatch } from "react-redux";
import DetailRecipe from "./Components/detalles";



function App() {
  const dispatch = useDispatch();
  getRecipes() //dipacho la funcion para obtener informacion de mi back

  const [OrderPage, setOrderPage] = useState("-") //orden de la mi pagina

  const [currentPage, setCurrentPage] = useState(1) //pagina donde estoy pasado
  const [postPerPage, setPostPerPage] = useState(9) //recetas por pagina
  const lastPostIndex = currentPage * postPerPage; //index de la ultima receta mostrada
  const firtsPostIndex = lastPostIndex - postPerPage; //primer index del posteo


  const allRecipes = useSelector((state) => state.recipes) //me traigos todas las recetas
  const [valueInput, setValueInput] = useState("") //valores que maneja el input de busqueda

  const location = useLocation(); //dice en que ruta esta parada la pagina

  const currentPost = () => { //esta funcion filtra las recetas que traje anteriormente
    let result = allRecipes
    if (OrderPage !== "-") { result = OrderPages(OrderPage, allRecipes).slice(firtsPostIndex, lastPostIndex); }
    return result.slice(firtsPostIndex, lastPostIndex);
  }


  const paginado = (pageNumber) => { //funcion para setear el paginado
    setCurrentPage(pageNumber)
  }

  const cambFilter = () => { //trae los valores seleccionados en el select del filter para ordenar el paginado
    var select = document.getElementById('AscDesc');
    var option = select.options[select.selectedIndex];
    setOrderPage(option.value)
  }

  const cambBusq = (value) => { //dispacha el valor que esta en el input para mostrar en el paginado lo que se busque
    dispatch(getRecipesByName(value))
    setValueInput(value)
  }



  return (
    <div className="App">
      {/* verifica si no estamos en la pagina de inicio para no mostrar el nav */}
      {location.pathname !== "/" && <NavBar></NavBar>}
      {/* muestra la primera pagina para dar la bienvenida */}
      <Route exact path="/" component={firtsPag}></Route>
      {/* verifica si si estamos en el home y para mostrar todo lo que le sigue */}
      {location.pathname === "/home" &&
        <div className="inicio">
          <div className="filters">
            <h3>Filters</h3>
            {/* este es el input para buscar recetas por su nombre */}
            <input onChange={(e) => cambBusq(e.target.value)} placeholder="Buscar recetas"></input>
            <div className="custom-select">
              {/* este es el select para ordenar el paginado  */}
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
            {/* tarjetas que se muestran en el home mapeadas y con sus estilos  */}
            <TarjetaRecipe currentPost={currentPost()} />
            {/* limita las recetas que se muestran por pagina y te da la posibilidad de cambiar de pagina   */}
            <Paginado
              postPerPage={postPerPage}
              allRecipes={allRecipes.length}
              paginado={paginado}
            />
          </div>
        </div>
      }
      {/* ruta para crear una receta  */}
      <Route exact path="/CreateRecipe" component={CreateRecipe}></Route>
      {/* ruta de recetas en detalle para ver todo  */}
      <Route path='/recipes/:recipesId' component={DetailRecipe} />
    </div>
  );
}

export default App;
