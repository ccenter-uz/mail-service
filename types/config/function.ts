import { ClientsProviderAsyncOptions, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CONFIG_SERVICES_RMQ_TOKEN } from './tokens';

export const initRmqClient = (
  serviceName: string
): ClientsProviderAsyncOptions => ({
  name: serviceName,
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    const rmqConfig = configService.get(CONFIG_SERVICES_RMQ_TOKEN + '.CONFIG');
    const serviceConfig = configService.get(
      `${CONFIG_SERVICES_RMQ_TOKEN}.${serviceName}`
    );

    if (!serviceConfig) {
      throw new Error(
        `RabbitMQ configuration for service "${serviceName}" not found`
      );
    }

    return {
      transport: Transport.RMQ,
      options: {
        urls: [
          `amqp://${rmqConfig.login}:${rmqConfig.password}@${rmqConfig.host}:${rmqConfig.port}`,
        ],
        queue: serviceConfig.queueName,
        queueOptions: {
          durable: true,
        },
        exchange: serviceConfig.exchangeName,
        exchangeType: 'direct',
      },
    };
  },
  inject: [ConfigService],
});
