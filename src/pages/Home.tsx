import React from 'react';
import RandomRecipes from "../components/RandomRecipes/RandomRecipes";
import Country from "../components/Country/Country";

const Home = () => {
    return (
        <div>
            <Country/>
            <RandomRecipes/>
        </div>
    );
};

export default Home;