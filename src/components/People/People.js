import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import {useState, useEffect} from "react";
import './People.css';
import Card from "../Card/Card";
import CardInfo from "../CardInfo/CardInfo";
import Spiner from "../Spiner/Spiner";


function People(props) {


    let peopleElements = props.state.map((el, key) => {
        return <Card id={el.id} key={key} name={el.name} img={el.image} spiner={props.spiner}/>

    })
    // let infoElement = props.state.map((el, key) => {
    //     return <CardInfo image={el.image} />
    //
    // })

    return (
        <>
            <Routes>
                <Route path="/" element={
                    <div className="container d-flex flex-wrap justify-content-center">
                        {peopleElements}
                    </div>
                }/>
                <Route path="*" element={<CardInfo spiner={props.spiner} state={props.state}/>}/>
            </Routes>

        </>
    );
}

export default People;