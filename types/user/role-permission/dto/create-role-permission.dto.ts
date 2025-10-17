import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { RolePermissionInterfaces } from '../interface/role-permission-group.interface';
import { PermissionType } from 'types/global';

export class RolePermissionCreateDto
  implements RolePermissionInterfaces.Request
{
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  permission: PermissionType;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  roleId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  path: string;
}
