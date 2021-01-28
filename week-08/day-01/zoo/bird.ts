`use strict`;

import { Animal } from './animal';

export class Bird extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }
  breed(): string {
    return `laying eggs.`;
  }
}
