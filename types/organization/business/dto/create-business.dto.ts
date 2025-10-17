import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsJSON,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { LanguageDto, LogDataType } from 'types/global';
import { BusinessInterfaces } from 'types/organization/business/interface/business-group.interface';
import * as Multer from 'multer';
import { PhoneDto, PhoneType } from './create-phone.dto';
import { Phone } from '../types/index';
import { PaymentTypesDto } from './create-peyment-types.dto';
import { PhotoLinkDto } from './file-upload-dto';
import { removeSymbols } from 'types/global/helper';
import { socialType } from './create-social.dto';
import { loadEnvFile } from 'process';

export class BusinessCreateDto implements BusinessInterfaces.Request {
  @IsOptional()
  @IsNumber()
  organizationId?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  abonent?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  certificate?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  legalName?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  siteDescription?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  address?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  email?: string;

  @ApiProperty({
    example: {
      cash: true,
      terminal: false,
      transfer: true,
    },
  })
  @IsOptional()
  @IsObject()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  paymentTypes?: Record<string, string>;

  @ApiProperty({
    example: {
      dayoffs: ['Monday'],
      lunchFrom: '13:00',
      lunchTo: '14:00',
      worktimeFrom: '10:00',
      worktimeTo: '19:00',
    },
  })
  @IsOptional()
  @IsObject()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  workTime?: Record<string, string>;

  @ApiProperty({
    type: 'object',
    properties: {
      lat: { example: '123466' },
      loadEnvFile: { type: 'string', example: '1252542' },
    },
  })
  @IsOptional()
  @IsObject()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  map?: Record<string, string>;

  @ApiProperty({
    type: Object,
    example: [
      { id: 1, phone: '+998901234567' },
      { id: 2, phone: '+998901234565' },
    ],
  })
  @IsNotEmpty()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  phone?: Record<string, string>;

  @ApiProperty({
    type: Object,
    example: [
      { type: 'telegram', link: 'https://t.me' },
      { type: 'telegram', link: 'https://t.me' },
    ],
  })
  @IsNotEmpty()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  social: Record<string, string>;

  @ApiProperty({
    type: 'array',
    items: { type: 'string', format: 'binary' },
    required: false,
  })
  photos?: Array<Multer.File>;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
  })
  logo?: Multer.File;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
  })
  banner?: Multer.File;

  @IsOptional()
  @IsString()
  logoUrl?: string;

  @IsOptional()
  @IsString()
  bannerUrl?: string;

  @IsOptional()
  @IsNotEmpty()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  PhotoLink: Record<string, string>[];

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
