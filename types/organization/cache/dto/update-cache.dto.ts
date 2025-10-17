import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsOptional,
  IsNumber,
  IsObject,
  ValidateNested,
  IsString,
  IsJSON,
  IsArray,
} from 'class-validator';
import { IdDto, LanguageDto, LogDataType } from 'types/global';
import { CacheInterfaces } from 'types/organization/cache';
import * as Multer from 'multer';
export class CacheUpdateDto extends IdDto implements CacheInterfaces.Update {
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
  data?: Record<string, string>;

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
  @IsObject()
  logData?: LogDataType;
}
