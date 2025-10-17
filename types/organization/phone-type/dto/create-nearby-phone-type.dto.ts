import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  ValidateNested,
  IsObject,
  IsNumber,
} from 'class-validator';
import { PhoneTypeInterfaces } from '../interface/nearby-phone-type-group.interface';
import { Type } from 'class-transformer';
import { LanguageDto, LogDataType } from 'types/global';

export class PhoneTypeCreateDto implements PhoneTypeInterfaces.Request {
  @IsOptional()
  @IsString()
  staffNumber?: string;

  @ApiProperty({
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  name: LanguageDto;

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
