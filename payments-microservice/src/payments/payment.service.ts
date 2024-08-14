import { Injectable, Inject } from '@nestjs/common';
import { CreatePaymentDto } from './dtos/CreatePayments.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PaymentsService {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createPayment({ userId, ...createPaymentDto }: CreatePaymentDto) {
    //TODO :
    /*     const user = await lastValueFrom(
      this.natsClient.send({ cmd: 'getUserById' }, { userId }),
    ); */
    return null;
  }
}
