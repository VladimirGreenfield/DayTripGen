"use strict";


// Features: 
// (5 points): As a developer, I want to make good, consistent commits.
// (5 points): As a user, I want a destination to be randomly selected for my day trip.
// (5 points): As a user, I want a restaurant to be randomly selected for my day trip.
// (5 points): As a user, I want a mode of transportation to be randomly selected for 
// my day trip.
// (5 points): As a user, I want a form of entertainment to be randomly selected for my
// day trip.
// (15 points): As a user, I want to be able to randomly re-select a destination, 
// restaurant, mode of transportation, and/or form of entertainment if I don’t like one 
// or more of those things.
// (10 points): As a user, I want to be able to confirm that my day trip is “complete” 
// once I like all of the random selections.
// (10 points): As a user, I want to display my completed trip in the console/alert.
// (5 points): As a developer, I want all of my functions to have a Single Responsibility.
// Remember, each function should do just one thing!



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

let fourArrays = [yourDestinationArray, yourTransportationArray, yourRestaurantArray, yourEntertainmentArray];

//Declaring a new variable that holds "random functions" in one array. Created "for loop" so my new array prints to console one by one.

let yourTripArray = [Destination, Transportation, Restaurant, Entertainment];
alert("Here is your trip:\n" + yourTripArray.join('\n'));

displayYourChoice();

function displayYourChoice() {
    let userInput = prompt("Are you satisfied with your trip? YES or NO?");
    userInput = userInput.toUpperCase();

    if(userInput === "YES") {
        alert("Here is your final trip:\n" + yourTripArray.join('\n'));
        alert("Have fun on your trip!");
    } else {
        let differentOption = prompt("Which option would you like to change? Enter a number 1 - 4");
        changeYourChoice(differentOption);   
    }
}


function changeYourChoice(differentOption) {
   
    let differentNumber = Number(differentOption) -1;
    yourTripArray[differentNumber] = chooseRandmomArray(fourArrays[differentNumber]);


    alert("Here is your trip:\n" + yourTripArray.join('\n'));
    displayYourChoice();  
}

































