import { CreateListingStudentInput } from './create-listing-student.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateListingStudentInput extends PartialType(
  CreateListingStudentInput,
) {
  @Field(() => Int)
  id: number;
}
