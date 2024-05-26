import { Product } from '../models/Product.js';
import { ProductStat } from '../models/ProductStat.js';

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
