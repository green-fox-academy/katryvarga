// Create a list with the following items.
// 500, 1000, 1250, 175, 800 and 120
// Create an application which solves the following problems.
// How much did we spend?
// Which was our greatest expense?
// Which was our cheapest spending?
// What was the average amount of our spendings?

let actualFinance: number[] = [500, 1000, 1250, 175, 800, 120];

function countFinance(finance: number[]) {
    let youSpent: number = finance.reduce((a, b) => a + b);
    let greatestExpense: number = finance.reduce((a, b) => Math.max(a, b));
    let cheapestExpense: number = finance.reduce((a, b) => Math.min(a, b));
    let averageAmount: number = youSpent / finance.length;

    console.log('You spent: ' + youSpent);
    console.log('Your greatest expense was: ' + greatestExpense);
    console.log('Your cheapest expense was: ' + cheapestExpense);
    console.log('Your average spending was: ' + Math.round(averageAmount));
}

countFinance(actualFinance);
