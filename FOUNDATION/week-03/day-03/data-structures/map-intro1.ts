// create an empty map

let firstObject = {};

//print out

console.log(firstObject);

// Add key-value pairs
firstObject[97] = `a`;
firstObject[98] = `b`;
firstObject[99] = `c`;
firstObject[65] = `A`;
firstObject[66] = `B`;
firstObject[67] = `C`;

console.log(firstObject);

//print all the keys

// for (let key in firstObject) {
//     console.log(key);

// }

console.log(Object.keys(firstObject));

//print all the values

console.log(Object.values(firstObject));

// add value D with the key 68

firstObject[68] = "D";

console.log(firstObject);

// Print how many key-value pairs are in the map

console.log(Object.entries(firstObject).length);

// Print the value that is associated with key 99

console.log(firstObject[99]);

// Remove the key-value pair where with key 97

delete firstObject[97];
console.log(firstObject);

// Print whether there is an associated value with key 100 or not

console.log(firstObject.hasOwnProperty(100));

if (firstObject.hasOwnProperty(100) === true) {
  console.log(`There is a value with key 100`);
} else firstObject.hasOwnProperty(100) === false;
{
  console.log(`There is no value with key 100`);
}

//Remove all the key-value pairs

firstObject = {};

console.log(firstObject);
