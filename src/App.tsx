import './burger.css';
import './App.css';
import {useState} from 'react';
import IngredientList from './components/IngredientList/IngredientList.tsx';
import BurgerContainer from './components/BurgerContainer/BurgerContainer.tsx';

export interface IngredientsState {
    name: string;
    count: number;
}

const App = () => {
    const [ingredients, setIngredients] = useState<IngredientsState[]>([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0},
    ]);

    const onIngredientClick = (position: number) => {
        setIngredients(prevState => {
            return prevState.map((el, index) => {
                if (position === index) {
                    return {...el, count: el.count + 1};
                } else {
                    return {...el};
                }
            });
        });
    };
    const onDeleteClick = (position: number) => {
        setIngredients(prevState => {
            return prevState.map((el, index) => {
                if (position === index) {
                    return {...el, count: el.count - 1};
                } else {
                    return {...el};
                }
            });
        });
    };
    const onClearClick = () => {
        setIngredients(prevState => {
            return prevState.map((el) => {
                if (el.count > 0) {
                    return {...el, count: 0};
                } else {
                    return {...el};
                }
            });
        });
    };

    return (
        <div className={'container'}>
            <IngredientList
                ingredients={ingredients}
                ingredientClick={onIngredientClick}
                onDelete={onDeleteClick}
                onClear={onClearClick}
            />
            <BurgerContainer ingredients={ingredients}/>

        </div>
    );
};

export default App;
