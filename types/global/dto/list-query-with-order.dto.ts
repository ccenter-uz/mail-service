import { IsEnum, IsOptional } from 'class-validator';
import { OrderEnum } from '../types';
import { ApiProperty } from '@nestjs/swagger';
import { ListQueryDto } from './list-query.dto';

export class ListQueryWithOrderDto extends ListQueryDto {
  @ApiProperty({
    enum: OrderEnum,
    required: false,
    description: 'Enums: "name", "orderNumber" ',
  })
  @IsEnum(OrderEnum)
  @IsOptional()
  order?: OrderEnum;
}
