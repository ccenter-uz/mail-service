import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class PhoneVersionDto {

  @ApiProperty({ example:  1})
  @IsNumber()
  @IsOptional()
  id: number;

  @ApiProperty({ example: '+998901234567' })
  @IsString()
  @IsOptional()
  phone: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsOptional()
  phoneId: number;

  @ApiProperty({
    example: 'create',
    required: false,
  })
  @IsString()
  @IsOptional()
  action?: string;
}

export type PhoneType = {
  phones: {
    id?: number;
    phone?: string;
    phoneId?: number;
    action?: string;
  }[];
};
