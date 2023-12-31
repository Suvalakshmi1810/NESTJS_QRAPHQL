import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { ListingStudent, MarksInput } from './entities/listing-student.entity';
import {
  CollectionReference,
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { firestore } from 'src/firebase';

@Resolver(() => ListingStudent)
export class ListingStudentsResolver {
  @Query(() => [ListingStudent])
  async ListingAllStudents(): Promise<ListingStudent[] | null> {
    const usersCollection = collection(firestore, 'students');
    const querySnapshot = await getDocs(usersCollection);

    const fetchedData: ListingStudent[] = querySnapshot.docs.map((doc) => ({
      reg_no: doc.id,
      ...doc.data(),
    })) as ListingStudent[];

    return fetchedData;
  }

  @Query(() => ListingStudent)
  async DisplayOneStudent(
    @Args('reg_no') reg_no: string,
  ): Promise<ListingStudent> {
    const StudentDoc = collection(firestore, 'students');
    const docReference = doc(StudentDoc, reg_no);
    const particularStudentinfo = await getDoc(docReference);
    const studentData = particularStudentinfo.data();
    return { reg_no: reg_no, ...studentData } as ListingStudent;
  }
  @ResolveField(() => MarksInput, { nullable: true })
  async DisplayOneStudentMarks(
    @Parent() student: ListingStudent,
  ): Promise<MarksInput | null> {
    const usersCollection: CollectionReference<DocumentData> = collection(
      firestore,
      'studentMarks',
    );

    const querySnapshot = await getDocs(
      query(usersCollection, where('reg_no', '==', student.reg_no)),
    );

    if (querySnapshot.empty) {
      return null;
    }

    const doc: QueryDocumentSnapshot<DocumentData> = querySnapshot.docs[0];

    const fetchedData: MarksInput = {
      id: doc.id,
      ...(doc.data() as MarksInput),
    };

    return fetchedData;
  }
}
