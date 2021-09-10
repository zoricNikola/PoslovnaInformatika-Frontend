import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoslovnaBankaFormDialogComponent } from './poslovna-banka-form-dialog.component';

describe('PoslovnaBankaFormDialogComponent', () => {
  let component: PoslovnaBankaFormDialogComponent;
  let fixture: ComponentFixture<PoslovnaBankaFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoslovnaBankaFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoslovnaBankaFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
