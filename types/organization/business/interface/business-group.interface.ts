import { DistrictInterfaces } from 'types/organization/district';
import { AppLanguages, JsonValue } from 'types/global/types';
import * as Multer from 'multer';
import { PaymentTypesDto } from '../dto/create-peyment-types.dto';
import { PhoneDto, PhoneType } from '../dto/create-phone.dto';
import { PictureType } from '../dto/file-upload-dto';
import { AreaInterfaces } from 'types/organization/area';
export namespace BusinessInterfaces {
  export interface Request {
    organizationId?: number;
    abonent?: string;
    legalName?: string;
    certificate?: string;
    siteDescription?: string;
    address?: string;
    bannerUrl?: string;
    logoUrl?: string;
    email?: string;
    paymentTypes?: {};
    workTime?: {};
    phones?: {};
    socials?: {};
    map?: {};
    photos?: Array<Multer.File>;
    // PhotoLink?:{};
    // phone: PhoneDto[];
  }

  export interface Update {
    id?: number;
    organizationId?: number;
    abonent?: string;
    legalName?: string;
    certificate?: string;
    siteDescription?: string;
    address?: string;
    bannerUrl?: string;
    logoUrl?: string;
    email?: string;
    paymentTypes?: {};
    workTime?: {};
    phones?: {};
    socials?: {};
    map?: {};
    photos?: Array<Multer.File>;
    // workTime?: JSON;
    // transport?: JSON;
  }

  export interface Response {
    id: number;
    organizationId?: number;
    abonent?: string;
    legalName?: string;
    certificate?: string;
    siteDescription?: string;
    address?: string;
    banner?: string;
    logo?: string;
    email?: string;
    paymentTypes?: JsonValue | string;
    photos?: Array<Multer.File>;
    Picture?: PictureType[];
    workTime?: JsonValue | string;
    phones?: JsonValue | string;
    socials?: JsonValue | string;
    map?: JsonValue | string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
  }

  export interface ResponseWithoutPagination {
    totalDocs: number;
    data: Response[];
  }

  export interface ResponseWithPagination extends ResponseWithoutPagination {
    totalPage: number;
  }
}
