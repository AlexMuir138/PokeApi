import PokemonController from "./Controllers/PokemonController.js";
import { PokemonDetailsController } from "./Controllers/PokemonDetailsController.js";
import { UserPokemonController } from "./Controllers/UserPokemonController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();

  pokemonController = new PokemonController();
  pokemonDetailsController = new PokemonDetailsController();
  userPokemonController = new UserPokemonController();
}

window["app"] = new App();
