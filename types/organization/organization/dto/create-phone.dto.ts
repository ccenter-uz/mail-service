import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class PhoneDto {
  @ApiProperty({ example: '+998901234567' })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsOptional()
  phoneTypeId?: number;

  @ApiProperty({
    example: true,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  isSecret?: boolean;
}

export type PhoneType = {
  phones: {
    id?: number;
    phone?: string;
    phoneTypeId?: number;
    isSecret?: boolean;
  }[];
};
  