import {useParams} from "react-router-dom";
import {useGetTypesRecipesQuery} from "../services/recipe.api";
import TypeDishes from "../components/Category/TypeDishes";
import Loader from "../components/Loader/Loader";


const Category = () => {
    const {type} = useParams<{ type?: string }>()

    const {data, isLoading} = useGetTypesRecipesQuery(type!)

    return (
        <div className="cards">
            {isLoading && <Loader/>}
            {data?.results.slice(4, 16).map((item) => {
                return <TypeDishes key={item.id} data={item}/>
            })}
        </div>
    );
};

export default Category;