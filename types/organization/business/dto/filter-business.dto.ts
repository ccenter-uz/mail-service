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

export class BusinessFilterDto extends LanguageRequestDto {
  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  page: number = 1;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  limit: number = 10;

  @ApiProperty({
    type: String,
    required: false,
  })
  @IsString()
  @IsOptional()
  search?: string;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsDateString()
  @IsOptional()
  dateFrom?: Date | string;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsDateString()
  @IsOptional()
  dateTo?: Date | string;

  @ApiProperty({
    type: Boolean,
    required: false,
  })
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true';
    }
    return Boolean(value);
  })
  @IsBoolean()
  @IsOptional()
  all?: boolean = false;



  @ApiProperty({
    type: Number,
    required: false,
  })
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }
    return value;
  })
  @IsInt()
  @IsEnum(OrganizationStatusEnum)
  @Min(-1)
  @IsOptional()
  status: OrganizationStatusEnum = OrganizationStatusEnum.Accepted;

  @IsOptional()
  @IsString()
  role?: string;

  @IsOptional()
  @IsString()
  inn?: string;

  @IsOptional()
  @IsNumber()
  userId?: number;

  @IsOptional()
  @IsBoolean()
  savedOrganization?: boolean;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
