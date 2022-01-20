import { Document, Model } from 'mongoose';
import { IEstate } from '../interfaces/IEstate';
declare global {
  namespace Express {
    export interface Request {
      currentUser: IEstate & Document;
    }
  }

  namespace Models {
    export type EstateModel = Model<IEstate & Document>;
  }
}
