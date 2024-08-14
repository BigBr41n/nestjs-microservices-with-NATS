import { Module } from '@nestjs/common';
import { PaymentsMicroserviceController } from './payments.controller';
import { NatsClientModule } from '../nats-client/nats-client.module';
import { PaymentsService } from './payment.service';

@Module({
  imports: [NatsClientModule],
  controllers: [PaymentsMicroserviceController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
