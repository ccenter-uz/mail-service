import { AppLanguages } from 'types/global/types';
import { CityInterfaces } from 'types/organization/city';
import { DistrictInterfaces } from 'types/organization/district';
import { NearbyCategoryInterfaces } from 'types/organization/nearby-category';
import { RegionInterfaces } from 'types/organization/region';
export namespace NearbyInterfaces {
  export interface Request {
    nearbyCategoryId: number;
    regionId: number;
    cityId: number;
    districtId?: number;
    staffNumber?: string;
    name: AppLanguages;
    orderNumber?: number;
  }

  export interface Update {
    id: number;
    nearbyCategoryId?: number;
    regionId?: number;
    cityId?: number;
    districtId?: number;
    staffNumber?: string;
    name?: AppLanguages;
    orderNumber?: number;
  }

  export interface Response {
    id: number;
    nearbyCategoryId: number;
    regionId: number;
    cityId: number;
    districtId?: number;
    staffNumber?: string;
    editedStaffNumber?: string;
    name?: {} | string;
    region?: RegionInterfaces.Response;
    city?: CityInterfaces.Response;
    district?: DistrictInterfaces.Response;
    category?: NearbyCategoryInterfaces.Response;
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
