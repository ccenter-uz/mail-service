export namespace SegmentInterfaces {
  export interface Request {
    name: string;
    orderNumber?: number;
  }

  export interface Update {
    id: number;
    name?: string;
    orderNumber?: number;
  }

  export interface Response {
    id: number;
    name?: string;
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
