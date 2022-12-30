import React from 'react';
import RandomRecipes from "../components/RandomRecipes/RandomRecipes";
import Country from "../components/Country/Country";
import Type from "../components/Category/Type";
import HeroSection from "../HeroSection/HeroSection";
import About from "../components/About/About";

const Home = () => {
    return (
        <>
            <HeroSection/>
            <Country/>
            <Type/>
            <RandomRecipes/>
            <About/>
        </>
    );
};

export default Home;