import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class ListingStudent {
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
@ObjectType()
export class MarksInput {
  @Field(() => ID, { nullable: true })
  id: string;
  @Field({ nullable: true })
  Maths: number;
  @Field({ nullable: true })
  Science: number;
  @Field({ nullable: true })
  Social: number;
  @Field({ nullable: true })
  reg_no: number;
}
