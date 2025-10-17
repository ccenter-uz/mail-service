import { ApiProperty } from '@nestjs/swagger';

export class ExcelData {
  @ApiProperty({ description: 'Unique client ID' })
  CLNT_ID: string;

  @ApiProperty({ description: 'Start date in ISO string format' })
  START: string;

  @ApiProperty({
    description: 'Stop date in ISO string format or null',
    nullable: true,
  })
  STOP: string | null;

  @ApiProperty({ description: 'Client name (optional)', required: false })
  NAME?: string;

  @ApiProperty({ description: 'Phone details, should be an object or array' })
  PHONE: any; // Желательно уточнить тип данных, например, PhoneDto[]

  @ApiProperty({ description: 'Segment identifier' })
  SEGMENT: number;

  @ApiProperty({ description: 'Account information' })
  ACCOUNT: string;

  @ApiProperty({ description: 'Client INN' })
  INN: string;

  @ApiProperty({ description: 'Bank details' })
  BANK: string;

  @ApiProperty({ description: 'Client address' })
  ADDRESS: string;

  @ApiProperty({ description: 'Email address' })
  MAIL: string;
}

export class scriptResponse {
  @ApiProperty({ description: 'New organizations data', type: [ExcelData] })
  new: ExcelData[] | [];

  @ApiProperty({
    description: 'Deactivated organizations data',
    type: [ExcelData],
  })
  deactive: ExcelData[] | [];
}
