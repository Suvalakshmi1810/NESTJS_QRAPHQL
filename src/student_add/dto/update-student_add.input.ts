import { CreateStudentAddInput } from './create-student_add.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStudentAddInput extends PartialType(CreateStudentAddInput) {
  @Field(() => Int)
  id: number;
}
