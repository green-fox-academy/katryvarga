import { Aircraft } from './aircrafts';

class F16 extends Aircraft {
  constructor() {
    super();
    this.aircraftType = 'F16';
    this.maxAmmo = 8;
    this.baseDamage = 30;
  }
}
