import {Recipe} from "../../models/models";
import {ISearch, ISearchResponse} from "../../models/search";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {Link} from "react-router-dom";
import placeholder from "../../assets/image/default.jpg";


const CountryDishes = ({ data } : {data: Recipe}) => {

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

export default CountryDishes;