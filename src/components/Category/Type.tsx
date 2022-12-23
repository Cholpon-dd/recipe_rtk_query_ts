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
                {/*<div>*/}
                <NavLink to={'/category/breakfast'} className="breakfast">
                    <img src={breakfast} alt=""  />
                    <p className="type__name">Breakfast</p>{' '}
                </NavLink>

                {/*</div>*/}
                {/*<div>*/}
                    <NavLink to={'/category/dessert'} className="dessert">
                         <img src={dessert} alt=""  />
                        <p>Dessert</p>
                    </NavLink>
                {/*</div>*/}
                {/*<div>*/}

                    <NavLink to={'/category/salad'} className="salad" >
                         <img src={salad} alt="" />
                        <p>Salad</p>{' '}
                    </NavLink>
                {/*</div>*/}
                {/*<div>*/}
                <NavLink to={'/category/beverage'} className="drinks" >
                    <img src={beverage} alt="beverage" />
                    <p>Beverage</p>{' '}
                </NavLink>
                {/*</div>*/}
                {/*<div>*/}
                    <NavLink to={'/category/soup'} className="soup" >
                         <img src={soup} alt="" />
                        <p>Soup</p>{' '}
                    </NavLink>
                {/*</div>*/}
            </div>
            
        </div>
    );
};

export default Type;