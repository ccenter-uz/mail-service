import {
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IdDto, LanguageDto, LogDataType } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { savedOrganizationInterfaces } from '../interface/saved-organization-group.interface';

export class savedOrganizationUpdateDto
  extends IdDto
  implements savedOrganizationInterfaces.Update
{
  @IsOptional()
  @IsNumber()
  id: number;

  // @ApiProperty({
  //   type: Number,
  //   required: true,
  // })
  // @IsOptional()
  // @IsNumber()
  // @Type(() => Number)
  // organizationId: number;

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
