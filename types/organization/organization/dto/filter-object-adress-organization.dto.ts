import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import {
  ListQueryDto,
  PermissionsEnum,
  ModuleNames,
  ModuleNamesObjectAdress,
} from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class ObjectAdressFilterDto extends ListQueryDto {
  @ApiProperty({
    type: String,
    required: false,
    enum: ModuleNamesObjectAdress,
    example: ModuleNamesObjectAdress.AREA,
    description:
      'Specifies which module this field belongs to. Must be one of the following values: ' +
      Object.values(ModuleNamesObjectAdress).join(', ') +
      '.',
  })
  @IsEnum(ModuleNamesObjectAdress)
  @IsOptional()
  module?: string = 'all';
}
