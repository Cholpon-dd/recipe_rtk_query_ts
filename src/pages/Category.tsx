import {useParams} from "react-router-dom";
import {useGetTypesRecipesQuery} from "../services/recipe.api";
import TypeDishes from "../components/Category/TypeDishes";


const Category = () => {
    const {type} = useParams<{type?: string}>()

    const {data} = useGetTypesRecipesQuery(type!)
    console.log(data)
    return (
        <div className="cards">
            {data?.results.slice(4, 16).map((item) => {
                return <TypeDishes key={item.id} data={item}/>
            })}
        </div>
    );
};

export default Category;