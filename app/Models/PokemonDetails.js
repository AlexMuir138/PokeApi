export class PokemonDetails {
  constructor(data) {
    this.name = data.name
    this.img = data.sprites.front_default 

  }
  get Template() {
    return `
        <div class="d-flex justify-content-center bg-primary">
          <span>
          <h2><b>${this.name}<b></h2>
          </span>
        </div >
           <div class="d-flex justify-content-center bg-secondary">
               <img src="${this.img}" height="400" width="400"/>
            </div>
            <button class="btn btn-info btn-block tada" onclick="app.userPokemonController.addUserPokemon()">Catch 'em!</button>
    `
  }


}