import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoslovneBankeComponent } from './poslovne-banke.component';

describe('PoslovneBankeComponent', () => {
  let component: PoslovneBankeComponent;
  let fixture: ComponentFixture<PoslovneBankeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoslovneBankeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoslovneBankeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
