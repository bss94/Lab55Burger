import React from 'react';

interface Props {
    name: string;
    count: number;
}

const BurgerIngredient: React.FC<Props> = ({name, count}) => {

    return (
        <>
            {Array(count).fill(name).map((el, index) => {
                return <div className={el} key={el + String(index)}></div>;
            })}


        </>
    );
};

export default BurgerIngredient;