import { Link } from 'react-router-dom';
import styled from "styled-components"

const Tarjeta = styled.div`
    display:flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 500px;
    height: 400px;
    margin: 20px;
    border-radius: 10px;
    align-content: center;
    background-color: #d7e3fc99;
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



const Tarj = ({ img, title, diets,id }) => {
    return (
        <Tarjeta>
            <Link to={`/recipes/${id}`}>
            <h2>{title}</h2>
            </Link>
            <DietDiv >
                {diets.length<4?
                diets.map(diet=> 
                    <DietP>{diet}</DietP>)
                    :
                <>
                <DietP>{diets[0]}</DietP>
                <DietP>{diets[1]}</DietP>
                <DietP>{diets[2]}</DietP>
                <DietP>...</DietP>
                </>
                }
            </DietDiv>
            
            <img src={img}></img>
        </Tarjeta>
    )
}

export default Tarj