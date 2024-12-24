/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [{ name: 'John Doe' }, { name: 'Jane Doe' }];

  findAll(req: Request) {
    return req;
  }
}
