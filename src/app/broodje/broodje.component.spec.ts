import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroodjeComponent } from './broodje.component';

describe('BroodjeComponent', () => {
  let component: BroodjeComponent;
  let fixture: ComponentFixture<BroodjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroodjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroodjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
