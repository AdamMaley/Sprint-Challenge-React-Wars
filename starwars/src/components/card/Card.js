import React from 'react'
import "./Card.css";



function Card(props) {
    console.log(props);
    return (
        <div>
            {props.data.results.map((element) => {
                return (
                    <div>
                        <h1>{element.name}</h1>
                        




                    </div>
                );

            })};
        </div>
    )
}

export default Card;