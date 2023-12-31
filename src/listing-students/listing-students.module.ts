import { Module } from '@nestjs/common';
import { ListingStudentsService } from './listing-students.service';
import { ListingStudentsResolver } from './listing-students.resolver';

@Module({
  providers: [ListingStudentsResolver, ListingStudentsService],
})
export class ListingStudentsModule {}
