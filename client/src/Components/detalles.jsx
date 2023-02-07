import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detalle.css"
import img from "./img/keranSad.png"


export default function DetailRecipe() {
    const { recipesId } = useParams();
    const [recipes, setRecipes] = useState({})


    useEffect(() =>  {
        let result = []
        fetch(`http://localhost:3001/recipes/${recipesId}`)
            .then((response) => response.json())
            .then((char) => {
                console.log(char);
                if (char.title) {
                    setRecipes(char);
                } else {
                    alert(' xd No hay personajes con ese ID');
                }
            })
            .catch((err) => {
                alert('No hay personajes con ese ID');
            });
        return setRecipes({});
    }, [recipesId]);
    
    const { title, image, diets, pricePerServing, sourceName, healthScore, summary, cuisines, analyzedInstructions } = recipes
    return (
        <div className="divDetail">
            <div className="divImg">
                <img src={image ? image : img} alt="img" />
            </div>
            <div className="divInfo">
                <h1>{title}</h1>
                <p className="InfoP">diets: {
                    diets ? diets.map(diet =>
                        <p className="dietsP">{diet}</p>) : <p>No diets</p>
                }</p>
                <p className="InfoP">pricePerServing: {pricePerServing}</p>
                <p className="InfoP">sourceName: {sourceName}</p>
                <p className="InfoP">healthScore: {healthScore}</p>
                <p className="InfoP">summary: {summary}</p>
                <p className="InfoP">cuisines: {cuisines}</p>
                <p className="InfoP">analyzedInstructions: {analyzedInstructions}</p>
            </div>
        </div>
    )
}

