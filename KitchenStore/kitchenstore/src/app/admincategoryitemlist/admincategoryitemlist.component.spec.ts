import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincategoryitemlistComponent } from './admincategoryitemlist.component';

describe('AdmincategoryitemlistComponent', () => {
  let component: AdmincategoryitemlistComponent;
  let fixture: ComponentFixture<AdmincategoryitemlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincategoryitemlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincategoryitemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
