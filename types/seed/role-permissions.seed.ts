import { PermissionsEnum, Roles } from '../../types/global';

export const RolePermissionsData = [
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/user',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/user',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/role',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/role',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.PUT,
    path: '/user/update-me',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/user/update-me',
  },
  // {
  //   role: 1,
  //   permission: PermissionsEnum.PUT,
  //   path: '/user/update-me',
  // },
  // {
  //   role: 1,
  //   permission: PermissionsEnum.GET,
  //   path: '/organization/my-org',
  // },

  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/organization/object-adress',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/organization/object-adress',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/organization/my-org',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/organization/my-org',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/user/:id',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.PUT,
    path: '/user/:id',
  },
  // {
  //   role: 1,
  //   permission: PermissionsEnum.PUT,
  //   path: '/user/:id',
  // },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/user/get-me',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/user/get-me',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/user/get-me',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/user/get-by-staff-number/:id',
  },
  // {
  //   role: 1,
  //   permission: PermissionsEnum.GET,
  //   path: '/user/get-me',
  // },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/organizations/object-adress',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/ftp/create-organizations',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/organization/:id',
  },

  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/organization/version/:id',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.PUT,
    path: '/organization/:id/restore',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.PUT,
    path: '/organization/:id',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.PUT,
    path: '/organization/:id/restore',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.PUT,
    path: '/user/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/category/:id/restore',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/avenue',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/district',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/city',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/nearby',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/product-servise-sub-category',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/phone-type',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/passage',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/impasse',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/lane',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/street',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/area',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/residential-area',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/neighborhood',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/village',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/region',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/nearby-category',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/segment',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/main-organization',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/category',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/product-servise-category',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/district',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/city',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/region',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/nearby',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/product-servise-sub-category',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/sub-category',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/sub-category',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/residential-area',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/neighborhood',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/avenue',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/village',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/phone-type',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/passage',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/nearby-category',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/impasse',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/street',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/lane',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/area',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/category',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/main-organization',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/segment',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/product-servise-category',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/phone-type',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/organization/check/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/organization/unconfirm',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/passage',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/impasse',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/lane',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/street',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/area',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/residential-area',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/neighborhood',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/avenue',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/village',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/nearby-category',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/segment',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/main-organization',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/category',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/product-servise-category',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/organization/confirm/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/section/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/section',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/section/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/section',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/section/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/section/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/segment/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/segment',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/segment/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/segment/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/segment',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/segment/:id',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/city',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/city',
  },
  // {
  //   role: 1,
  //   permission: PermissionsEnum.GET,
  //   path: '/city',
  // },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/region',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/region',
  },
  // {
  //   role: 1,
  //   permission: PermissionsEnum.GET,
  //   path: '/region',
  // },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/region',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/city',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/city',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/region',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/village/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/village/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/village/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/village',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/village/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/village',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/district/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/district/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/district/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/district',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/district/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/district',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/passage/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/passage/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/passage/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/passage',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/passage/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/passage',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/avenue/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/avenue/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/avenue/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/avenue',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/avenue/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/avenue',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/impasse/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/impasse/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/impasse/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/impasse',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/impasse/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/impasse',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/residential-area/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/residential-area/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/residential-area/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/residential-area',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/residential-area/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/residential-area',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/neighborhood/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/neighborhood/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/neighborhood/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/neighborhood',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/neighborhood/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/neighborhood',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/lane/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/lane/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/lane/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/lane',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/lane/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/lane',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/area/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/area/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/area/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/area',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/area/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/area',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/street/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/street/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/street/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/street',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/street/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/street',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/nearby/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/nearby/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/nearby/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/nearby',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/nearby/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/nearby',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/nearby-category/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/nearby-category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/nearby-category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/nearby-category',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/nearby-category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/nearby-category',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/phone-type/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/phone-type/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/phone-type/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/phone-type',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/phone-type/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/phone-type',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/main-organization/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/main-organization/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/main-organization/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/main-organization',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/main-organization/:id',
  },

  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/organization/version/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/main-organization',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/sub-category/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/sub-category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/sub-category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/sub-category',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/sub-category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/sub-category',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/category/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/category',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/category',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/product-servise-sub-category/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/product-servise-sub-category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/product-servise-sub-category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/product-servise-sub-category',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/product-servise-sub-category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/product-servise-sub-category',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/product-servise-category/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/product-servise-category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/product-servise-category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/product-servise-category',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/product-servise-category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/product-servise-category',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/additional/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/additional/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/additional/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/additional',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/additional/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/additional',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/monitoring/transactions',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/monitoring/organization',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/monitoring/user',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/organization/unconfirmed/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/organization/unconfirmed',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/organization',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/organization/:id/restore',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/organization/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/organization/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/organization/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/organization',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/statistics',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/dashboard',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/additional',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/monitoring/transactions',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/monitoring/organization',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/monitoring/user',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.POST,
    path: '/organization',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.PUT,
    path: '/organization/:id',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/organization/:id',
  },
  {
    role: Roles.OPERATOR,
    permission: 'UPDATE',
    path: '/organization/:id',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/organization',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/organization/:id',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/statistics',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/dashboard',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/role/:id',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/user/:id',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.PUT,
    path: '/role/:id/restore',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.DELETE,
    path: '/role/:id',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.PUT,
    path: '/role/:id',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.POST,
    path: '/role',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/role',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.PUT,
    path: '/user/:id/restore',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.DELETE,
    path: '/user/:id',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.PUT,
    path: '/user/:id',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.POST,
    path: '/user',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/user',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/additional/all',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/monitoring/transaction',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/monitoring/organization',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/monitoring/user',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/organization',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/organization/:id',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/statistics/all',
  },
  {
    role: Roles.ADMIN,
    permission: PermissionsEnum.GET,
    path: '/dashboard/all',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/additional-category',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/additional-category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/additional-category',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/additional-category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/additional-category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/additional-category/:id/restore',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/additional-category',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/additional-category/:id',
  },
  {
    role: Roles.USER,
    permission: PermissionsEnum.GET,
    path: '/additional-category',
  },
  {
    role: Roles.USER,
    permission: PermissionsEnum.GET,
    path: '/additional-category/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/additional',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/additional/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/additional',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/additional/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/additional/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/additional/:id/restore',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/additional',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/additional/:id',
  },
  {
    role: Roles.USER,
    permission: PermissionsEnum.GET,
    path: '/additional',
  },
  {
    role: Roles.USER,
    permission: PermissionsEnum.GET,
    path: '/additional/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/neighborhood',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.GET,
    path: '/neighborhood/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.POST,
    path: '/neighborhood',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/neighborhood/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.DELETE,
    path: '/neighborhood/:id',
  },
  {
    role: Roles.MODERATOR,
    permission: PermissionsEnum.PUT,
    path: '/neighborhood/:id/restore',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/neighborhood',
  },
  {
    role: Roles.OPERATOR,
    permission: PermissionsEnum.GET,
    path: '/neighborhood/:id',
  },
  {
    role: Roles.USER,
    permission: PermissionsEnum.GET,
    path: '/neighborhood',
  },
  {
    role: Roles.USER,
    permission: PermissionsEnum.GET,
    path: '/neighborhood/:id',
  },

  {
    role: Roles.USER,
    permission: PermissionsEnum.GET,
    path: '/saved-organization/:id',
  },
  {
    role: Roles.USER,
    permission: PermissionsEnum.GET,
    path: '/saved-organization',
  },
  {
    role: Roles.USER,
    permission: PermissionsEnum.POST,
    path: '/saved-organization/:organizationId',
  },
  {
    role: Roles.USER,
    permission: PermissionsEnum.DELETE,
    path: '/saved-organization/:organizationId',
  },



  {
    role: Roles.BUSINESS,
    permission: PermissionsEnum.GET,
    path: '/user/get-me',
  },
  {
    role: Roles.BUSINESS,
    permission: PermissionsEnum.PUT,
    path: '/user/update-me/site',
  },
  {
    role: Roles.BUSINESS,
    permission: PermissionsEnum.DELETE,
    path: '/user/delete-me',
  },
  {
    role: Roles.BUSINESS,
    permission: PermissionsEnum.PUT,
    path: '/organization/site/update',
  },

  {
    role: Roles.BUSINESS,
    permission: PermissionsEnum.GET,
    path: '/organization/site/one',
  },

  {
    role: Roles.BUSINESS,
    permission: PermissionsEnum.GET,
    path: '/organization/site/version',
  },

  {
    role: Roles.BUSINESS,
    permission: PermissionsEnum.GET,
    path: '/monitoring/organization',
  },

  {
    role: Roles.BUSINESS,
    permission: PermissionsEnum.GET,
    path: '/cache',
  },

  {
    role: Roles.BUSINESS,
    permission: PermissionsEnum.POST,
    path: '/cache',
  },

  {
    role: Roles.BUSINESS,
    permission: PermissionsEnum.GET,
    path: '/cache',
  },
  {
    role: Roles.BUSINESS,
    permission: PermissionsEnum.DELETE,
    path: '/cache',
  },
];
