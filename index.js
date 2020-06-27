var recipes = {
  "eggs": 2,
  "flour" :"2 cups",
  "sugar" :"none!",
  "salt" :"1 cup"
}
function updateObjectWithKeyAndValue(food,a,b){
  var newPair = {[a]:[b]}
  var newRecipe = Object.assign({},recipes,newPair)
  return newRecipe
}