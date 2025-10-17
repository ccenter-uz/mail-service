import { AppLanguages } from 'types/global/types';
export namespace RegionInterfaces {
  export interface Request {
    name: AppLanguages;
  }

  export interface Update {
    id: number;
    name?: AppLanguages;
  }

  export interface Response {
    id: number;
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
