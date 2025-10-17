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

export class OrganizationFilterBusinessDto extends LanguageRequestDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsOptional()
  inn?: string;

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
  @IsObject()
  logData?: LogDataType;
}
