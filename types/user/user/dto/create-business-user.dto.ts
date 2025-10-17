import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';
import { UserInterfaces } from '../interface/user-group.interface';
import { ErrorMessageForPassword } from 'types/global';

export class CreateBusinessUserDto
  implements UserInterfaces.createBusinessUserRequest
{
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
  logData?: any;
}
