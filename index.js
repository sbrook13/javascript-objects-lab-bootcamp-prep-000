var recipes = {
  "eggs": 2,
  "flour" :"2 cups",
  "sugar" :"none!",
  "salt" :"1 cup"
}
function newRecipe(a,b){
  Object.assign({},recipes,{a:b})
}