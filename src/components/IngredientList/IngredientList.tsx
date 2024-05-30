import React from 'react';
import {IngredientsState} from '../../App.tsx';
import IngredientsItem from '../IngredientsItem/IngredientsItem.tsx';

interface Props {
    ingredients: IngredientsState[];
    ingredientClick: (position: number) => void;
    onDelete: (position: number) => void;
}

const IngredientList: React.FC<Props> = ({ingredients, ingredientClick, onDelete}) => {
    return (
        <div className={'ingredients-list'}>
            {ingredients.map((item, index) => {
                return <IngredientsItem ingredient={item}
                                        ingredientClick={() => ingredientClick(index)}
                                        onDelete={() => onDelete(index)}
                                        key={String((index + 1) * 15) + item.name}/>;
            })}
            <button className={'clear-btn'}>Clear All</button>
        </div>
    );
};

export default IngredientList;