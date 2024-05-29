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




    return (
        <div className={'container'}>
            <IngredientList ingredients={ingredients} ingredientClick={onIngredientClick} onDelete={onDeleteClick}/>
            <BurgerContainer ingredients={ingredients}/>
        </div>
    );
};

export default App;
