// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (var products of dairy) {
        console.log(products);
    }
}
logDairy();
// Task 2
const animal = {
    canJump: true
  };
  
  const bird = Object.create(animal);
  bird.canFly = true;
  bird.hasFeathers = true;
  function birdCan() {
   
    for (const key of Object.keys(bird)) {
   console.log(`${key}: ${bird[key]}`);
 }
}
birdCan();

//task 3
  
  function animalCan() {
    const seen = {}; // To keep track of properties we have already logged
    for (const key in bird) {
      if (!seen[key]) {
        console.log(`${key}: ${bird[key]}`);
        seen[key] = true;
      }
    }
    for (const key in bird.__proto__) {
      if (!seen[key]) {
        console.log(`${key}: ${bird.__proto__[key]}`);
        seen[key] = true;
      }
    }
  }
  
  animalCan();
  
