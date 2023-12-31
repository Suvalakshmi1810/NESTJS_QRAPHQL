import { Test, TestingModule } from '@nestjs/testing';
import { StudentAddService } from './student_add.service';

describe('StudentAddService', () => {
  let service: StudentAddService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentAddService],
    }).compile();

    service = module.get<StudentAddService>(StudentAddService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
