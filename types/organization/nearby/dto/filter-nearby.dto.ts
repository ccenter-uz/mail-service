import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ListQueryDto, OrderEnum } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { CityRegionFilterDto } from 'types/global/dto/city-region-filter.dto';

export class NearbyFilterDto extends CityRegionFilterDto {
  @ApiProperty({
    type: Number,
    required: false,
  })
  @Transform(({ value }) => {
    if (value == 'undefined') {
      return undefined;
    }
    return value;
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  nearbyCategoryId?: number;

  @ApiProperty({
    enum: OrderEnum,
    required: false,
    description: 'Enums: "name", "orderNumber" ',
  })
  @IsEnum(OrderEnum)
  @IsOptional()
  order?: OrderEnum;
}
