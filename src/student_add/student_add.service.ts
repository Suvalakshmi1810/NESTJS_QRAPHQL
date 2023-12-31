import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentAddService {
  findAll() {
    return `This action returns all studentAdd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentAdd`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentAdd`;
  }
}
