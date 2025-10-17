import { AppLanguages } from 'types/global/types';
import { CityInterfaces } from 'types/organization/city';
import { RegionInterfaces } from 'types/organization/region';
export namespace DistrictInterfaces {
  export interface Request {
    regionId: number;
    cityId: number;
    staffNumber?: string;
    index: string;
    name: AppLanguages;
    oldName?: AppLanguages;
    newName?: AppLanguages;
    orderNumber?: number;
  }

  export interface Update {
    id: number;
    regionId?: number;
    cityId?: number;
    staffNumber?: string;
    index?: string;
    name?: AppLanguages;
    oldName?: AppLanguages;
    newName?: AppLanguages;
    orderNumber?: number;
  }

  export interface Response {
    id: number;
    regionId: number;
    cityId: number;
    staffNumber?: string;
    editedStaffNumber?: string,
    index: string;
    name?: {} | string;
    oldName?: {} | string;
    newName?: {} | string;
    region?: RegionInterfaces.Response;
    city?: CityInterfaces.Response;
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
