import { IsBoolean, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { GetOneDto } from './get-one.dto';

export class DeleteDto extends GetOneDto {
  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  delete? = false;
}
