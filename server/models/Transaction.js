import mongoose from 'mongoose';

const TransactionSchema = mongoose.Schema(
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

export const Transaction = mongoose.model('Transaction', TransactionSchema);
