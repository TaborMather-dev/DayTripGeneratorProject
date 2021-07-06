"use strict"

let locations = ["Portland", "Seaside", "Seattle"];
let restaurants = ["Burger King", "Jack in the Box", "Popeye's"];
let transportation = ["car", "train", "Greyhound"];
let entertainment = ["hike", "arcade", "art gallery"];
let reRollLocation = "Re-roll location? 'OK' for yes, 'cancel' for no.";
let reRollRestaurants = "Re-roll restaurant? 'OK' for yes, 'cancel' for no.";
let reRollTransportation = "Re-roll transportation? 'OK' for yes, 'cancel' for no.";
let reRollEntertainment = "Re-roll entertainment? 'OK' for yes, 'cancel' for no.";


function random_location(locations) {
    return locations[Math.floor(Math.random() * locations.length)];
}
console.log(random_location(locations));

confirm(reRollLocation)
if (userInput == true) {
    random_location(locations);
}
console.log(random_location(locations));

function random_restaurant(restaurants) {
    return restaurants[Math.floor(Math.random() * restaurants.length)];
}
console.log(random_restaurant(restaurants));

confirm(reRollRestaurants)
if (userInput == true) {
    random_restaurant(restaurants);
}
console.log(random_restaurant(restaurants));

function random_transportation(transportation) {
    return transportation[Math.floor(Math.random() * transportation.length)];
}
console.log(random_transportation(transportation));

confirm(reRollTransportation)
if (userInput == true) {
    random_transportation(transportation);
}
console.log(random_transportation(transportation));

function random_entertainment(entertainment) {
    return entertainment[Math.floor(Math.random() * entertainment.length)];
}
console.log(random_entertainment(entertainment));

confirm(reRollEntertainment)
if (userInput == true) {
    random_entertainment(entertainment);
}
console.log(random_entertainment(entertainment));