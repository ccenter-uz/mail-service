import { PermissionType } from 'types/global';

export namespace RolePermissionInterfaces {
  export interface Request {
    roleId: number;
    permission: PermissionType;
    path: string;
  }

  export interface Update {
    id: number;
    roleId?: number;
    permission?: PermissionType;
    path?: string;
  }

  export interface Response {
    id: number;
    roleId: number;
    permission: string;
    path: string;
    status: number;
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
