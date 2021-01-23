import { Garden } from './garden';
import { Flower } from './flower';
import { Tree } from './tree';

let myGarden = new Garden();
let yellowFlower = new Flower('yellow');
let blueFlower = new Flower('blue');
let purpleTree = new Tree('purple');
let orangeTree = new Tree('orange');

myGarden.addPlant(yellowFlower);
myGarden.addPlant(blueFlower);
myGarden.addPlant(purpleTree);
myGarden.addPlant(orangeTree);

myGarden.printAll();
myGarden.waterAll(40);
myGarden.printAll();
myGarden.waterAll(70);
myGarden.printAll();
