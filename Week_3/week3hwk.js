//1. Create an array of pizzaToppings with at least four different toppings

let pizzaToppings = ["peppers", "mushroom", "pepperoni", "sausage"];

//2. Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the
// available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
//i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

function greetCustomer() {
    console.log(`Welcome to Miko's Pizzaria! Our toppings are: ${pizzaToppings}.`);
};

//(comments by Hayden) move the arrays of size and toppings out side the function or else your call back wont have access to them, this is because of javascript scopes.

let size = ["large", "medium", "small"]
let crust = ["thick", "thin"]

function getPizzaOrder( size, crust, ...pizzaToppings) { //gives the getPizzaOrder function three parameters and the pizzaToppings parameter 
//remove the double quotes from your template literal to make more sense once returned
let message = `One ${size} ${crust} crust pizza with `;
// rename name to topping to make more sense, variable names are very important in code so make practice of this
for (let topping of pizzaToppings) {
    message += `${topping}, `
    }

//do one of either of these no need to console log AND return something, also the return needs to be the message you've just created,
//unless the homework specifies to return an array with the size crust and pizzaToppings in this case I am commenting out the console log and fixing the return to return your message
console.log(`${message}coming up!`);
}
//this call back you are indexing into the array we moved outside of the function scope, previously it did not have access because it was inside the function you are referencing
getPizzaOrder(size[0], crust[1], "peppers", "mushroom", "pepperoni", "sausage"); 
//I moved this call back down here it is good practice to have all function calls at the bottom of the file. This is also just personal preference and unlikely to be how you would write code in production.
greetCustomer();

const preparePizza = ([aSize, aCrust, pizzaToppings]) => {
    console.log("...cooking pizza...")
    return pizza = {//returns pizza as an object
        size: aSize,//(Personal Note) Always have a comma after a key line pair if there are more than one
        crust: aCrust,
        toppings: pizzaToppings
    }
}
preparePizza([size[0], crust[1], pizzaToppings]);
console.log(pizza);//Prints the pizza's values

function servePizza() {
    let message = `Order up! Here's your ${size[0]} ${crust[1]} crust pizza with ${pizzaToppings}`
    console.log(`${message}. Enjoy!`) 
}
servePizza()//Prints out the function's value
