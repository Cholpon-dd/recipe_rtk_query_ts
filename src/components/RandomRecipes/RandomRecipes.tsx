import React from 'react';
import {useGetRandomRecipesQuery} from "../../services/recipe.api";
import ListRecipes from "./ListRecipes";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const RandomRecipes = () => {
    const {data, isLoading, isError} = useGetRandomRecipesQuery(12)
    const skeleton =  [1,2,3,4,5,6,7,8,9,10,11,12]
    return (
        <>
            <h2 className="country__title">Random recipes</h2>

            <div className="cards">
                {isLoading && skeleton.map((_, index) => (
                    <div key={index}>
                        <Skeleton count={1} width={200} height={150} />
                        <Skeleton count={1} width={200} height={75} />
                        <Skeleton count={1} width={200} height={50} />
                    </div>
                    ))
                 }
                {isError && <p style={{textAlign: "center", color: "red", fontSize:"24px"}}>Something went wrong</p>}
                {data?.recipes.map((recipe) => {
                    return <ListRecipes key={recipe.id} data={recipe}/>
                })}
            </div>
        </>
    )
};

export default RandomRecipes;