import { Module } from '@nestjs/common';
import { StudentAddService } from './student_add.service';
import { StudentAddResolver } from './student_add.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { CreateStudentAddInput } from './dto/create-student_add.input';
import { CreateStudentMarksInput } from './dto/create-student-marks.input';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      debug: true,
    }),
  ],
  providers: [
    StudentAddResolver,
    StudentAddService,
    CreateStudentAddInput,
    CreateStudentMarksInput,
  ],
})
export class StudentAddModule {}
