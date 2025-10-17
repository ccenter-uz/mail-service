import { AppLanguages } from 'types/global/types';
export namespace AdditionalCategoryInterfaces {
  export interface Request {
    staffNumber?: string;
    name: AppLanguages;
  }

  export interface Update {
    id: number;
    staffNumber?: string;
    name?: AppLanguages;
  }

  export interface Response {
    id: number;
    staffNumber?: string;
    editedStaffNumber?: string;
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
