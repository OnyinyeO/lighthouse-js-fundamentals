const iceCreamFlavours = [
  "chocolate",
  "vanilla",
  "cookies and cream",
  "rocky road",
  "strawberry",
];
console.log(iceCreamFlavours);

// Add "root beer" to the array
const newFlavours = [...iceCreamFlavours, "root beer"];
console.log(newFlavours);

// Print the first flavour
console.log(newFlavours[0]);

// Print the last flavour
console.log(newFlavours[newFlavours.length - 1]);

// Print the total number of flavours
console.log(newFlavours.length);
