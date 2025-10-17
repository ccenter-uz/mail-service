import { IsInt, IsNumber, IsObject, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { LanguageRequestDto } from './language-request.dto';
import { LogDataType } from '../types';

export class GetOneDto extends LanguageRequestDto {
  @IsInt()
  @Min(1)
  @Type(() => Number)
  id = 1;

  @IsOptional()
  filter?: any;

  @IsOptional()
  @IsString()
  role?: string;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
