import React from 'react';
import './Films.css'
import Card from "../Card/Card";



function Films(props) {

// console.log(props.state)
//
//     let filmsElements = props.state.map((el,key) => {
//        return <Card key={key} name={el.title}/>
//     })
//     console.log(filmsElements)
    return (
        <div className="container d-flex flex-wrap justify-content-center">
            {/*{filmsElements}*/}
        </div>
    );
}

export default Films;