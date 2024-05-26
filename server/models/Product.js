import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model('Product', ProductSchema);
