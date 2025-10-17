import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { DeleteDto, ListQueryDto } from 'types/global';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class savedOrganizationDeleteDto extends DeleteDto {
  // @ApiProperty({
  //   type: String,
  //   required: false,
  // })
  // @IsString()
  // @IsOptional()
  // @Type(() => String)
  // deleteReason?: string;

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
  userId?: number;
}

// export class savedOrganizationDeleteQueryDto {
//   @ApiProperty({ type: Boolean, required: true })
//   @IsOptional()
//   @IsBoolean()
//   @Transform(({ value }) => {
//     if (value === 'true' || value === true) return true;
//     if (value === 'false' || value === false) return false;
//     return undefined;
//   })
//   delete?: boolean;

//   @ApiPropertyOptional({ type: String })
//   @IsOptional()
//   @IsString()
//   deleteReason?: string;
// }
