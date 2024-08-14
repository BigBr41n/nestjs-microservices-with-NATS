import { Module } from '@nestjs/common';
import { UsersController } from './users.controllers';
import { NatsModule } from 'src/nats-client/nats.module';

@Module({
  imports: [NatsModule],
  controllers: [UsersController],
  providers: [],
})
export class UsersModule {}
