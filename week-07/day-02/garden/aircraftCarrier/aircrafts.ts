export class Aircraft {
  aircraftType: string;
  ammo: number = 0;
  maxAmmo: number;
  baseDamage: number;
  damage: number = 0;

  constructor(ammo?: number) {
    this.ammo = ammo;
  }

  fight(): number {
    this.damage = this.baseDamage * this.ammo;
    this.ammo = 0;
    return this.damage;
  }

  refill(addedAmmoNumber: number): number {
      if (){}
      return 
  } 
  
  getType(): string {
      return `${this.aircraftType}`;
  }

  getStatus(): string {
      return `Type ${this.aircraftType}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.damage} `;
  }

  isPriority(): boolean {
      if ( )
  }
}
