import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { PokemonDetails } from "../Models/PokemonDetails.js"

class PokemonService{

async getPokemonDetails(url){
  let res = await axios.get(url)
  console.log(res.data)
  ProxyState.pokemonDetails = new PokemonDetails(res.data)
  console.log(ProxyState.pokemonDetails)
}
  async getPokemon(){
    let res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    console.log(res.data)
    ProxyState.pokemon = res.data.results.map(p => new Pokemon(p))
    console.log(ProxyState.pokemon)
  }
  
}
export const pokemonService = new PokemonService()