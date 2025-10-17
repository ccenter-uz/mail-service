import { Delete } from '@nestjs/common';
export enum AppLanguagesList {
  RU = 'ru',
  UZ = 'uz',
  CY = 'cy',
}

export enum DefaultStatus {
  INACTIVE = 0,
  ACTIVE = 1,
}

export enum LanguageRequestEnum {
  UZ = 'uz',
  CY = 'cy',
  RU = 'ru',
}

export const ErrorMessageForPassword =
  'Password too weak. Must include uppercase, lowercase, number, and special character.';

export enum Roles {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  OPERATOR = 'operator',
  USER = 'user',
  BUSINESS = 'business',
}

export enum PermissionsEnum {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
  RESTORE = 'PUT',
  ALL = 'ALL',
}

export const UserPermissions = {
  admin: {
    dashboard: {
      main: {
        [ACCESSESS.GET]: true,
      },
    },
    statistics: {
      main: {
        [ACCESSESS.GET]: true,
      },
    },
    orgs: {
      all: {
        [ACCESSESS.GET]: true,
      },
    },
    monitoring: {
      user: {
        [ACCESSESS.GET]: true,
      },
      organization: {
        [ACCESSESS.GET]: true,
      },
      transactions: {
        [ACCESSESS.GET]: true,
      },
    },
    additional: {
      main: {
        [ACCESSESS.GET]: true,
      },
    },
    manage: {
      users: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
      roles: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
    },
  },
  moderator: {
    dashboard: {
      main: {
        [ACCESSESS.GET]: true,
      },
    },
    statistics: {
      main: {
        [ACCESSESS.GET]: true,
      },
    },
    orgs: {
      all: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
      },
      add: {
        [ACCESSESS.CREATE]: true,
      },
      edit: {
        [ACCESSESS.UPDATE]: true,
      },
      unconfirmed: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.UPDATE]: true,
      },
    },
    monitoring: {
      user: {
        [ACCESSESS.GET]: true,
      },
      organization: {
        [ACCESSESS.GET]: true,
      },
      transactions: {
        [ACCESSESS.GET]: true,
      },
    },
    additional: {
      main: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
      },
    },
    manage: {
      'product-services': {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
      category: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
      'main-org': {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
      'phone-types': {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
      'nearby-category': {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
      nearby: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
      street: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
      area: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
      lane: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
      'residential-area': {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
      neighborhood: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
      impasse: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
      avenue: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
      passage: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
      district: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
      village: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
      segment: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.CREATE]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
        [ACCESSESS.RESTORE]: true,
      },
    },
  },
  operator: {
    dashboard: {
      main: {
        [ACCESSESS.GET]: true,
      },
    },
    statistics: {
      main: {
        [ACCESSESS.GET]: true,
      },
    },
    orgs: {
      all: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
      },
      add: {
        [ACCESSESS.CREATE]: true,
      },
      edit: {
        [ACCESSESS.UPDATE]: true,
      },
      waitings: {
        [ACCESSESS.GET]: true,
        [ACCESSESS.UPDATE]: true,
        [ACCESSESS.DELETE]: true,
      },
    },
    monitoring: {
      user: {
        [ACCESSESS.GET]: true,
      },
      organization: {
        [ACCESSESS.GET]: true,
      },
      transactions: {
        [ACCESSESS.GET]: true,
      },
    },
    additional: {
      main: {
        [ACCESSESS.GET]: true,
      },
    },
  },
  client: {},
};

export const enum ACCESSESS {
  GET = 'get',
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  RESTORE = 'restore',
}

export enum CreatedByEnum {
  All = 'all',
  Billing = 'billing',
  Client = 'client',
  Moderator = 'moderator',
  Operator = 'operator',
  Business = 'business',
  User = 'user',
}

export enum OrganizationStatusEnum {
  Deleted = -1,
  Check = 0,
  Accepted = 1,
  Rejected = 2,
}

export enum OrganizationMethodEnum {
  Delete = 'delete',
  Create = 'create',
  Update = 'update',
  Restore = 'restore',
}

export const enum OrganizationVersionActionsEnum {
  GET = 'get',
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  // RESTORE = 'restore',
}

export enum ModuleNames {
  ADDITIONAL = 'additional',
  ADDITIONAL_CATEGORY = 'additional-category',
  CATEGORY = 'category',
  CITY = 'city',
  DISTRICT = 'district',
  MAIN_ORGANIZATION = 'main-organization',
  NEARBY = 'nearby',
  NEARBY_CATEGORY = 'nearby-category',
  ORGANIZATION = 'organization',
  ORGANIZATION_VERSION = 'organization-version',
  PHONE_TYPE = 'phone-type',
  PRODUCT_SERVICE_SUB_CATEGORY = 'product-service-sub-category',
  PRODUCT_SERVICE_CATEGORY = 'product-servise-category',
  REGION = 'region',
  SEGMENT = 'segment',
  SUB_CATEGORY = 'sub-category',
  VILLAGE = 'village',
  STREET = 'street',
  AREA = 'area',
  LANE = 'lane',
  RESIDENTIAL_AREA = 'residential-area',
  NEIGHBORHOOD = 'neighborhood',
  IMPASSE = 'impasse',
  AVENUE = 'avenue',
  PASSAGE = 'passage',
}

export enum ModuleNamesObjectAdress {
  ALL = 'all',
  STREET = 'street',
  AREA = 'area',
  LANE = 'lane',
  RESIDENTIAL_AREA = 'residential',
  NEIGHBORHOOD = 'neighborhood',
  IMPASSE = 'impasse',
  AVENUE = 'avenue',
  PASSAGE = 'passage',
}

export const ModuleNamesObjectAdressArray = [
  'street',
  'area',
  'lane',
  'residential',
  'neighborhood',
  'impasse',
  'avenue',
  'passage',
];
