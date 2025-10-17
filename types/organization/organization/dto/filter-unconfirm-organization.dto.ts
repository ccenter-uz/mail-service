import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import {
  CreatedByEnum,
  LanguageRequestDto,
  LogDataType,
  OrganizationStatusEnum,
} from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class UnconfirmOrganizationFilterDto extends LanguageRequestDto {
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

  @IsOptional()
  @IsString()
  staffNumber?: string;

  @ApiProperty({
    type: String,
    required: false,
    enum: CreatedByEnum, // Указываем enum
    example: CreatedByEnum.Client, // Пример значения
    description: 'Who created the entity: billing, client, or moderator',
  })
  @IsEnum(CreatedByEnum)
  @IsString()
  @IsOptional()
  createdBy?: string;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
