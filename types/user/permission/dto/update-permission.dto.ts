import { IsOptional, IsString } from 'class-validator';
import { IdDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { PermissionInterfaces } from '../interface/permission-group.interface';

export class PermissionUpdateDto extends IdDto implements PermissionInterfaces.Update {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;
}
