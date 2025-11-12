import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './interfaces/pokemon.interface';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  pokemons: Pokemon[] = [];

  constructor() {
    this.pokemons = [
      { id: 0, name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/', liked: false },
      { id: 1, name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/', liked: false },
      { id: 2, name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/', liked: false },
      { id: 3, name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/', liked: false },
      { id: 4, name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/', liked: false },
      { id: 5, name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/', liked: false },
      { id: 6, name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/', liked: false },
      { id: 7, name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/', liked: false },
      { id: 8, name: 'blastoise', url: 'https://pokeapi.co/api/v2/pokemon/9/', liked: false },
      { id: 9, name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon/10/', liked: false },
      { id: 10, name: 'metapod', url: 'https://pokeapi.co/api/v2/pokemon/11/', liked: false },
      { id: 11, name: 'butterfree', url: 'https://pokeapi.co/api/v2/pokemon/12/', liked: false },
      { id: 12, name: 'weedle', url: 'https://pokeapi.co/api/v2/pokemon/13/', liked: false },
      { id: 13, name: 'kakuna', url: 'https://pokeapi.co/api/v2/pokemon/14/', liked: false },
      { id: 14, name: 'beedrill', url: 'https://pokeapi.co/api/v2/pokemon/15/', liked: false },
      { id: 15, name: 'pidgey', url: 'https://pokeapi.co/api/v2/pokemon/16/', liked: false },
      { id: 16, name: 'pidgeotto', url: 'https://pokeapi.co/api/v2/pokemon/17/', liked: false },
      { id: 17, name: 'pidgeot', url: 'https://pokeapi.co/api/v2/pokemon/18/', liked: false },
      { id: 18, name: 'rattata', url: 'https://pokeapi.co/api/v2/pokemon/19/', liked: false },
      { id: 19, name: 'raticate', url: 'https.raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png', liked: false },
    ];

    for (let i = 0; i < 20; i++) {
      this.pokemons[i].url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`;
    }
  }

  actualitzarPokemon(pokemon: Pokemon) {
    let idx = this.pokemons.findIndex((value: Pokemon) => value.id === pokemon.id);
    this.pokemons[idx] = pokemon;
  }

  get sensePokemonsAmbLike(): boolean {
    return this.pokemons.filter((p) => p.liked).length === 0;
  }
}
