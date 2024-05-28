import React from 'react';
import {IngredientsList} from '../../App.tsx';
import INGREDIENTS from '../../lib/Ingredients.ts';


interface Props {
    ingredients: IngredientsList[];
}
const BurgerPrice:React.FC<Props> = ({ingredients}) => {
    const price = () =>{
        return ingredients.reduce((acc, rec)=>{
            const ingredient = INGREDIENTS.filter((el)=>el.name === rec.name)
            return acc + ingredient[0].price * rec.count;
        },30)
    }
    return (
        <div>
            <p>Price: {price()}</p>
        </div>
    );
};

export default BurgerPrice;