import { AppLanguages } from 'types/global/types';
import { CityInterfaces } from 'types/organization/city';
import { DistrictInterfaces } from 'types/organization/district';
import { RegionInterfaces } from 'types/organization/region';

export namespace AreaInterfaces {
  export interface Request {
    regionId: number;
    cityId: number;
    index: string;
    staffNumber?: string;
    districtId?: number;
    name: AppLanguages;
    oldName?: AppLanguages;
    newName?: AppLanguages;
    orderNumber?: number;
  }

  export interface Update {
    id: number;
    regionId?: number;
    cityId?: number;
    index?: string;
    staffNumber?: string;
    districtId?: number;
    name?: AppLanguages;
    oldName?: AppLanguages;
    newName?: AppLanguages;
    orderNumber?: number;
  }

  export interface Response {
    id: number;
    regionId: number;
    cityId: number;
    index: string;
    staffNumber?: string;
    editedStaffNumber?: string;
    districtId?: number;
    name?: {} | string;
    oldName?: {} | string;
    newName?: {} | string;
    region?: RegionInterfaces.Response;
    city?: CityInterfaces.Response;
    district?: DistrictInterfaces.Response;
    orderNumber?: number;
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
