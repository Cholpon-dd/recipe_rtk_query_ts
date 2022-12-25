import React from 'react';
import {Recipe} from "../../models/models";
import {useActions} from "../../hooks/useActions";
import {Link} from 'react-router-dom'
import { CiStopwatch } from 'react-icons/ci';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import {useTypedSelector} from "../../hooks/useTypedSelector";

const ListRecipes = ({data} : {data: Recipe}) => {

    const {addToFavourite} = useActions()
    const {favourites} = useTypedSelector(state => state.favourites)

    const isStoredFav = favourites.some(fav => fav.id === data?.id)
    return (
        <>
            <div className="card">
                <img src={data?.image} alt="recipe-image" className="card__image"/>
                <div className="card__content">
                    <h4>{data?.title}</h4>
                </div>
                <div className="card__info">
                    <div>
                        <CiStopwatch className="clock" />
                    </div>
                    <div className="time">
                        <p>{data?.readyInMinutes} min</p>
                    </div>
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

        </>
    );
};

export default ListRecipes;