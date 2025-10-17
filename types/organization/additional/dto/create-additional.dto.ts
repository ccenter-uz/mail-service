import { AdditionalInterfaces } from 'types/organization/additional';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  isObject,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { LanguageDto, LogDataType } from 'types/global';
import { AdditionalTableOrContentDto } from './table.dto';

export class AdditionalCreateDto implements AdditionalInterfaces.Request {
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
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  warning: LanguageDto;

  @ApiProperty({
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  mention: LanguageDto;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  additionalCategoryId: number;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;

  @ApiProperty({ type: [AdditionalTableOrContentDto] }) // Указываем, что это массив
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AdditionalTableOrContentDto)
  content: AdditionalTableOrContentDto[];

  @ApiProperty({ type: [AdditionalTableOrContentDto] }) // Указываем, что это массив
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AdditionalTableOrContentDto)
  table: AdditionalTableOrContentDto[];
}
