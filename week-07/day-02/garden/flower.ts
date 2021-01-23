import { Plant } from "./plants";

export class Flower extends Plant {
  constructor(color: string) {
    super(0.75, 5, "Flower", color);
  }
}

// let flower1 = new Flower("Red");
// console.log(flower1);

// flower1.printInfo();