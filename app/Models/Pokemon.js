export default class Pokemon{
  constructor({name, url}){
    this.name = name
    this.url = url
  }

  get Template(){
    return `
    <div class="border p-1 m-1" onclick="app.pokemonDetailsController.getPokemonDetails('${this.url}')">
    <span>${this.name}</span>
    </div>
    `
  }

}