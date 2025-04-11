// Presentational component
function Recipe({recipe}) {
    return (
      <div className="card">
        <h2>{recipe.name}</h2>
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>
              <input type="checkbox" /> {item}
            </li>))}
        </ul>
        <h3>Instructions</h3>
        <ol>
          {recipe.instructions.map((step, index) => (<li key={index}>{step}</li>))}
        </ol>
        {recipe.optionalGlaze && (
          <div className="glaze">
            <h4>Optional: {recipe.optionalGlaze.name}</h4>
            <ul>
              {recipe.optionalGlaze.ingredients.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
            <ol>
              {recipe.optionalGlaze.instructions.map((step, index) => (<li key={index}>{step}</li>))}
            </ol>
          </div>)}
      </div>
    )
}
  
export default Recipe
