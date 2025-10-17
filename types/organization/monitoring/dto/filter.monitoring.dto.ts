import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ListQueryDto, PermissionsEnum, ModuleNames } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class MonitoringFilterDto extends ListQueryDto {
  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  organizationId?: number;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  referenceId?: number;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  roleId?: number;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  userId?: number;

  @ApiProperty({
    type: String,
    required: false,
  })
  @IsString()
  @IsOptional()
  role?: string;

  @ApiProperty({
    type: String,
    required: false,
    enum: PermissionsEnum, // Указываем enum
    example: PermissionsEnum.GET, // Пример значения
    description:
      'The HTTP method associated with the entity action. Possible values: POST, GET, PUT, DELETE, RESTORE.',
  })
  @IsEnum(PermissionsEnum)
  @IsString()
  @IsOptional()
  method?: string;

  @ApiProperty({
    type: String,
    required: false,
    enum: ModuleNames,
    example: ModuleNames.ORGANIZATION,
    description:
      'Specifies which module this field belongs to. Must be one of the following values: ' +
      Object.values(ModuleNames).join(', ') +
      '.',
  })
  @IsEnum(ModuleNames)
  @IsOptional()
  module?: string;

  @ApiProperty({
    type: Boolean,
    required: false,
  })
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true';
    }
    return Boolean(value);
  })
  @IsBoolean()
  @IsOptional()
  onlyOrgs?: boolean = false;
}
