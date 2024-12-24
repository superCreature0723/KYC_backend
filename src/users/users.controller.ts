/* eslint-disable prettier/prettier */
import { Controller, Post, Res, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';

@Controller('kyc-result')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  handleCallback(@Res() res: Response) {
    res.status(202).send({ message: 'Accepted' });
  }
  @Get()
  handleGet() {
    // Return success response to AMLBot
    return { message: 'Callback received successfully' };
  }
}
