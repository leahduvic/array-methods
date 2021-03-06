const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")


planets.forEach(function(printHTML) {
    planetEl.innerHTML += `
    <section>${printHTML}</section>
    `
})

/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const PLANETS = planets.map(function(upper){
    console.log(upper.charAt(0).toUpperCase() + upper.slice(1));
})

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const singleLet = planets.filter(function(planet){
    console.log(planet.includes("e"))
    return  planet.includes("e")
})
console.log(singleLet)  


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]



const sentence = words.reduce(function(previous, next){
    return previous + " " + next 
    
})
console.log(sentence)

