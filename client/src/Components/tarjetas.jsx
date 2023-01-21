import React from "react"
import { connect } from "react-redux"
import { getRecipes } from "../redux/actions"


class tarjetaRecipe extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        this,props.getRecipes();
    }

    render() {
        return (
            <div>

            </div>
        )
    }

}

const mapStateToProps = () => {

}

const mapDispartchToProps = (dispatch) => {
    return {
        getRecipes: () => dispatch(getRecipes())

    }
}

export default connect(mapStateToProps, mapDispartchToProps)(tarjetaRecipe);