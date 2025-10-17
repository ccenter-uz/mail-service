import {
  IsString,
  IsEnum,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { LanguageRequestEnum } from '../constants';
import { LanguageRequestType } from '../types';
import { ApiProperty } from '@nestjs/swagger';

export class LanguageRequestDto {
  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsOptional()
  @IsEnum(LanguageRequestEnum)
  langCode?: LanguageRequestType;

  @ApiProperty({ type: Boolean, required: false })
  @IsBoolean()
  @IsOptional()
  allLang?: boolean;
}
