import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { DeleteDto, ListQueryDto } from 'types/global';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CategoryDeleteDto extends DeleteDto {
  @ApiProperty({
    type: String,
    required: false,
  })
  @IsString()
  @IsOptional()
  @Type(() => String)
  deleteReason?: string;
}

export class CategoryDeleteQueryDto {
  @ApiProperty({ type: Boolean, required: true })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;
    return undefined;
  })
  delete?: boolean;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  deleteReason?: string;
}
