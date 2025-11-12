import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  @Input() pokemon!: Pokemon;
  @Output() pokemonUpdated = new EventEmitter<Pokemon>();

  toggleLike() {
    this.pokemon.liked = !this.pokemon.liked;
    this.pokemonUpdated.emit(this.pokemon);
  }
}
