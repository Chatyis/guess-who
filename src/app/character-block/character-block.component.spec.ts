import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBlockComponent } from './character-block.component';

describe('CharacterBlockComponent', () => {
  let component: CharacterBlockComponent;
  let fixture: ComponentFixture<CharacterBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
