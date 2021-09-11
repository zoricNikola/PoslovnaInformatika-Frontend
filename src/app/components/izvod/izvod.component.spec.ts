import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvodComponent } from './izvod.component';

describe('IzvodComponent', () => {
  let component: IzvodComponent;
  let fixture: ComponentFixture<IzvodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzvodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzvodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
