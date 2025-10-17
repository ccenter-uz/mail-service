import { ApiProperty } from "@nestjs/swagger"
import { Transform, Type } from "class-transformer"
import {
  IsArray,
  IsJSON,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator"
import { LanguageDto } from "types/global"
import { OrganizationVersionInterfaces } from "types/organization/organization-version"
import * as Multer from "multer"
import { PhoneVersionDto, PhoneType } from "./create-phone-version.dto"
import { Phone } from "../types/index"
import { PaymentTypesVersionDto } from "./create-peyment-types-version.dto"
import { PhotoLinkVersionDto } from "./file-upload-version.dto"

// export class OrganizationCreateDto
//   implements OrganizationVersionInterfaces.Request
// {
//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   mainOrganizationId: number;

//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   subCategoryId: number;

//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   productServiceCategoryId: number;

//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   productServiceSubCategoryId: number;

//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   regionId: number;

//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   cityId: number;

//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   districtId: number;

//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   villageId: number;

//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   avenueId: number;

//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   residentialId: number;

//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   areaId: number;

//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   streetId: number;

//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   laneId: number;

//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   impasseId: number;

//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   nearbyId: number;

//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   segmentId: number;

//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   sectionId: number;

//   @ApiProperty()
//   @IsNotEmpty()
//   @IsString()
//   name: string;

//   @ApiProperty()
//   @IsNotEmpty()
//   @IsString()
//   legalName: string;

//   @ApiProperty()
//   @IsNotEmpty()
//   @IsString()
//   secret: string;

//   @ApiProperty()
//   @IsNotEmpty()
//   @IsString()
//   kvartal: string;

//   @ApiProperty()
//   @IsNotEmpty()
//   @IsString()
//   address: string;

//   @ApiProperty()
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   home: number;

//   @ApiProperty()
//   @IsNotEmpty()
//   @IsNumber()
//   @Type(() => Number)
//   apartment: number;

//   @ApiProperty()
//   @IsNotEmpty()
//   @IsString()
//   inn: string;

//   @ApiProperty()
//   @IsNotEmpty()
//   @IsString()
//   bank_number: string;

//   @ApiProperty()
//   @IsNotEmpty()
//   @IsString()
//   account: string;

//   @ApiProperty()
//   @IsNotEmpty()
//   @IsString()
//   mail: string;

//   @ApiProperty()
//   @IsNotEmpty()
//   @IsString()
//   clientId: string;

//   @ApiProperty()
//   @IsNotEmpty()
//   @IsString()
//   maneger: string;

//   @ApiProperty()
//   @IsNotEmpty()
//   @IsString()
//   @Type(() => String)
//   index: string;

//   @ApiProperty()
//   @IsNotEmpty()
//   @IsString()
//   nearbyDescription: string;

//   @IsOptional()
//   @IsString()
//   role?: string;

//   @IsOptional()
//   @IsString()
//   staffNumber?: string;

//   @ApiProperty({
//     example: {
//       cash: true,
//       terminal: false,
//       transfer: true,
//       action: 'create',
//     },
//     type: PaymentTypesDto,
//   })
//   @IsNotEmpty()
//   @Transform(({ value }) =>
//     typeof value === 'string' ? JSON.parse(value) : value
//   )
//   @IsObject()
//   @Type(() => PaymentTypesDto)
//   paymentTypes: PaymentTypesDto;

//   @ApiProperty({
//     example: {
//       ru: 'swagger-old-ru',
//       uz: 'swagger-old-uz',
//       cy: 'swagger-old-cy',
//     },
//   })
//   @IsNotEmpty()
//   @IsObject()
//   @Transform(({ value }) =>
//     typeof value === 'string' ? JSON.parse(value) : value
//   )
//   workTime: Record<string, string>;

//   @ApiProperty({
//     type: 'object',
//     properties: {
//       ru: { type: 'string', example: 'swagger-new-ru' },
//       uz: { type: 'string', example: 'swagger-new-uz' },
//       cy: { type: 'string', example: 'swagger-new-cy' },
//     },
//   })
//   @IsNotEmpty()
//   @IsObject()
//   @Transform(({ value }) =>
//     typeof value === 'string' ? JSON.parse(value) : value
//   )
//   transport: Record<string, string>;
//   // transport: JSON;

//   @ApiProperty({
//     type: Object,
//     example: {
//       phones: [
//         { phone: '+998901234567', phoneId: 1, action: 'create' },
//         { phone: '+998907654321', phoneId: 2 },
//       ],
//     },
//   })
//   @IsNotEmpty()
//   // @IsArray()
//   phone: PhoneType | string;

//   @ApiProperty({
//     type: 'array',
//     items: { type: 'string', format: 'binary' },
//     // description: 'Array of images for work time',
//   })
//   photos: Array<Multer.File>;

//   @IsOptional()
//   @IsArray()
//   @ValidateNested()
//   @Type(() => PhotoLinkDto)
//   PhotoLink: PhotoLinkDto[];
// }
