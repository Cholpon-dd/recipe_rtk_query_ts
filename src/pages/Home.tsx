import React from 'react';
import RandomRecipes from "../components/RandomRecipes/RandomRecipes";
import Country from "../components/Country/Country";
import Type from "../components/Category/Type";

const Home = () => {
    return (
        <>
            <Country/>
            <Type/>
            <RandomRecipes/>
        </>
    );
};

export default Home;