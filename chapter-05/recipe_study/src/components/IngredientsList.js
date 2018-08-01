import Ingredient from './Ingredient'

const IngredientsList = ({list}) =>
  <ul className="ingredients">
    {list.map((ingredient, i) =>
      <Ingredient key={i} {...ingredient}/>
      // ...ingredient == amount={ingredient.amount} measurement={ingredient.measurement} name={ingredient.name}
    )}
  </ul>

export default IngredientsList
