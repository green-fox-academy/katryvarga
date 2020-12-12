// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let codingHours: number = 6;
let semester: number = 17;
let workingHours: number = 52;

console.log(codingHours * 5 * semester);
console.log((( codingHours * 5 * semester) / ( workingHours* semester) * 100).toFixed(2) + '%' );

