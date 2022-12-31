import React from 'react';
import Search from "../components/Search/Search";

const HeroSection = () => {
    return (
        <section className="hero__wrapper">
            <div className="hero__container">
                <h1 className="hero__title">What are you cooking today?</h1>
                <h2 className="hero__sub">Easy way to make your favourite dish</h2>
                <Search/>
            </div>
        </section>
    );
};

export default HeroSection;