import {useParams} from "react-router-dom";
import {useGetDetailRecipeQuery} from "../../services/recipe.api";
import {useState} from "react";


const Details = () => {

    const { id } = useParams()
    const {data} = useGetDetailRecipeQuery(id!)

    const [activeTabs, setActiveTabs] = useState('description')

    // @ts-ignore
    // @ts-ignore
    return (
        <div className="detail__wrapper">
            <h3 className="detail__title">{data?.title}</h3>
            <div className="detail__container">
                <div className="detail__card">
                    <img src={data?.image} alt="" className="detail__img" />
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
                            <p dangerouslySetInnerHTML={{ __html:  data?.summary }} className="full__description"></p>
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
                                dangerouslySetInnerHTML={{ __html:  data?.instructions }}
                            ></p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Details;