import React from 'react';
import {Cooking} from "./AboutSvg";


const About = () => {

    return (
        <section className="about__container" id="about">
            <h3 className="detail__title">About Us</h3>
            <div className="about__section">
                <div className="about__img">
                   <Cooking/>
                </div>
                <div className="about__desc">
                    <p className="about__description">Simply Recipes is here to help you cook delicious meals with less stress and more joy.
                        We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we’re
                        all about.
                        Our recipes primarily use fresh, unprocessed ingredients but we also believe there is a time and a place for
                        canned, frozen, and other prepared ingredients.
                        {/*We believe in a diet that includes a wide variety of foods: real butter and cream, extra virgin olive oil, */}
                        {/*eggs, lots of fruits and vegetables, and protein from meat, fish, beans, and cheese. Plus cake for dessert.*/}
                    </p>
                </div>

            </div>
        </section>

    );
};
export default About;