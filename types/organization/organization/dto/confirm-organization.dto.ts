import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsObject,
} from 'class-validator';
import { LogDataType } from 'types/global';

export class ConfirmDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsNumber()
  @IsOptional()
  role?: string;

  @IsNumber()
  @IsOptional()
  staffNumber?: string;

  @ApiProperty({
    example: 'confirm',
    required: false,
  })
  @IsString()
  @IsOptional()
  rejectReason?: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsOptional()
  status?: number;

  @IsNumber()
  @IsOptional()
  organizationId?: number;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
