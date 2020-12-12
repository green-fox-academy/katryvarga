// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"

//let numberOfExecutions: number = 100;
//for (let index = 0; index < numberOfExecutions; index++) {
//    console.log("I won't cheat on the exam!")
//};
var x: any = 10;
var y: number = 4324;


//for(var _i = 1; _i <= 10; _i += x) {
//        console.log(_i);
//}


//while(x < 10) {
//    console.log(x);
//    x += 2;
//}

//do {
//    console.log(x);
//    x += 2;
//} while (x < 13);


for(var _i = 1; _i <= 10; _i++) {
        if (_i == 3 ||_i == 5) {
            continue;
        }
    
        console.log(_i);
    
        if(_i == 7) {
            console.log('we will break rigth now!!');
            break;
        }
}

console.log('it is ok');
