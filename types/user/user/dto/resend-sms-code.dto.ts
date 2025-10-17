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
import { UserInterfaces } from '../interface/user-group.interface';
import { ErrorMessageForPassword, LogDataType } from 'types/global';

export class ResendSmsCodeDto implements UserInterfaces.ResendSmsCodeRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
