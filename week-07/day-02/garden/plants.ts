export class Plant {
  protected waterLevel: number;
  protected absRate: number;
  protected criticalWaterLevel: number;
  protected plantType: string;
  protected color: string;

  constructor(
    absRate: number,
    criticalWaterLevel: number,
    plantType: string,
    color: string
  ) {
    this.absRate = absRate;
    this.criticalWaterLevel = criticalWaterLevel;
    this.plantType = plantType;
    this.color = color;
    this.waterLevel = 0;
  }

  public needsWatering(): boolean {
    return this.waterLevel < this.criticalWaterLevel;
  }

  public water(amount: number): void {
    this.waterLevel += this.absRate * amount;
  }

  public printInfo(): void {
    console.log(
      `The ${this.color} ${this.plantType} ${
        this.needsWatering() === true ? "needs" : "doesn't need"
      } water`
    );
  }
}
