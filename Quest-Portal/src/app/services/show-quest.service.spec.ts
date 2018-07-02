import { TestBed, inject } from '@angular/core/testing';

import { ShowQuestService } from './show-quest.service';

describe('ShowQuestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowQuestService]
    });
  });

  it('should be created', inject([ShowQuestService], (service: ShowQuestService) => {
    expect(service).toBeTruthy();
  }));
});
