import { PokemonDetails } from "./PokemonDetails.js";

export class UserPokemon {
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.user = data.user
    this.img= data.img
  }

  get Template(){
    return `
    <div class="border p-1 m-1" onclick="app.pokemonDetailsController.getPokemonDetails">
    <div class="text-success">
    <h3><span>${this.name}</span></h3>
    </div>
    <button class="btn btn-danger" onclick="app.userPokemonController.releaseUserPokemon('${this.id}')">Abandon Pokemon</button>
    </div>
    `
  }

}