import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsNumber,IsObject } from 'class-validator';
import { NearbyCategoryInterfaces } from '../interface/nearby-category-group.interface';
import { Type } from 'class-transformer';
import { LogDataType } from 'types/global';

export class NearbyCategoryCreateDto
  implements NearbyCategoryInterfaces.Request
{
  @IsOptional()
  @IsString()
  staffNumber?: string;

  @ApiProperty({
    example: 'swager-name',
  })
  @IsNotEmpty()
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
