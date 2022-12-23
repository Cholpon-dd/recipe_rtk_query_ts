import {ISearchResponse} from "../../models/search";
import React from "react";

type Props = { data: ISearchResponse}
const TypeDishes = ({ data } : Props) => {
    return (
        <div className="card">
            <img src={data?.image} alt="recipe-image" className="card__image"/>
            <div className="card__content">
                <h4>{data?.title}</h4>
            </div>
        </div>
    );
};

export default TypeDishes;