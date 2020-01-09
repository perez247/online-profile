import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrambleTextComponent } from './scramble-text.component';

describe('ScrambleTextComponent', () => {
  let component: ScrambleTextComponent;
  let fixture: ComponentFixture<ScrambleTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrambleTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrambleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
