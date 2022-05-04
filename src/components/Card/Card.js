import React from 'react';
import './Card.css'
import {Link} from "react-router-dom";

function Card(props) {

    return (
        <Link to={`/people/${props.id}`}>
            <div className="cardItem">

                {props.spiner ? props.spiner :   <>
                    <img src={props.img} alt=""/>
                    <div className="cardName">
                        <span>{props.name}</span>
                    </div>
                </>}
            </div>
        </Link>
    );
}

export default Card;