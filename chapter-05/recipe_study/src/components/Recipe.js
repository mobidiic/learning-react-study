import IngredientsList from './IngredientsList'
import Instruction from './Instruction'

const Recipe = ({ name, ingredients, steps} ) =>
  <section id={name.toLowerCase().replace(/ /g, "-")}>
    <h1>{name}</h1>
    <IngredientsList list={ingredients} />
    <Instruction title="조리절차" steps={steps} />
  </section>

export default Recipe
