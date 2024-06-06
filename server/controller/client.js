import { Product } from '../models/Product.js';
import { ProductStat } from '../models/ProductStat.js';
import { Transaction } from '../models/Transaction.js';
import { User } from '../models/User.js';

// 获取所有商品的基本信息以及状态，整合到一起
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productsWithStat = await Promise.all(
      products.map(async (product) => {
        // ERD设计图，Product实体的_id属性和ProductStat实体的productId属性一一对应
        const stat = await ProductStat.find({
          productId: product._id,
        });
        /*
      mongoDB中每个document都表示为一个文档对象，包含文档的数据和方法
      _doc是一个特殊的属性，表示文档的原始js对象，不包括mongoose添加的属性和方法
      */
        return {
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json({
      productsWithStat,
    });
  } catch (error) {
    res.status(404).json({
      code: -1,
      message: error.message,
    });
  }
};

// 获取所有用户列表
export const getCustomers = async (req, res) => {
  try {
    // select('-password')部分是用于指定查询结果中需要排除的字段。在这里，它指示排除密码字段，即不包含密码在返回的结果中。
    const customers = await User.find({ role: 'user' }).select('-password');
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({
      code: -1,
      message: error.message,
    });
  }
};

export const getTransactions = async (req, res) => {
  try {
    // sort string format: {"field": "userId", "sort": "asc"}
    const { page = 1, pageSize = 20, sort = null, search = '' } = req.query;
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: sortParsed.sort === 'asc' ? 1 : -1,
      };
      return sortFormatted;
    };
    const sortFormatted = !!sort ? generateSort() : {};

    const transactions = await Transaction.find({
      $or: [
        { cost: { $regex: new RegExp(search, 'i') } },
        { userId: { $regex: new RegExp(search, 'i') } },
      ],
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);
    const total = await Transaction.countDocuments({
      name: { $regex: search, $options: 'i' },
    });
    res.status(200).json({
      transactions,
      total,
    });
  } catch (error) {
    res.status(404).json({
      code: -1,
      message: error.message,
    });
  }
};

export const transactionTotalNum = async (req, res) => {
  try {
    // 从数据库中查出transactions的总数
    const total = await Transaction.countDocuments();
    res.status(200).json({
      total,
    });
  } catch (error) {
    res.status(404).json({
      code: -1,
      message: error.message,
    });
  }
};
