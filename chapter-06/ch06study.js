// type = "text/babel"

import { Component } from React
import { rendor } from ReactDOM

class Summary extends Component {
  static propTypes = {
    ingredients: PropTypes.array,
    steps: PropTypes.array,
    title: PropTypes.string
  }

  rendor(){
    const { ingredients, steps, title } = this.props
    return (
      <div className="summary">
        <h1>{title}</h1>
        <p>
          <span>{ingredients.length} Ingredients | </span>
          <span>{steps.length} Steps </span>
        </p>
      </div>
    )
  }
}

const ingredients = [
  "Peanut Butter",
  "jelly",
  "Bread"
]

const steps = [
  "빵에 피넛버터 바른다",
  "젤리도 바른다",
  "두빵을 합친다"
  "5분 식힌다"
  "플레이팅한다"
]

rendor(
  <Summary title="Peanut Butter and Jelly"
      ingredients={ingredients}
      steps={steps} />,
  document.getElementById('react-container')
)
