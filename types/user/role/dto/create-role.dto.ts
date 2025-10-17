import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { RoleInterfaces } from '../interface/role-group.interface';

export class RoleCreateDto implements RoleInterfaces.Request {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}
