import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { IdDto, LogDataType } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { NearbyCategoryInterfaces } from '../interface/nearby-category-group.interface';
import { Type } from 'class-transformer';

export class NearbyCategoryUpdateDto
  extends IdDto
  implements NearbyCategoryInterfaces.Update
{
  @IsOptional()
  @IsString()
  staffNumber?: string;

  @ApiProperty({
    example: 'swager-name',
  })
  @IsOptional()
  @IsString()
  name: string;

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
