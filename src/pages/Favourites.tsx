import {Link} from 'react-router-dom';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {IoClose} from 'react-icons/io5';
import {CiStopwatch} from "react-icons/ci";
import placeholder from '../assets/image/default.jpg'
import none from '../assets/icon/images.png'

const Favourites = () => {

    const {favourites} = useTypedSelector(state => state.favourites)
    const {removeFromFavourites} = useActions()

    if (favourites.length === 0) return (
        <div className="empty__fav">
            <h3 className="page__title">No items</h3>
            <img src={none} alt="no items"/>
        </div>)


    return (
        <div className="fav_cards">
            {favourites.map((item) => {
                return (
                    <div key={item.id} className="fav_card">
                        {item.image ? (<img src={item.image} alt="image" className="favcard__image"/>)
                            : (<img src={placeholder} alt="default-image" className="favcard__image"/>)}
                        <h4 className="favcard__content">{item.title}</h4>
                        <div className="favcard__info">
                            <div>
                                <CiStopwatch className="clock"/>
                            </div>
                            <div className="time">
                                <p>{item.readyInMinutes} min</p>
                            </div>
                            <Link to={`/details/${item.id}`} className="favcard__link">
                                View Recipe
                            </Link>
                        </div>
                        <IoClose className="delete" onClick={() => removeFromFavourites({id: item.id})}/>
                    </div>
                )
            })}
        </div>
    );
};

export default Favourites;



