import React from 'react'
import "./Card.css";


function Card(props) {
    console.log(props);
 
    return (
        <div>
            <h1>{props.character.name}</h1>
            <p>{props.character.height}</p>
        </div>
    )

}


export default Card;