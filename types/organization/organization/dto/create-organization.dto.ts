import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
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
import { OrganizationInterfaces } from 'types/organization/organization';
import * as Multer from 'multer';
import { PhoneDto, PhoneType } from './create-phone.dto';
import { Phone } from '../types/index';
import { PaymentTypesDto } from './create-peyment-types.dto';
import { PhotoLinkDto } from './file-upload-dto';
import { ProductServiceType } from './create-product-service.dto';
import { NearbeesType } from './create-nearbees.dto';
import { removeSymbols } from 'types/global/helper';
import { socialType } from './create-social.dto';
import { SiteDto } from 'types/organization/organization-version/dto/update-site.dto';

export class OrganizationCreateDto implements OrganizationInterfaces.Request {
  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  mainOrganizationId?: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  subCategoryId?: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  regionId?: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  cityId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  districtId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  villageId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  avenueId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  residentialId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  neighborhoodId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  areaId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  streetId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  laneId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  impasseId?: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  segmentId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  passageId?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  name?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  description?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  legalName?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  secret?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  kvartal?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  address?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  home?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  apartment?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  inn?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  bankNumber?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  account?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  mail?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  manager?: string;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  @Type(() => String)
  index?: string;

  @IsOptional()
  @IsString()
  role?: string;

  @IsOptional()
  @IsString()
  staffNumber?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  certificate: string;

  @ApiProperty({
    example: {
      cash: true,
      terminal: false,
      transfer: true,
    },
    type: PaymentTypesDto,
  })
  @IsOptional()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  @IsObject()
  @Type(() => PaymentTypesDto)
  paymentTypes?: PaymentTypesDto;

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
      bus: { type: 'string', example: '127 AVTOBUS' },
      metroStation: { type: 'string', example: 'Tinchlik metro' },
      microBus: { type: 'string', example: '130M' },
    },
  })
  @IsOptional()
  @IsObject()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  transport?: Record<string, string>;

  @ApiProperty({
    type: Object,
    example: {
      phones: [
        { phone: '+998901234567', phoneTypeId: 1, isSecret: false },
        { phone: '+998907654321', phoneTypeId: 2, isSecret: true },
      ],
    },
  })
  @IsNotEmpty()
  phone: PhoneType | string;

  @ApiProperty({
    type: Object,
    example: {
      productServices: [
        { productServiceCategoryId: 1, productServiceSubCategoryId: 1 },
        { productServiceCategoryId: 1, productServiceSubCategoryId: 2 },
      ],
    },
  })
  @IsNotEmpty()
  productService: ProductServiceType | string;

  @ApiProperty({
    type: Object,
    example: {
      nearbees: [
        { description: 'nearbees', nearbyId: 1 },
        { description: 'nearbees2', nearbyId: 2 },
      ],
    },
  })
  @IsNotEmpty()
  nearby: NearbeesType | string;

  @ApiProperty({
    type: Object,
    example: {
      socials: [
        { type: 'telegram', link: 'https://t.me' },
        { type: 'telegram', link: 'https://t.me' },
      ],
    },
  })
  @IsNotEmpty()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  social: Record<string, string>;

  // @ApiPropertyOptional({ type: () => SiteDto })
  // @IsOptional()
  // @ValidateNested()
  // @Type(() => SiteDto)
  // site?: SiteDto;

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

  @IsOptional()
  @IsString()
  logoLink?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => PhotoLinkDto)
  PhotoLink: PhotoLinkDto[];

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
