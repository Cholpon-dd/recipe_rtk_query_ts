import React from 'react';
import {useParams} from "react-router-dom";
import {useSearchRecipeQuery} from "../services/recipe.api";
import {useDebounce} from "../hooks/debounce";

import Results from "../components/Search/Results";
import Loader from "../components/Loader/Loader";


const SearchResult = () => {
    const {search} = useParams()
    const debounced = useDebounce(search!)
    const {data, isLoading} = useSearchRecipeQuery(debounced, {
        skip: debounced.length < 3
    })

    return (
        <div style={{marginTop: 60}} className="cards">
            {isLoading && <Loader/>}
            {data?.results.map((item) => {
                return <Results key={item.id} data={item}/>
            })}
        </div>
    );
};

export default SearchResult;