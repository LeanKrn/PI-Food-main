import React from "react"
import { connect } from "react-redux"
import { getRecipes } from "../redux/actions"
import styled from "styled-components"
import Tarj from "./tarjeta"
import Imagen from "./img/kerans.png"

const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    flex-wrap: wrap;

    `

class TarjetaRecipe extends React.Component {
    componentDidMount() {
        this.props.getRecipes();
    }
 

render() {
    return (
        <Container>
            {
                this.props.recipes.map(recipes => {
                    
                    return (
                        <Tarj
                            title={recipes.title}
                            diets={recipes.diets}
                            img={recipes.image ? recipes.image : Imagen}
                        />
                    )
                }
                )
            }
        </Container>
    )
}

}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
    }
}

const mapDispartchToProps = (dispatch) => {
    return {
        getRecipes: () => dispatch(getRecipes()),
    }
}

export default connect(mapStateToProps, mapDispartchToProps)(TarjetaRecipe);