import React from 'react';
import './Category.css'
import { Link } from "react-router-dom";


function Category(props) {
    return (
        <Link to={props.link}>
            <div className="col-auto m-3">
                <div id={props.background} className="category">
                    {/*<span>{props.name}</span>*/}
                    {/*{props.spiner}*/}
                    {props.spiner ? props.spiner :  <span>{props.name}</span>}
                </div>
            </div>
        </Link>
    );
}

export default Category;