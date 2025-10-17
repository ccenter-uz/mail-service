import { AppLanguages } from 'types/global/types';
import { CityInterfaces } from 'types/organization/city';
import { DistrictInterfaces } from 'types/organization/district';
import { RegionInterfaces } from 'types/organization/region';
export namespace savedOrganizationInterfaces {
  export interface Request {
    organizationId: number;
    userId: number;
    isSaved?: boolean;
  }

  export interface Update {
    id: number;
    userId: number;
    isSaved?: boolean;
  }

  export interface Response {
    id: number;
    organizationId: number;
    userId: number;
    isSaved?: boolean;
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
