import { ProxyState } from "../AppState.js"
import { pokemonService } from "../Services/PokemonService.js"

function _draw(){
  let pokemonDetails = ProxyState.pokemonDetails
  let pokeDetailsElem = document.getElementById('pokemon-details')

  pokeDetailsElem.innerHTML = pokemonDetails.Template

}
export class PokemonDetailsController {
  constructor(){
    ProxyState.on('pokemonDetails', _draw)
  }
  getPokemonDetails(url){
    pokemonService.getPokemonDetails(url)
  }
}
