import React from 'react';
import {ISearch, ISearchResponse} from "../../models/search";

type Props = { data: ISearchResponse}
const CountryDishes = ({ data } : Props) => {
    return (
        <div className="card">
            <img src={data?.image} alt="recipe-image" className="card__image"/>
            <div className="card__content">
                <h4>{data?.title}</h4>
            </div>
        </div>
    );
};

export default CountryDishes;