import { AppLanguages, JsonValue } from 'types/global/types';
import * as Multer from 'multer';
import { PaymentTypesVersionDto } from '../dto/create-peyment-types-version.dto';
import { PhoneVersionDto, PhoneType } from '../dto/create-phone-version.dto';
import { PictureType } from '../dto/file-upload-version.dto';
import {
  NearbeesType,
  NearbeesTypeResponse,
} from 'types/organization/organization/dto/create-nearbees.dto';
import { ProductServiceType } from 'types/organization/organization/dto/create-product-service.dto';
import { socialType } from 'types/organization/organization/dto/create-social.dto';
import { SiteDto } from '../dto/update-site.dto';
import { RateType } from '../types';
export namespace OrganizationVersionInterfaces {
  export interface Request {
    id: number;
    mainOrganizationId?: number;
    subCategoryId?: number;
    regionId?: number;
    cityId?: number;
    districtId?: number;
    villageId?: number;
    avenueId?: number;
    residentialId?: number;
    neighborhoodId?: number;
    areaId?: number;
    streetId?: number;
    laneId?: number;
    impasseId?: number;
    segmentId?: number;
    passageId?: number;
    name?: string;
    legalName?: string;
    secret?: string;
    kvartal?: string;
    address?: string;
    home?: string;
    apartment?: string;
    description?: string;
    inn?: string;
    socials?: JsonValue | string;
    logo?: string;
    certificate?: string;
    bankNumber?: string;
    account?: string;
    mail?: string;
    manager?: string;
    index?: string;
    staffNumber?: string;
    status: number;
    createdBy: string;
    nearbyDescription?: string;
    paymentTypes?: PaymentTypesVersionDto;
    productService?: ProductServiceType[];
    nearbees?: NearbeesTypeResponse[];
    phone?: PhoneType[];
    Picture?: PictureType[];
    workTime?: JsonValue | string;
    transport?: JsonValue | string;
    // ProductServices?: ProductServiceTypeR[];
    // Nearbees?: NearbeesType[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
  }

  export interface Update {
    id?: number;
    mainOrganizationId?: number;
    subCategoryId?: number;
    regionId?: number;
    cityId?: number;
    districtId?: number;
    villageId?: number;
    avenueId?: number;
    residentialId?: number;
    neighborhoodId?: number;
    areaId?: number;
    streetId?: number;
    laneId?: number;
    impasseId?: number;
    segmentId?: number;
    passageId?: number;
    name?: string;
    legalName?: string;
    secret?: string;
    kvartal?: string;
    address?: string;
    home?: string;
    apartment?: string;
    description?: string;
    inn?: string;
    bankNumber?: string;
    account?: string;
    mail?: string;
    manager?: string;
    index?: string;
    paymentTypes?: PaymentTypesVersionDto;
    workTime?: {};
    transport?: {};
    photos?: Array<Multer.File>;
    deletePicture?: number[];
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
  }

  export interface Response {
    id: number;
    mainOrganizationId?: number;
    subCategoryId?: number;
    regionId?: number;
    cityId?: number;
    districtId?: number;
    villageId?: number;
    avenueId?: number;
    residentialId?: number;
    neighborhoodId?: number;
    areaId?: number;
    streetId?: number;
    laneId?: number;
    impasseId?: number;
    segmentId?: number;
    passageId?: number;
    name?: string;
    legalName?: string;
    secret?: string;
    kvartal?: string;
    address?: string;
    home?: string;
    apartment?: string;
    description?: string;
    inn?: string;
    bankNumber?: string;
    account?: string;
    mail?: string;
    email?: string;
    clientId?: string;
    manager?: string;
    editedStaffNumber?: string;
    index?: string;
    site?: SiteDto;
    rate?: RateType;
    status?: number;
    paymentTypes?: PaymentTypesVersionDto;
    phone?: PhoneType[];
    socials?: JsonValue | string;
    Picture?: PictureType[];
    workTime?: JsonValue | string;
    transport?: JsonValue | string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
  }

  export interface ResponseWithoutPagination {
    totalDocs: number;
    data: Response[];
  }

  export interface ResponseWithPagination extends ResponseWithoutPagination {
    totalPage: number;
  }
}

// change
