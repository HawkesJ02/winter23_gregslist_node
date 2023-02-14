import { Schema } from "mongoose";


export const HouseSchema = new Schema(
  {
    bedrooms: {type: Number, required: true, max: 100},
    year: {type: Number, required: true},
    price: {type: Number, required: true},
    imgUrl: {type: String, required: true, default: '//placehold.it/300x300'},
    description: {type: String, minLength: 3,}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)