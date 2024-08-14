import { Module } from '@nestjs/common';
import { NatsModule } from '../nats-client/nats.module';
import { PaymentsController } from './payments.controller';

@Module({
  imports: [NatsModule],
  controllers: [PaymentsController],
  providers: [],
})
export class PaymentsModule {}
