import { Vehicle } from './vehicle';
import { Flyable } from './flyable';

class Helicopter extends Vehicle implements Flyable {
  constructor() {
    super();
    this.color = 'blue';
    this.numberOfWheels = 0;
  }

  land(): string {
    return 'It has landed.';
  }
  fly(): string {
    return 'It can fly.';
  }
  takeOff(): string {
    return 'Time to take off.';
  }
}
