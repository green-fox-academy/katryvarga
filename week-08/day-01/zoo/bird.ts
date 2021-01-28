import { Flyable } from '../../day-02/flyable/flyable';
import { Animal } from './animal';

export class Bird extends Animal implements Flyable {
  constructor(name: string) {
    super();
    this.name = name;
  }
  breed(): string {
    return `laying eggs.`;
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
