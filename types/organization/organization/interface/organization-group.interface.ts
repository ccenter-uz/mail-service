import { DistrictInterfaces } from 'types/organization/district';
import { AppLanguages, JsonValue } from 'types/global/types';
import * as Multer from 'multer';
import { PaymentTypesDto } from '../dto/create-peyment-types.dto';
import { PhoneDto, PhoneType } from '../dto/create-phone.dto';
import { PictureType } from '../dto/file-upload-dto';
import {
  ProductServiceType,
  ProductServiceTypeResponce,
} from '../dto/create-product-service.dto';
import { AreaInterfaces } from 'types/organization/area';
import { SiteDto } from 'types/organization/organization-version/dto/update-site.dto';
import { RateType } from '../types';
export namespace OrganizationInterfaces {
  export interface RequestBusiness {
    certificate: string;
    inn: string;
    address: string;
    phoneNumber: string;
  }
  export interface Request {
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
    paymentTypes?: PaymentTypesDto;
    workTime?: {};
    transport?: {};
    photos?: Array<Multer.File>;
    // phone: PhoneDto[];
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
    inn?: string;
    bankNumber?: string;
    account?: string;
    mail?: string;
    clientId?: string;
    description?: string;
    manager?: string;
    index?: string;
    role?: string;
    nearbyDescription?: string;
    paymentTypes?: PaymentTypesDto;
    phone?: PhoneDto[];
    workTime?: JSON;
    transport?: JSON;
    photos?: Array<Multer.File>;
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
    index?: string;
    nearbyDescription?: string;
    staffNumber?: string;
    editedStaffNumber?: string;
    status?: number;
    deleteReason?: string;
    createdBy?: string;
    paymentTypes?: PaymentTypesDto;
    phone?: PhoneType[];
    site?: SiteDto;
    socials: JsonValue | string;
    rate?: RateType;
    // ProductServices?: ProductServiceTypeResponce[];
    // Nearbees?: NearbeesType[];
    Picture?: PictureType[];
    workTime?: JsonValue | string;
    transport?: JsonValue | string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;

    area?: AreaInterfaces.Response;
  }

  export interface ResponseBusiness {
    smsCode?: number;
    messsage?: string;
    userId?: number;
  }

  export interface ResponseWithoutPagination {
    totalDocs: number;
    data: Response[];
  }

  export interface ResponseWithPagination extends ResponseWithoutPagination {
    totalPage: number;
  }
}
