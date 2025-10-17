import { OrganizationInterfaces } from 'types/organization/organization';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';

import { ErrorMessageForPassword, LogDataType } from 'types/global';

export class OrganizationBusinessCreateDto
  implements OrganizationInterfaces.RequestBusiness
{
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  certificate: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  inn: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(13)
  phoneNumber: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
