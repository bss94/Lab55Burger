import React from 'react';
import {IngredientsState} from '../../App.tsx';
import INGREDIENTS from '../../lib/Ingredients.ts';


interface Props {
    ingredient: IngredientsState;
    ingredientClick: React.MouseEventHandler;
    onDelete: React.MouseEventHandler;
}

const IngredientsItem: React.FC<Props> = ({
                                              ingredient,
                                              ingredientClick,
                                              onDelete
                                          }) => {
    const ingredientItem = INGREDIENTS.filter((el) => el.name === ingredient.name);
    const buttonClass = ['delete-btn'];
    if (ingredient.count > 0) {
        buttonClass.push('visible');
    }
    return (
        <div className={'list-item'}>
            <img alt={'not found'} className={'pic'} src={ingredientItem[0].image}
                 onClick={ingredientClick}/>
            <p>{ingredient.name}</p>
            <h3>x{ingredient.count}</h3>
            <button className={buttonClass.join(' ')} onClick={onDelete}>-</button>
        </div>
    );
};

export default IngredientsItem;