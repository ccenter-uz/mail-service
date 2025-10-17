import { IsNumber, IsOptional, IsString } from 'class-validator';
import { IdDto, PermissionType } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { RolePermissionInterfaces } from '../interface/role-permission-group.interface';

export class RolePermissionUpdateDto
  extends IdDto
  implements RolePermissionInterfaces.Update
{
  @ApiProperty()
  @IsOptional()
  @IsString()
  permission?: PermissionType;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  roleId?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  path: string;
}
