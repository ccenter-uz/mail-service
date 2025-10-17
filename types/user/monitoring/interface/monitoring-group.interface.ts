export namespace MonitoringInterfaces {
  export interface UserResponse {
    id: number;
    userId: number;
    userNumericId: string;
    userFullName: string;
    userRole: string;
    method: string;
    path: string;
    request: string;
    response: string;
    status: number;
    duration: number;
    createdAt: Date;
  }

  export interface OrganizationResponse extends UserResponse {
    organizationId: number;
    organizationName: string;
  }

  export interface ResponseWithoutPagination {
    totalDocs: number;
    data: UserResponse[] | OrganizationResponse[];
  }

  export interface ResponseWithPagination extends ResponseWithoutPagination {
    totalPage: number;
  }
}
