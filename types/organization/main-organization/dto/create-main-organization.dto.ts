import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { MainOrganizationInterfaces } from '../interface/main-organization-group.interface';
import { Type } from 'class-transformer';
import { LanguageDto, LogDataType } from 'types/global';

export class MainOrganizationCreateDto implements MainOrganizationInterfaces.Request {
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
