import { Aircraft } from './aircrafts';

class AircraftCarrier {
  aircrafts: Aircraft[] = [];
  storeOfAmmo: number;
  healthPoint: number;

  constructor(innitialAmmo: number, hp: number) {
    this.storeOfAmmo = innitialAmmo;
    this.healthPoint = hp;
  }

  add(aircraft: Aircraft) {
    this.aircrafts.push(aircraft);
  }

  fill(): void {

  }

  fight(carrier: AircraftCarrier){
      carrier.healthPoint -= this.aircrafts.ammo    ;

  }
  getStatus(){}


}
