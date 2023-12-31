import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentAddModule } from './student_add/student_add.module';
import { ListingStudentsModule } from './listing-students/listing-students.module';
import { StudentMarksResolver } from './student_add/marks_add.resolver';

@Module({
  imports: [StudentAddModule, ListingStudentsModule, StudentMarksResolver],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
