import RecipeCard from "./RecipeCard";

const recipeList = [
  {
    name: 'PBJ Sandwich',
    ingredients: ['Bread', 'Peanut Butter', 'Jelly'], 
    steps: ['Spread peanut butter', 'Spread jelly', 'Put bread together'],
    skill: "easy"
  },
  {
    name: 'Burger',
    ingredients: ['Steak Burger Patty', 'Bun', 'Cheese', 'Lettuce', 'Tomato'], // Tomato was missing
    steps: ['cook burger patty until done', 'put patty, cheese, lettuce, and tomato on bun'],
    skill: "intermediate"
  },
  {
    name: 'Pizza',
    ingredients: ['pizza crust', 'tomato sauce', 'cheese'], 
    steps:['spread tomato sauce on pizza crust', 'cover with cheese and other toppings', 'bake in oven'], 
    skill: "easy"
  },
]


function App() {
  return (
    <div>
      <h1> Recipe Organizer </h1>
{recipeList.map(r => <RecipeCard recipe={r} />)}
    </div>
  );
}

export default App;
