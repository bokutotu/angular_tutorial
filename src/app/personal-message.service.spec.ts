import { TestBed } from '@angular/core/testing';

import { PersonalMessageService } from './personal-message.service';

describe('PersonalMessageService', () => {
  let service: PersonalMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
