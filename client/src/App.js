import './App.css';
import NavBar from "./Components/navBar";
import inicioRoute from "./Components/inicio";
import CreateRecipe from "./Components/Creacion";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <NavBar></NavBar>
      <Route exact path="/" component={inicioRoute}></Route>
      <Route exact path="/CreateRecipe" component={CreateRecipe}></Route>
    </div>
  );
}

export default App;
