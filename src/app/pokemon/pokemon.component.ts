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
  @Output() pokemonActualitzat = new EventEmitter<Pokemon>();

  canviarLike() {
    this.pokemon.liked = !this.pokemon.liked;
    this.pokemonActualitzat.emit(this.pokemon);
  }
}
