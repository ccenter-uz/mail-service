import { AppLanguages } from 'types/global/types';
export namespace CityInterfaces {
  export interface Request {
    regionId: number;
    name: AppLanguages;
  }

  export interface Update {
    id: number;
    regionId?: number;
    name?: AppLanguages;
  }

  export interface Response {
    id: number;
    regionId: number;
    name?: {} | string;
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
