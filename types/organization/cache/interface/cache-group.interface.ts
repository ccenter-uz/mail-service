import { DistrictInterfaces } from 'types/organization/district';
import { AppLanguages, JsonValue } from 'types/global/types';
import * as Multer from 'multer';
import { PictureType } from '../dto/file-upload-dto';
import { AreaInterfaces } from 'types/organization/area';
import { SiteDto } from 'types/organization/organization-version/dto/update-site.dto';
import { RateType } from '../types';
export namespace CacheInterfaces {
  export interface Request {
    id: number;
    data?: {};
    photos?: Array<Multer.File>;
    logo?: Multer.File;
    banner?: Multer.File;

  }

  export interface Update {
    id: number;
    data?: {};
    photos?: Array<Multer.File>;
    logo?: Multer.File;
    banner?: Multer.File;
  }

  export interface Response {
    id: number;
    data?: {};
    photos?: Array<Multer.File>;
    logo?: Multer.File;
    banner?: Multer.File;
    filesJson?: string;

  }

  export interface ResponseWithoutPagination {
    totalDocs: number;
    data: Response[];
  }

  export interface ResponseWithPagination extends ResponseWithoutPagination {
    totalPage: number;
  }
}
