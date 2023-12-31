import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStudentAddInput {
  @Field()
  s_name: string;
  @Field()
  reg_no: string;
  @Field()
  dob: string;
  @Field()
  age: number;
  @Field()
  gender: string;
  @Field()
  s_class: number;
  @Field()
  s_section: string;
  @Field()
  f_name: string;
  @Field()
  m_name: string;
  @Field()
  address: string;
  @Field()
  phno: number;
  @Field()
  img_url: string;
  @Field()
  timestamp: number;
}
