import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsOptional,
  IsNumber,
  IsObject,
  ValidateNested,
  IsString,
  IsJSON,
  IsNotEmpty,
  IsArray,
} from 'class-validator';
import { IdDto, LanguageDto } from 'types/global';
import { BusinessInterfaces } from 'types/organization/business/interface/business-group.interface';
import * as Multer from 'multer';
import { removeSymbols } from 'types/global/helper';
import { PictureVersionType } from 'types/organization/organization-version/dto/update-picture-version.dto';
export class BusinessUpdateDto extends IdDto implements BusinessInterfaces.Update {
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
    type: Object,
    example: {
      map: [
        { lon: 'dfsaf', lat: 'qewrwe' },
        { lon: 'qwer', lat: 'rqerqwe' },
      ],
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
    example: {
      phone: [
        { id: 1, phone: '+998901234567' },
        { id: 2, phone: '+998901234565' },
      ],
    },
  })
  @IsNotEmpty()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  phone?: Record<string, string>;

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

  @ApiProperty({
    type: Object,
    example: {
      pictures: [{ link: 'dasdsafds' }, { link: 'dasdsafds' }],
    },

    required: false,
  })
  @IsOptional()
  picture: PictureVersionType | string;

  @ApiProperty({ example: 'https://google.com', required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  logoUrl?: string;

  @ApiProperty({ example: 'https://google.com', required: false })
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  bannerUrl?: string;

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
  @IsNotEmpty()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  PhotoLink: Record<string, { link: string }[]>;
}
