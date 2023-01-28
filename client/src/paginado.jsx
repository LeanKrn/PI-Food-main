import React from "react";
import styled from "styled-components";

const NavNumbers = styled.nav `
    
    ul{
        margin: auto;
        display: flex;
        list-style: none;
        li{
            cursor: pointer;
            color: white;
            margin: 10px;
            padding: 10px;
            border-radius: 5px;
            background-color:#ABC4FF ;
            box-shadow: 0px 0px 5px 2px #ABC4FF;
        }
    }
    
`

export default function Paginado ({postPerPage,allRecipes,paginado}){
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allRecipes/postPerPage); i++) {
        pageNumbers.push(i)
        
    }

    return(
        <NavNumbers>
            <ul>
                {  pageNumbers &&
                    pageNumbers.map(number=>(
                        <li key={number}>
                            <a onClick={()=> paginado(number)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </NavNumbers>
    )
}