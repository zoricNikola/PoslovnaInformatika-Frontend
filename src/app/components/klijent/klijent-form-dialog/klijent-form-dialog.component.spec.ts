import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlijentFormDialogComponent } from './klijent-form-dialog.component';

describe('KlijentFormDialogComponent', () => {
  let component: KlijentFormDialogComponent;
  let fixture: ComponentFixture<KlijentFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlijentFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlijentFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
