import { IsOptional, IsString } from 'class-validator';
import { IdDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { RoleInterfaces } from '../interface/role-group.interface';

export class RoleUpdateDto extends IdDto implements RoleInterfaces.Update {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;
}
