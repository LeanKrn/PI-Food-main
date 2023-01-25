import styled from "styled-components"
import lupa from "./img/lupa.png"

const DivCreate = styled.div`
display: flex;
flex-direction: column;
background-color: #D7E3FC;
height: 500px;
margin: 50px;
border-radius: 10px;
ul{
    margin: auto;
    padding: 20px;
}
li{
    font-size: 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    margin: 20px;
}
input{
    height: 25px;
    border: none;
    border-bottom:5px solid #ABC4FF;
    border-radius: 5px;
}

`
const Divlist = styled.div`
    display: flex;
`

const CreateRecipe = () => {
    return (
        <DivCreate>
            <h2>Crea tu receta!!</h2>
            <Divlist>
                <div>
                <ul>
                    <li>
                        <label>Name</label>
                        <input></input>
                    </li>
                    <li>
                        <label>Price</label>
                        <input></input>
                    </li>
                    <li>
                        <label>Time in minuts</label>
                        <input></input>
                    </li>
                    <li>
                        <label>Time in minuts</label>
                        <input></input>
                    </li>
                    <li>
                        <label>Time in minuts</label>
                        <input></input>
                    </li>
                </ul>
                </div> 
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quia consectetur quae saepe consequuntur veritatis deserunt optio labore ex! Rem quis temporibus doloribus assumenda ea debitis ullam iure distinctio quibusdam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quia consectetur quae saepe consequuntur veritatis deserunt optio labore ex! Rem quis temporibus doloribus assumenda ea debitis ullam iure distinctio quibusdam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quia consectetur quae saepe consequuntur veritatis deserunt optio labore ex! Rem quis temporibus doloribus assumenda ea debitis ullam iure distinctio quibusdam!</p>
                </div>
            </Divlist>
        </DivCreate>
    )
}




export default CreateRecipe