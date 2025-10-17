import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ListQueryDto, OrderEnum } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class ProductServiceSubCategoryFilterDto extends ListQueryDto {
  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  categoryId?: number;

  @ApiProperty({
    enum: OrderEnum,
    required: false,
    description: 'Enums: "name", "orderNumber" ',
  })
  @IsEnum(OrderEnum)
  @IsOptional()
  order?: OrderEnum;
}
