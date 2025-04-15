import { Typography } from '@mui/material'; 

// Presentational component
function Recipe({ recipe }) {
  return (
    <div className="card">
      <h2>{recipe.name}</h2> 
      <Typography variant="h6" component="h3" gutterBottom>Ingredients</Typography>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>
            <input type="checkbox" /> {item}
          </li>
        ))}
      </ul>
      <Typography variant="h6" component="h3" gutterBottom sx={{fontWeight:'bold'}}>Instructions</Typography>
      <ol>
        {recipe.instructions.map((step, index) => (<li key={index}>{step}</li>))}
      </ol>
      {/* Optional Glaze Section */}
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

