import {
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IdDto, LanguageDto, LogDataType } from 'types/global';
import { ProductServiceSubCategoryInterfaces } from '../interface/product-service-sub-category-group.interface';
import { ApiProperty } from '@nestjs/swagger';

export class ProductServiceSubCategoryUpdateDto
  extends IdDto
  implements ProductServiceSubCategoryInterfaces.Update
{
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  productServiceCategoryId?: number;

  @IsOptional()
  @IsString()
  staffNumber?: string;

  @ApiProperty({
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  name?: LanguageDto;

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
