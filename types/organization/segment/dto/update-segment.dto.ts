import {
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IdDto, LanguageDto, LogDataType } from 'types/global';
import { SegmentInterfaces } from '../interface/segment-group.interface';
import { ApiProperty } from '@nestjs/swagger';

export class SegmentUpdateDto
  extends IdDto
  implements SegmentInterfaces.Request
{
  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  @Type(() => String)
  name: string;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  orderNumber?: number;
  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
