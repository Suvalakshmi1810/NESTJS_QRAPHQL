import { Test, TestingModule } from '@nestjs/testing';
import { ListingStudentsService } from './listing-students.service';

describe('ListingStudentsService', () => {
  let service: ListingStudentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListingStudentsService],
    }).compile();

    service = module.get<ListingStudentsService>(ListingStudentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
