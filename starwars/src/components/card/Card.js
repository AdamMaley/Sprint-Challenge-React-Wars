import React from 'react'
import StyledComponent from "./Card.css";


function Card(props) {
    console.log(props);
 
    return (

        
        <StyledComponent>
            <h1>Name: {props.character.name}</h1>
            <p>Height: {props.character.height}</p>
            <p>Mass: {props.character.mass}</p>
            <p>Hair Color: {props.character.hair_color}</p>
            <p>Skin Color: {props.character.skin_color}</p>
            <p>Eye Color: {props.character.eye_color}</p>
            <p>Birth Year: {props.character.birth_year}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Homeworld: {props.character.homeworld}</p>
        </StyledComponent>
    )

}




export default Card;