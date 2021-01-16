// Create a Pirate class. While you can add other fields and methods, you must have these methods:

// drinkSomeRum() - intoxicates the Pirate some
// howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
// 0 to 4 times, "Pour me anudder!"
// else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.
// If you manage to get this far, then you can try to do the following.

// die() - this kills off the pirate, in which case, DrinkSomeRum, etc. just result in he's dead.
// brawl(x) - where pirate fights another pirate (if that other pirate is alive) and there's a 1/3 chance, 1 dies, the other dies or they both pass out.
// And... if you get that far...

// Add a parrot.

export class Pirate {
  intoxication: number;
  status: string;

  constructor() {
    this.intoxication = 0;
    this.status = "alive";
  }

  drinkSomeRum(): void {
    if (this.status !== "dead") {
      this.intoxication++;
      this.status = "alive";
    } else {
      console.log("He is dead!");
    }
  }

  howsItGoingMate(): void {
    if (this.status !== "dead") {
      if (this.intoxication <= 4) {
        console.log("Pour me anudder!");
      } else {
        console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
      }
    }
  }

  die(): void {
    this.status = "dead";
  }

  brawl(pirate: Pirate): void {
    let chances: number = Math.floor(Math.random() * 3);
    if (chances === 1) {
      this.die();
    } else if (chances === 2) {
      pirate.die();
    } else {
      this.die();
      pirate.die();
    }
  }
}

let fred = new Pirate();
let tom = new Pirate();

// tom.drinkSomeRum();
// tom.drinkSomeRum();
// tom.drinkSomeRum();
// tom.drinkSomeRum();



// tom.howsItGoingMate();
// fred.drinkSomeRum();
// fred.howsItGoingMate();

// fred.brawl(tom);

// console.log(tom);
// console.log(fred);
