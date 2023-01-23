import styled from "styled-components"

const Tarjeta = styled.div `
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 380px;
    background-color: #7fffd4;
    margin: 20px;
    border-radius: 10px;
    img {
        width: 400px;
        height: 270px;
    }
`



const Tarj = ({img,title,diets}) =>{
    return(
        <Tarjeta>
            <p>name:{title}</p>
            <p>{diets} </p>
            <img src={img}></img>
        </Tarjeta>
    )
}

export default Tarj