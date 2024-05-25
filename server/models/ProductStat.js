import mongoose from 'mongoose';

const ProductStatSchema = mongoose.Schema(
  {
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ProductStat = mongoose.model('ProductStat', ProductStatSchema);
