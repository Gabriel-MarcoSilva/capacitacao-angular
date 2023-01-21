import { Component, Input } from '@angular/core';
import { Pokemon } from "../../_models/Pokemon"

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent {
  @Input()
  public pokemon!: Pokemon;
}
