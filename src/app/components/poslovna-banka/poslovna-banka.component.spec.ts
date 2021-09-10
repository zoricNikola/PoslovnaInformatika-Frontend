import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoslovnaBankaComponent } from './poslovna-banka.component';

describe('PoslovnaBankaComponent', () => {
  let component: PoslovnaBankaComponent;
  let fixture: ComponentFixture<PoslovnaBankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoslovnaBankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoslovnaBankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
