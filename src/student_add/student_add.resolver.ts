import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { StudentAdd } from './entities/student_add.entity';
import { CreateStudentAddInput } from './dto/create-student_add.input';
import { firestore } from 'src/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';

@Resolver(() => StudentAdd)
export class StudentAddResolver {
  @Mutation(() => String)
  async createStudent(
    @Args('user') data: CreateStudentAddInput,
  ): Promise<string> {
    try {
      const { reg_no, ...studentData } = data;
      const usersCollection = collection(firestore, 'students');

      await setDoc(doc(usersCollection, reg_no), studentData);

      return `Document written with ID: ${reg_no}`;
    } catch (error) {
      return error;
    }
  }
}
