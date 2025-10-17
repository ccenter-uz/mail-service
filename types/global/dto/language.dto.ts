import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class LanguageDto {
  @IsString()
  @IsOptional()
  uz: string;

  @IsString()
  @IsOptional()
  ru: string;

  @IsString()
  @IsOptional()
  cy: string;
}
