// Create a Station and a Car classes
// Station
// gasAmount -> available gas amount of the gas station
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount -> gas amount of the car
// capacity -> capacity of the fuel tank
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

class Station {
  gasAmount: number;

  constructor(gasAmount?: number) {
    this.gasAmount = gasAmount;
  }
  refill(car: Car): void {
    this.gasAmount -= car.capacity;
    car.gasAmountOfCar = car.capacity;
  }
}

class Car {
  gasAmountOfCar: number;
  capacity: number = 100;

  constructor(gasAmountOfCar: number = 0) {
    this.gasAmountOfCar = gasAmountOfCar;
  }
}

let station = new Station(1000);
let opel = new Car(60);

station.refill(opel);
console.log(opel);
console.log(station);
