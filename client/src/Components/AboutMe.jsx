import styled from "styled-components"

const DivAbout = styled.div`
    width: 150vh;
    height: 60vh;
    background-color: #ABC4FF;
    color: white;
    font-size: 2.5vh;
    border-radius: 10px;
    margin: 3vh auto;
`

const aboutMe = () => {
    return (
        <DivAbout>
            <p> hola q te digo d mi</p>
        </DivAbout>
    )
}




export default aboutMe