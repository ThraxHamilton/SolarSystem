console.log('Are you ready for us?');




const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
let newPlanetString = '';
planets.forEach((item) => {
    newPlanetString += item
    console.log(newPlanetString);
})
document.getElementById('planets').innerHTML = newPlanetString;

// document.getElementById("planets").innerHTML = newPlanetString;




/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

let capitolPlanets = planets.map((planet) => {
    return planet.toUpperCase()
    
}
)
console.log(capitolPlanets)



/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


let letterE = planets.filter((planet) => {
    return planet.includes('e');
    });
    console.log('e planets', letterE);






// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]



let reducer = (words.reduce)(
    (accumulator, currentValue) => accumulator + currentValue,
    console.log(words.reduce(reducer))
)
