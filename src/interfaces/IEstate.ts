export interface IEstate {
  _id: string;
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
  name: string;
  estateType: string;
  tradeType: string;
  building: string;
  floar: string;
  price: string;
  supplyArea: number;
  leaseableArea: number;
  date: Date;
}
