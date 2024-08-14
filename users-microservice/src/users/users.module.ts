import { Module } from '@nestjs/common';
import { UsersMicroserviceController } from './users.controller';

@Module({
  controllers: [UsersMicroserviceController],
  providers: [],
})
export class UsersModule {}
