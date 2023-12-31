import { Injectable } from '@nestjs/common';

@Injectable()
export class ListingStudentsService {
  findAll() {
    return `This action returns all listingStudents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listingStudent`;
  }

  remove(id: number) {
    return `This action removes a #${id} listingStudent`;
  }
}
