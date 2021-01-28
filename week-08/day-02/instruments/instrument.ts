// We start with a base, abstract class Instrument.

// it reserves (e.g. protected) the name of the instrument
// it should provide a play() method.
// Next, we add another abstract class, StringedInstrument which extends Instrument. It

// introduces numberOfStrings and
// sound() method what's implementation is yet unknown
// but with the help of the sound() the play() method is fully implementable
// StingedInstrument has 3 descendants, namely:

// Electric Guitar (6 strings, 'Twang')
// Bass Guitar (4 strings, 'Duum-duum-duum')
// Violin (4 strings, 'Screech')
// The Workshop should be invoked from another file like app.ts or main.ts

export abstract class Instrument {
  protected name: string;
  constructor() {
    this.name;
  }

  abstract play(): void;
}

export abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;

  constructor() {
    super();
  }

  abstract sound(): void;
  play(): void {
    console.log(
      `${this.name}, a ${
        this.numberOfStrings
      }-stringed instrument that goes ${this.sound()}.`
    );
  }
}

export class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings?: number) {
    super();
    this.numberOfStrings = numberOfStrings ?? 6;
    this.name = 'Electric Guitar';
  }

  sound(): string {
    return 'Twang';
  }
}

export class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings?: number) {
    super();
    this.numberOfStrings = numberOfStrings ?? 4;
    this.name = 'Bass Guitar';
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
}

export class Violin extends StringedInstrument {
  constructor(numberOfStrings?: number) {
    super();
    this.numberOfStrings = numberOfStrings ?? 4;
    this.name = 'Violin';
  }

  sound(): string {
    return 'Screech';
  }
}
