import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StanjaComponent } from './stanja.component';

describe('StanjaComponent', () => {
  let component: StanjaComponent;
  let fixture: ComponentFixture<StanjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StanjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StanjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
