import React from 'react'
import styled from 'styled-components';
import "./Card.css";



const CardWrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: white;
        padding: 2%;
        margin: 2%;
        width: 50%;
`;

const Heading = styled.h1`
        font-size: 1.3rem;
`;

const Paragraph = styled.p`
        margin: 1%;
`;




function Card(props) {
    console.log(props);
 
    return (

        
        <CardWrapper>
            <Heading>Name: {props.character.name}</Heading>
            <Paragraph>Height: {props.character.height}</Paragraph>
            <Paragraph>Mass: {props.character.mass}</Paragraph>
            <Paragraph>Hair Color: {props.character.hair_color}</Paragraph>
            <Paragraph>Skin Color: {props.character.skin_color}</Paragraph>
            <Paragraph>Eye Color: {props.character.eye_color}</Paragraph>
            <Paragraph>Birth Year: {props.character.birth_year}</Paragraph>
            <Paragraph>Gender: {props.character.gender}</Paragraph>
            <Paragraph>Homeworld: {props.character.homeworld}</Paragraph>
        </CardWrapper>
    )

}




export default Card;