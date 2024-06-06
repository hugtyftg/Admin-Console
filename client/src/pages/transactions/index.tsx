import { useEffect, useState } from 'react';
import { S } from './style';
import { useTheme } from '@mui/material';
import {
  useGetTransactionsQuery,
  useGetTransactionsTotalNumQuery,
} from '@/store/api';
import { PrimaryTableCol, Table } from 'tdesign-react';

// type DashboardPropType = {};
export default function Transactions() {
  const theme = useTheme();
  // 分页查询
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(20);
  const [sort, setSort] = useState([{ sortBy: '_id', descending: false }]);
  // sort string format: {"field": "userId", "sort": "asc"}
  const [search] = useState<string>('');
  // 当前表格页面数据
  const [tableData, setTableData] = useState([]);
  // transactions总数
  const [totalNum, setTotalNum] = useState(0);
  // 将tdesign sort 格式转化为后端接收的格式
  const formatSort = (sort: { sortBy: string; descending: boolean }) => {
    return {
      field: sort.sortBy,
      sort: sort.descending ? 'desc' : 'asc',
    };
  };

  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(formatSort(sort[0])),
    search,
  });
  const { data: total, isLoading: isTotalLading } =
    useGetTransactionsTotalNumQuery('');
  const columns: Array<PrimaryTableCol> = [
    {
      title: 'ID',
      colKey: '_id',
      width: 250,
      fixed: 'left',
      sorter: true,
    },
    {
      title: 'user id',
      colKey: 'userId',
      width: 250,
    },
    {
      title: 'cost',
      colKey: 'cost',
      width: 100,
    },
    {
      title: 'products',
      colKey: 'products',
      width: 80,
      cell: ({ row }) => {
        return row.products?.length;
      },
    },
    {
      title: 'create time',
      colKey: 'createdAt',
      width: 250,
      fixed: 'right',
    },
  ];
  useEffect(() => {
    !isLoading && setTableData(data.transactions);
  }, [data, isLoading]);
  useEffect(() => {
    !isTotalLading && total && setTotalNum(total.total);
  }, [total, isTotalLading]);

  return (
    <S.Container theme={theme}>
      <S.Title>Transactions</S.Title>
      {!isLoading && (
        <Table
          columns={columns}
          loading={isLoading}
          data={tableData}
          rowKey="_id"
          size="medium"
          bordered={true}
          hover={true}
          resizable={true}
          cellEmptyContent={'-'}
          tableLayout="fixed"
          multipleSort
          onSortChange={(newSort: any) => {
            setSort([{ ...sort[0], ...newSort[0] }]);
          }}
          sort={sort}
          pagination={{
            defaultCurrent: 1,
            total: totalNum,
            defaultPageSize: pageSize,
            onChange: ({ current }) => {
              setPage(current);
            },
            onPageSizeChange: (pageSize) => {
              setPageSize(pageSize);
            },
            showJumper: true,
            showPageSize: true,
          }}
        />
      )}
    </S.Container>
  );
}
