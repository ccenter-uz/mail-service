import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class PhotoLinkVersionDto {
  @ApiProperty({ example: '+998901234567' })
  @IsString()
  @IsOptional()
  link: string;
}

export class PhotoDeleteVersionDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsOptional()
  id: number;
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

export type PhotoDeleteVersionType = {
  // Picture: {
  id?: number;
  link?: string;
  createdAt?: Date;
  updatedAt?: Date;
  OrganizationId?: number;
  // }[];
};
