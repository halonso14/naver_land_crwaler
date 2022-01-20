import { Document, Model } from 'mongoose';
import { IEstate } from '../interfaces/IEstate';
import { Service, Inject } from 'typedi';
import { IEstateInputDTO } from '../interfaces/IEstate';

@Service()
export default class MongooseService {
  constructor(@Inject('estateModel') private estateModel: Model<IEstate & Document>) {}

  private convertIEstateInputDTOToIEstate(input: Array<IEstateInputDTO>): Array<IEstate> {
    return input.map(input => ({
      name: input.atclNm,
      estateType: input.rletTpNm,
      tradeType: input.tradTpNm,
      building: input.bildNm,
      floar: input.flrInfo,
      price: input.prcInfo,
      supplyArea: input.spc1,
      leaseableArea: input.spc2,
      date: new Date(),
    }));
  }

  public async InsertEstateData(input: Array<IEstateInputDTO>): Promise<{ errorCode: number; errorMessage?: string }> {
    const estateRecord = await this.estateModel.insertMany(this.convertIEstateInputDTOToIEstate(input));
    if (!estateRecord) {
      throw new Error('Estate not registered');
    }
    return { errorCode: 0 };
  }
}
