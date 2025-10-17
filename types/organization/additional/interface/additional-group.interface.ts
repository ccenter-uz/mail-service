import { AppLanguages } from 'types/global/types';
import { AdditionalTableOrContnetInterfaces } from './additional-table-group';
export namespace AdditionalInterfaces {
  export interface Request {
    staffNumber?: string;
    name: AppLanguages;
    warning: AppLanguages;
    mention: AppLanguages;
    content: AdditionalTableOrContnetInterfaces[];
    table: AdditionalTableOrContnetInterfaces[];
  }

  export interface Update {
    id: number;
    staffNumber?: string;
    name?: AppLanguages;
    warning?: AppLanguages;
    mention?: AppLanguages;
    content?: AdditionalTableOrContnetInterfaces[];
    table?: AdditionalTableOrContnetInterfaces[];
  }

  export interface Response {
    id: number;
    staffNumber?: string;
    name?: {} | string;
    warning?: {} | string;
    mention?: {} | string;
    content?: AdditionalTableOrContnetInterfaces[];
    table?: AdditionalTableOrContnetInterfaces[];
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
