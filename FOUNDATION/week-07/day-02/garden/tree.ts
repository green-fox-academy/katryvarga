import { Plant } from './plants';

export class Tree extends Plant {
  constructor(color: string) {
    super(0.4, 10, 'Tree', color);
  }
}
