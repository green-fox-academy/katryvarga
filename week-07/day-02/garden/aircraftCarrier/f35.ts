import { Aircraft } from './aircrafts';

class F35 extends Aircraft {
  constructor() {
    super();
    this.aircraftType = 'F35';
    this.maxAmmo = 12;
    this.baseDamage = 50;
  }
}
