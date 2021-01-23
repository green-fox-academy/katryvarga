// The Garden
// is able to hold unlimited amount of flowers or trees
// when watering it should only water those what needs water with equally divided amount amongst them
// eg. watering with 40 and 4 of them need water then each gets watered with 10
// The Flower
// needs water if its current water amount is less then 5
// when watering it the flower can only absorb the 75% of the water
// eg. watering with 10 the flower's amount of water should only increase with 7.5
// The Tree
// needs water if its current water amount is less then 10
// when watering it the tree can only absorb the 40% of the water
// eg. watering with 10 the tree's amount of water should only increase with 4

import { Plant } from "./plants";

export class Garden {
  private plants: Plant[] = [];

  public addPlant(newPlant: Plant): void {
    this.plants.push(newPlant);
  }

  public waterAll(amountAtDisposal: number): void {
    let thirstyPlants: Plant[] = this.plants.filter(
      (plant) => plant.needsWatering() === true
    );
    let totalWaterForEachPlant: number =
      amountAtDisposal / thirstyPlants.length;

    console.log(`Watering with ${amountAtDisposal}`);

    thirstyPlants.forEach((plant: Plant) =>
      plant.water(totalWaterForEachPlant)
    );
    // for (let i: number = 0; i < thirstyPlants.length; i++) {
    //   thirstyPlants[i].water(totalWaterForEachPlant)
    // }
  }

  public printAll(): void {
    this.plants.forEach((plant: Plant) => plant.printInfo());
    console.log("\n");
  }
}
