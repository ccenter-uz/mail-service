import { LanguageRequestEnum, PermissionsEnum, Roles } from './constants';

export type JsonObject = { [Key in string]?: JsonValue };

export type JsonArray = Array<JsonValue>;

export type JsonValue =
  | string
  | number
  | boolean
  | JsonObject
  | JsonArray
  | null;

export interface IAnyObject {
  [key: string]: any;
}

export interface IObjectList<T> {
  [key: string]: T;
}

export type AppLanguages = {
  uz: string;
  cy: string;
  ru: string;
};

export type LanguageRequestType =
  | LanguageRequestEnum.UZ
  | LanguageRequestEnum.CY
  | LanguageRequestEnum.RU;

export interface ApiResponseType<T> {
  status: number;
  result: T | null;
  error: ApiErrorType | null;
}

export interface ApiErrorType {
  message: string;
  details?: any;
}

export type PermissionType =
  | PermissionsEnum.POST
  | PermissionsEnum.GET
  | PermissionsEnum.PUT
  | PermissionsEnum.DELETE
  | PermissionsEnum.RESTORE;

export enum StatusEnum {
  ACTIVE = 1,
  INACTIVE = 0,
  ALL = 2,
}

export type ErrorStatusInLogin = {
  code: number;
  error: string;
};

export type RolesType =
  | Roles.ADMIN
  | Roles.MODERATOR
  | Roles.OPERATOR
  | Roles.USER;

export type LogDataType = {
  user: {
    id: number;
    numericId: string;
    fullName: string;
    role: string;
  };
  organizationId?: number;
  path: string;
  method: string;
};

export enum OrderEnum {
  NAME='name',
  ORDER_NUMBER='orderNumber'
}