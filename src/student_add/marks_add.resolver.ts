import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateStudentMarksInput } from './dto/create-student-marks.input';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from 'src/firebase';

@Resolver()
export class StudentMarksResolver {
  @Mutation(() => String)
  async createStudentMarks(
    @Args('marksData') data: CreateStudentMarksInput,
  ): Promise<string> {
    try {
      const usersCollection = collection(firestore, 'studentMarks');

      const docRef = await addDoc(usersCollection, data);

      return `Document written with ID: ${docRef.id}`;
    } catch (error) {
      return error;
    }
  }
}
