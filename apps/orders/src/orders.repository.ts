import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { Order } from './schemas/order.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { CreateOrderRequest } from './dto/create-order.request';

@Injectable()
export class OrdersRepository extends AbstractRepository<Order> {
  createOrder(request: CreateOrderRequest) {
    throw new Error('Method not implemented.');
  }
  protected readonly logger = new Logger(OrdersRepository.name);

  constructor(
    @InjectModel(Order.name) orderModel: Model<Order>,
    @InjectConnection() connection: Connection,
  ) {
    super(orderModel, connection);
  }
}
