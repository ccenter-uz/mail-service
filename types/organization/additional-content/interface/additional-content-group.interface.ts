import { AppLanguages } from 'types/global/types';
export namespace AdditionalContentInterfaces {
  export interface Request {
    staffNumber?: string;
    name: AppLanguages;
    content: AppLanguages;
  }

  export interface Update {
    id: number;
    staffNumber?: string;
    name?: AppLanguages;
    content?: AppLanguages;
  }

  export interface Response {
    id: number;
    staffNumber?: string;
    name?: {} | string;
    content?: {} | string;
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
