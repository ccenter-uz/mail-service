import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ListQueryDto, LogDataType } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class AdditionalFilterDto extends ListQueryDto {
  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  additionalCategoryId?: number;

  @IsOptional()
  @IsString()
  role?: string;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
