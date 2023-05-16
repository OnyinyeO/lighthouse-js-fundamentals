const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

// While loop to print the contents of ingredients
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// For loop to print the contents of ingredients
for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}

// Loop to print the contents of ingredients backwards
for (let k = ingredients.length - 1; k >= 0; k--) {
  console.log(ingredients[k]);
}
