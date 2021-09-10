import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekuciRacunComponent } from './tekuci-racun.component';

describe('TekuciRacunComponent', () => {
  let component: TekuciRacunComponent;
  let fixture: ComponentFixture<TekuciRacunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekuciRacunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TekuciRacunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
