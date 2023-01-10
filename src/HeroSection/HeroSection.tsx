import React from 'react';
import Search from "../components/Search/Search";
// import main from '../assets/image/main.jpg'

const HeroSection = () => {
    return (
        <section className="hero__wrapper" style={{
            backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(/main.jpg)',
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',

        }}>
            <div className="hero__container">
                <h1 className="hero__title">What are you cooking today?</h1>
                <h2 className="hero__sub">Easy way to make your favourite dish</h2>
                <Search/>
            </div>
        </section>
    );
};

export default HeroSection;