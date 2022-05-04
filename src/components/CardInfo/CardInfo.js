import React from 'react';
import './CardInfo.css'

function CardInfo(props) {
    const idUrl = document.location.pathname.substr(8) - 1
    return (
        <div className="container  flex-wrap  cardInfo">
            <div className="row">
                <div className="col-3">
                    <img src={props.state[idUrl].image} alt=""/>
                </div>
                <div className="col-9 d-flex flex-column">
                    <span>Name: {props.state[idUrl].name}</span>
                    <span>Height: {props.state[idUrl].height}</span>
                    <span>Mass: {props.state[idUrl].mass}</span>
                    <span>Gender: {props.state[idUrl].gender}</span>
                    <span>Species: {props.state[idUrl].species}</span>
                </div>
            </div>
            {props.spiner}
        </div>
    );
}

export default CardInfo;