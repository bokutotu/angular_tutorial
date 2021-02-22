import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalMessageComponent } from './personal-message.component';

describe('PersonalMessageComponent', () => {
  let component: PersonalMessageComponent;
  let fixture: ComponentFixture<PersonalMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
