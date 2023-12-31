import { Test, TestingModule } from '@nestjs/testing';
import { StudentAddResolver } from './student_add.resolver';
import { StudentAddService } from './student_add.service';

describe('StudentAddResolver', () => {
  let resolver: StudentAddResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentAddResolver, StudentAddService],
    }).compile();

    resolver = module.get<StudentAddResolver>(StudentAddResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
