import mongoose from 'mongoose';

const AffiliateStatSchema = new mongoose.Schema(
  {
    // 和用户一对一
    userId: { type: mongoose.Types.ObjectId, ref: 'User' },
    // 和transaction一对多
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: 'Transaction',
    },
  },
  { timestamps: true }
);

export const AffiliateStat = mongoose.model(
  'AffiliateStat',
  AffiliateStatSchema
);
