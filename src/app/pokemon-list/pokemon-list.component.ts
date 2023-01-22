import { Component } from '@angular/core';
import { PokemonService } from 'src/_services/pokemon.service';
import { Pokemon } from "../../_models/Pokemon"
import { Type } from "../../_models/Type"

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  /*public pokemons: Pokemon[] = [
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      number: 1,
      name: "Bulbasaur",
      type: [
        Type.Grass, Type.Poison
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
      number: 2,
      name: "Ivysaur",
      type: [
        Type.Grass, Type.Poison
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
      number: 3,
      name: "Venosaur",
      type: [
        Type.Grass, Type.Poison
      ]
    }
  ]*/

  constructor(
    public pokemonService: PokemonService
    ){

  }

}