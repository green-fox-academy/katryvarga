import { Animal } from './animal';

export class Reptile extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }

  breed(): string {
    return `laying eggs.`;
  }
}
