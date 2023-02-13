/*// Exercise 1 LESSON 10
let country = 'spain';
let continent = 'europe';
let population = 46000000;

// Exercise 2 LESSON 10
console.log(country);
console.log(continent);
console.log(population);
*/

/*// Exercise 1 LESSON DATA TYPES
let isIsland = false;
let population = 2;
let country = "Spain";
let languaje;

// Exercise 2 LESSON DATA TYPES

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof population)

// Exercise 1 2 3  LET CONSTANT VAR
const isIsland = false;
let population = 2;
const country = "Spain";
let languaje;

languaje = "spanish";

// Exercise strings and template literals
let description = `
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'
`*/

// decisions if else
// let population = 47;
// let averagePopulation = 33;
// if(population > averagePopulation ){
//     console.log(`Portugal's population is above average`);
// }else{
//     console.log(`Portual's pupulation is ${averagePopulation-population} below average`)
// }

// EQUALITY OPERATORS
const numNeighbours = Number(prompt('how many neighbour countries does your country have?'))

if (numNeighbours === 1){
    console.log('Only 1 border');
}else if( numNeighbours >= 1){
    console.log('More than 1 border');
}else{
    console.log('No borders')
}