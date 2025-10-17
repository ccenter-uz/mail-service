import { registerAs } from '@nestjs/config';
import * as process from 'process';

export const CONFIG_APP_TOKEN = 'app';
export const CONFIG_PRISMA_DB_TOKEN = 'db';
export const CONFIG_RABBITMQ_TOKEN = 'rmq';

export const appConfig = registerAs(CONFIG_APP_TOKEN, (): AppConfig => {
  return {
    mode: process.env.NODE_ENV || 'development',
    host: process.env.APP_HOST || '0.0.0.0',
    port: parseInt(process.env.APP_PORT) || 3004,
  };
});

export const rabbitConfig = registerAs(
  CONFIG_RABBITMQ_TOKEN,
  (): RMQConfig => ({
    exchangeName: process.env.RMQ_EXCHANGE_NAME || 'mail',
    queueName: process.env.RMQ_QUEUE_NAME || 'mail',
    login: process.env.RMQ_LOGIN || 'guest',
    password: process.env.RMQ_PASSWORD || 'guest',
    host: process.env.RMQ_HOST || 'localhost',
    port: parseInt(process.env.RMQ_PORT) || 5672,
  })
);

export const dbConfig = registerAs(
  CONFIG_PRISMA_DB_TOKEN,
  (): DbConfig => ({
    url: process.env.DATABASE_URL,
  })
);

export type RMQConfig = {
  exchangeName: string;
  queueName: string;
  login: string;
  password: string;
  host: string;
  port: number;
};

export type AppConfig = {
  mode: string;
  host: string;
  port: number;
};

export type DbConfig = {
  url: string;
};

export const ValidatorConfig = {
  transform: true,
  stopAtFirstError: true,
  whitelist: true,
};

export const firebaseConfig = {
  apiKey: 'AIzaSyDc-buZ_MuGjiesQG7gBKjJ7MU_z69l2Iw',
  authDomain: 'searchproject-ab539.firebaseapp.com',
  projectId: 'searchproject-ab539',
  storageBucket: 'searchproject-ab539.firebasestorage.app',
  messagingSenderId: '506529808138',
  appId: '1:506529808138:web:a5fb74982af1922de544f3',
  measurementId: 'G-JNJHM7BDE4',
};

