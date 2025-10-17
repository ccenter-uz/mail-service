import {
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';
import { ErrorMessageForPassword, IdDto, LogDataType } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { UserInterfaces } from '../interface/user-group.interface';

export class UserForgetPwdDto extends IdDto implements UserInterfaces.Update {
  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(13)
  phoneNumber?: string;
}
