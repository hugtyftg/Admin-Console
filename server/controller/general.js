import mongoose from 'mongoose';
import { User } from '../models/User.js';
import { Transaction } from '../models/Transaction.js';
import { OverallStat } from '../models/OverallStat.js';

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      code: -1,
      message: error.message,
    });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    /* hardcoded values */
    const curYear = 2021;
    const curMonth = 'November';
    const curDate = '2021-11-15';

    /* recent transactions */
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    /* overall stats */
    const overallStat = await OverallStat.find({ year: curYear });

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      dailyData,
      salesByCategory,
    } = overallStat[0];
    const curMonthStat = monthlyData.find(({ month }) => month === curMonth);
    const curDateStat = dailyData.find(({ date }) => date === curDate);
    res.status(200).json({
      transactions,
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      dailyData,
      salesByCategory,
      curMonthStat,
      curDateStat,
    });
  } catch (error) {
    res.status(404).json({
      code: -1,
      message: error.message,
    });
  }
};
