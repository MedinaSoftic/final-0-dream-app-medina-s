// Create a repo with example code for how you would use the skills you have
// learned from Unit 0 in your application. Keep in mind: you will not be
// building a complete application! You are instead creating examples of code
// that might need to exist in this application, using the skills you have learned
// in Unit 0.
// The code in your repo should:
// ○ Include commented pseudocode to break down the logic for what you
// are trying to accomplish in each example.
// ○ Use console logs to test your outputs and ensure your code works as
// expected.
// ○ Follow all of the syntax rules and conventions you have learned about
// in Unit 0.
// ○ Include comments to identify where the skill from each module is
// represented in the code.
// ■ You’ll have comments to explain 6 total skills. One from each of
// the following modules:


// ● Building Arrays  //these are arrays inside arrays - I am using this for clearer code
console.log("These are all the current ingredents: ")

let homeIngredents = [
    ["bread ", "lettuce ", "tomato ", "cheese "]      //In this array we have a list of ingredients at home
];
let purchasedIngredents = [ 
   ["pasta ", "taco seasoning ", "tortila ", "olive oil "]  //In this array we have a list of ingredients that were purchased
];
let allIngredents = [];   //this array will be used to combine the two previous arrays into one array, leaving it empty for now to fill later. 



// ● Using Arrays  
//.push() adds one or more elements to the end of an array
// => is an instruction that is used to define a function

// ● Working with Loops //.forEach goes through each item in the array 

homeIngredents.forEach(item => {
    purchasedIngredents.push(item);     //This will add the items from the homeIngredents array to the purchasedIngredents array
});
purchasedIngredents.forEach(item => {
    allIngredents.push(item);           //This will add the items from the purchasedIngredents(which also includes homeIngredents) array to the allIngredents array
});
console.log(JSON.stringify(allIngredents));         //This will print the allIngredents array in a readable format using JSON.stringify


// ● Values, Data Types, and Operations - //I am using this to check if the ingredients are in the allIngredents array for taco recipe

let tacoRecipe = [
    ["taco seasoning ", "lettuce ", "tomato ", "cheese ", "tortila "]  //This is an array of ingredients for a taco recipe
]

let hasTacoSeasoning = true;  //This is a boolean variable that will be used to check if the taco seasoning is in the allTacoIngredents array
let hasLettuce = true; 
let hasTomato = true;  
let hasCheese = true;  
let hasTortila = true;  

// ● Control Structures and Logic

let hasAllTacoIngredents = hasTacoSeasoning && hasLettuce && hasTomato && hasCheese && hasTortila;  //The && operator is used to check if all the ingredients are in the allTacoIngredents array
if (hasAllTacoIngredents) {  //This will check if all the ingredients are in the allIngredents array
    console.log("You have all the ingredients for a taco!");  //This will print if all the ingredients are in the allTacoIngredents array along with diolog
}
else {
    console.log("You are missing some ingredients for a taco!");  //This will print if any of the ingredients are missing in the allTacoIngredents array
}
// ● Stringing Characters Together - using unicode characters
console.log("Taco Recipe: " + tacoRecipe + "\u{1F32E}"); //This will print the taco recipe with a taco emoji using the unicode character "U+1F32E"
