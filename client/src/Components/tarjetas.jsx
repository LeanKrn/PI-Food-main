import React from "react"
import { connect } from "react-redux"
import { getRecipes } from "../redux/actions"
import styled from "styled-components"
import Tarj from "./tarjeta"
import Imagen from "./img/keranSad.png"

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
                   this.props.currentPost ? this.props.currentPost.map(recipes => {
                    
                        return (
                            <Tarj
                                id={recipes.id}
                                title={recipes.title}
                                diets={recipes.diets}
                                img={recipes.image ? recipes.image : Imagen}
                            />
                        )
                    }
                    ): <p>no content</p>
                }
            </Container>
        )
    }

}


const mapDispartchToProps = (dispatch) => {
    return {
        getRecipes: () => dispatch(getRecipes()),
    }
}

export default connect(null, mapDispartchToProps)(TarjetaRecipe);