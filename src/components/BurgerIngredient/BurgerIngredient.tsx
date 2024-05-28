import React from 'react';

interface Props{
    name:string
}
const BurgerIngredient:React.FC<Props> = ({name}) => {
    return (
        <div className={name}>
        </div>
    );
};

export default BurgerIngredient;