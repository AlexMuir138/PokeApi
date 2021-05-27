import { ProxyState } from "../AppState.js";
import { sandboxService } from "../Services/SandboxService.js";


function _draw(){
  let template = ''

  ProxyState.userPokemon.forEach(up => template += up.Template)
  document.getElementById('pokedex').innerHTML = template

}
export class UserPokemonController{
  constructor(){
    ProxyState.on('userPokemon', _draw)
    sandboxService.getUserPokemon()
  }

  async addUserPokemon(){
    let result = await Swal.fire({
      title:'Good Job!',
      text: 'Nice throw, Bruh!',
      icon:'success'
    })
    if(result.isConfirmed){
      await sandboxService.addUserPokemon()
    }
  }

  async releaseUserPokemon(pokemonId){
    // @ts-ignore
    let result = await Swal.fire({
      title: 'Are you sure, bruh?',
      text: "Doing this will weigh on your conscience!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    if(result.isConfirmed){
    sandboxService.releaseUserPokemon(pokemonId)
  }

  }
}