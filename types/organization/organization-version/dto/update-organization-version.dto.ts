import { OrganizationVersionInterfaces } from 'types/organization/organization-version';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsOptional,
  IsNumber,
  IsObject,
  ValidateNested,
  IsString,
  IsArray,
} from 'class-validator';
import { IdDto, LogDataType } from 'types/global';
import * as Multer from 'multer';
import { PhoneType } from './create-phone-version.dto';
import { PaymentTypesVersionDto } from './create-peyment-types-version.dto';
import { PhotoLinkVersionDto } from './file-upload-version.dto';
import { ProductServiceVersionType } from './create-product-service-version.dto';
import { NearbeesVersionType } from './create-nearbees-version.dto';
import { PictureVersionType } from './update-picture-version.dto';
import { removeSymbols } from 'types/global/helper';
import { SiteDto } from './update-site.dto';
export class OrganizationVersionUpdateDto
  extends IdDto
  implements OrganizationVersionInterfaces.Update
{
  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  mainOrganizationId?: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  subCategoryId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  regionId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  cityId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  districtId: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  villageId: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  avenueId: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  residentialId: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  neighborhoodId: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  areaId: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  streetId: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  laneId: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  impasseId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  segmentId: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  passageId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  name: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  description: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  legalName: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  secret: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  kvartal: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  address: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  home: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  apartment: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  inn: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  bankNumber: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  account: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  mail: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  manager: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Type(() => String)
  @Transform(removeSymbols)
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
    type: PaymentTypesVersionDto,
    required: false,
  })
  @IsOptional()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  @IsObject()
  @Type(() => PaymentTypesVersionDto)
  paymentTypes: PaymentTypesVersionDto;

  @ApiProperty({
    example: {
      dayoffs: ['Monday'],
      lunchFrom: '13:00',
      lunchTo: '14:00',
      worktimeFrom: '10:00',
      worktimeTo: '19:00',
    },
    required: false,
  })
  @IsOptional()
  @IsObject()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  workTime: Record<string, string>;

  @ApiProperty({
    example: {
      bus: '127 AVTOBUS',
      metroStation: 'Tinchlik metro',
      microBus: '130M',
    },
    required: false,
  })
  @IsOptional()
  @IsObject()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  transport: Record<string, string>;

  @ApiProperty({
    type: Object,
    example: {
      phones: [
        { phone: '+998901234567', phoneTypeId: 1, isSecret: false },
        { phone: '+998907654321', phoneTypeId: 2, isSecret: true },
      ],
    },
    required: false,
  })
  @IsOptional()
  phone: PhoneType | string;

  @ApiProperty({
    type: Object,
    example: {
      productServices: [
        { productServiceCategoryId: 1, productServiceSubCategoryId: 1 },
        { productServiceCategoryId: 1, productServiceSubCategoryId: 2 },
      ],
    },
    required: false,
  })
  @IsOptional()
  productService: ProductServiceVersionType | string;

  @ApiProperty({
    type: Object,
    example: {
      nearbees: [
        { description: 'nearbees', nearbyId: 1 },
        { description: 'nearbees2', nearbyId: 2 },
      ],
    },
    required: false,
  })
  @IsOptional()
  nearby: NearbeesVersionType | string;

  @ApiProperty({
    type: Object,
    example: {
      socials: [
        { type: 'telegram', link: 'https://t.me' },
        { type: 'telegram', link: 'https://t.me' },
      ],
    },
    required: false,
  })
  @IsOptional()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  social: Record<string, string>;

  @ApiPropertyOptional({ type: () => SiteDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => SiteDto)
  @Transform(({ value }) => {
    if (!value || typeof value !== 'object') return undefined;
    return value;
  })
  site?: SiteDto;

  @ApiProperty({
    type: Object,
    example: {
      pictures: [{ link: 'dasdsafds' }, { link: 'dasdsafds' }],
    },
    required: false,
  })
  @IsOptional()
  picture: PictureVersionType | string;

  @ApiProperty({
    type: 'array',
    items: { type: 'string', format: 'binary' },
    required: false,
  })
  photos: Array<Multer.File>;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
  })
  logo: Multer.File;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
  })
  banner: Multer.File;

  @ApiProperty({ example: 'https://google.com', required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  logoLink: string;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => PhotoLinkVersionDto)
  PhotoLink: PhotoLinkVersionDto[];

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
