import { TestBed, inject } from '@angular/core/testing';

import { AddQuestService } from './add-quest.service';

describe('AddQuestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddQuestService]
    });
  });

  it('should be created', inject([AddQuestService], (service: AddQuestService) => {
    expect(service).toBeTruthy();
  }));
});
