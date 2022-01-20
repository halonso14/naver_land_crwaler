import { IEstate } from '../interfaces/IEstate';
import mongoose from 'mongoose';

const Estate = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    estateType: {
      type: String,
      required: true,
    },
    tradeType: {
      type: String,
      required: true,
    },
    building: {
      type: String,
      required: true,
    },
    floar: String,
    price: {
      type: String,
      required: true,
    },
    supplyArea: {
      type: Number,
      required: true,
    },
    leaseableArea: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model<IEstate & mongoose.Document>('Estate', Estate);
