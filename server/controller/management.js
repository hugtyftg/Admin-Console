import { User } from '../models/User.js';
export const getAdmins = async (req, res) => {
  try {
    // select('-password')部分是用于指定查询结果中需要排除的字段。在这里，它指示排除密码字段，即不包含密码在返回的结果中。
    const admins = await User.find({ role: 'admin' }).select('-password');
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({
      code: -1,
      message: error.message,
    });
  }
};
