import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Character } from "./shared/models/character.model";
import { CharacterBlockComponent } from "./character-block/character-block.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, CharacterBlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'guess-who';
  isSelecting = true;
  selectedImage: number;
  constructor() {
  }

  protected selectImage(index: number): void {
    this.selectedImage = index;
    this.isSelecting = false;
  }
}
