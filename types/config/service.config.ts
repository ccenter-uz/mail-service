import { registerAs } from '@nestjs/config';

export const serviceConfig = registerAs('SERVICE', () => ({
  ORGANIZATION_SERVICE_HOST: process.env.ORGANIZATION_SERVICE_HOST || '0.0.0.0',
  ORGANIZATION_SERVICE_PORT: parseInt(process.env.ORGANIZATION_SERVICE_PORT) || 3001,
}));
