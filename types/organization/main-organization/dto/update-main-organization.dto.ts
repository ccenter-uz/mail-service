import { IsNumber, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { IdDto, LanguageDto, LogDataType } from 'types/global';
import { MainOrganizationInterfaces } from '../interface/main-organization-group.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
export class MainOrganizationUpdateDto
  extends IdDto
  implements MainOrganizationInterfaces.Update
{
  @IsOptional()
  @IsString()
  staffNumber?: string;

  @ApiProperty({
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  name: LanguageDto;

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
