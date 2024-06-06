import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-character-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-block.component.html',
  styleUrl: './character-block.component.scss'
})
export class CharacterBlockComponent {
  @Input() set index(value: number) {this._index = value + 1};
  @Input() isSelecting = true;
  @Input() isPreviewOnly = false;
  @Output() imageChoose = new EventEmitter<number>();
  _index: number;
  isClosed: boolean = false;

  handleImageClick(): void {
    if(this.isPreviewOnly){
      return
    }
    if(this.isSelecting){
      this.imageChoose.emit(this._index - 1 );
      return
    }
    this.isClosed = !this.isClosed;
  }
}
