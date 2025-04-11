import Recipe from './Recipe.jsx'

// Higher-Order component
function RecipeContainer({recipes}) {
  return (
    <div className="recipe-container">
      {/* looping through recipes and rendering each of them as a Recipe component */}
      {recipes.map((recipe, index) => (<Recipe key={index} recipe={recipe} />))}
    </div>
  )
}

export default RecipeContainer
