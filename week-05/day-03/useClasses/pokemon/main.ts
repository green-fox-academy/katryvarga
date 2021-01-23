import { Pokemon } from './Pokemon';

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

// Implement the following `chooseEffective` function which will choose the most effective pokemon for Ash

function initializePokemon(): Pokemon[] {
  return [
    new Pokemon('Balbasaur', 'leaf', 'water'),
    new Pokemon('Pikatchu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'leaf'),
    new Pokemon('Balbasaur', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire'),
  ];
}

function chooseEffective(allPokemons: Pokemon[], enemyPokemon: Pokemon) {
  for (let i: number = 0; i < allPokemons.length; i++) {
    if (enemyPokemon.type === allPokemons[i].effectiveAgainst) {
      return allPokemons[i].name;
    }
  }
}

console.log(`I choose you!, ${chooseEffective(pokemonOfAsh, wildPokemon)}`);
