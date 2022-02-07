const pizzaPlace = "Miko's Pizzaria";//String
let numberOfToppings = 4;//Number
function pizzaSlogan() {
    if (numberOfToppings >= 10){
        return "a whole lot of pizza."
}
else return "quality, not quantity."
}

console.log(
    "Hello and welcome to " + pizzaPlace + " home of the " + numberOfToppings +  ' topping pizza where we believe in' ,pizzaSlogan())