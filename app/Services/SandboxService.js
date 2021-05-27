import { ProxyState } from "../AppState.js"
import { UserPokemon } from "../Models/UserPokemon.js"

const sandboxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/alex/pokemon"
})

class SandboxService{
  async getUserPokemon(){
    let res = await sandboxApi.get()
    ProxyState.userPokemon = res.data.map(up => new UserPokemon(up))
  }

  async addUserPokemon(){
    if(ProxyState.userPokemon.find(up => up.name == ProxyState.pokemonDetails.name)){
      throw new Error(`You have already seen' ${ProxyState.pokemonDetails.name}!`)
    }
    let res = await sandboxApi.post('', ProxyState.pokemonDetails)
    console.log(res.data)
    ProxyState.userPokemon = [...ProxyState.userPokemon, new UserPokemon(res.data)]
  }

  async releaseUserPokemon(pokemonId){
    await sandboxApi.delete(pokemonId)
    ProxyState.userPokemon = ProxyState.userPokemon.filter(up => up.id != pokemonId)

  }

}
export const sandboxService = new SandboxService