import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { DeleteDto, GetOneDto, ListQueryDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class OrganizationRestoreDto extends GetOneDto {
  @IsString()
  @IsOptional()
  @Type(() => String)
  role?: string;
}
