import Recipe from './Recipe.jsx'

// Higher-Order component
function RecipeContainer({recipes}) {
  return (
    <div className="recipe-container">
      {recipes.map((recipe, index) => (<Recipe key={index} recipe={recipe} />))}
    </div>
  )
}

export default RecipeContainer
