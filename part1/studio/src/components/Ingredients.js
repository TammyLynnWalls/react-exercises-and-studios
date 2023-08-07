import styles from './Ingredients.module.css'

const RecipeIngredients = () => {
let ingredients = ["1lb flour", "1 Teaspoon of curry powder", "1 Teaspoon of baking powder", "1 tsp salt" , "1 Teaspoon on turmeric"];

    return (
        <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
           <li>{ingredients[0]}</li>
           <li>{ingredients[1]}</li>
           <li>{ingredients[2]}</li>
           <li>{ingredients[3]}</li>
           <li>{ingredients[4]}</li>
        </ul>
     </div>

    )

};

export default RecipeIngredients;