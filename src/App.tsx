import './burger.css';
import './App.css';
import {useState} from 'react';
import IngredientList from './components/IngredientList/IngredientList.tsx';
import BurgerContainer from './components/BurgerContainer/BurgerContainer.tsx';
 export interface IngredientsList {
        name:string;
        count:number;
 }
const App = () => {
    const [ingredients, setIngredients] = useState<IngredientsList[]>([
        {name: 'Meat', count: 1},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 2},
        {name: 'Bacon', count: 0},
]);

    return (
        <>
            <IngredientList/>
            <BurgerContainer ingredients={ingredients}/>
        </>
    );
};

export default App;
