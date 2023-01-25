import { Link } from "react-router-dom"
import styled from "styled-components"

const DivPrin = styled.div `
    background-color: #ABC4FF;
    color: white;
    justify-content: center;
    margin: 25vh auto;
    width: 70vh;
    height: 25vh;
    border-radius: 10px;
    h1{
        padding-top: 20px;
        margin: 10px;
    }
    p{
        font-style: none;
        padding: 0;
        font-size: 50px;
        transition: 1s;
    }
    p:hover{
       transform: scale(1.15);
    }
`




const firtsPag = () => {
    return (
        <DivPrin>
            
            <h1> Welcome to Keran´s</h1>
            <Link to="/home" className="link"><p>Home</p></Link>
        </DivPrin>
    )
}




export default firtsPag