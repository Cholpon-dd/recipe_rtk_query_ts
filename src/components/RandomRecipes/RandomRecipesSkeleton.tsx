import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// interface Props {
//     children?: React.ReactNode;
//     cards: number
// }

// const RandomRecipesSkeleton = ({cards} : {cards: number}) => {
const RandomRecipesSkeleton = ({cards}: {cards: number}): JSX.Element[] => {
    const skeleton =  Array(cards).fill(0)
    return skeleton.map((_, idx) => (
            <div key={idx}>
                <Skeleton count={1} width={200} height={150} />
                <Skeleton count={1} width={200} height={75} />
                <Skeleton count={1} width={200} height={50} />
            </div>
        ));
};

export default RandomRecipesSkeleton;