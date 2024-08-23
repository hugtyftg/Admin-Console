import { OverallStat } from '../models/OverallStat.js';

export const getSales = async (req, res) => {
  try {
    const overallStats = await OverallStat.find();
    res.status(200).json(overallStats[0]);
  } catch (error) {
    res.status(400).json({
      code: -1,
      message: error.message,
    });
  }
};
