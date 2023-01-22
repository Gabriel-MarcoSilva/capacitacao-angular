import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap, ReplaySubject } from 'rxjs';
import { Pokemon } from 'src/_models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokes : Pokemon[] = [];

  constructor(
    private httpClient: HttpClient,
  ) {

    const allPokemon = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

    this.httpClient.get<any>(allPokemon).pipe(
      map(value => value.results),
      map((value: any) => {
        return from(value).pipe(
          mergeMap((v: any) => this.httpClient.get(v.url)
          )
        )
      }),
      mergeMap(value => value)
    ).subscribe((result: any) => { 
      const pokemon: Pokemon = {
        number :result.id,
        name: result.name,
        image: result.sprites.front_default,
        type: result.types.map((t: any) => t.type.name)
      }

      this.pokes[result.id] = pokemon
    })
      
  }
}
