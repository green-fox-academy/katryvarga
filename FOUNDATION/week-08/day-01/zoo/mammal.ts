import { Animal } from './animal';

export class Mammal extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }

  breed(): string {
    return `pushing miniature versions out.`;
  }
}
