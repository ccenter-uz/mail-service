import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class PaymentTypesVersionDto {

  @ApiProperty({ example: true })
  //   @IsString()
  @IsBoolean()
  @IsOptional()
  id?: number;

  @ApiProperty({ example: true })
  //   @IsString()
  @IsBoolean()
  @IsOptional()
  cash?: boolean;

  @ApiProperty({ example: true })
  //   @IsString()
  @IsBoolean()
  @IsOptional()
  terminal?: boolean;

  @ApiProperty({ example: true })
  //   @IsString()
  @IsBoolean()
  @IsOptional()
  transfer?: boolean;

  @ApiProperty({
    example: 'create',
    required: false,
  })
  @IsString()
  @IsOptional()
  action?: string;
}
