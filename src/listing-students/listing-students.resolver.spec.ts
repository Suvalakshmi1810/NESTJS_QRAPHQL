import { Test, TestingModule } from '@nestjs/testing';
import { ListingStudentsResolver } from './listing-students.resolver';
import { ListingStudentsService } from './listing-students.service';

describe('ListingStudentsResolver', () => {
  let resolver: ListingStudentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListingStudentsResolver, ListingStudentsService],
    }).compile();

    resolver = module.get<ListingStudentsResolver>(ListingStudentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
