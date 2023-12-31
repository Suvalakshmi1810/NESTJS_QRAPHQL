import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStudentMarksInput {
  @Field()
  reg_no: string;
  @Field()
  Maths: number;
  @Field()
  Science: number;
  @Field()
  Social: number;
}
