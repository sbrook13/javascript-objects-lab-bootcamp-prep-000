var recipes = {
  "eggs": 2,
  "flour" :"2 cups",
  "sugar" :"none!",
  "salt" :"1 cup"
}
function updateObjectWithKeyAndValue(food,a,b){
  var newRecipe = food[a]=b
  return newRecipe
}