// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating an instance, we need to specify the color and the width
// Every sharpie object is created with a default 100 as inkAmount
// We can use() the sharpie objects which decreases inkAmount

export class Sharpie {
  color: string;
  width: number;
  inkAmount: number = 5;

  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
  }

  use(): void {
    this.inkAmount --;
  }
}

let sharpie1 = new Sharpie('green', 10.5);

// console.log(sharpie1);

// sharpie1.use();

// console.log(sharpie1);
