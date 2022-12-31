import {NavLink} from "react-router-dom";
import beverage from '../../assets/image/red.jpg'
import dessert from '../../assets/image/chocolate.jpg'
import salad from '../../assets/image/salad.jpg'
import breakfast from '../../assets/image/breakfast.jpg'
import soup from '../../assets/image/soup.jpg'

const Type = () => {
    return (
        <div className="type__container">
            <h2 className="country__title">Popular Categories</h2>
            <div className="type__wrapper">
                <NavLink to={'/category/breakfast'} className="breakfast">
                    <img src={breakfast} alt=""/>
                    <p className="breakfast__desc">Breakfast</p>{' '}
                </NavLink>
                <NavLink to={'/category/dessert'} className="dessert">
                    <img src={dessert} alt=""/>
                    <p className="dessert__desc">Dessert</p>
                </NavLink>
                <NavLink to={'/category/salad'} className="salad">
                    <img src={salad} alt=""/>
                    <p className="salad__desc">Salad</p>{' '}
                </NavLink>
                <NavLink to={'/category/beverage'} className="drinks">
                    <img src={beverage} alt="beverage"/>
                    <p className="drinks__desc">Beverage</p>{' '}
                </NavLink>
                <NavLink to={'/category/soup'} className="soup">
                    <img src={soup} alt=""/>
                    <p className="soup__desc">Soup</p>{' '}
                </NavLink>
            </div>
        </div>
    );
};

export default Type;