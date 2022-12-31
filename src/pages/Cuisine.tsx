import React from 'react';
import {useParams} from "react-router-dom";
import {useGetCountryRecipesQuery} from "../services/recipe.api";
import CountryDishes from "../components/Country/CountryDishes";
import Loader from "../components/Loader/Loader";

const Cuisine = () => {
    const {country} = useParams<{ country?: string }>()
    const {data, isLoading} = useGetCountryRecipesQuery(country!)

    return (
        <div className="cards">
            {isLoading && <Loader/>}
            {data?.results.slice(1, 13).map((item) => {
                return <CountryDishes key={item.id} data={item}/>
            })}
        </div>
    );
};

export default Cuisine;