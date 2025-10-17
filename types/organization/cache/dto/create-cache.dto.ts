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
import { CacheInterfaces } from 'types/organization/cache/interface/cache-group.interface';
import * as Multer from 'multer';
import { PhotoLinkDto } from './file-upload-dto';

export class CacheCreateDto implements CacheInterfaces.Request {
  @IsOptional()
  @IsNumber()
  id: number;

  @ApiProperty({
    example: {
      dayoffs: ['Monday'],
      lunchFrom: '13:00',
      lunchTo: '14:00',
      worktimeFrom: '10:00',
      worktimeTo: '19:00',
      pictures: [],
      logoLink: 'asdfasf',
      bannerLink: 'sadfasdfsa',
    },
  })
  @IsOptional()
  @IsObject()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  data?: Record<string, any>;

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
  @IsObject()
  logData?: LogDataType;
}
