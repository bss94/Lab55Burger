import React from 'react';
import BurgerPrice from '../BurgerPrice/BurgerPrice.tsx';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient.tsx';
import {IngredientsState} from '../../App.tsx';


interface Props {
    ingredients: IngredientsState[];
}

const BurgerContainer: React.FC<Props> = ({ingredients}) => {
    const burgerIngredients = [...ingredients];
    return (

        <div className={'burger-cont'}>
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {burgerIngredients.reverse().map((item, index) => {
                    if (item.count > 0) {
                        return <BurgerIngredient name={item.name} count={item.count}
                                                 key={String(index + 24) + item.name}/>;
                    }
                })
                }
                <div className="BreadBottom"></div>
            </div>
            <BurgerPrice ingredients={ingredients}/>
        </div>
    );
};

export default BurgerContainer;