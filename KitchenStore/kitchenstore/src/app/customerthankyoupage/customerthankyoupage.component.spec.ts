import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerthankyoupageComponent } from './customerthankyoupage.component';

describe('CustomerthankyoupageComponent', () => {
  let component: CustomerthankyoupageComponent;
  let fixture: ComponentFixture<CustomerthankyoupageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerthankyoupageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerthankyoupageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
