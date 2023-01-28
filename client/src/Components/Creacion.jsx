import styled from "styled-components"
import lupa from "./img/lupa.png"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createRecipe } from "../redux/actions"
import React from "react"
import './creacion.css';

const FormCreate = styled.form`

`
const Divlist = styled.div`
    display: flex;
`


class CreateRecipe extends React.Component {
    // const dispatch=useDispatch();
    constructor(props) {
        super(props)
        this.state = {
            values: {
                title: "",
                readyInMinutes: 0,
                pricePerServing: 0,
                sourceName: "",
                image: "",
                healtScore: 0,
                summary: "",
                cuisines: "",
                analyzedInstructions: "",
            },
            validations: {
                title: "",
                readyInMinutes: 0,
                pricePerServing: 0,
                sourceName: "",
                image: "",
                healtScore: 0,
                summary: "",
                cuisines: "",
                analyzedInstructions: "",
            }
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            values: {
                ...this.state.values,
                [name]: value,
            },
        })
    }

    validateAll = () => {
        const { title, readyInMinutes, sourceName,analyzedInstructions,pricePerServing } = this.state.values
        const validations = { title: '', readyInMinutes: '', sourceName: '',analyzedInstructions:"",pricePerServing:"" }
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
            this.setState({ validations })
        }

        return isValid
    }

    validateOne = (e) => {
        const { name } = e.target
        const value = this.state.values[name]
        let message = ''

        if (!value) {
            message = `${name} is required`
        }

        this.setState({
            validations: {
                ...this.state.validations,
                [name]: message,
            },
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const isValid = this.validateAll()
        if (!isValid) {
            return false
        }
        const values = JSON.stringify(this.state.values)
        alert(values)
    }

    render() {
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
        } = this.state.values

        const {
            title: titleVal,
            readyInMinutes: readyInMinutesVal,
            pricePerServing: pricePerServingVal,
            sourceName: sourceNameVal,
            image: imageVal,
            healtScore: healtScoreVal,
            summary: summaryVal,
            cuisines: cuisinesVal,
            analyzedInstructions: analyzedInstructionsVal
        } = this.state.validations

        return (
            <form className="FormCreate" onSubmit={this.handleSubmit}>
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
                                    onChange={this.handleChange}
                                    onBlur={this.validateOne}
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
                                    onChange={this.handleChange}
                                    onBlur={this.validateOne}
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
                                    onChange={this.handleChange}
                                    onBlur={this.validateOne}
                                ></input>
                                <div>{readyInMinutesVal}</div>
                            </li>
                            <li className="ListOr">
                                <label>sourceName *</label>
                                <input
                                    className="InputS"
                                    type="number"
                                    value={sourceName}
                                    name="sourceName"
                                    onChange={this.handleChange}
                                    onBlur={this.validateOne}
                                ></input>
                                <div>{sourceNameVal}</div>
                            </li>
                            <li className="ListOr">
                                <label>cuisines</label>
                                <input
                                    className="InputS"
                                    type="text"
                                    value={cuisines}
                                    name="cuisines"
                                    onChange={this.handleChange}
                                    onBlur={this.validateOne}
                                ></input>
                                <div>{cuisinesVal}</div>
                            </li>
                            <li className="ListOr">
                                <label>image</label>
                                <input
                                    className="InputS"
                                    type="text"
                                    value={image}
                                    name="image"
                                    onChange={this.handleChange}
                                    onBlur={this.validateOne}
                                ></input>
                                <div>{imageVal}</div>
                            </li>
                            <li className="ListOr">
                                <label>healtScore</label>
                                <input
                                    className="InputS"
                                    type="text"
                                    value={healtScore}
                                    name="healtScore"
                                    onChange={this.handleChange}
                                    onBlur={this.validateOne}
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
                                    onChange={this.handleChange}
                                    onBlur={this.validateOne}
                                ></input>
                                <div>{summaryVal}</div>
                            </li>
                            <li className="ListOr">
                                <label>Instrucciones de preparacion *</label>
                                <input
                                    className="InputS"
                                    type="text"
                                    value={analyzedInstructions}
                                    name="analyzedInstructions"
                                    onChange={this.handleChange}
                                    onBlur={this.validateOne}
                                ></input>
                                <div>{analyzedInstructionsVal}</div>
                            </li>
                        </ul>
                    </div>
                    <div className="DivValues">
                        <h2>Values of the form</h2>
                        <p>Title: {this.state.title}</p>
                        <p>price: {this.state.price}</p>
                        <p>readyInMinutes: {this.state.readyInMinutes}</p>
                        <p>sourceName: {this.state.sourceName}</p>
                        <p>cuisines: {this.state.cuisines}</p>
                        <p>image: {this.state.image}</p>
                        <p>healtScore: {this.state.healtScore}</p>
                        <p>summary: {this.state.summary}</p>
                        <p>analyzedInstructions: {this.state.analyzedInstructions}</p>
                        <button type="submit">ENVIAR</button>
                    </div>
                </Divlist>
            </form>
        )
    }
}




export default CreateRecipe