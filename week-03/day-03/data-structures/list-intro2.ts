// Create a list ('List A') which contains the following values

let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

// Create a new list ('List B') with the values of List A

let listB: string[] = listA

console.log(listB);

// Print out whether List A contains Durian or not

let include = listA.includes('Durian');
console.log(include);

// Remove Durian from List B

for (let i = 0; i < listB.length; i++) {
    if (listB[i] === 'Durian') {
        listB.splice(i, 1);
    }

}
console.log(listB);

// Add Kiwifruit to List A after the 4th element

listA.splice(3, 0, `Kiwifruit`);
console.log(listA);

// Compare the size of List A and List B

if (listA.length > listB.length) {
    console.log('listA is longer');

} else if (listB.length > listA.length) {
    console.log('listB is longer');
}
else (console.log('The lists lenght are the same'));

// Get the index of Avocado from List A

console.log(listA.indexOf('Avocado'));

// Get the index of Durian from List B

console.log(listB.indexOf('Durian'));

// Add Passion Fruit and Pomelo to List B in a single statement

listB.push(`Passion Fruit`, `Pomelo`);
console.log(listB);

// Print out the 3rd element from List A

console.log(listA[2]);