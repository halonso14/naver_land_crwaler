export interface IEstate {
  name: string; // atclNm
  estateType: string; // rletTpNm
  tradeType: string; // tradTpNm
  building: string; // bildNm
  floar: string; // flrInfo
  price: string; // prcInfo
  supplyArea: number; // spc1
  leaseableArea: number; // spc2
  date: Date;
}

export interface IEstateInputDTO {
  atclNm: string;
  rletTpNm: string;
  tradTpNm: string;
  bildNm: string;
  flrInfo: string;
  prcInfo: string;
  spc1: number;
  spc2: number;
}
