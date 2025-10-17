import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { UserInterfaces } from '../interface/user-group.interface';
import { PermissionType } from 'types/global';

export class CheckUserPermissionDto
  implements UserInterfaces.CheckUserPermissionRequest
{
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  roleId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  method: PermissionType;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  path: string;
}
