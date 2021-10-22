"use strict";

//Creating 4 arrays (destination, transportation, restaurants, entertainment).

let yourDestinationArray = ["Boston", "New York", "San Diego", "Los Angeles", "Dalas", "Miami", "Las Vegas", "Denver", "Nashville", "Atlanta"];
let yourTransportationArray = ["Walking", "Taxi", "Uber", "Lift", "Car Rental", "Bike", "Scooter", "Horse Carriage", "Bus", "Train"];
let yourRestaurantArray = ["McDonalds", "Taco Truck", "Texas Roadhouse", "Hot Dog Stand", "The Ninty Nine", "Mike's Pastry", "Dominos Pizza", "The Walk of China", "Burger King", "IHOP"]
let yourEntertainmentArray = ["Bars", "Concerts", "Movies", "Breweries", "Sporting Events", "Hiking", "Paintball", "Arcade", "Bowling", "Fishing"];


//Writing a function to select random arrays
function chooseRandmomArray(anyArray) {
    return anyArray[Math.floor(Math.random() * anyArray.length)];
}


//Declaring variables to their perspective random arrays

let Destination = chooseRandmomArray(yourDestinationArray);
let Transportation = chooseRandmomArray(yourTransportationArray);
let Restaurant = chooseRandmomArray(yourRestaurantArray);
let Entertainment = chooseRandmomArray(yourEntertainmentArray);


//Checking if my function works

// console.log(Destination);
// console.log(Transportation);
// console.log(Restaurant);
// console.log(Entertainment);

// alert([Destination, Transportation, Restaurant, Entertainment]);


//Declaring a new variable that holds "random functions" in one array. Created "for loop" so my new array prints to console one by one.

let yourTripArray = [Destination, Transportation, Restaurant, Entertainment];
for(let i = 0; i < yourTripArray.length; i++) {
    alert(yourTripArray[i]);
}

let userInput = prompt("Are you satisfied with your trip? YES or NO?");

if(userInput === "YES") {
    alert("Have fun on your trip!");
} 
































