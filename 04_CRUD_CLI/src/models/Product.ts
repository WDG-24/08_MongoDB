import { Document, Schema, model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  stock: number;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
  //   { timestamps: { createdAt: true, updatedAt: false } }
);

export default model<IProduct>('Product', productSchema);
