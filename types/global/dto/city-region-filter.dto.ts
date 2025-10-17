import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ListQueryDto, OrderEnum } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class CityRegionFilterDto extends ListQueryDto {
  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  cityId?: number;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  regionId?: number;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  districtId?: number;

  @ApiProperty({
    enum: OrderEnum,
    required: false,
    description: 'Enums: "name", "orderNumber" ',
  })
  @IsEnum(OrderEnum)
  @IsOptional()
  order?: OrderEnum;
}
