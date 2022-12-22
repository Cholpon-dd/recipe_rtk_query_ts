import React from 'react';
import {ICountry, ICountryResponse} from "../../models/country";

type Props = {data: ICountryResponse}
const CountryDishes = ({data} : Props) => {
    return (
        <div className="cuisine__card">
            <img src={data?.image} alt="food" className="cuisine__image"/>
            <div className="cuisine__content">
                <h4>{data?.title}</h4>
            </div>
            <div className="cuisine__info">

            </div>

        </div>
    );
};

export default CountryDishes;