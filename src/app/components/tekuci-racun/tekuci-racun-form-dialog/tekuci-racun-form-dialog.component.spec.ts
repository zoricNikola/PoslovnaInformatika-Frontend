import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekuciRacunFormDialogComponent } from './tekuci-racun-form-dialog.component';

describe('TekuciRacunFormDialogComponent', () => {
  let component: TekuciRacunFormDialogComponent;
  let fixture: ComponentFixture<TekuciRacunFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekuciRacunFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TekuciRacunFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
