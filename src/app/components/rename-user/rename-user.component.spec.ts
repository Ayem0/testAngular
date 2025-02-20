import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameUserComponent } from './rename-user.component';

describe('RenameUserComponent', () => {
  let component: RenameUserComponent;
  let fixture: ComponentFixture<RenameUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenameUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenameUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
