import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import {
  LanguageRequestDto,
  ListQueryDto,
  LogDataType,
  OrganizationStatusEnum,
  StatusEnum,
  ModuleNamesObjectAdress,
} from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class BusinessFilterWihNameDto  {
  @ApiProperty({
    type: String,
    required: false,
  })
  @IsString()
  @IsOptional()
  search?: string;

}
