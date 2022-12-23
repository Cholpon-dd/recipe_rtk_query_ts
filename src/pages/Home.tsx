import React from 'react';
import RandomRecipes from "../components/RandomRecipes/RandomRecipes";
import Country from "../components/Country/Country";
import Type from "../components/Category/Type";

const Home = () => {
    return (
        <div>
            <Country/>
            <Type/>
            <RandomRecipes/>
        </div>
    );
};

export default Home;