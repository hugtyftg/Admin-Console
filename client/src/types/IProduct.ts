export interface IProduct {
  _id: string;
  __v: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  supply: number;
  createdAt: string;
  updatedAt: string;
  stat: IProductStat[];
}

export interface IProductStat {
  _id: string;
  __v: number;
  productId: string;
  createdAt: string;
  updatedAt: string;
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  dailyData: Array<{
    _id: string;
    date: string;
    totalSales: number;
    totalUnits: number;
  }>;
  monthlyData: Array<{
    _id: string;
    month: string;
    totalSales: number;
    totalUnits: number;
  }>;
}
