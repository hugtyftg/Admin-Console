import mongoose from 'mongoose';

const AffiliateSchema = new mongoose.Schema(
  {
    // 和用户一对一
    userId: { type: mongoose.Types.ObjectId, ref: 'User' },
    // 和transaction一对多
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: 'Transaction',
    },
  },
  {
    timestamps: true,
  }
);
export const Affiliate = mongoose.model('Affiliate', AffiliateSchema);
