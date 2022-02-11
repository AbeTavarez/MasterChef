import { Component } from "react";

class About extends Component {
  state = {
    recipe: "",
  };

  async componentDidMount() {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await res.json();
    this.setState({ recipe: data.meals[0] });
    console.log(this.state.recipe);
  }

  render() {
    const { recipe } = this.state;
    return (
      <div>
        <h1>About Page</h1>
        <div>
          <h2>{recipe.strMeal}</h2>
          <div>
            <img
              src={recipe.strMealThumb}
              alt="meal photo"
              style={{ width: "300px", height: "300px" }}
            />
          </div>

          <p>{recipe.strInstructions}</p>

            <h3>Ingredients</h3>
          <ul>
              { recipe.strIngredient1 && <li>{recipe.strIngredient1}</li> }
              {recipe.strIngredient2 && <li>{ recipe.strIngredient2}</li>}
              { recipe.strIngredient3 && <li>{ recipe.strIngredient3}</li>}
              {recipe.strIngredient4 && <li>{ recipe.strIngredient4}</li>}
              {recipe.strIngredient5 && <li>{ recipe.strIngredient5}</li>}
              {recipe.strIngredient6 && <li>{ recipe.strIngredient6}</li>}
              {recipe.strIngredient7 && <li>{ recipe.strIngredient7}</li>}
              {recipe.strIngredient8 && <li>{ recipe.strIngredient8}</li>}
              {recipe.strIngredient9 && <li>{ recipe.strIngredient9}</li>}
              {recipe.strIngredient10 && <li>{ recipe.strIngredient10}</li>}
              {recipe.strIngredient11 && <li>{ recipe.strIngredient11}</li>}
              {recipe.strIngredient12 && <li>{ recipe.strIngredient12}</li>}
              {recipe.strIngredient13 && <li>{ recipe.strIngredient13}</li>}
              {recipe.strIngredient14 && <li>{ recipe.strIngredient14}</li>}
              {recipe.strIngredient15 && <li>{ recipe.strIngredient15}</li>}
              {recipe.strIngredient16 && <li>{ recipe.strIngredient16}</li>}
              {recipe.strIngredient17 && <li>{ recipe.strIngredient17}</li>}
              {recipe.strIngredient18 && <li>{ recipe.strIngredient18}</li>}
              {recipe.strIngredient19 && <li>{ recipe.strIngredient19}</li>}
              {recipe.strIngredient20 && <li>{ recipe.strIngredient20}</li>}
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
