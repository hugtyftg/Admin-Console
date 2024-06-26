import config from '@/config';
// RTK Query核心方法
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// RTK Query：管理store中的网络请求与缓存，不用手动写复杂的createAsyncThunk和extraReducers
export const api = createApi({
  // 缓存reducer将挂在到state.adminApi
  reducerPath: 'adminApi',
  // 所有请求都以config.baseURL开头
  baseQuery: fetchBaseQuery({
    // baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL,
    baseUrl: config.baseURL,
  }),
  // API slice 对象中的根 tagTypes 字段，声明数据类型的字符串标签名称数组，例如 'Post'
  tagTypes: [
    'User',
    'Products',
    'Customers',
    'Transactions',
    'TransactionsTotal',
  ],
  // endpoints代表对该服务器的操作和请求
  endpoints: (builder) => ({
    // getUser endpoint 请求数据
    getUser: builder.query({
      query: (id: string) => `general/user/${id}`,
      // 查询请求接口中的 “providesTags” 数组，列出了一组描述该查询中数据的标签
      providesTags: ['User'],
    }),
    // 请求所有product及其stat数据
    getProducts: builder.query({
      query: () => 'client/products',
      providesTags: ['Products'],
    }),
    // 请求所有的customer信息（除密码）
    getCustomers: builder.query({
      query: () => 'client/customers',
      providesTags: ['Customers'],
    }),
    getTransactions: builder.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: 'client/transactions',
        method: 'GET',
        params: { page, pageSize, sort, search },
      }),
      providesTags: ['Transactions'],
    }),
    // transactions总数
    getTransactionsTotalNum: builder.query({
      query: () => 'client/transactions/total',
      providesTags: ['TransactionsTotal'],
    }),
  }),
});

// 为 `getPosts` Query endpoint 导出自动生成的 hooks
export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetTransactionsTotalNumQuery,
} = api;
