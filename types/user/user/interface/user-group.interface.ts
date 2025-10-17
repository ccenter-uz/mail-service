import { ErrorStatusInLogin, PermissionType } from 'types/global';
import { RoleInterfaces } from 'types/user/role';

export namespace UserInterfaces {
  export interface LogInRequest {
    phoneNumber: string;
    password: string;
  }

  export interface LogInBusinessUserRequest {
    phoneNumber: string;
  }

  export interface createBusinessUserRequest {
    phoneNumber: string;
    email: string;
  }

  export interface LogInResponse {
    accessToken: string;
    permissions: any;
    role: string;
  }

  export interface LogInResponse {
    accessToken: string;
    permissions: any;
    role: string;
  }



  export interface ForgetPwdRequest {
    phoneNumber: string;
  }

  export interface GetMeResponse {
    id: number;
  }

  export interface VerifySmsCodeRequest {
    userId: number;
    smsCode: number;
    error?: ErrorStatusInLogin;
  }

  export interface ResendSmsCodeRequest {
    userId: number;
  }
  export interface CheckUserPermissionRequest {
    userId: number;
    roleId: number;
    method: PermissionType;
    path: string;
  }

  export interface ClientRequest {
    fullName: string;
    phoneNumber: string;
    password: string;
    roleId?: number;
    numericId?: string;
  }

  export interface Request {
    fullName: string;
    phoneNumber: string;
    password: string;
    roleId: number;
    numericId?: string;
  }

  export interface Update {
    id: number;
    fullName?: string;
    phoneNumber?: string;
    password?: string;
    roleId?: number;
    numericId?: string;
  }

  export interface UpdateMe {
    id: number;
    fullName?: string;
    phoneNumber?: string;
    password?: string;
  }

  export interface Response {
    id?: number;
    fullName?: string;
    phoneNumber?: string;
    roleId?: number;
    numericId?: string;
    status?: number;
    userId?: number;
    smsCode?: number;
    role?: RoleInterfaces.Response;
    error?: ErrorStatusInLogin;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
  }

  export interface ResponseCreateUser {
    error?: ErrorStatusInLogin;
    smsCode?: number;
    messsage?: string;
    age?: string;
    userId?: number;
  }

  export interface ResponseLoginBusinessUser {
    error?: ErrorStatusInLogin;
    smsCode?: number;
    messsage?: string;
    userId?: number;
  }

  export interface ResponseWithoutPagination {
    totalDocs: number;
    data: Response[];
  }

  export interface ResponseWithPagination extends ResponseWithoutPagination {
    totalPage: number;
  }
}
