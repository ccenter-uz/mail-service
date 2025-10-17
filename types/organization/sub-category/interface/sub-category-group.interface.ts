import { AppLanguages } from 'types/global/types';
import { CategoryInterfaces } from 'types/organization/category';
export namespace SubCategoryInterfaces {
  export interface Request {
    categoryId: number;
    staffNumber?: string;
    name: AppLanguages;
    orderNumber?: number;
  }

  export interface Update {
    id: number;
    categoryId?: number;
    staffNumber?: string;
    name?: AppLanguages;
    orderNumber?: number;
  }

  export interface Response {
    id: number;
    categoryId: number;
    staffNumber?: string;
    editedStaffNumber?: string;
    name?: {} | string;
    category: CategoryInterfaces.Response;
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
