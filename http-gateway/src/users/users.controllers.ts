import {
  Body,
  Controller,
  Get,
  HttpException,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.natsClient.send({ cmd: 'createUser' }, createUserDto);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await lastValueFrom(
      this.natsClient.send({ cmd: 'getUserById' }, { userId: id }),
    );
    if (user) return user;
    else throw new HttpException('User Not Found', 404);
  }
}
