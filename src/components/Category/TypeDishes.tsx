import {Recipe} from "../../models/models";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Link} from 'react-router-dom'
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import placeholder from '../../assets/image/default.jpg'


const TypeDishes = ({ data } : {data: Recipe}) => {

    const {addToFavourite} = useActions()
    const {favourites} = useTypedSelector(state => state.favourites)
    const isStoredFav = favourites.some(fav => fav.id === data?.id)

    return (
        <div className="countrys__card">
            {data?.image ? (<img src={data?.image} alt="recipe-image" className="card__image"/>)
                : (<img src={placeholder} alt="default-image" className="card__image"/>)}
            <div className="card__content">
                <h4>{data?.title}</h4>
            </div>
            <div className="card__info">
                <div className="add_fav">
                    {isStoredFav ? (
                        <FaHeart className="heart" />
                    ) : (
                        <FaRegHeart onClick={() => !isStoredFav &&  addToFavourite(data)} className="heart" />
                    )}
                </div>
                <div>
                    <Link to={`/details/${data?.id}`} className="card__link">
                        View Recipe
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TypeDishes;