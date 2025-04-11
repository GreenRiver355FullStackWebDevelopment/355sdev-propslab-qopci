import { recipes } from './data/data.js'
import RecipeContainer from './RecipeContainer.jsx'
import './App.css'

function App() {
  return (
    <>
      <h1>The Recipes Book</h1>
      {/* Rendering the RecipeContainer component on a page */}
      <RecipeContainer recipes={recipes} />
    </>
  )
}

export default App
