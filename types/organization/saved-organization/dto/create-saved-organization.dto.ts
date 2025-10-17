import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { LanguageDto, LogDataType } from 'types/global';
import { savedOrganizationInterfaces } from '../interface/saved-organization-group.interface';

export class SavedOrganizationCreateDto
  implements savedOrganizationInterfaces.Request
{
  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  organizationId: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  userId: number;

  @ApiProperty({
    type: Boolean,
    required: false,
  })
  @IsOptional()
  @Type(() => Boolean)
  isSaved?: boolean;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
