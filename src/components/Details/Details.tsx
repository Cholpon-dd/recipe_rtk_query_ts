import {useParams} from "react-router-dom";
import {useGetDetailRecipeQuery} from "../../services/recipe.api";
import {useState} from "react";
import Placeholder from '../../assets/image/default.jpg'
import Loader from "../Loader/Loader";


const Details = () => {

    const {id} = useParams()
    const {data, isLoading} = useGetDetailRecipeQuery(id!)

    const [activeTabs, setActiveTabs] = useState('description')

    return (
        <div className="detail__wrapper">
            <h3 className="detail__title">{data?.title}</h3>
            <div className="detail__container">
                {isLoading && <Loader/>}
                <div className="detail__card">
                    {data?.image ? (<img src={data?.image} alt="image" className="detail__img"/>)
                        : (<img src={Placeholder} alt="default-image" className="detail__img"/>)}

                </div>
                <div className="detail__description">
                    <button
                        className={activeTabs === 'description' ? 'active' : 'detail__btn'}
                        onClick={() => setActiveTabs('description')}
                    >
                        Description
                    </button>
                    <button
                        className={activeTabs === 'ingredients' ? 'active' : 'detail__btn'}
                        onClick={() => setActiveTabs('ingredients')}
                    >
                        Ingredients
                    </button>
                    <button
                        className={activeTabs === 'instructions' ? 'active' : 'detail__btn'}
                        onClick={() => setActiveTabs('instructions')}
                    >
                        Instructions
                    </button>

                    {activeTabs === 'description' && (
                        <>
                            <p dangerouslySetInnerHTML={{__html: data?.summary}} className="full__description"></p>
                        </>
                    )}

                    {activeTabs === 'ingredients' && (
                        <ol>
                            {data?.extendedIngredients.map((ingredient) => {
                                return (
                                    <li key={ingredient.id} className="full__description">
                                        {ingredient.original}
                                    </li>
                                );
                            })}
                        </ol>
                    )}
                    {activeTabs === 'instructions' && (
                        <>
                            <p
                                className="full__description"
                                dangerouslySetInnerHTML={{__html: data?.instructions}}
                            ></p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Details;