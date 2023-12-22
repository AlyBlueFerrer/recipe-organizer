
function RecipeCard(props) {
    return (
        <div className = "bg-light border p-4 m-2">
          <h4>{props.recipe.name}</h4>
          <p> {props.recipe.ingredients} </p>
          <p> {props.recipe.steps} </p> 
        </div>
    )
}

export default RecipeCard;