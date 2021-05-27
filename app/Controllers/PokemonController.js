import { ProxyState } from "../AppState.js"
import { pokemonService } from "../Services/PokemonService.js"
import Pokemon from "../Models/Pokemon.js"

function _draw(){
  let pokemon = ProxyState.pokemon
  let pokeElem = document.getElementById('pokemon')
  let template = ''

  pokemon.forEach(p => template += p.Template)
  pokeElem.innerHTML = template
}
export default class PokemonController{
  constructor(){
    ProxyState.on('pokemon', _draw)
    pokemonService.getPokemon()
  }
}