import { AppLanguages } from 'types/global/types';
import { CityInterfaces } from 'types/organization/city';
import { DistrictInterfaces } from 'types/organization/district';
import { RegionInterfaces } from 'types/organization/region';
export namespace CategoryInterfaces {
  export interface Request {
    staffNumber?: string;
    name: AppLanguages;
    orderNumber?: number;
  }

  export interface Update {
    id: number;
    staffNumber?: string;
    name?: AppLanguages;
    orderNumber?: number;
  }

  export interface Response {
    id: number;
    staffNumber?: string;
    editedStaffNumber?: string;
    name?: {} | string;
    city?: CityInterfaces.Response;
    region?: RegionInterfaces.Response;
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
