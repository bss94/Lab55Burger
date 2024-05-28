import React from 'react';
import BurgerPrice from '../BurgerPrice/BurgerPrice.tsx';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient.tsx';
import {IngredientsList} from '../../App.tsx';


interface Props {
    ingredients: IngredientsList[];
}

const BurgerContainer: React.FC<Props> = ({ingredients}) => {
    return (
        <div className={'burger-cont'}>
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {ingredients.map((item) => {
                    if(item.count>0){
                        const ingredientsName:string[] = new Array(item.count).fill(item.name);
                        return ingredientsName.map((el,index)=>{
                                return <BurgerIngredient name={el} key={String(index + 24)+el}/>
                            })
                    }})
                    }

                <div className="BreadBottom"></div>
            </div>
            <BurgerPrice ingredients={ingredients}/>
        </div>
    );
};

export default BurgerContainer;