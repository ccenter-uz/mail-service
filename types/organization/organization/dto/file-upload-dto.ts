
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class PhotoLinkDto {
  @ApiProperty({ example: '+998901234567' })
  @IsString()
  @IsOptional()
  link: string;
    
}
export type PictureType = {
  // Picture: {
    id?: number;
    link?: string;
    createdAt?: Date;
    updatedAt?: Date;
    OrganizationId?: number;
  // }[];
};
