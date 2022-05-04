import React from 'react';
import './Home.css'
import Category from "./Category/Category";



function Home(props) {
    let categoryElements = props.categoryData.map(el => {
        return <Category key={el.id}
                         name={el.name}
                         background={el.background}
                         link={el.name.toLowerCase()}
                         spiner={props.spiner}
        />
    })

    return (
        <>
            <h3>
                Connected the API only to people!!!</h3>
            <div className="container d-flex flex-wrap justify-content-center">

                {categoryElements}

            </div>
        </>
    );
}

export default Home;