export namespace PermissionInterfaces {
  export interface Request {
    name: string;
    description?: string;
  }

  export interface Update {
    id: number;
    name?: string;
    description?: string;
  }

  export interface Response {
    id: number;
    name: string;
    description: string;
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
