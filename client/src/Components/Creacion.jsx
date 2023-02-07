import styled from "styled-components"
import React from "react"
import './creacion.css';
import { connect } from "react-redux"
import { createRecipe } from "../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import img from "./img/keranSad.png"


const Tarjeta = styled.div`
    display:flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 500px;
    height: 400px;
    margin: auto;
    border-radius: 10px;
    align-content: center;
    background-color: #abc4ff;
    h2{
        font-family: Helvetica;
        margin: 10px 20px;
        padding: 2px 10px;
        border-radius: 15px;
        background-color:#EDF2FB ;
    }
    img {
        width: 250px;
        height: 250px;
        margin: 10px;
        border-radius: 10px;
    }
    @media only screen and (max-width: 1600px) {
        width: 300px;
        h2{
            max-height: 17vh;
        }
    }
`
const DietDiv = styled.div`
    display: flex;
  
`
const DietP = styled.p`
   margin: 5px 10px;
   font-size: 15px;
   padding: 2px 5px;
   border-radius: 5px;
   font-family: Helvetica;
   background-color: #EDF2FB;
`


const Divlist = styled.div`
    display: flex;
    `

const validateAll = (values, setValidations) => {
    const { title, readyInMinutes, sourceName, analyzedInstructions, pricePerServing } = values
    const validations = { title: '', readyInMinutes: '', sourceName: '', analyzedInstructions: "", pricePerServing: "" }
    let isValid = true

    if (!title) {
        validations.title = 'Title is required'
        isValid = false
    }

    if (!readyInMinutes) {
        validations.readyInMinutes = 'Ready In Minutes is required'
        isValid = false
    }

    if (!sourceName) {
        validations.sourceName = 'Source Name is required'
        isValid = false
    }
    if (!analyzedInstructions) {
        validations.analyzedInstructions = 'Source Name is required'
        isValid = false
    }
    if (!pricePerServing) {
        validations.pricePerServing = 'Source Name is required'
        isValid = false
    }

    if (!isValid) {
        setValidations({ validations })
    }

    return isValid
}


const CreateRecipe = () => {
    const array = ["", "Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Paleo", "Pescetarian", "Primal", "Low FODMAP", "Whole30"]
    const dispatch = useDispatch();

    const [values, setValues] = useState({
        title: "", readyInMinutes: "", pricePerServing: "", sourceName: "", diets: [], image: "", healtScore: "", summary: "", cuisines: "", analyzedInstructions: "",
    })
    const [validations, setValidations] = useState({
        title: "", readyInMinutes: "", pricePerServing: "", sourceName: "", image: "", healtScore: "", summary: "", cuisines: "", analyzedInstructions: "",
    })



    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleDiets = (event) => {
        const { value } = event.target
        const { diets } = values
        !diets.includes(value) ? diets.push(value) :
            setValues({
                ...values,
                diets: diets.filter(valor => valor !== value),
            })
    }

    const validateOne = (event) => {
        const { name } = event.target
        const value = values[name]
        let message = ''

        if (!value) {
            message = `${name} is required`
        }
        if (value && name === 'title' && (value.length < 3 || value.length > 50)) {
            message = 'Title must contain between 3 and 50 characters'
        }

        setValidations({
            ...validations,
            [name]: message,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const isValid = validateAll(values, setValidations)
        if (!isValid) {
            return false
        }
        try {
            dispatch(createRecipe(values))
            alert("it was successfully uploaded")
        } catch (error) {
            alert(error.message)

        }
    }


    const {
        title,
        readyInMinutes,
        pricePerServing,
        sourceName,
        image,
        healtScore,
        summary,
        cuisines,
        analyzedInstructions
    } = values

    const {
        title: titleVal,
        readyInMinutes: readyInMinutesVal,
        pricePerServing: pricePerServingVal,
        sourceName: sourceNameVal,
        diets: dietsVal,
        image: imageVal,
        healtScore: healtScoreVal,
        summary: summaryVal,
        cuisines: cuisinesVal,
        analyzedInstructions: analyzedInstructionsVal
    } = validations

    return (
        <form className="FormCreate" onSubmit={handleSubmit}>
            <h2>Crea tu receta!!</h2>
            <Divlist >
                <div>
                    <ul className="UnList">
                        <li className="ListOr">
                            <label>Title *</label>
                            <input
                                className="InputS"
                                type="text"
                                value={title}
                                name="title"
                                onChange={(event) => handleChange(event)}
                                onBlur={(event) => validateOne(event)}
                            ></input>
                            <div>{titleVal}</div>
                        </li>
                        <li className="ListOr">
                            <label>Price *</label>
                            <input
                                className="InputS"
                                type="text"
                                value={pricePerServing}
                                name="pricePerServing"
                                onChange={(e) => handleChange(e)}
                                onBlur={(event) => validateOne(event)}
                            ></input>
                            <div>{pricePerServingVal}</div>
                        </li>
                        <li className="ListOr">
                            <label>Time in minuts</label>
                            <input
                                className="InputS"
                                type="number"
                                value={readyInMinutes}
                                name="readyInMinutes"
                                onChange={(e) => handleChange(e)}
                            ></input>
                            <div>{readyInMinutesVal}</div>
                        </li>
                        <li className="ListOr">
                            <label>sourceName *</label>
                            <input
                                className="InputS"
                                type="text"
                                value={sourceName}
                                name="sourceName"
                                onChange={(e) => handleChange(e)}
                                onBlur={(event) => validateOne(event)}
                            ></input>
                            <div>{sourceNameVal}</div>
                        </li>
                        <li className="ListOr">
                            <div className="CheckBoxs">

                                <div>
                                    <label>Gluten Free</label>
                                    <input type="checkbox" value="1" onChange={(event) => handleDiets(event)} ></input>
                                    <span class="checkmark"></span>
                                </div>

                                <div>

                                    <label>Ketogenic</label>
                                    <input type="checkbox" value="2" onChange={(event) => handleDiets(event)} ></input>
                                    <span class="checkmark"></span>
                                </div>

                                <div>

                                    <label>Vegetarian</label>
                                    <input type="checkbox" value="3" onChange={(event) => handleDiets(event)} ></input>
                                    <span class="checkmark"></span>
                                </div>

                                <div>

                                    <label>Lacto-Vegetarian</label>
                                    <input type="checkbox" value="4" onChange={(event) => handleDiets(event)} ></input>
                                    <span class="checkmark"></span>
                                </div>

                                <div>

                                    <label>Ovo-Vegetarian</label>
                                    <input type="checkbox" value="5" onChange={(event) => handleDiets(event)} ></input>
                                    <span class="checkmark"></span>
                                </div>

                                <div>

                                    <label>Vegan</label>
                                    <input type="checkbox" value="6" onChange={(event) => handleDiets(event)}  ></input>
                                    <span class="checkmark"></span>
                                </div>

                                <div>

                                    <label>Pescetarian</label>
                                    <input type="checkbox" value="8" onChange={(event) => handleDiets(event)} ></input>
                                    <span class="checkmark"></span>
                                </div>

                                <div>
                                    <label>Paleo</label>
                                    <input type="checkbox" value="7" onChange={(event) => handleDiets(event)} ></input>
                                    <span class="checkmark"></span>
                                </div>

                                <div>

                                    <label>Primal</label>
                                    <input type="checkbox" value="9" onChange={(event) => handleDiets(event)} ></input>
                                    <span class="checkmark"></span>
                                </div>

                                <div>

                                    <label>Low FODMAP</label>
                                    <input type="checkbox" value="10" onChange={(event) => handleDiets(event)} ></input>
                                    <span class="checkmark"></span>
                                </div>

                                <div>

                                    <label>Whole30</label>
                                    <input type="checkbox" value="11" onChange={(event) => handleDiets(event)} ></input>
                                    <span class="checkmark"></span>
                                </div>

                                <p>{dietsVal}</p>

                            </div>


                        </li>
                        <li className="ListOr">
                            <label>cuisines</label>
                            <input
                                className="InputS"
                                type="text"
                                value={cuisines}
                                name="cuisines"
                                onChange={(e) => handleChange(e)}
                            ></input>
                            <div>{cuisinesVal}</div>
                        </li>
                        <li className="ListOr">
                            <label>image</label>
                            <input
                                placeholder="Url"
                                className="InputS"
                                type="text"
                                value={image}
                                name="image"
                                onChange={(e) => handleChange(e)}
                            ></input>
                            <div>{imageVal}</div>
                        </li>
                        <li className="ListOr">
                            <label>healtScore *</label>
                            <input
                                className="InputS"
                                type="text"
                                value={healtScore}
                                name="healtScore"
                                onChange={(e) => handleChange(e)}
                                onBlur={(event) => validateOne(event)}
                            ></input>
                            <div>{healtScoreVal}</div>
                        </li>
                        <li className="ListOr">
                            <label>summary</label>
                            <input
                                className="InputS"
                                type="text"
                                value={summary}
                                name="summary"
                                onChange={(e) => handleChange(e)}
                            ></input>
                            <div>{summaryVal}</div>
                        </li>
                        <li className="ListOr">
                            <label>Instrucciones de preparacion *</label>
                            <textarea
                                className="InputS"
                                value={analyzedInstructions}
                                name="analyzedInstructions"
                                onChange={(e) => handleChange(e)}
                                onBlur={(event) => validateOne(event)}
                                rows="4"
                                cols="50"
                            ></textarea>
                            <div>{analyzedInstructionsVal}</div>
                        </li>
                    </ul>
                </div>
                <Tarjeta>
                    <h2>{values.title}</h2>
                    <DietDiv >
                        {values.diets.length < 4 ?
                            values.diets.map(diet =>
                                <DietP>{array[diet]}</DietP>)
                            :
                            <>
                                <DietP>{array[values.diets[0]]}</DietP>
                                <DietP>{array[values.diets[1]]}</DietP>
                                <DietP>{array[values.diets[2]]}</DietP>
                                <DietP>...</DietP>
                            </>
                        }
                    </DietDiv>

                    <img src={values.image ? values.image : img}></img>
                </Tarjeta>

            </Divlist>
        </form>
    )

}



const mapDispatchToProps = (dispatch) => {
    return {
        createRecipe: () => dispatch(createRecipe()),
    }
}

export default connect(null, mapDispatchToProps)(CreateRecipe);
