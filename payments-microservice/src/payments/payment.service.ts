import { Injectable, Inject } from '@nestjs/common';
import { CreatePaymentDto } from './dtos/CreatePayments.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/typeorm/User';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from 'src/typeorm/Payment';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment) private paymentsRepository: Repository<Payment>,
    @Inject('NATS_SERVICE') private natsClient: ClientProxy,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createPayment({ userId, ...createPaymentDto }: CreatePaymentDto) {
    const user = await lastValueFrom<User>(
      this.natsClient.send({ cmd: 'getUserById' }, { userId }),
    );
    console.log(user);
    if (user) {
      const newPayment = this.paymentsRepository.create({
        ...createPaymentDto,
        user,
      });
      console.log(newPayment);
      return this.paymentsRepository.save(newPayment);
    }
    return null;
  }
}
