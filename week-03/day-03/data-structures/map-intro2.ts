// Create a map where the keys are strings and the values are strings with the following initial values

let map = {
    '978-1-60309-452-8': 'A Letter to Jo',
    '978-1-60309-459-7': 'Lupus',
    '978-1-60309-444-3': 'Red Panda and Moon Bear',
    '978-1-60309-461-0': 'The Lab',
}

// Print all the key-value pairs in the following format


Object.keys(map).map(x => console.log(`${map[x]} (ISBN: ${x})`));

// Remove the key-value pair with key

delete map['978-1-60309-444-3'];


// Remove the key-value pair with value The Lab

delete map['978-1-60309-461-0'];
console.log(map);

// Add the following key-value pairs to the map

// Key	Value
// 978-1-60309-450-4	They Called Us Enemy
// 978-1-60309-453-5	Why Did We Trust Him?

map['978-1-60309-450-4'] = 'They Called Us Enemy'
map['978-1-60309-453-5'] = 'Why Did We Trust Him?'

console.log(map);

// Print whether there is an associated value with key 478-0-61159-424-8 or not

if (map.hasOwnProperty('478-0-61159-424-8') === true) {

    console.log('There is an associated value with key 478-0-61159-424-8.');

}
else {

    console.log('There isn\'t associated value with key 478-0-61159-424-8.');

}

// Print the value associated with key 978-1-60309-453-5

console.log(map['978-1-60309-453-5']);

