import React from 'react';
import {Recipe} from "../../models/models";

const ListRecipes = ({data} : {data: Recipe}) => {
    return (
        <>
            <div className="card">
                <img src={data?.image} alt="recipe-image" className="card__image"/>
                <div className="card__content">
                    <h2>{data?.title}</h2>
                </div>
            </div>

        </>
    );
};

export default ListRecipes;