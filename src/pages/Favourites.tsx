
import { Link } from 'react-router-dom';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import { IoClose } from 'react-icons/io5';
import {CiStopwatch} from "react-icons/ci";

const Favourites = () => {

    const {favourites} = useTypedSelector(state => state.favourites)
    const {removeFromFavourites} = useActions()

    if (favourites.length === 0 ) return <p style={{marginTop: 50}}>No items</p>
    return (
        <div className="fav_cards">
            {favourites.map((item) => {
                return (
                    <div key={item.id} className="fav_card">
                        <img src={item.image} alt="image" className="favcard__image" />
                        <div className="favcard__content">{item.title}</div>
                        <div className="favcard__info">
                            <div>
                                <CiStopwatch className="clock" />
                            </div>
                            <div className="time">
                                <p>{item.readyInMinutes} min</p>
                            </div>
                            <Link to={`/details/${item.id}`} className="favcard__link">
                                View Recipe
                            </Link>
                        </div>
                        <IoClose className="delete" onClick={() => removeFromFavourites({id: item.id})} />
                    </div>
                )
            })}
        </div>
    );
};

export default Favourites;



